'use client';

import { useRouter } from 'next/navigation';
import { MobileShell } from '@/components/layout/mobile-shell';
import { ScenarioEngine } from '@/components/scenarios/scenario-engine';
import { useUserProgress } from '@/hooks/useUserProgress';
import { useLifeStats } from '@/hooks/useLifeStats';
import { useRewards } from '@/hooks/useRewards';
import { scenarioService } from '@/services/scenario-service';
import { applyScenarioResult } from '@/services/progress-service';
import { createRewardTransaction } from '@/services/reward-service';
import { Card } from '@/components/ui/card';
import { storageKeys } from '@/lib/constants/storage-keys';
import { writeToStorage } from '@/lib/utils/storage';

export default function ScenarioPage({ params }: { params: { scenarioId: string } }) {
  const scenario = scenarioService.getById(params.scenarioId);
  const [progress, setProgress] = useUserProgress();
  const [stats, setStats] = useLifeStats();
  const [rewards, setRewards] = useRewards();
  const router = useRouter();

  if (!scenario) {
    return (
      <MobileShell>
        <Card>Scenario not found.</Card>
      </MobileShell>
    );
  }

  return (
    <MobileShell>
      <ScenarioEngine
        prompt={scenario.prompt}
        choices={scenario.choices}
        onComplete={(choice) => {
          const next = applyScenarioResult(progress, stats, {
            lessonId: scenario.lessonId,
            scenarioId: scenario.id,
            xp: choice.xpReward,
            coins: choice.coinReward,
            statChanges: choice.statChanges,
            unlockLessonId: 'lesson-2-placeholder'
          });

          setProgress(next.progress);
          setStats(next.stats);

          const transaction = createRewardTransaction('demo-user', 'scenario', scenario.id, choice.xpReward, choice.coinReward);
          setRewards([...rewards, transaction]);

          writeToStorage(storageKeys.lastResult, {
            choice,
            prompt: scenario.prompt
          });
          router.push('/feedback');
        }}
      />
    </MobileShell>
  );
}
