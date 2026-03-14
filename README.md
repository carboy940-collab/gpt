# Now What? — Phase 1 Vertical Slice

## 1) Short architecture plan
- **App shell + route groups**: marketing, auth, and game areas separated in App Router.
- **Data-driven content**: modules, lessons, and scenarios come from seed data files.
- **Service layer**: lesson/scenario lookup, progression updates, and rewards are encapsulated in `/services`.
- **Typed domain model**: dedicated TypeScript interfaces in `/types` for future scale.
- **Persistence abstraction**: local storage for Phase 1 demo mode with Supabase-ready client + schema.
- **Reusable UI**: scenario engine, lesson renderer, life stats panel, and avatar preview as components.

## 2) Folder structure
```text
/src
  /app
    /(marketing)/page.tsx
    /(auth)/sign-in/page.tsx
    /(auth)/sign-up/page.tsx
    /(game)/avatar/page.tsx
    /(game)/dashboard/page.tsx
    /(game)/lesson/[moduleId]/[lessonId]/page.tsx
    /(game)/scenario/[scenarioId]/page.tsx
    /(game)/feedback/page.tsx
    /layout.tsx
    /globals.css
  /components
    /ui
    /layout
    /avatar
    /lessons
    /scenarios
    /stats
    /rewards
  /features
    /auth
  /lib
    /supabase
    /utils
    /constants
    /validators
  /services
  /data/seed
  /types
  /hooks
/supabase/schema.sql
```

## 3) Typed data model outline
- `User`, `UserProfile`
- `Avatar`
- `Module`, `Lesson`
- `Scenario`, `ScenarioChoice`
- `Progress`
- `LifeStats`, `LifeStatsDelta`
- `RewardTransaction`

See: `/src/types/*`

## 4) Supabase schema outline
See SQL in `/supabase/schema.sql` for:
- `profiles`
- `avatars`
- `modules`
- `lessons`
- `scenarios`
- `user_progress`
- `user_stats`
- `user_rewards`

## 5) Implementation sequence used
1. Scaffolded Next.js/Tailwind/TS structure.
2. Added typed models and seed content for module 1 + lesson 1 + scenario 1.
3. Built services for lesson/scenario/reward/progression logic.
4. Added local persistence hooks + Supabase client scaffold.
5. Implemented onboarding flow (welcome → demo entry → avatar → lesson → scenario → feedback → dashboard).
6. Added dashboard progression, XP/coins rewards, life stats updates, and next lesson placeholder unlock state.

## Run locally
```bash
npm install
npm run dev
```

## Notes
- In constrained environments without npm registry access, install may fail.
- Phase 1 uses demo mode + local persistence while remaining Supabase-ready.
