'use client';

import { useMemo } from 'react';
import { lessons } from '@/data/seed/lessons';

export function useLessonFlow(currentLessonId: string) {
  return useMemo(() => {
    const index = lessons.findIndex((lesson) => lesson.id === currentLessonId);
    if (index < 0) return { nextLessonId: undefined };
    const nextLesson = lessons[index + 1];
    return { nextLessonId: nextLesson?.id };
  }, [currentLessonId]);
}
