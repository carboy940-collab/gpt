import { LifeStatsDelta } from './stats';

export interface ScenarioChoice {
  id: string;
  label: string;
  isCorrect: boolean;
  feedback: string;
  xpReward: number;
  coinReward: number;
  statChanges: LifeStatsDelta;
}

export interface Scenario {
  id: string;
  lessonId: string;
  prompt: string;
  choices: ScenarioChoice[];
}
