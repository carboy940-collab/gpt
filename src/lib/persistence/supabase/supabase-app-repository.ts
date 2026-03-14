import { AppRepository } from '@/lib/persistence/contracts';
import { Avatar } from '@/types/avatar';
import { Progress } from '@/types/progress';
import { RewardTransaction } from '@/types/reward';
import { SessionState } from '@/types/session';
import { LifeStats } from '@/types/stats';
import { User, UserProfile } from '@/types/user';
import { ScenarioResult } from '@/types/scenario-result';

export class SupabaseAppRepository implements AppRepository {
  private notImplemented(): never {
    throw new Error('Supabase repository not implemented in Phase 1 demo mode.');
  }

  getSession(): SessionState { return this.notImplemented(); }
  saveSession(_session: SessionState): void { this.notImplemented(); }
  initializeDemoData(_user: User, _profile: UserProfile, _avatar: Avatar, _progress: Progress, _stats: LifeStats): void { this.notImplemented(); }

  getProfile(): UserProfile | null { return this.notImplemented(); }
  saveProfile(_profile: UserProfile): void { this.notImplemented(); }

  getAvatar(): Avatar | null { return this.notImplemented(); }
  saveAvatar(_avatar: Avatar): void { this.notImplemented(); }

  getProgress(): Progress { return this.notImplemented(); }
  saveProgress(_progress: Progress): void { this.notImplemented(); }

  getStats(): LifeStats { return this.notImplemented(); }
  saveStats(_stats: LifeStats): void { this.notImplemented(); }

  getRewards(): RewardTransaction[] { return this.notImplemented(); }
  appendReward(_reward: RewardTransaction): void { this.notImplemented(); }

  getLastScenarioResult(): ScenarioResult | null { return this.notImplemented(); }
  saveLastScenarioResult(_result: ScenarioResult): void { this.notImplemented(); }
}
