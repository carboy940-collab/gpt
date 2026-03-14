'use client';

import Link from 'next/link';
import { MobileShell } from '@/components/layout/mobile-shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RewardToast } from '@/components/rewards/reward-toast';
import { useLastScenarioResult } from '@/hooks/useLastScenarioResult';

export default function FeedbackPage() {
  const result = useLastScenarioResult();

  if (!result) {
    return (
      <MobileShell>
        <Card>No recent scenario result found.</Card>
      </MobileShell>
    );
  }

  return (
    <MobileShell>
      <div className="space-y-4">
        <h1 className="text-2xl font-black">Nice work 🎉</h1>
        <Card>
          <p className="text-xs uppercase text-slate-500">Your choice</p>
          <p className="text-sm font-semibold">{result.choice.label}</p>
          <p className="mt-2 text-sm text-slate-700">{result.choice.feedback}</p>
        </Card>
        <RewardToast xp={result.choice.xpReward} coins={result.choice.coinReward} />
        <Link href="/dashboard">
          <Button>Go to dashboard</Button>
        </Link>
      </div>
    </MobileShell>
  );
}
