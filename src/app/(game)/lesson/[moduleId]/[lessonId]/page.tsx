import { notFound } from 'next/navigation';
import { MobileShell } from '@/components/layout/mobile-shell';
import { LessonContent } from '@/components/lessons/lesson-content';
import { lessonService } from '@/services/lesson-service';
import { modules } from '@/data/seed/modules';
import { LessonCompleteContainer } from '@/components/lessons/lesson-complete-container';

interface LessonPageProps {
  params: Promise<{ moduleId: string; lessonId: string }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { lessonId } = await params;
  const lesson = lessonService.getById(lessonId);

  if (!lesson) notFound();

  const module = modules.find((item) => item.id === lesson.moduleId);
  const lessonNumber = (module?.lessonIds.indexOf(lesson.id) ?? -1) + 1;

  return (
    <MobileShell>
      <div className="space-y-4">
        <p className="text-xs uppercase text-game-primary">Lesson {lessonNumber} • under {lesson.estimatedMinutes} min</p>
        <h1 className="text-2xl font-black">{lesson.title}</h1>
        <p className="text-sm text-slate-700">{lesson.description}</p>
        <LessonContent lesson={lesson} />
        <LessonCompleteContainer lesson={lesson} />
      </div>
    </MobileShell>
  );
}
