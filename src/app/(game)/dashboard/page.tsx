'use client';

import Link from 'next/link';
import { MobileShell } from '@/components/layout/mobile-shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LifeStatsPanel } from '@/components/stats/life-stats-panel';
import { AvatarPreview } from '@/components/avatar/avatar-preview';
import { modules } from '@/data/seed/modules';
import { lessonService } from '@/services/lesson-service';
import { useUserProgress } from '@/hooks/useUserProgress';
import { useLifeStats } from '@/hooks/useLifeStats';
import { useAvatar } from '@/hooks/useAvatar';

export default function DashboardPage() {
  const [progress] = useUserProgress();
  const [stats] = useLifeStats();
  const [avatar] = useAvatar();
  const module = modules[0];
  const progressPercent = module.lessonIds.length > 0
    ? Math.round((progress.completedLessons.length / module.lessonIds.length) * 100)
    : 0;

  // Derive current lesson: first unlocked lesson not yet completed, or last completed
  const currentLessonId = progress.unlockedLessons.find(
    (id) => !progress.completedLessons.includes(id)
  ) ?? progress.unlockedLessons[progress.unlockedLessons.length - 1];
  const currentLesson = currentLessonId ? lessonService.getById(currentLessonId) : undefined;

  // Derive next lesson from module order
  const currentIndex = currentLessonId ? module.lessonIds.indexOf(currentLessonId) : -1;
  const nextLessonId = currentIndex >= 0 ? module.lessonIds[currentIndex + 1] : undefined;
  const nextLesson = nextLessonId ? lessonService.getById(nextLessonId) : undefined;
  const nextUnlocked = nextLessonId ? progress.unlockedLessons.includes(nextLessonId) : false;

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

        {currentLesson && (
          <Card>
            <p className="text-xs uppercase text-slate-500">Current lesson</p>
            <p className="font-semibold">{currentLesson.title}</p>
          </Card>
        )}

        {nextLesson ? (
          <Card>
            <p className="text-xs uppercase text-slate-500">Next lesson</p>
            <p className="font-semibold">{nextLesson.title}</p>
            <p className="text-sm text-slate-700">{nextUnlocked ? 'Unlocked ✅' : 'Locked 🔒 complete current scenario to unlock'}</p>
          </Card>
        ) : progress.completedLessons.length === module.lessonIds.length && module.lessonIds.length > 0 ? (
          <Card>
            <p className="text-xs uppercase text-slate-500">Module complete</p>
            <p className="font-semibold">All lessons finished 🎉</p>
          </Card>
        ) : null}

        {currentLessonId && (
          <Link href={`/lesson/${module.id}/${currentLessonId}`}>
            <Button variant="secondary">Go to current lesson</Button>
          </Link>
        )}
      </div>
    </MobileShell>
  );
}
