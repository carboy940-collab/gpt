import { Scenario } from '@/types/scenario';

export const scenarios: Scenario[] = [
  {
    id: 'scenario-job-motivation',
    lessonId: 'lesson-1',
    prompt: 'You can only pick one reason to guide your job search this month. What should lead your decisions?',
    choices: [
      { id: 'random', label: 'Apply anywhere randomly and hope for the best', isCorrect: false, feedback: 'Random can work, but a clear reason helps you choose smarter roles.', xpReward: 11, coinReward: 3, statChanges: { stress: 1 } },
      { id: 'clear-goal', label: 'Pick a clear goal like savings, independence, or experience', isCorrect: true, feedback: 'Great move. A clear goal keeps you focused when options get messy.', xpReward: 20, coinReward: 8, statChanges: { freedom: 2, stress: -1 } },
      { id: 'only-hype', label: 'Pick the most hyped job title, no matter the fit', isCorrect: false, feedback: 'Hype fades fast if schedule and environment are a bad match.', xpReward: 12, coinReward: 4, statChanges: { stress: 1, freedom: -1 } }
    ]
  },
  {
    id: 'scenario-job-fit-choice',
    lessonId: 'lesson-2',
    prompt: 'You can apply to one role this week. Which option best fits a steady after-school schedule and lower social drain?',
    choices: [
      { id: 'fast-food-counter', label: 'Busy fast food counter job', isCorrect: false, feedback: 'Great energy if you like constant people interaction, but it can be intense after long school days.', xpReward: 14, coinReward: 5, statChanges: { stress: 1, freedom: -1 } },
      { id: 'grocery-stocker', label: 'Grocery stocker', isCorrect: true, feedback: 'Solid fit for task-focused work with predictable routines. Fit beats hype.', xpReward: 22, coinReward: 9, statChanges: { stress: -1, freedom: 2, savings: 1 } },
      { id: 'movie-theater', label: 'Movie theater team member', isCorrect: false, feedback: 'Can be fun, but late nights and weekend rushes can hit your schedule hard.', xpReward: 16, coinReward: 6, statChanges: { stress: 1 } },
      { id: 'rec-front-desk', label: 'Recreation front desk', isCorrect: false, feedback: 'Good role, but it is still people-heavy and often busy at peak hours.', xpReward: 16, coinReward: 6, statChanges: { freedom: 1 } }
    ]
  },
  {
    id: 'scenario-job-post-evaluation',
    lessonId: 'lesson-3',
    prompt: 'A posting says: “Must be available every evening, no transit nearby, pay listed as TBD.” What is your best move?',
    choices: [
      { id: 'apply-anyway', label: 'Apply anyway and hope details work out', isCorrect: false, feedback: 'Hope is not a schedule strategy. Missing details are a red flag.', xpReward: 12, coinReward: 4, statChanges: { stress: 2 } },
      { id: 'skip-and-find-clearer', label: 'Skip it and target clearer postings', isCorrect: true, feedback: 'Good call. Clear expectations save time and stress.', xpReward: 22, coinReward: 9, statChanges: { stress: -1, savings: 1 } },
      { id: 'ignore-location', label: 'Ignore location and figure out transit later', isCorrect: false, feedback: 'Commute pain can ruin a “good” job fast.', xpReward: 13, coinReward: 4, statChanges: { stress: 1, freedom: -1 } }
    ]
  },
  {
    id: 'scenario-resume-cleanup',
    lessonId: 'lesson-4',
    prompt: 'Which resume bullet is strongest for a first-time applicant?',
    choices: [
      { id: 'generic', label: '“Hard worker, good vibes.”', isCorrect: false, feedback: 'Nice energy, but too vague to prove anything.', xpReward: 12, coinReward: 4, statChanges: { stress: 1 } },
      { id: 'specific', label: '“Managed check-in table for school event with 100+ attendees.”', isCorrect: true, feedback: 'Specific, honest, and useful. That is resume gold.', xpReward: 24, coinReward: 10, statChanges: { freedom: 2, stress: -1 } },
      { id: 'fake', label: '“10 years management experience.”', isCorrect: false, feedback: 'Fake claims can end an application instantly.', xpReward: 10, coinReward: 3, statChanges: { stress: 2, freedom: -1 } }
    ]
  },
  {
    id: 'scenario-application-decision',
    lessonId: 'lesson-5',
    prompt: 'You are filling an application and notice a typo in your phone number. What should you do?',
    choices: [
      { id: 'submit-fast', label: 'Submit anyway before the listing closes', isCorrect: false, feedback: 'If they cannot reach you, speed does not help.', xpReward: 12, coinReward: 4, statChanges: { stress: 1 } },
      { id: 'fix-then-submit', label: 'Fix it, review once, then submit', isCorrect: true, feedback: 'Clean and reliable. This is how you look professional.', xpReward: 24, coinReward: 10, statChanges: { savings: 1, stress: -1 } },
      { id: 'use-friend-number', label: 'Use a friend’s number for now', isCorrect: false, feedback: 'That gets messy fast and looks unreliable.', xpReward: 11, coinReward: 3, statChanges: { stress: 2, freedom: -1 } }
    ]
  },
  {
    id: 'scenario-interview-response',
    lessonId: 'lesson-6',
    prompt: 'Interviewer asks: “Tell me about yourself.” What answer is strongest?',
    choices: [
      { id: 'too-random', label: '“Uhh, I play games and hate mornings.”', isCorrect: false, feedback: 'Honest but not strategic. Keep it job-relevant.', xpReward: 11, coinReward: 3, statChanges: { stress: 2 } },
      { id: 'prepared', label: '“I am reliable, learn quickly, and I can cover the shifts listed.”', isCorrect: true, feedback: 'Clear, relevant, and confident. Big win.', xpReward: 26, coinReward: 11, statChanges: { freedom: 2, stress: -2 } },
      { id: 'overshare', label: '“Long story... my sleep schedule is chaos.”', isCorrect: false, feedback: 'Keep interviews focused and short.', xpReward: 12, coinReward: 4, statChanges: { stress: 1 } }
    ]
  },
  {
    id: 'scenario-first-day-choice',
    lessonId: 'lesson-7',
    prompt: 'First day starts at 4:00 PM. Best move?',
    choices: [
      { id: 'arrive-late', label: 'Arrive at 4:05 and explain traffic', isCorrect: false, feedback: 'First-day lateness is a rough first signal.', xpReward: 10, coinReward: 3, statChanges: { stress: 2, freedom: -1 } },
      { id: 'arrive-early-and-ask', label: 'Arrive at 3:55, greet team, ask where to start', isCorrect: true, feedback: 'Perfect first-day energy: prepared and respectful.', xpReward: 24, coinReward: 10, statChanges: { stress: -1, freedom: 2 } },
      { id: 'hide-phone', label: 'Arrive on time but keep checking phone', isCorrect: false, feedback: 'Attention matters more than you think on day one.', xpReward: 12, coinReward: 4, statChanges: { stress: 1 } }
    ]
  },
  {
    id: 'scenario-paycheck-interpretation',
    lessonId: 'lesson-9',
    prompt: 'Your paycheck shows Gross: $220, Deductions: $38, Net: $182. Which number hits your bank account?',
    choices: [
      { id: 'gross', label: '$220 (gross)', isCorrect: false, feedback: 'Gross is before deductions. It is not take-home.', xpReward: 12, coinReward: 4, statChanges: { stress: 1 } },
      { id: 'net', label: '$182 (net)', isCorrect: true, feedback: 'Correct. Net pay is your take-home amount.', xpReward: 26, coinReward: 11, statChanges: { savings: 2, freedom: 1 } },
      { id: 'deductions', label: '$38 (deductions)', isCorrect: false, feedback: 'That is the amount removed, not paid to you.', xpReward: 11, coinReward: 3, statChanges: { stress: 1 } }
    ]
  },
  {
    id: 'scenario-budget-tradeoff',
    lessonId: 'lesson-10',
    prompt: 'You got $180 net pay. Best beginner split?',
    choices: [
      { id: 'all-fun', label: '$180 fun now, figure out food later', isCorrect: false, feedback: 'Fun is valid, but zero plan creates future stress fast.', xpReward: 12, coinReward: 4, statChanges: { stress: 2 } },
      { id: 'balanced-split', label: '$90 needs, $50 wants, $40 savings/goal', isCorrect: true, feedback: 'Balanced and realistic. Budgeting = freedom with receipts.', xpReward: 28, coinReward: 12, statChanges: { savings: 2, freedom: 2, stress: -1 } },
      { id: 'all-save', label: 'Save all $180 and never have fun again', isCorrect: false, feedback: 'Over-restriction usually backfires. Keep a realistic wants bucket.', xpReward: 13, coinReward: 5, statChanges: { freedom: -1 } }
    ]
  }
];
