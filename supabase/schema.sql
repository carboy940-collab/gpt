create table if not exists profiles (
  user_id uuid primary key default gen_random_uuid(),
  display_name text not null,
  grade_level text not null,
  onboarding_complete boolean not null default false,
  current_module_id text not null,
  current_lesson_id text not null,
  created_at timestamptz not null default now()
);

create table if not exists avatars (
  user_id uuid primary key references profiles(user_id) on delete cascade,
  skin_tone text not null,
  hair_style text not null,
  outfit text not null,
  accessory text not null,
  updated_at timestamptz not null default now()
);

create table if not exists modules (
  id text primary key,
  title text not null,
  description text not null
);

create table if not exists lessons (
  id text primary key,
  module_id text not null references modules(id),
  title text not null,
  hook text not null,
  explanation text not null,
  real_life_context text not null,
  linked_scenario_id text not null,
  estimated_minutes int not null
);

create table if not exists scenarios (
  id text primary key,
  lesson_id text not null references lessons(id),
  prompt text not null,
  choices jsonb not null
);

create table if not exists user_progress (
  user_id uuid primary key references profiles(user_id) on delete cascade,
  completed_lessons text[] not null default '{}',
  completed_scenarios text[] not null default '{}',
  unlocked_lessons text[] not null default '{}',
  earned_badges text[] not null default '{}',
  total_xp int not null default 0,
  total_coins int not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists user_stats (
  user_id uuid primary key references profiles(user_id) on delete cascade,
  money int not null default 0,
  savings int not null default 0,
  stress int not null default 50,
  freedom int not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists user_rewards (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(user_id) on delete cascade,
  source text not null,
  source_id text not null,
  xp int not null,
  coins int not null,
  created_at timestamptz not null default now()
);
