'use client';

import { useRouter } from 'next/navigation';
import { LessonCompleteAction } from '@/components/lessons/lesson-complete-action';
import { getAppRepository } from '@/lib/persistence';
import { completeLesson } from '@/services/lesson-completion-service';
import { Lesson } from '@/types/lesson';

export function LessonCompleteContainer({ lesson }: { lesson: Lesson }) {
  const router = useRouter();

  const handleComplete = async (lessonId: string) => {
    const repository = getAppRepository();
    const session = repository.getSession();

    if (!session.currentUser) {
      router.push('/sign-in');
      return;
    }

    completeLesson(repository, {
      userId: session.currentUser.id,
      lessonId
    });

    router.push('/dashboard');
  };

  return <LessonCompleteAction lesson={lesson} onComplete={handleComplete} />;
}
