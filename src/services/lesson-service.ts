import { lessons } from '@/data/seed/lessons';
import { modules } from '@/data/seed/modules';

export const lessonService = {
  getById(lessonId: string) {
    return lessons.find((lesson) => lesson.id === lessonId);
  },

  getByModule(moduleId: string) {
    return lessons.filter((lesson) => lesson.moduleId === moduleId);
  },

  getNextLessonId(lessonId: string) {
    const lesson = lessons.find((item) => item.id === lessonId);
    if (!lesson) return undefined;

    const module = modules.find((item) => item.id === lesson.moduleId);
    if (!module) return undefined;

    const lessonIndex = module.lessonIds.indexOf(lessonId);
    if (lessonIndex < 0) return undefined;

    return module.lessonIds[lessonIndex + 1];
  },

  getNextRecommendedLesson(unlockedLessons: string[], completedLessons: string[]) {
    return lessons.find((lesson) => unlockedLessons.includes(lesson.id) && !completedLessons.includes(lesson.id));
  }
};
