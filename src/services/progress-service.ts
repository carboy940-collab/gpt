import { Progress } from '@/types/progress';
import { LifeStats, LifeStatsDelta } from '@/types/stats';

export const baseProgress: Progress = {
  userId: '00000000-0000-4000-8000-000000000001',
  completedLessons: [],
  completedScenarios: [],
  unlockedLessons: ['lesson-1'],
  earnedBadgeIds: [],
  totalXp: 0,
  totalCoins: 0,
  updatedAt: new Date().toISOString()
};

export const baseStats: LifeStats = {
  money: 50,
  savings: 10,
  stress: 50,
  freedom: 20
};

function nextStats(stats: LifeStats, statChanges: LifeStatsDelta): LifeStats {
  return {
    money: stats.money + (statChanges.money ?? 0),
    savings: stats.savings + (statChanges.savings ?? 0),
    stress: Math.max(0, stats.stress + (statChanges.stress ?? 0)),
    freedom: stats.freedom + (statChanges.freedom ?? 0)
  };
}

export function applyLessonCompletion(
  progress: Progress,
  stats: LifeStats,
  payload: {
    lessonId: string;
    xp: number;
    coins: number;
    statChanges: LifeStatsDelta;
    unlockLessonId?: string;
  }
): { progress: Progress; stats: LifeStats } {
  const completedLessons = progress.completedLessons.includes(payload.lessonId)
    ? progress.completedLessons
    : [...progress.completedLessons, payload.lessonId];

  const unlockedLessons = payload.unlockLessonId
    ? Array.from(new Set([...progress.unlockedLessons, payload.unlockLessonId]))
    : progress.unlockedLessons;

  return {
    progress: {
      ...progress,
      completedLessons,
      unlockedLessons,
      totalXp: progress.totalXp + payload.xp,
      totalCoins: progress.totalCoins + payload.coins,
      updatedAt: new Date().toISOString()
    },
    stats: nextStats(stats, payload.statChanges)
  };
}

export function applyScenarioResult(
  progress: Progress,
  stats: LifeStats,
  payload: {
    lessonId: string;
    scenarioId: string;
    xp: number;
    coins: number;
    statChanges: LifeStatsDelta;
    unlockLessonId?: string;
  }
): { progress: Progress; stats: LifeStats } {
  const completedLessons = progress.completedLessons.includes(payload.lessonId)
    ? progress.completedLessons
    : [...progress.completedLessons, payload.lessonId];

  const completedScenarios = progress.completedScenarios.includes(payload.scenarioId)
    ? progress.completedScenarios
    : [...progress.completedScenarios, payload.scenarioId];

  const unlockedLessons = payload.unlockLessonId
    ? Array.from(new Set([...progress.unlockedLessons, payload.unlockLessonId]))
    : progress.unlockedLessons;

  return {
    progress: {
      ...progress,
      completedLessons,
      completedScenarios,
      unlockedLessons,
      totalXp: progress.totalXp + payload.xp,
      totalCoins: progress.totalCoins + payload.coins,
      updatedAt: new Date().toISOString()
    },
    stats: nextStats(stats, payload.statChanges)
  };
}
