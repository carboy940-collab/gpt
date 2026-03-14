'use client';

import { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { MobileShell } from '@/components/layout/mobile-shell';
import { ScenarioEngine } from '@/components/scenarios/scenario-engine';
import { scenarioService } from '@/services/scenario-service';
import { Card } from '@/components/ui/card';
import { completeScenario } from '@/services/scenario-completion-service';
import { getAppRepository } from '@/lib/persistence';

export default function ScenarioPage({ params }: { params: Promise<{ scenarioId: string }> }) {
  const { scenarioId } = use(params);
  const scenario = scenarioService.getById(scenarioId);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!scenario) {
    return (
      <MobileShell>
        <Card>Scenario not found.</Card>
      </MobileShell>
    );
  }

  return (
    <MobileShell>
      <div className="space-y-4">
        {error ? <Card>{error}</Card> : null}
        {isSubmitting ? <Card>Saving your choice...</Card> : null}
        <ScenarioEngine
          prompt={scenario.prompt}
          choices={scenario.choices}
          onComplete={(choice) => {
            if (isSubmitting) return;

            const repository = getAppRepository();
            const session = repository.getSession();

            if (!session.currentUser) {
              router.push('/sign-in');
              return;
            }

            try {
              setIsSubmitting(true);
              setError(null);

              completeScenario(repository, {
                userId: session.currentUser.id,
                scenarioId: scenario.id,
                choiceId: choice.id
              });

              router.push('/feedback');
            } catch {
              setError('Could not save scenario result. Please try again.');
              setIsSubmitting(false);
            }
          }}
        />
      </div>
    </MobileShell>
  );
}
