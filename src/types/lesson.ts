import { LifeStatsDelta } from './stats';

export interface Module {
  id: string;
  title: string;
  description: string;
  lessonIds: string[];
}

export interface LessonQuickCheck {
  prompt: string;
  choices: string[];
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  hook: string;
  explanation: string;
  realLifeContext: string;
  steps: string[];
  quickCheck: LessonQuickCheck;
  completionSummary: string;
  linkedScenarioId?: string;
  estimatedMinutes: number;
  completionXp: number;
  completionCoins: number;
  statChanges: LifeStatsDelta;
}
