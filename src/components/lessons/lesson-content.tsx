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
      <Card>
        <p className="text-xs font-semibold uppercase text-game-primary">Micro steps</p>
        <ul className="mt-2 space-y-2 text-sm text-slate-700">
          {lesson.steps.map((step) => (
            <li key={step}>• {step}</li>
          ))}
        </ul>
      </Card>
      <Card>
        <p className="text-xs font-semibold uppercase text-game-primary">Quick check</p>
        <p className="mt-1 text-sm font-medium">{lesson.quickCheck.prompt}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {lesson.quickCheck.choices.map((choice) => (
            <span key={choice} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
              {choice}
            </span>
          ))}
        </div>
      </Card>
      <Card>
        <p className="text-xs font-semibold uppercase text-game-primary">Completion summary</p>
        <p className="mt-1 text-sm text-slate-700">{lesson.completionSummary}</p>
      </Card>
    </article>
  );
}
