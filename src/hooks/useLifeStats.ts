'use client';

import { useEffect, useState } from 'react';
import { LifeStats } from '@/types/stats';
import { baseStats } from '@/services/progress-service';
import { useAppRepository } from './useAppRepository';

export function useLifeStats() {
  const repository = useAppRepository();
  const [stats, setStatsState] = useState<LifeStats>(baseStats);

  useEffect(() => {
    setStatsState(repository.getStats());
  }, [repository]);

  const setStats = (next: LifeStats) => {
    setStatsState(next);
    repository.saveStats(next);
  };

  return [stats, setStats] as const;
}
