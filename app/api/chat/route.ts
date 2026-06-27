import { NextRequest } from 'next/server'
import { classifyMessage } from '@/lib/ai/classifyMessage'
import { ESTOU_AQUI_SYSTEM_PROMPT } from '@/lib/ai/systemPrompt'

export async function POST(req: NextRequest) {
  const { messages, conversationId } = await req.json()

  if (!messages || !Array.isArray(messages)) {
    return new Response(JSON.stringify({ error: 'Invalid messages' }), { status: 400 })
  }

  const lastUserMessage = [...messages].reverse().find((m: { role: string }) => m.role === 'user')
  const { risk } = lastUserMessage ? classifyMessage(lastUserMessage.content) : { risk: 'none' }

  let extraContext = ''
  if (risk === 'high' || risk === 'emergency') {
    extraContext = `ATENÇÃO: A mensagem atual indica risco ${risk === 'emergency' ? 'de emergência (possível suicídio ou perigo imediato)' : 'alto de sofrimento grave'}. Aplique o protocolo de segurança: acolha com urgência, diga que a vida da pessoa importa, oriente a não ficar sozinha, mencione CVV 188 e emergência 192/190 quando adequado.`
  }

  const systemPrompt = extraContext
    ? `${ESTOU_AQUI_SYSTEM_PROMPT}\n\n${extraContext}`
    : ESTOU_AQUI_SYSTEM_PROMPT

  const provider = process.env.AI_PROVIDER || 'anthropic'

  const encoder = new TextEncoder()

  const stream = new ReadableStream({
    async start(controller) {
      try {
        if (provider === 'openai') {
          const res = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
              model: 'gpt-4o-mini',
              stream: true,
              messages: [{ role: 'system', content: systemPrompt }, ...messages],
              max_tokens: 1024,
            }),
          })

          if (!res.ok) {
            const errText = await res.text()
            throw new Error(`OpenAI error ${res.status}: ${errText}`)
          }

          const reader = res.body!.getReader()
          const dec = new TextDecoder('utf-8', { stream: true })
          let serverLineBuffer = ''

          while (true) {
            const { done, value } = await reader.read()
            if (done) break
            serverLineBuffer += dec.decode(value)
            const allLines = serverLineBuffer.split('\n')
            serverLineBuffer = allLines.pop() ?? ''
            const lines = allLines.filter(l => l.trim().startsWith('data: '))
            for (const line of lines) {
              const data = line.slice(6)
              if (data === '[DONE]') continue
              try {
                const json = JSON.parse(data)
                const token = json.choices?.[0]?.delta?.content
                if (token) {
                  controller.enqueue(encoder.encode(`data: ${JSON.stringify({ token, risk_level: risk, conversation_id: conversationId })}\n\n`))
                }
              } catch {}
            }
          }
        } else {
          const Anthropic = (await import('@anthropic-ai/sdk')).default
          const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
          const res = await client.messages.stream({
            model: 'claude-haiku-4-5',
            max_tokens: 1024,
            system: systemPrompt,
            messages,
          })
          for await (const event of res) {
            if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ token: event.delta.text, risk_level: risk, conversation_id: conversationId })}\n\n`))
            }
          }
        }

        controller.enqueue(encoder.encode('data: [DONE]\n\n'))
      } catch (err) {
        console.error('Stream error:', err)
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: 'Erro ao conectar com a IA.' })}\n\n`))
      } finally {
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  })
}
