import { lessons } from '@/data/seed/lessons';

export const lessonService = {
  getById(lessonId: string) {
    return lessons.find((lesson) => lesson.id === lessonId);
  }
};
