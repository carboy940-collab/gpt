'use client';

import { useLocalPersistedState } from './use-local-persisted-state';
import { storageKeys } from '@/lib/constants/storage-keys';
import { baseProgress } from '@/services/progress-service';

export function useUserProgress() {
  return useLocalPersistedState(storageKeys.progress, baseProgress);
}
