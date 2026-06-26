# Estou Aqui

Um companheiro espiritual inspirado nos ensinamentos de Jesus, criado para acolher você nos momentos de dor, dúvida, medo e solidão.

## Stack tecnológica

- **Next.js 15** (App Router) com TypeScript
- **Tailwind CSS v4**
- **shadcn/ui** para componentes base
- **Supabase** para autenticação e banco de dados (PostgreSQL)
- **Anthropic Claude / OpenAI GPT-4o** como provedor de IA (configurável)
- **date-fns** para formatação de datas em português
- **lucide-react** para ícones

## Instalação e execução

```bash
# 1. Instalar dependências
npm install

# 2. Copiar e preencher as variáveis de ambiente
cp .env.local.example .env.local
# (ou edite o .env.local já criado)

# 3. Rodar em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Configuração do Supabase

1. Crie um projeto em [supabase.com](https://supabase.com)
2. Acesse o SQL Editor e execute o conteúdo de `supabase/schema.sql`
3. Preencha no `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-anon-key
   SUPABASE_SERVICE_ROLE_KEY=sua-service-role-key
   ```

## Configuração da IA

O app suporta Anthropic Claude (padrão) ou OpenAI GPT-4o.

```env
# Para usar Claude (padrão):
ANTHROPIC_API_KEY=sk-ant-...
AI_PROVIDER=anthropic

# Para usar OpenAI:
OPENAI_API_KEY=sk-...
AI_PROVIDER=openai
```

## Páginas do app

| Rota | Descrição |
|------|-----------|
| `/` | Landing page |
| `/chat` | Chat com o companheiro espiritual |
| `/reflexao` | Reflexão diária com versículo e oração |
| `/historico` | Histórico de conversas |
| `/favoritos` | Mensagens marcadas como favoritas |
| `/perfil` | Perfil do usuário |
| `/pricing` | Planos de assinatura |
| `/seguranca` | Segurança, limites e emergências |
| `/login` | Login |
| `/register` | Cadastro |

## Protocolo de segurança

O app detecta automaticamente mensagens com risco elevado (palavras-chave relacionadas a suicídio, automutilação, violência) e instrui a IA a:

- Acolher com urgência e cuidado
- Informar que a vida da pessoa importa
- Mencionar CVV (188) e emergências (192/190)
- Orientar a buscar ajuda humana imediata

## Observações

- Pagamento/assinatura é mockado — os planos Premium e Família ainda não processam pagamento
- Autenticação com Supabase requer configuração das variáveis de ambiente
- O histórico e favoritos exibem dados mockados enquanto o Supabase não estiver configurado
