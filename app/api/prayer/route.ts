import { NextRequest, NextResponse } from 'next/server'
import { getAIResponse } from '@/lib/ai/provider'

export async function POST(req: NextRequest) {
  const { context } = await req.json()

  const messages = [{
    role: 'user' as const,
    content: `Com base nesta conversa ou situação: "${context}", crie uma oração pessoal, simples, respeitosa e emocional. Não prometa curas ou resultados garantidos. A oração deve ser em português, na primeira pessoa, sincera e de no máximo 80 palavras. Responda apenas com a oração, sem introdução.`,
  }]

  const response = await getAIResponse(messages)
  return NextResponse.json({ prayer: response.content })
}
