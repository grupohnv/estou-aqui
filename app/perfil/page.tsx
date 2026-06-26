'use client'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { User, Shield, FileText, LogOut, Star, ChevronRight } from 'lucide-react'

const menuItems = [
  { icon: Star, label: 'Meu plano', href: '/pricing', badge: 'Gratuito' },
  { icon: Shield, label: 'Privacidade e segurança', href: '/seguranca' },
  { icon: FileText, label: 'Termos e limites', href: '/seguranca' },
]

export default function PerfilPage() {
  return (
    <div className="min-h-screen bg-[#F9F5F0] pb-24">
      <header className="px-6 pt-14 pb-6">
        <p className="text-xs text-[#3D3D3D66] uppercase tracking-widest mb-1">Conta</p>
        <h1 className="text-2xl font-semibold text-[#3D3D3D]">Perfil</h1>
      </header>

      <main className="px-6 max-w-lg mx-auto space-y-6">
        {/* Avatar */}
        <div className="bg-white rounded-3xl p-6 border border-[#C9A96E1A] flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#C9A96E1A] flex items-center justify-center">
            <User size={28} className="text-[#C9A96E]" />
          </div>
          <div>
            <p className="font-semibold text-[#3D3D3D]">Visitante</p>
            <p className="text-sm text-[#3D3D3D80]">Faça login para salvar suas conversas</p>
            <Link href="/login" className="text-xs text-[#C9A96E] underline mt-1 inline-block">Entrar ou criar conta</Link>
          </div>
        </div>

        {/* Menu */}
        <div className="bg-white rounded-3xl border border-[#C9A96E1A] overflow-hidden">
          {menuItems.map(({ icon: Icon, label, href, badge }, i) => (
            <Link key={label} href={href} className={`flex items-center gap-3 px-5 py-4 hover:bg-[#F9F5F0] transition-colors ${i > 0 ? 'border-t border-[#C9A96E0D]' : ''}`}>
              <Icon size={18} className="text-[#3D3D3D66]" />
              <span className="flex-1 text-sm text-[#3D3D3D]">{label}</span>
              {badge && <span className="text-xs bg-[#8A9E7E33] text-[#8A9E7E] px-2 py-0.5 rounded-full">{badge}</span>}
              <ChevronRight size={14} className="text-[#3D3D3D33]" />
            </Link>
          ))}
        </div>

        <button className="flex items-center gap-3 text-sm text-[#3D3D3D66] hover:text-[#C27A5A] transition-colors">
          <LogOut size={16} />
          Sair da conta
        </button>
      </main>

      <Navbar />
    </div>
  )
}
