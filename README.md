# Now What? — Phase 1 Vertical Slice

## Architecture snapshot (refactored)
- **Routes/pages are thin** and focused on loading + wiring UI.
- **Application orchestration** for scenario completion lives in `src/services/scenario-completion-service.ts`.
- **Persistence is abstracted** behind `AppRepository` (`src/lib/persistence/contracts.ts`).
- **Current mode uses local storage adapter** (`LocalAppRepository`), with a Phase 1 Supabase repository stub for future swap-in.
- **Seed content remains data-driven** in `src/data/seed/*`.

## Key flow
1. Demo session initialized in sign-in via repository.
2. Avatar and progress/stat reads/writes go through repository-backed hooks.
3. Scenario page calls `completeScenario(...)` (single orchestration entry).
4. Feedback/dashboard read persisted state from repository-backed hooks.

## Supabase schema
See `supabase/schema.sql` for Phase 1 tables and UUID-compatible rewards (`user_rewards.id`).

## Run locally
```bash
npm install
npm run dev
```
