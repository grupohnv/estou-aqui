'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { Heart } from 'lucide-react'
import Link from 'next/link'

const MOCK_FAVORITES = [
  { id: '1', content: 'A dor que você está sentindo é real. E ela importa. Antes de qualquer conselho, quero reconhecer que o que você está vivendo é pesado. Você não está exagerando.', created_at: new Date(Date.now() - 86400000).toISOString() },
  { id: '2', content: 'Nos Evangelhos, vemos Jesus sempre parando para as pessoas — não as mandava embora com respostas prontas. Ele perguntava. Ele ouvia. E então curava. Você merece essa mesma atenção.', created_at: new Date(Date.now() - 3 * 86400000).toISOString() },
]

export default function FavoritosPage() {
  const [favorites] = useState(MOCK_FAVORITES)

  return (
    <div className="min-h-screen bg-[#F9F5F0] pb-24">
      <header className="px-6 pt-14 pb-6">
        <p className="text-xs text-[#3D3D3D66] uppercase tracking-widest mb-1">Mensagens guardadas</p>
        <h1 className="text-2xl font-semibold text-[#3D3D3D]">Favoritos</h1>
      </header>

      <main className="px-6 max-w-lg mx-auto space-y-4">
        {favorites.length === 0 ? (
          <div className="text-center py-16 text-[#3D3D3D66] text-sm">
            <Heart size={32} className="mx-auto mb-4 opacity-30" />
            Nenhuma mensagem favorita ainda.
            <br />
            <Link href="/chat" className="text-[#C9A96E] underline">Iniciar uma conversa</Link>
          </div>
        ) : (
          favorites.map(f => (
            <div key={f.id} className="bg-white rounded-2xl p-5 border border-[#C9A96E1A] relative">
              <Heart size={14} className="absolute top-4 right-4 fill-[#C27A5A] text-[#C27A5A]" />
              <p className="text-sm text-[#3D3D3DCC] leading-relaxed pr-6">{f.content}</p>
              <p className="text-[10px] text-[#3D3D3D4D] mt-3">{new Date(f.created_at).toLocaleDateString('pt-BR')}</p>
            </div>
          ))
        )}
      </main>

      <Navbar />
    </div>
  )
}
