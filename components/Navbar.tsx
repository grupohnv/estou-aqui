'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MessageCircle, BookOpen, Heart, User, Clock } from 'lucide-react'

const navItems = [
  { href: '/chat', icon: MessageCircle, label: 'Conversar' },
  { href: '/reflexao', icon: BookOpen, label: 'Reflexão' },
  { href: '/historico', icon: Clock, label: 'Histórico' },
  { href: '/favoritos', icon: Heart, label: 'Favoritos' },
  { href: '/perfil', icon: User, label: 'Perfil' },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#C9A96E33] safe-area-pb z-50">
      <div className="max-w-lg mx-auto flex">
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = pathname === href
          return (
            <Link key={href} href={href} className={`flex-1 flex flex-col items-center py-3 gap-1 transition-colors ${active ? 'text-[#C9A96E]' : 'text-[#3D3D3D66] hover:text-[#3D3D3DB3]'}`}>
              <Icon size={22} strokeWidth={active ? 2 : 1.5} />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
