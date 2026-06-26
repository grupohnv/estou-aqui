import { Check } from 'lucide-react'

interface PlanCardProps {
  name: string
  price: string
  period?: string
  features: string[]
  highlighted?: boolean
  badge?: string
  ctaLabel?: string
  onCta?: () => void
}

export default function PlanCard({ name, price, period = '/mês', features, highlighted, badge, ctaLabel = 'Escolher plano', onCta }: PlanCardProps) {
  return (
    <div className={`rounded-3xl p-6 border ${highlighted ? 'bg-[#3D3D3D] text-white border-[#3D3D3D]' : 'bg-white border-[#C9A96E33]'}`}>
      {badge && (
        <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-[#C9A96E] text-white mb-4">{badge}</span>
      )}
      <h3 className={`font-semibold text-lg mb-1 ${highlighted ? 'text-white' : 'text-[#3D3D3D]'}`}>{name}</h3>
      <div className="flex items-end gap-1 mb-5">
        <span className={`text-3xl font-bold ${highlighted ? 'text-[#C9A96E]' : 'text-[#3D3D3D]'}`}>{price}</span>
        {price !== 'Grátis' && <span className={`text-sm mb-1 ${highlighted ? 'text-white/50' : 'text-[#3D3D3D66]'}`}>{period}</span>}
      </div>
      <ul className="space-y-3 mb-6">
        {features.map(f => (
          <li key={f} className={`flex items-start gap-2 text-sm ${highlighted ? 'text-white/80' : 'text-[#3D3D3DB3]'}`}>
            <Check size={14} className={`mt-0.5 shrink-0 ${highlighted ? 'text-[#C9A96E]' : 'text-[#8A9E7E]'}`} />
            {f}
          </li>
        ))}
      </ul>
      <button
        onClick={onCta}
        className={`w-full py-3 rounded-2xl text-sm font-medium transition-colors ${
          highlighted
            ? 'bg-[#C9A96E] text-white hover:bg-[#C9A96EE6]'
            : 'bg-[#F9F5F0] text-[#3D3D3D] border border-[#3D3D3D33] hover:bg-[#C9A96E1A]'
        }`}
      >
        {ctaLabel}
      </button>
    </div>
  )
}
