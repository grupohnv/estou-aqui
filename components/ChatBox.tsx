'use client'
import { useState, useRef, useEffect } from 'react'
import { Send, Loader2, Sparkles } from 'lucide-react'
import MessageBubble from './MessageBubble'
import type { Message } from '@/types'

const QUICK_STARTERS = [
  'Estou com medo',
  'Perdi alguém importante',
  'Preciso de paz',
  'Estou ansioso',
  'Estou me sentindo sozinho',
  'Quero orar',
]

interface Props {
  conversationId?: string
  initialMessages?: Message[]
  onNewMessage?: (msg: Message) => void
}

export default function ChatBox({ conversationId, initialMessages = [], onNewMessage }: Props) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showStarters, setShowStarters] = useState(messages.length === 0)
  const bottomRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function autoResize() {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 140) + 'px'
  }

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return
    setShowStarters(false)
    setInput('')
    if (textareaRef.current) textareaRef.current.style.height = 'auto'

    const userMsg: Message = {
      id: Date.now().toString(),
      conversation_id: conversationId || '',
      role: 'user',
      content: text.trim(),
      created_at: new Date().toISOString(),
      is_favorite: false,
    }
    setMessages(prev => [...prev, userMsg])
    onNewMessage?.(userMsg)
    setLoading(true)

    const streamingId = (Date.now() + 1).toString()
    let riskLevel: import('@/types').RiskLevel | undefined
    let finalContent = ''

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })),
          conversationId,
        }),
      })

      const reader = res.body!.getReader()
      const dec = new TextDecoder()

      // add empty streaming message
      setMessages(prev => [...prev, {
        id: streamingId,
        conversation_id: conversationId || '',
        role: 'assistant',
        content: '',
        created_at: new Date().toISOString(),
        is_favorite: false,
      }])
      setLoading(false)

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = dec.decode(value)
        const lines = chunk.split('\n').filter(l => l.startsWith('data: '))
        for (const line of lines) {
          const data = line.slice(6)
          if (data === '[DONE]') continue
          try {
            const json = JSON.parse(data)
            if (json.error) {
              finalContent = `Erro: ${json.error}`
              setMessages(prev => prev.map(m =>
                m.id === streamingId ? { ...m, content: finalContent } : m
              ))
              break
            }
            if (json.token) {
              finalContent += json.token
              riskLevel = json.risk_level
              setMessages(prev => prev.map(m =>
                m.id === streamingId ? { ...m, content: finalContent, risk_level: riskLevel } : m
              ))
            }
          } catch {}
        }
      }

      const aiMsg: Message = {
        id: streamingId,
        conversation_id: conversationId || '',
        role: 'assistant',
        content: finalContent,
        created_at: new Date().toISOString(),
        is_favorite: false,
        risk_level: riskLevel,
      }
      onNewMessage?.(aiMsg)
    } catch {
      setMessages(prev => [...prev, {
        id: streamingId,
        conversation_id: conversationId || '',
        role: 'assistant',
        content: 'Algo deu errado. Por favor, tente novamente em instantes.',
        created_at: new Date().toISOString(),
        is_favorite: false,
      }])
    } finally {
      setLoading(false)
    }
  }

  function toggleFavorite(id: string, current: boolean) {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, is_favorite: !current } : m))
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
        {messages.length === 0 && (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-[#C9A96E1A] flex items-center justify-center mx-auto mb-4">
              <Sparkles size={20} className="text-[#C9A96E]" />
            </div>
            <p className="text-[#3D3D3D99] text-sm leading-relaxed max-w-xs mx-auto">
              Olá. Estou aqui com você. O que está pesando no seu coração hoje?
            </p>
          </div>
        )}

        {messages.map(msg => (
          <MessageBubble key={msg.id} message={msg} onToggleFavorite={toggleFavorite} />
        ))}

        {loading && (
          <div className="flex justify-start mb-3">
            <div className="bg-white border border-[#C9A96E1A] rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
              <Loader2 size={16} className="text-[#C9A96E] animate-spin" />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {showStarters && (
        <div className="px-4 pb-3">
          <p className="text-xs text-[#3D3D3D66] mb-2">Comece por aqui:</p>
          <div className="flex flex-wrap gap-2">
            {QUICK_STARTERS.map(s => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="text-xs bg-white border border-[#C9A96E33] text-[#3D3D3DB3] rounded-full px-3 py-1.5 hover:border-[#C9A96E80] hover:text-[#3D3D3D] transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="px-4 pb-4 pt-2 border-t border-[#C9A96E1A] bg-[#F9F5F0]">
        <div className="flex items-end gap-2 bg-white rounded-2xl border border-[#C9A96E33] px-4 py-2 shadow-sm">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={e => { setInput(e.target.value); autoResize() }}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input) }}}
            placeholder="O que está pesando no seu coração hoje?"
            rows={1}
            className="flex-1 bg-transparent resize-none outline-none text-sm text-[#3D3D3D] placeholder:text-[#3D3D3D4D] py-1 max-h-32"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || loading}
            className="p-2 rounded-xl bg-[#C9A96E] text-white disabled:opacity-40 transition-opacity mb-0.5 shrink-0"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
