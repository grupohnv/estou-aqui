import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { ArrowLeft, Phone, Heart, AlertCircle } from 'lucide-react'
import SafetyNotice from '@/components/SafetyNotice'

export default function SegurancaPage() {
  return (
    <div className="min-h-screen bg-[#F9F5F0] pb-24">
      <header className="px-6 pt-14 pb-6 flex items-center gap-3">
        <Link href="/perfil" className="p-2 rounded-xl hover:bg-white transition-colors">
          <ArrowLeft size={18} className="text-[#3D3D3D99]" />
        </Link>
        <div>
          <p className="text-xs text-[#3D3D3D66] uppercase tracking-widest">Importante</p>
          <h1 className="text-2xl font-semibold text-[#3D3D3D]">Segurança e limites</h1>
        </div>
      </header>

      <main className="px-6 max-w-lg mx-auto space-y-6">
        <SafetyNotice />

        <div className="bg-white rounded-3xl p-6 border border-[#C9A96E1A] space-y-4">
          <div className="flex items-center gap-2">
            <AlertCircle size={16} className="text-[#C27A5A]" />
            <h2 className="font-semibold text-[#3D3D3D]">O que este app não faz</h2>
          </div>
          <ul className="space-y-2 text-sm text-[#3D3D3DB3]">
            {[
              'Substitui apoio psicológico ou psiquiátrico',
              'Substitui aconselhamento pastoral ou espiritual presencial',
              'Substitui apoio médico ou de emergência',
              'Representa ou simula Jesus ou Deus',
              'Garante cura, milagres ou resultados',
              'Fornece diagnósticos ou prescrições',
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#C27A5A] mt-0.5">×</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-[#C9A96E1A] space-y-4">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-[#8A9E7E]" />
            <h2 className="font-semibold text-[#3D3D3D]">Em caso de emergência</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: 'CVV (Crise e Suicídio)', number: '188', desc: '24 horas, gratuito' },
              { label: 'SAMU', number: '192', desc: 'Emergências médicas' },
              { label: 'Polícia / Emergência', number: '190', desc: 'Perigo imediato' },
            ].map(c => (
              <div key={c.label} className="flex items-center justify-between bg-[#F9F5F0] rounded-2xl px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-[#3D3D3D]">{c.label}</p>
                  <p className="text-xs text-[#3D3D3D80]">{c.desc}</p>
                </div>
                <a href={`tel:${c.number}`} className="text-xl font-bold text-[#C9A96E]">{c.number}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-[#C9A96E1A] space-y-4">
          <div className="flex items-center gap-2">
            <Heart size={16} className="text-[#C9A96E]" />
            <h2 className="font-semibold text-[#3D3D3D]">Privacidade</h2>
          </div>
          <ul className="space-y-2 text-sm text-[#3D3D3DB3]">
            <li>Suas conversas são armazenadas para melhorar sua experiência</li>
            <li>Você pode apagar o histórico a qualquer momento</li>
            <li>Memórias são usadas apenas para personalizar o acolhimento</li>
            <li>Não compartilhamos dados com terceiros</li>
            <li>Informações sensíveis são tratadas com máximo cuidado</li>
          </ul>
        </div>
      </main>

      <Navbar />
    </div>
  )
}
