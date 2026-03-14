'use client';

import { useLocalPersistedState } from './use-local-persisted-state';
import { storageKeys } from '@/lib/constants/storage-keys';
import { RewardTransaction } from '@/types/reward';

export function useRewards() {
  return useLocalPersistedState<RewardTransaction[]>(storageKeys.rewards, []);
}
