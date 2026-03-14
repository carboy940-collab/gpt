'use client';

import { useEffect, useState } from 'react';
import { useAppRepository } from './useAppRepository';
import { ScenarioResult } from '@/types/scenario-result';

export function useLastScenarioResult() {
  const repository = useAppRepository();
  const [result, setResult] = useState<ScenarioResult | null>(null);

  useEffect(() => {
    setResult(repository.getLastScenarioResult());
  }, [repository]);

  return result;
}
