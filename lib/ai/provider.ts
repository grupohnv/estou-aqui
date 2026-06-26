import Anthropic from '@anthropic-ai/sdk'
import { ESTOU_AQUI_SYSTEM_PROMPT } from './systemPrompt'

export interface AIMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface AIResponse {
  content: string
  error?: string
}

async function callAnthropic(messages: AIMessage[], systemPrompt: string): Promise<AIResponse> {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    system: systemPrompt,
    messages,
  })
  return { content: (response.content[0] as { text: string }).text }
}

async function callOpenAI(messages: AIMessage[], systemPrompt: string): Promise<AIResponse> {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'system', content: systemPrompt }, ...messages],
      max_tokens: 1024,
    }),
  })
  const data = await response.json()
  return { content: data.choices[0].message.content }
}

export async function getAIResponse(
  messages: AIMessage[],
  extraContext?: string
): Promise<AIResponse> {
  const systemPrompt = extraContext
    ? `${ESTOU_AQUI_SYSTEM_PROMPT}\n\n${extraContext}`
    : ESTOU_AQUI_SYSTEM_PROMPT

  const provider = process.env.AI_PROVIDER || 'anthropic'

  try {
    if (provider === 'openai') return await callOpenAI(messages, systemPrompt)
    return await callAnthropic(messages, systemPrompt)
  } catch (err) {
    console.error('AI provider error:', err)
    return { content: '', error: 'Erro ao conectar com a IA. Por favor, tente novamente.' }
  }
}
