import { AppRepository } from '@/lib/persistence/contracts';
import { lessonService } from '@/services/lesson-service';
import { applyLessonCompletion } from '@/services/progress-service';
import { createRewardTransaction } from '@/services/reward-service';
import { applyBadgeProgression } from '@/services/badge-progression-service';

export interface CompleteLessonInput {
  userId: string;
  lessonId: string;
}

export function completeLesson(repository: AppRepository, input: CompleteLessonInput) {
  const lesson = lessonService.getById(input.lessonId);
  if (!lesson) throw new Error(`Lesson not found: ${input.lessonId}`);

  const progress = repository.getProgress();
  const stats = repository.getStats();
  const nextLessonId = lessonService.getNextLessonId(lesson.id);

  const next = applyLessonCompletion(progress, stats, {
    lessonId: lesson.id,
    xp: lesson.completionXp,
    coins: lesson.completionCoins,
    statChanges: lesson.statChanges,
    unlockLessonId: nextLessonId
  });

  const { updatedProgress, newBadgeIds } = applyBadgeProgression(repository, input.userId, next.progress);

  repository.saveProgress(updatedProgress);
  repository.saveStats(next.stats);
  repository.appendReward(
    createRewardTransaction(input.userId, 'lesson', lesson.id, lesson.completionXp, lesson.completionCoins)
  );

  return {
    updatedProgress,
    newBadgeIds
  };
}
