-- Users (handled by Supabase Auth, extended here)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  name text,
  plan_type text default 'free' check (plan_type in ('free', 'premium', 'family')),
  preferences jsonb default '{}',
  created_at timestamptz default now()
);

create table if not exists public.conversations (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade,
  title text not null default 'Nova conversa',
  emotional_theme text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.messages (
  id uuid default gen_random_uuid() primary key,
  conversation_id uuid references public.conversations(id) on delete cascade,
  role text not null check (role in ('user', 'assistant', 'system')),
  content text not null,
  bible_references text[],
  risk_level text default 'none' check (risk_level in ('none', 'low', 'medium', 'high', 'emergency')),
  is_favorite boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.user_memory (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade,
  memory_type text not null,
  content text not null,
  sensitivity_level int default 1,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.daily_reflections (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  content text not null,
  bible_reference text,
  reflection_question text,
  prayer text,
  date date unique not null default current_date
);

create table if not exists public.plans (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  price numeric(10,2) not null,
  features jsonb default '[]'
);

-- RLS
alter table public.profiles enable row level security;
alter table public.conversations enable row level security;
alter table public.messages enable row level security;
alter table public.user_memory enable row level security;

create policy "Users see own profile" on public.profiles for all using (auth.uid() = id);
create policy "Users see own conversations" on public.conversations for all using (auth.uid() = user_id);
create policy "Users see own messages" on public.messages for all using (
  conversation_id in (select id from public.conversations where user_id = auth.uid())
);
create policy "Users see own memory" on public.user_memory for all using (auth.uid() = user_id);
