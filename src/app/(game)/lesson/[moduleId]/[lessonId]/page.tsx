import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MobileShell } from '@/components/layout/mobile-shell';
import { LessonContent } from '@/components/lessons/lesson-content';
import { Button } from '@/components/ui/button';
import { lessonService } from '@/services/lesson-service';

interface LessonPageProps {
  params: Promise<{ moduleId: string; lessonId: string }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { lessonId } = await params;
  const lesson = lessonService.getById(lessonId);

  if (!lesson) notFound();

  return (
    <MobileShell>
      <div className="space-y-4">
        <p className="text-xs uppercase text-game-primary">Lesson 1 • under {lesson.estimatedMinutes} min</p>
        <h1 className="text-2xl font-black">{lesson.title}</h1>
        <p className="text-sm text-slate-700">Smart friend mode: tiny lesson now, big confidence later.</p>
        <LessonContent lesson={lesson} />
        <Link href={`/scenario/${lesson.linkedScenarioId}`}>
          <Button>Start scenario challenge</Button>
        </Link>
      </div>
    </MobileShell>
  );
}
