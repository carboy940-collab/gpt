'use client';

import { useState } from 'react';
import { ScenarioChoice } from '@/types/scenario';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ScenarioEngineProps {
  prompt: string;
  choices: ScenarioChoice[];
  onComplete: (choice: ScenarioChoice) => void;
}

export function ScenarioEngine({ prompt, choices, onComplete }: ScenarioEngineProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const activeChoice = choices.find((choice) => choice.id === selected);

  return (
    <div className="space-y-4">
      <Card>
        <h1 className="text-lg font-bold text-slate-900">Scenario Challenge</h1>
        <p className="mt-2 text-sm text-slate-700">{prompt}</p>
      </Card>
      <div className="space-y-2">
        {choices.map((choice) => (
          <Button key={choice.id} variant={selected === choice.id ? 'primary' : 'secondary'} onClick={() => setSelected(choice.id)}>
            {choice.label}
          </Button>
        ))}
      </div>
      <Button disabled={!activeChoice} onClick={() => activeChoice && onComplete(activeChoice)}>
        Lock Answer
      </Button>
    </div>
  );
}
