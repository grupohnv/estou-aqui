'use client'
import { useState } from 'react'
import { Heart } from 'lucide-react'
import { formatMessageTime } from '@/lib/utils/formatDate'
import type { Message } from '@/types'

interface Props {
  message: Message
  onToggleFavorite?: (id: string, current: boolean) => void
}

export default function MessageBubble({ message, onToggleFavorite }: Props) {
  const isUser = message.role === 'user'
  const [favorited, setFavorited] = useState(message.is_favorite)

  function handleFavorite() {
    setFavorited(f => !f)
    onToggleFavorite?.(message.id, favorited)
  }

  const paragraphs = message.content.split('\n').filter((_, i, arr) => {
    // preserve single blank lines as spacing, collapse multiples
    return true
  })

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} group mb-3`}>
      <div className={`max-w-[82%] ${isUser ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
        <div
          className={`rounded-2xl px-4 py-3 text-sm shadow-sm ${
            isUser
              ? 'bg-[#C9A96E] text-white rounded-tr-sm'
              : 'bg-white text-[#3D3D3D] rounded-tl-sm border border-[#C9A96E1A]'
          }`}
          style={{
            lineHeight: '1.65',
            wordBreak: 'normal',
            overflowWrap: 'break-word',
            hyphens: 'none',
            whiteSpace: 'pre-wrap',
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          }}
        >
          {paragraphs.map((line, i) =>
            line.trim() === '' ? (
              <div key={i} style={{ height: '0.5em' }} />
            ) : (
              <p key={i} className={i > 0 && paragraphs[i - 1]?.trim() !== '' ? 'mt-2' : ''}>
                {line}
              </p>
            )
          )}
        </div>
        <div className="flex items-center gap-2 px-1">
          <span className="text-[10px] text-[#3D3D3D4D]">
            {formatMessageTime(message.created_at)}
          </span>
          {!isUser && (
            <button
              onClick={handleFavorite}
              className={`opacity-0 group-hover:opacity-100 transition-all ${favorited ? 'opacity-100' : ''}`}
            >
              <Heart size={12} className={favorited ? 'fill-[#C27A5A] text-[#C27A5A]' : 'text-[#3D3D3D4D]'} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
