'use client'
import PlanCard from '@/components/PlanCard'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const plans = [
  {
    name: 'Gratuito',
    price: 'Grátis',
    features: [
      '5 conversas por dia',
      'Reflexão diária',
      'Histórico de 7 dias',
      '3 orações por dia',
      'Favoritos (10 mensagens)',
    ],
  },
  {
    name: 'Premium',
    price: 'R$ 29,90',
    highlighted: true,
    badge: 'Mais popular',
    features: [
      'Conversas ilimitadas',
      'Histórico completo',
      'Memória ampliada',
      'Orações personalizadas ilimitadas',
      'Planos guiados por tema',
      'Favoritos ilimitados',
      'Reflexão personalizada',
      'Em breve: voz',
    ],
  },
  {
    name: 'Família',
    price: 'R$ 49,90',
    features: [
      'Tudo do Premium',
      'Até 5 usuários',
      'Painel familiar',
      'Em breve: modo infantil',
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F9F5F0] pb-24">
      <header className="px-6 pt-14 pb-2 flex items-center gap-3">
        <Link href="/perfil" className="p-2 rounded-xl hover:bg-white transition-colors">
          <ArrowLeft size={18} className="text-[#3D3D3D99]" />
        </Link>
        <div>
          <p className="text-xs text-[#3D3D3D66] uppercase tracking-widest">Acesso</p>
          <h1 className="text-2xl font-semibold text-[#3D3D3D]">Planos</h1>
        </div>
      </header>

      <p className="text-center text-sm text-[#3D3D3D80] px-6 mt-4 mb-8">
        Comece de graça. Evolua quando quiser.
      </p>

      <main className="px-6 max-w-lg mx-auto space-y-4">
        {plans.map(p => (
          <PlanCard
            key={p.name}
            {...p}
            ctaLabel={p.name === 'Gratuito' ? 'Plano atual' : 'Em breve'}
            onCta={() => alert('Pagamento em breve disponível!')}
          />
        ))}

        <p className="text-center text-xs text-[#3D3D3D4D] pt-4">
          Os planos premium serão habilitados em breve.
        </p>
      </main>

      <Navbar />
    </div>
  )
}
