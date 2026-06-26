import type { DailyReflection } from '@/types'
import { BookOpen } from 'lucide-react'

interface Props {
  reflection: DailyReflection
  compact?: boolean
}

export default function ReflectionCard({ reflection, compact = false }: Props) {
  if (compact) {
    return (
      <div className="bg-white border border-[#C9A96E26] rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={14} className="text-[#C9A96E]" />
          <span className="text-xs text-[#C9A96E] font-medium uppercase tracking-wide">Reflexão de hoje</span>
        </div>
        <h3 className="font-semibold text-[#3D3D3D] mb-2">{reflection.title}</h3>
        <p className="text-sm text-[#3D3D3DB3] leading-relaxed line-clamp-3">{reflection.content}</p>
        <p className="text-xs text-[#C9A96E] mt-3">{reflection.bible_reference}</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#C9A96E1A] space-y-5">
      <div className="flex items-center gap-2">
        <BookOpen size={16} className="text-[#C9A96E]" />
        <span className="text-xs text-[#C9A96E] font-medium uppercase tracking-wider">Reflexão</span>
      </div>
      <h2 className="text-xl font-semibold text-[#3D3D3D]">{reflection.title}</h2>
      <p className="text-[#3D3D3DCC] leading-relaxed">{reflection.content}</p>
      <div className="bg-[#F9F5F0] border-l-2 border-[#C9A96E] pl-4 py-2">
        <p className="text-sm text-[#3D3D3D99] italic">{reflection.bible_reference}</p>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-medium text-[#3D3D3D80] uppercase tracking-wide">Para refletir</p>
        <p className="text-[#3D3D3DCC] italic">{reflection.reflection_question}</p>
      </div>
      <div className="bg-[#8A9E7E1A] rounded-2xl p-4">
        <p className="text-xs font-medium text-[#8A9E7E] mb-2 uppercase tracking-wide">Oração</p>
        <p className="text-sm text-[#3D3D3DB3] leading-relaxed">{reflection.prayer}</p>
      </div>
    </div>
  )
}
