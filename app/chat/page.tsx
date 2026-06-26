'use client'
import { useState } from 'react'
import { ArrowLeft, Sparkles } from 'lucide-react'
import Link from 'next/link'
import ChatBox from '@/components/ChatBox'
import Navbar from '@/components/Navbar'

export default function ChatPage() {
  const [title] = useState('Nova conversa')

  return (
    <div className="flex flex-col h-screen bg-[#F9F5F0]">
      {/* Header */}
      <header className="flex items-center gap-3 px-4 py-3 bg-white border-b border-[#C9A96E1A] safe-area-pt">
        <Link href="/" className="p-2 rounded-xl hover:bg-[#F9F5F0] transition-colors">
          <ArrowLeft size={18} className="text-[#3D3D3D99]" />
        </Link>
        <div className="flex-1 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#C9A96E1A] flex items-center justify-center">
            <Sparkles size={14} className="text-[#C9A96E]" />
          </div>
          <div>
            <p className="text-sm font-medium text-[#3D3D3D]">Estou Aqui</p>
            <p className="text-[10px] text-[#3D3D3D66]">{title}</p>
          </div>
        </div>
      </header>

      {/* Chat */}
      <div className="flex-1 overflow-hidden pb-16">
        <ChatBox />
      </div>

      <Navbar />
    </div>
  )
}
