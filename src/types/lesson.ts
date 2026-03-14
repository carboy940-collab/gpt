export interface Module {
  id: string;
  title: string;
  description: string;
  lessonIds: string[];
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  hook: string;
  explanation: string;
  realLifeContext: string;
  linkedScenarioId: string;
  estimatedMinutes: number;
}
