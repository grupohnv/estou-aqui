export interface User {
  id: string
  name: string
  email: string
  created_at: string
  plan_type: 'free' | 'premium' | 'family'
  preferences?: Record<string, unknown>
}

export interface Conversation {
  id: string
  user_id: string
  title: string
  emotional_theme?: string
  created_at: string
  updated_at: string
}

export interface Message {
  id: string
  conversation_id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  bible_references?: string[]
  risk_level?: 'none' | 'low' | 'medium' | 'high' | 'emergency'
  created_at: string
  is_favorite: boolean
}

export interface UserMemory {
  id: string
  user_id: string
  memory_type: string
  content: string
  sensitivity_level: number
  created_at: string
  updated_at: string
}

export interface DailyReflection {
  id: string
  title: string
  content: string
  bible_reference: string
  reflection_question: string
  prayer: string
  date: string
}

export interface Plan {
  id: string
  name: string
  price: number
  features: string[]
}

export type EmotionalTheme =
  | 'ansiedade' | 'medo' | 'luto' | 'culpa' | 'solidão'
  | 'casamento' | 'família' | 'propósito' | 'crise de fé'
  | 'tristeza' | 'raiva' | 'perdão' | 'gratidão' | 'oração'
  | 'dúvida bíblica' | 'risco alto' | 'geral'

export type RiskLevel = 'none' | 'low' | 'medium' | 'high' | 'emergency'
