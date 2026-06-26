import Link from 'next/link'
import { ArrowRight, BookOpen, Heart, Shield, MessageCircle } from 'lucide-react'
import SafetyNotice from '@/components/SafetyNotice'

const moments = [
  'Quando a ansiedade aperta',
  'Quando o luto chega',
  'Quando falta direção',
  'Quando a culpa pesa',
  'Quando a fé parece fraca',
  'Quando você só precisa ser ouvido',
]

const steps = [
  { icon: MessageCircle, title: 'Você escreve', desc: 'Compartilhe o que está no seu coração, sem julgamentos.' },
  { icon: Heart, title: 'Você é acolhido', desc: 'Nossa IA responde com empatia, escuta e sabedoria bíblica.' },
  { icon: BookOpen, title: 'Você encontra paz', desc: 'Reflexões, orações e esperança para cada momento.' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F9F5F0]">
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <div className="inline-block px-4 py-1.5 bg-[#C9A96E1A] rounded-full text-[#C9A96E] text-xs font-medium tracking-wide mb-2">
            Estou Aqui
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#3D3D3D] leading-snug">
            Quando a vida pesar, você não precisa conversar com o silêncio.
          </h1>
          <p className="text-[#3D3D3D99] leading-relaxed">
            Um companheiro espiritual inspirado nos ensinamentos de Jesus, criado para acolher você nos momentos de dor, dúvida, medo e solidão.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link href="/chat" className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3D3D3D] text-white rounded-2xl text-sm font-medium hover:bg-[#3D3D3DE6] transition-colors">
              Começar uma conversa <ArrowRight size={16} />
            </Link>
            <Link href="/reflexao" className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#C9A96E4D] text-[#3D3D3D] rounded-2xl text-sm font-medium hover:border-[#C9A96E99] transition-colors">
              <BookOpen size={16} className="text-[#C9A96E]" /> Ver reflexão de hoje
            </Link>
          </div>
        </div>
      </section>

      {/* Momentos */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-md mx-auto">
          <p className="text-center text-xs text-[#3D3D3D66] uppercase tracking-widest mb-8">Para esses momentos</p>
          <div className="grid grid-cols-2 gap-3">
            {moments.map(m => (
              <div key={m} className="bg-[#F9F5F0] rounded-2xl px-4 py-3 text-sm text-[#3D3D3DB3] border border-[#C9A96E1A]">
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="px-6 py-16">
        <div className="max-w-md mx-auto">
          <p className="text-center text-xs text-[#3D3D3D66] uppercase tracking-widest mb-8">Como funciona</p>
          <div className="space-y-6">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A96E1A] flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#C9A96E]" />
                </div>
                <div>
                  <p className="font-medium text-[#3D3D3D]">{i + 1}. {title}</p>
                  <p className="text-sm text-[#3D3D3D99] mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos teaser */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-md mx-auto text-center space-y-4">
          <p className="text-xs text-[#3D3D3D66] uppercase tracking-widest">Acesso</p>
          <h2 className="text-2xl font-semibold text-[#3D3D3D]">Comece gratuitamente</h2>
          <p className="text-[#3D3D3D99] text-sm">Conversas diárias, reflexão e orações sem custo. Upgrade quando quiser.</p>
          <Link href="/pricing" className="inline-block mt-2 text-[#C9A96E] text-sm underline underline-offset-4">Ver planos</Link>
        </div>
      </section>

      {/* Segurança */}
      <section className="px-6 py-12">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <Shield size={14} className="text-[#8A9E7E]" />
            <span className="text-xs text-[#3D3D3D66] uppercase tracking-wide">Segurança</span>
          </div>
          <SafetyNotice />
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-sm mx-auto space-y-4">
          <p className="text-[#3D3D3D99] text-sm">Você não está sozinho neste momento.</p>
          <Link href="/chat" className="flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A96E] text-white rounded-2xl text-sm font-medium hover:bg-[#C9A96EE6] transition-colors">
            Começar agora <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <footer className="py-8 text-center">
        <p className="text-xs text-[#3D3D3D4D]">
          Inspirado nos ensinamentos bíblicos. Não substitui apoio humano, pastoral, médico ou psicológico.
        </p>
      </footer>
    </div>
  )
}
