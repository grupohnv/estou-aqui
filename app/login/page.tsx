'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Sparkles } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setMessage('Login em breve disponível. Configure o Supabase para ativar.')
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#F9F5F0] flex flex-col">
      <header className="px-6 pt-14 pb-4">
        <Link href="/" className="p-2 inline-flex rounded-xl hover:bg-white transition-colors">
          <ArrowLeft size={18} className="text-[#3D3D3D99]" />
        </Link>
      </header>

      <main className="flex-1 flex flex-col justify-center px-6 max-w-sm mx-auto w-full">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full bg-[#C9A96E1A] flex items-center justify-center mx-auto mb-4">
            <Sparkles size={22} className="text-[#C9A96E]" />
          </div>
          <h1 className="text-2xl font-semibold text-[#3D3D3D]">Bem-vindo de volta</h1>
          <p className="text-sm text-[#3D3D3D80] mt-1">Acesse sua conta para continuar</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-[#3D3D3D80] font-medium block mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              className="w-full bg-white border border-[#C9A96E33] rounded-2xl px-4 py-3 text-sm text-[#3D3D3D] outline-none focus:border-[#C9A96E80] transition-colors"
            />
          </div>
          <div>
            <label className="text-xs text-[#3D3D3D80] font-medium block mb-1.5">Senha</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full bg-white border border-[#C9A96E33] rounded-2xl px-4 py-3 text-sm text-[#3D3D3D] outline-none focus:border-[#C9A96E80] transition-colors"
            />
          </div>

          {message && <p className="text-xs text-[#8A9E7E] bg-[#8A9E7E1A] rounded-2xl px-4 py-3">{message}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#3D3D3D] text-white rounded-2xl text-sm font-medium hover:bg-[#3D3D3DE6] disabled:opacity-50 transition-colors"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <p className="text-center text-sm text-[#3D3D3D80] mt-6">
          Não tem conta?{' '}
          <Link href="/register" className="text-[#C9A96E] underline">Criar agora</Link>
        </p>

        <p className="text-center text-xs text-[#3D3D3D4D] mt-4">
          Ou{' '}
          <Link href="/chat" className="text-[#C9A96EB3] underline">continuar como visitante</Link>
        </p>
      </main>
    </div>
  )
}
