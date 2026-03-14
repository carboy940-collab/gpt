import { Scenario } from '@/types/scenario';

export const scenarios: Scenario[] = [
  {
    id: 'scenario-1',
    lessonId: 'lesson-1',
    prompt: 'You got your first interview. It starts at 3:00 PM. When should you arrive?',
    choices: [
      {
        id: 'late',
        label: '3:05 PM',
        isCorrect: false,
        feedback: 'You\'re technically there, but being late can hurt trust before the interview even starts.',
        xpReward: 10,
        coinReward: 3,
        statChanges: { stress: 4, freedom: -1 }
      },
      {
        id: 'best',
        label: '2:55 PM',
        isCorrect: true,
        feedback: 'Perfect timing. You look prepared, reliable, and chill.',
        xpReward: 25,
        coinReward: 10,
        statChanges: { freedom: 3, stress: -2, money: 2, savings: 1 }
      },
      {
        id: 'too-early',
        label: '2:45 PM',
        isCorrect: false,
        feedback: 'Prepared is great, but 15 minutes early can feel awkward for many casual interviews.',
        xpReward: 12,
        coinReward: 4,
        statChanges: { stress: 1, freedom: -1 }
      }
    ]
  }
];
