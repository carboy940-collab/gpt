import { Lesson } from '@/types/lesson';
import { Card } from '@/components/ui/card';

export function LessonContent({ lesson }: { lesson: Lesson }) {
  return (
    <article className="space-y-3">
      <Card>
        <p className="text-xs font-semibold uppercase text-game-primary">Hook</p>
        <p className="mt-1 font-medium">{lesson.hook}</p>
      </Card>
      <Card>
        <p className="text-xs font-semibold uppercase text-game-primary">Quick explanation</p>
        <p className="mt-1 text-sm text-slate-700">{lesson.explanation}</p>
      </Card>
      <Card>
        <p className="text-xs font-semibold uppercase text-game-primary">Real life context</p>
        <p className="mt-1 text-sm text-slate-700">{lesson.realLifeContext}</p>
      </Card>
    </article>
  );
}
