'use client';

import { useEffect, useState } from 'react';
import { Progress } from '@/types/progress';
import { useAppRepository } from './useAppRepository';
import { baseProgress } from '@/services/progress-service';

export function useUserProgress() {
  const repository = useAppRepository();
  const [progress, setProgressState] = useState<Progress>(baseProgress);

  useEffect(() => {
    setProgressState(repository.getProgress());
  }, [repository]);

  const setProgress = (next: Progress) => {
    setProgressState(next);
    repository.saveProgress(next);
  };

  return [progress, setProgress] as const;
}
