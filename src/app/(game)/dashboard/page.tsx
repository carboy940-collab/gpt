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
import { badges } from '@/data/seed/badges';
import { lessonService } from '@/services/lesson-service';

export default function DashboardPage() {
  const [progress] = useUserProgress();
  const [stats] = useLifeStats();
  const [avatar] = useAvatar();
  const module = modules[0];
  const totalLessons = module.lessonIds.length;
  const completedCount = progress.completedLessons.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  const recommendedLesson = lessonService.getNextRecommendedLesson(progress.unlockedLessons, progress.completedLessons) ?? lessons[0];
  const completedSet = new Set(progress.completedLessons);
  const earnedBadges = badges.filter((badge) => progress.earnedBadgeIds.includes(badge.id));
  const updatedToday = new Date(progress.updatedAt).toDateString() === new Date().toDateString();

  return (
    <MobileShell>
      <div className="space-y-4">
        <h1 className="text-2xl font-black">Dashboard</h1>
        <AvatarPreview avatar={avatar} />

        <Card>
          <p className="text-xs uppercase text-slate-500">Current module</p>
          <h2 className="font-bold">{module.title}</h2>
          <p className="text-sm text-slate-600">You&apos;re on lesson {Math.min(completedCount + 1, totalLessons)} of {totalLessons}</p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full bg-game-primary" style={{ width: `${progressPercent}%` }} />
          </div>
          <p className="mt-3 text-sm">XP: <strong>{progress.totalXp}</strong> • Coins: <strong>{progress.totalCoins}</strong></p>
          <p className="mt-2 text-xs text-slate-600">{updatedToday ? 'Activity: You made progress today ✅' : 'Activity: No streak pressure—just jump back in.'}</p>
        </Card>

        <Card>
          <p className="text-xs uppercase text-slate-500">Up next</p>
          <p className="font-semibold">{recommendedLesson.title}</p>
          <p className="text-sm text-slate-700">{recommendedLesson.hook}</p>
          <Link href={`/lesson/${recommendedLesson.moduleId}/${recommendedLesson.id}`}>
            <Button className="mt-3">Continue where you left off</Button>
          </Link>
        </Card>

        <Card>
          <p className="text-xs uppercase text-slate-500">Lesson progress</p>
          <div className="mt-2 space-y-1">
            {lessons.map((lesson, index) => (
              <p className="text-sm" key={lesson.id}>
                <span className="mr-2 text-slate-500">{index + 1}.</span>
                <span>{lesson.title}</span>
                <span className="ml-2 text-xs text-slate-500">{completedSet.has(lesson.id) ? '✅' : progress.unlockedLessons.includes(lesson.id) ? '▶️' : '🔒'}</span>
              </p>
            ))}
          </div>
        </Card>

        <Card>
          <p className="text-xs uppercase text-slate-500">Badges earned</p>
          {earnedBadges.length === 0 ? (
            <p className="text-sm text-slate-700">No badges yet—your first unlock is super close.</p>
          ) : (
            <div className="mt-2 space-y-2">
              {earnedBadges.map((badge) => (
                <div key={badge.id} className="rounded-lg border border-slate-100 p-2">
                  <p className="text-sm font-semibold">🏅 {badge.name}</p>
                  <p className="text-xs text-slate-600">{badge.description}</p>
                </div>
              ))}
            </div>
          )}
        </Card>

        <LifeStatsPanel stats={stats} />
      </div>
    </MobileShell>
  );
}
