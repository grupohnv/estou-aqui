'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { MessageCircle, ChevronRight } from 'lucide-react'
import { formatChatDate } from '@/lib/utils/formatDate'

const MOCK_CONVERSATIONS = [
  { id: '1', title: 'Sobre o medo do futuro', emotional_theme: 'medo', created_at: new Date(Date.now() - 86400000).toISOString(), updated_at: new Date(Date.now() - 82800000).toISOString() },
  { id: '2', title: 'Perdendo minha mãe', emotional_theme: 'luto', created_at: new Date(Date.now() - 3 * 86400000).toISOString(), updated_at: new Date(Date.now() - 3 * 86400000 + 7200000).toISOString() },
  { id: '3', title: 'Ansiedade no trabalho', emotional_theme: 'ansiedade', created_at: new Date(Date.now() - 7 * 86400000).toISOString(), updated_at: new Date(Date.now() - 7 * 86400000 + 3600000).toISOString() },
]

const THEME_COLORS: Record<string, string> = {
  medo: 'bg-[#7B92A81A] text-[#7B92A8]',
  luto: 'bg-[#3D3D3D1A] text-[#3D3D3D99]',
  ansiedade: 'bg-[#C27A5A1A] text-[#C27A5A]',
  culpa: 'bg-[#8A9E7E33] text-[#8A9E7E]',
  solidão: 'bg-[#C9A96E1A] text-[#C9A96E]',
}

export default function HistoricoPage() {
  const [conversations] = useState(MOCK_CONVERSATIONS)

  return (
    <div className="min-h-screen bg-[#F9F5F0] pb-24">
      <header className="px-6 pt-14 pb-6">
        <p className="text-xs text-[#3D3D3D66] uppercase tracking-widest mb-1">Suas conversas</p>
        <h1 className="text-2xl font-semibold text-[#3D3D3D]">Histórico</h1>
      </header>

      <main className="px-6 max-w-lg mx-auto space-y-3">
        {conversations.length === 0 ? (
          <div className="text-center py-16 text-[#3D3D3D66] text-sm">
            <MessageCircle size={32} className="mx-auto mb-4 opacity-30" />
            Nenhuma conversa ainda. <Link href="/chat" className="text-[#C9A96E] underline">Começar agora</Link>
          </div>
        ) : (
          conversations.map(c => (
            <Link key={c.id} href={`/chat?id=${c.id}`} className="block bg-white rounded-2xl p-4 border border-[#C9A96E1A] hover:border-[#C9A96E4D] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A96E1A] flex items-center justify-center shrink-0">
                  <MessageCircle size={16} className="text-[#C9A96E]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[#3D3D3D] text-sm truncate">{c.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${THEME_COLORS[c.emotional_theme] || 'bg-[#F9F5F0] text-[#3D3D3D80]'}`}>
                      {c.emotional_theme}
                    </span>
                    <span className="text-[10px] text-[#3D3D3D4D]">{formatChatDate(c.updated_at)}</span>
                  </div>
                </div>
                <ChevronRight size={14} className="text-[#3D3D3D33]" />
              </div>
            </Link>
          ))
        )}
      </main>

      <Navbar />
    </div>
  )
}
