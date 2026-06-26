'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Sparkles } from 'lucide-react'

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  function update(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setMessage('Cadastro em breve disponível. Configure o Supabase para ativar.')
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
          <h1 className="text-2xl font-semibold text-[#3D3D3D]">Criar conta</h1>
          <p className="text-sm text-[#3D3D3D80] mt-1">Salve suas conversas e reflexões</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { field: 'name', label: 'Seu nome', type: 'text', placeholder: 'Como posso te chamar?' },
            { field: 'email', label: 'Email', type: 'email', placeholder: 'seu@email.com' },
            { field: 'password', label: 'Senha', type: 'password', placeholder: '••••••••' },
          ].map(({ field, label, type, placeholder }) => (
            <div key={field}>
              <label className="text-xs text-[#3D3D3D80] font-medium block mb-1.5">{label}</label>
              <input
                type={type}
                value={form[field as keyof typeof form]}
                onChange={e => update(field, e.target.value)}
                placeholder={placeholder}
                required
                className="w-full bg-white border border-[#C9A96E33] rounded-2xl px-4 py-3 text-sm text-[#3D3D3D] outline-none focus:border-[#C9A96E80] transition-colors"
              />
            </div>
          ))}

          {message && <p className="text-xs text-[#8A9E7E] bg-[#8A9E7E1A] rounded-2xl px-4 py-3">{message}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#3D3D3D] text-white rounded-2xl text-sm font-medium hover:bg-[#3D3D3DE6] disabled:opacity-50 transition-colors"
          >
            {loading ? 'Criando conta...' : 'Criar conta'}
          </button>
        </form>

        <p className="text-center text-sm text-[#3D3D3D80] mt-6">
          Já tem conta?{' '}
          <Link href="/login" className="text-[#C9A96E] underline">Entrar</Link>
        </p>
      </main>
    </div>
  )
}
