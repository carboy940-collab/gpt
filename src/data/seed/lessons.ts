import { Lesson } from '@/types/lesson';

export const lessons: Lesson[] = [
  {
    id: 'lesson-1',
    moduleId: 'module-1',
    title: 'Interview Timing Basics',
    hook: 'First impressions happen before you even say hello.',
    explanation:
      'For most interviews, arriving about 5 minutes early is the sweet spot. It shows reliability and respect for the interviewer\'s time.',
    realLifeContext:
      'If you show up late, people may assume you\'ll be late to shifts too. If you show up super early, it can accidentally create pressure for the team.',
    linkedScenarioId: 'scenario-1',
    estimatedMinutes: 2
  }
];
