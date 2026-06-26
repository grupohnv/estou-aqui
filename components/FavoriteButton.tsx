'use client'
import { Heart } from 'lucide-react'

interface Props {
  favorited: boolean
  onToggle: () => void
  size?: number
}

export default function FavoriteButton({ favorited, onToggle, size = 16 }: Props) {
  return (
    <button onClick={onToggle} className="transition-transform active:scale-90">
      <Heart
        size={size}
        className={`transition-colors ${favorited ? 'fill-[#C27A5A] text-[#C27A5A]' : 'text-[#3D3D3D4D] hover:text-[#C27A5A]'}`}
      />
    </button>
  )
}
