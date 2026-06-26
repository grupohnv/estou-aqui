import type { EmotionalTheme, RiskLevel } from '@/types'

const RISK_KEYWORDS = {
  emergency: ['me matar', 'suicídio', 'suicidar', 'acabar com tudo', 'não quero mais viver', 'quero morrer', 'me mato', 'tirar minha vida'],
  high: ['pensamentos de morte', 'me machucar', 'automutilação', 'cortar meu braço', 'sem saída', 'não tenho mais esperança', 'violência doméstica', 'abuso', 'estou em perigo'],
  medium: ['muito triste', 'sem forças', 'não aguento mais', 'estou desesperado', 'chorando muito', 'não consigo dormir de angústia'],
}

const THEME_KEYWORDS: Record<EmotionalTheme, string[]> = {
  ansiedade: ['ansioso', 'ansiedade', 'preocupado', 'nervoso', 'inquieto', 'angústia'],
  medo: ['medo', 'assustado', 'com medo', 'pavor', 'receio', 'atemorizado'],
  luto: ['perdi', 'faleceu', 'morreu', 'morte', 'luto', 'saudade', 'velório', 'enterro'],
  culpa: ['culpa', 'culpado', 'errei', 'pecado', 'arrependido', 'vergonha'],
  solidão: ['sozinho', 'solidão', 'isolado', 'abandonado', 'sem ninguém'],
  casamento: ['casamento', 'marido', 'esposa', 'separação', 'divórcio', 'cônjuge', 'relacionamento'],
  família: ['família', 'filho', 'filha', 'pai', 'mãe', 'irmão', 'parente'],
  propósito: ['propósito', 'sentido', 'por que', 'direção', 'futuro', 'destino'],
  'crise de fé': ['dúvida', 'fé', 'Deus não existe', 'não acredito', 'questionar Deus'],
  tristeza: ['triste', 'tristeza', 'deprimido', 'depressão', 'choro', 'choran'],
  raiva: ['raiva', 'ódio', 'irritado', 'furioso', 'bravo', 'revoltado'],
  perdão: ['perdoar', 'perdão', 'não consigo perdoar', 'magoa'],
  gratidão: ['grato', 'gratidão', 'obrigado', 'bênção', 'alegria'],
  oração: ['orar', 'oração', 'ore por mim', 'quero orar', 'reze'],
  'dúvida bíblica': ['Bíblia', 'versículo', 'passagem', 'Evangelhos', 'Jesus disse', 'o que Deus pensa'],
  'risco alto': [],
  geral: [],
}

export function classifyMessage(text: string): { theme: EmotionalTheme; risk: RiskLevel } {
  const lower = text.toLowerCase()

  for (const [level, keywords] of Object.entries(RISK_KEYWORDS)) {
    if (keywords.some(k => lower.includes(k))) {
      return { theme: 'risco alto', risk: level as RiskLevel }
    }
  }

  for (const [theme, keywords] of Object.entries(THEME_KEYWORDS)) {
    if (keywords.some(k => lower.includes(k))) {
      return { theme: theme as EmotionalTheme, risk: 'none' }
    }
  }

  return { theme: 'geral', risk: 'none' }
}
