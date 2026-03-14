import { RewardTransaction } from '@/types/reward';

export function createRewardTransaction(
  userId: string,
  source: 'lesson' | 'scenario',
  sourceId: string,
  xp: number,
  coins: number
): RewardTransaction {
  return {
    id: `${source}-${sourceId}-${Date.now()}`,
    userId,
    source,
    sourceId,
    xp,
    coins,
    createdAt: new Date().toISOString()
  };
}
