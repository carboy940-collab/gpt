import { storageKeys } from '@/lib/constants/storage-keys';
import { readFromStorage, writeToStorage } from '@/lib/utils/storage';
import { AppRepository } from '@/lib/persistence/contracts';
import { Avatar } from '@/types/avatar';
import { Progress } from '@/types/progress';
import { RewardTransaction } from '@/types/reward';
import { SessionState } from '@/types/session';
import { LifeStats } from '@/types/stats';
import { User, UserProfile } from '@/types/user';
import { ScenarioResult } from '@/types/scenario-result';
import { baseProgress, baseStats } from '@/services/progress-service';

const emptySession: SessionState = {
  currentUser: null
};

export class LocalAppRepository implements AppRepository {
  getSession(): SessionState {
    return readFromStorage(storageKeys.session, emptySession);
  }

  saveSession(session: SessionState): void {
    writeToStorage(storageKeys.session, session);
  }

  initializeDemoData(user: User, profile: UserProfile, avatar: Avatar, progress: Progress, stats: LifeStats): void {
    this.saveSession({ currentUser: user });
    this.saveProfile(profile);
    this.saveAvatar(avatar);
    this.saveProgress(progress);
    this.saveStats(stats);
    this.saveRewards([]);
  }

  getProfile(): UserProfile | null {
    return readFromStorage<UserProfile | null>(storageKeys.profile, null);
  }

  saveProfile(profile: UserProfile): void {
    writeToStorage(storageKeys.profile, profile);
  }

  getAvatar(): Avatar | null {
    return readFromStorage<Avatar | null>(storageKeys.avatar, null);
  }

  saveAvatar(avatar: Avatar): void {
    writeToStorage(storageKeys.avatar, avatar);
  }

  getProgress(): Progress {
    return readFromStorage(storageKeys.progress, baseProgress);
  }

  saveProgress(progress: Progress): void {
    writeToStorage(storageKeys.progress, progress);
  }

  getStats(): LifeStats {
    return readFromStorage(storageKeys.stats, baseStats);
  }

  saveStats(stats: LifeStats): void {
    writeToStorage(storageKeys.stats, stats);
  }

  getRewards(): RewardTransaction[] {
    return readFromStorage<RewardTransaction[]>(storageKeys.rewards, []);
  }

  saveRewards(rewards: RewardTransaction[]): void {
    writeToStorage(storageKeys.rewards, rewards);
  }

  appendReward(reward: RewardTransaction): void {
    this.saveRewards([...this.getRewards(), reward]);
  }

  getLastScenarioResult(): ScenarioResult | null {
    return readFromStorage<ScenarioResult | null>(storageKeys.lastResult, null);
  }

  saveLastScenarioResult(result: ScenarioResult): void {
    writeToStorage(storageKeys.lastResult, result);
  }
}
