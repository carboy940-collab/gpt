'use client';

import { useLocalPersistedState } from './use-local-persisted-state';
import { storageKeys } from '@/lib/constants/storage-keys';
import { baseStats } from '@/services/progress-service';

export function useLifeStats() {
  return useLocalPersistedState(storageKeys.stats, baseStats);
}
