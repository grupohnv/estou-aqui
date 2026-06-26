import Navbar from '@/components/Navbar'
import ReflectionCard from '@/components/ReflectionCard'
import { reflectionsSeed } from '@/data/reflectionsSeed'
import type { DailyReflection } from '@/types'

function getTodayReflection(): DailyReflection {
  const day = new Date().getDay()
  const seed = reflectionsSeed[day % reflectionsSeed.length]
  return { ...seed, id: day.toString(), date: new Date().toISOString() }
}

export default function ReflexaoPage() {
  const reflection = getTodayReflection()

  return (
    <div className="min-h-screen bg-[#F9F5F0] pb-24">
      <header className="px-6 pt-14 pb-6">
        <p className="text-xs text-[#3D3D3D66] uppercase tracking-widest mb-1">Para hoje</p>
        <h1 className="text-2xl font-semibold text-[#3D3D3D]">Reflexão diária</h1>
      </header>

      <main className="px-6 space-y-6 max-w-lg mx-auto">
        <ReflectionCard reflection={reflection} />

        <div className="space-y-3">
          <p className="text-xs text-[#3D3D3D66] uppercase tracking-widest">Reflexões anteriores</p>
          {reflectionsSeed.slice(0, 5).map((r, i) => (
            <ReflectionCard key={i} reflection={{ ...r, id: i.toString(), date: new Date(Date.now() - i * 86400000).toISOString() }} compact />
          ))}
        </div>
      </main>

      <Navbar />
    </div>
  )
}
