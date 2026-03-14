'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Lesson } from '@/types/lesson';

interface LessonCompleteActionProps {
  lesson: Lesson;
  onComplete: (lessonId: string) => Promise<void>;
}

export function LessonCompleteAction({ lesson, onComplete }: LessonCompleteActionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (lesson.linkedScenarioId) {
    return (
      <Link href={`/scenario/${lesson.linkedScenarioId}`}>
        <Button>Start scenario challenge</Button>
      </Link>
    );
  }

  return (
    <div className="space-y-3">
      {error ? <Card>{error}</Card> : null}
      <Button
        disabled={isSubmitting}
        onClick={async () => {
          try {
            setIsSubmitting(true);
            setError(null);
            await onComplete(lesson.id);
          } catch {
            setError('Could not save lesson progress. Try again.');
            setIsSubmitting(false);
          }
        }}
      >
        {isSubmitting ? 'Saving progress...' : 'Finish lesson and continue'}
      </Button>
      <p className="text-center text-xs text-slate-500">Practice challenge for this lesson is coming next.</p>
    </div>
  );
}
