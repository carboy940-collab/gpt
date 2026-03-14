import { Progress } from '@/types/progress';

function hasLessons(progress: Progress, lessonIds: string[]): boolean {
  return lessonIds.every((id) => progress.completedLessons.includes(id));
}

export function calculateNewBadgeIds(progress: Progress): string[] {
  const unlocked = new Set<string>();

  if (progress.completedLessons.includes('lesson-1')) unlocked.add('first-step');
  if (progress.completedLessons.includes('lesson-2')) unlocked.add('fit-finder');
  if (hasLessons(progress, ['lesson-4', 'lesson-5'])) unlocked.add('ready-to-apply');
  if (progress.completedLessons.includes('lesson-6')) unlocked.add('interview-survivor');
  if (progress.completedLessons.includes('lesson-9')) unlocked.add('payday-rookie');
  if (progress.completedLessons.includes('lesson-10')) unlocked.add('budget-beginner');
  if (hasLessons(progress, ['lesson-1','lesson-2','lesson-3','lesson-4','lesson-5','lesson-6','lesson-7','lesson-8','lesson-9','lesson-10'])) {
    unlocked.add('module-1-complete');
  }

  return [...unlocked].filter((badgeId) => !progress.earnedBadgeIds.includes(badgeId));
}
