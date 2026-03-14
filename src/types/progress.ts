export interface Progress {
  userId: string;
  completedLessons: string[];
  completedScenarios: string[];
  unlockedLessons: string[];
  earnedBadgeIds: string[];
  totalXp: number;
  totalCoins: number;
  updatedAt: string;
}
