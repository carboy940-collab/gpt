'use client';

import Link from 'next/link';
import { MobileShell } from '@/components/layout/mobile-shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LifeStatsPanel } from '@/components/stats/life-stats-panel';
import { AvatarPreview } from '@/components/avatar/avatar-preview';
import { modules } from '@/data/seed/modules';
import { lessons } from '@/data/seed/lessons';
import { useUserProgress } from '@/hooks/useUserProgress';
import { useLifeStats } from '@/hooks/useLifeStats';
import { useAvatar } from '@/hooks/useAvatar';

export default function DashboardPage() {
  const [progress] = useUserProgress();
  const [stats] = useLifeStats();
  const [avatar] = useAvatar();
  const module = modules[0];
  const progressPercent = Math.round((progress.completedLessons.length / module.lessonIds.length) * 100);
  const nextUnlocked = progress.unlockedLessons.includes('lesson-2-placeholder');

  return (
    <MobileShell>
      <div className="space-y-4">
        <h1 className="text-2xl font-black">Dashboard</h1>
        <AvatarPreview avatar={avatar} />

        <Card>
          <p className="text-xs uppercase text-slate-500">Current module</p>
          <h2 className="font-bold">{module.title}</h2>
          <p className="text-sm text-slate-600">{progressPercent}% complete</p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full bg-game-primary" style={{ width: `${progressPercent}%` }} />
          </div>
          <p className="mt-3 text-sm">XP: <strong>{progress.totalXp}</strong> • Coins: <strong>{progress.totalCoins}</strong></p>
        </Card>

        <LifeStatsPanel stats={stats} />

        <Card>
          <p className="text-xs uppercase text-slate-500">Current lesson</p>
          <p className="font-semibold">{lessons[0].title}</p>
        </Card>

        <Card>
          <p className="text-xs uppercase text-slate-500">Next lesson</p>
          <p className="font-semibold">Communication Warm-Ups</p>
          <p className="text-sm text-slate-700">{nextUnlocked ? 'Unlocked ✅ (placeholder ready)' : 'Locked 🔒 complete lesson 1 scenario to unlock'}</p>
        </Card>

        <Link href="/lesson/module-1/lesson-1">
          <Button variant="secondary">Replay lesson 1</Button>
        </Link>
      </div>
    </MobileShell>
  );
}
