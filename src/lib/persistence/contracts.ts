import { Avatar } from '@/types/avatar';
import { Progress } from '@/types/progress';
import { RewardTransaction } from '@/types/reward';
import { SessionState } from '@/types/session';
import { LifeStats } from '@/types/stats';
import { User, UserProfile } from '@/types/user';
import { ScenarioResult } from '@/types/scenario-result';

export interface AppRepository {
  getSession(): SessionState;
  saveSession(session: SessionState): void;
  initializeDemoData(user: User, profile: UserProfile, avatar: Avatar, progress: Progress, stats: LifeStats): void;

  getProfile(): UserProfile | null;
  saveProfile(profile: UserProfile): void;

  getAvatar(): Avatar | null;
  saveAvatar(avatar: Avatar): void;

  getProgress(): Progress;
  saveProgress(progress: Progress): void;

  getStats(): LifeStats;
  saveStats(stats: LifeStats): void;

  getRewards(): RewardTransaction[];
  appendReward(reward: RewardTransaction): void;

  getLastScenarioResult(): ScenarioResult | null;
  saveLastScenarioResult(result: ScenarioResult): void;
}
