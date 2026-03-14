'use client';

import { useEffect, useState } from 'react';
import { RewardTransaction } from '@/types/reward';
import { useAppRepository } from './useAppRepository';

export function useRewards() {
  const repository = useAppRepository();
  const [rewards, setRewards] = useState<RewardTransaction[]>([]);

  useEffect(() => {
    setRewards(repository.getRewards());
  }, [repository]);

  const appendReward = (reward: RewardTransaction) => {
    repository.appendReward(reward);
    setRewards(repository.getRewards());
  };

  return [rewards, appendReward] as const;
}
