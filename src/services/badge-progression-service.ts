import { AppRepository } from '@/lib/persistence/contracts';
import { Progress } from '@/types/progress';
import { calculateNewBadgeIds } from '@/services/badge-service';
import { createRewardTransaction } from '@/services/reward-service';

export function applyBadgeProgression(
  repository: AppRepository,
  userId: string,
  progress: Progress
): { updatedProgress: Progress; newBadgeIds: string[] } {
  const newBadgeIds = calculateNewBadgeIds(progress);

  const updatedProgress = {
    ...progress,
    earnedBadgeIds: Array.from(new Set([...progress.earnedBadgeIds, ...newBadgeIds]))
  };

  newBadgeIds.forEach((badgeId) => {
    repository.appendReward(createRewardTransaction(userId, 'badge', badgeId, 0, 0));
  });

  return {
    updatedProgress,
    newBadgeIds
  };
}
