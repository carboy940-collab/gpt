import { Lesson } from '@/types/lesson';

export const lessons: Lesson[] = [
  {
    id: 'lesson-1',
    moduleId: 'module-1',
    title: 'Why Get a Job?',
    description: 'Figure out why a first job can level up life beyond just cash.',
    hook: 'Money is nice. So is freedom. Also snacks cost money.',
    explanation: 'A first job can build money, confidence, and independence at the same time.',
    realLifeContext: 'You are not picking a forever career here. You are building real-world reps.',
    steps: [
      'Why teens work: money, independence, helping family, and experience.',
      'A job gives you more than cash: confidence and proof you can handle responsibility.',
      'First jobs are practice rounds, not lifetime contracts.',
      'Time tradeoffs are real: work has to fit school, sports, family, and sleep.',
      'Pick your main motivation so your choices stay focused.'
    ],
    quickCheck: {
      prompt: 'What is your biggest reason for wanting a job right now?',
      choices: ['Money', 'Independence', 'Helping family', 'Experience', 'Saving for something fun']
    },
    completionSummary: 'You now know what you want from a job, which makes every next step easier.',
    linkedScenarioId: 'scenario-job-motivation',
    estimatedMinutes: 3,
    completionXp: 12,
    completionCoins: 4,
    statChanges: { freedom: 1, stress: -1 }
  },
  {
    id: 'lesson-2',
    moduleId: 'module-1',
    title: 'What Kind of First Job Fits Me?',
    description: 'Match your energy and schedule to jobs that are actually sustainable.',
    hook: 'Not every job is for every person, and that is a good thing.',
    explanation: 'Good fit beats random panic applying every time.',
    realLifeContext: 'When a job matches your vibe and schedule, you are way more likely to keep it.',
    steps: [
      'Notice what drains you vs what gives you energy.',
      'Choose your setting: indoors, outdoors, active, or steady.',
      'People-heavy jobs and task-heavy jobs are both valid.',
      'Your school and life schedule matter as much as pay.',
      'Build your quick job-fit profile before you apply.'
    ],
    quickCheck: {
      prompt: 'Which work style sounds closest to you?',
      choices: ['Fast-paced + people', 'Steady + task-focused', 'Active + behind the scenes', 'Flexible + mixed tasks']
    },
    completionSummary: 'You built your job-fit lens. That saves time and avoids bad matches.',
    linkedScenarioId: 'scenario-job-fit-choice',
    estimatedMinutes: 3,
    completionXp: 14,
    completionCoins: 5,
    statChanges: { freedom: 1, stress: -1 }
  },
  {
    id: 'lesson-3',
    moduleId: 'module-1',
    title: 'How to Read a Job Post',
    description: 'Decode postings fast so you can spot good opportunities and red flags.',
    hook: 'Job posts are half information and half decoding exercise.',
    explanation: 'Focus on hours, pay, requirements, and transportation reality first.',
    realLifeContext: 'A job that looks cool online can still be impossible with your schedule or commute.',
    steps: [
      'Find the non-negotiables first: age, location, and schedule.',
      'Understand required vs preferred so you do not self-reject too fast.',
      'Check pay and hour ranges before getting excited.',
      'Spot vague red flags like “must always be available.”',
      'Look for green flags like clear training and expectations.'
    ],
    quickCheck: {
      prompt: 'What detail should you verify first?',
      choices: ['Dress code', 'Location + transportation', 'Brand color', 'Manager name']
    },
    completionSummary: 'You can now scan job posts like a pro instead of guessing.',
    linkedScenarioId: 'scenario-job-post-evaluation',
    estimatedMinutes: 3,
    completionXp: 14,
    completionCoins: 5,
    statChanges: { savings: 1, stress: -1 }
  },
  {
    id: 'lesson-4',
    moduleId: 'module-1',
    title: 'Build a Simple Resume',
    description: 'Create a clean first resume without pretending you invented electricity.',
    hook: 'No, you do not need to be CEO of anything.',
    explanation: 'Honest and clear beats overhyped every time.',
    realLifeContext: 'Hiring managers love simple resumes they can read in 15 seconds.',
    steps: [
      'Use basic sections: contact info, school, activities, skills.',
      'Experience is bigger than paid jobs: volunteering and team projects count.',
      'Choose skills that are believable and specific.',
      'Keep formatting clean and easy to scan.',
      'Leave out long paragraphs and fake claims.'
    ],
    quickCheck: {
      prompt: 'Which bullet sounds strongest and most honest?',
      choices: ['Hard worker', 'Managed school fundraiser signup table for 120 students', 'I am amazing at everything', 'Future CEO']
    },
    completionSummary: 'Your resume is now readable, real, and ready to apply with.',
    linkedScenarioId: 'scenario-resume-cleanup',
    estimatedMinutes: 4,
    completionXp: 16,
    completionCoins: 6,
    statChanges: { freedom: 1, stress: -1 }
  },
  {
    id: 'lesson-5',
    moduleId: 'module-1',
    title: 'Applying Without Doing Weird Stuff',
    description: 'Learn the normal application moves that make you look reliable.',
    hook: 'There are normal application mistakes, and then there is chaos.',
    explanation: 'Applying carefully once beats panic-submitting five messy applications.',
    realLifeContext: 'A clean email and honest availability can beat a flashy but sloppy application.',
    steps: [
      'Read instructions before tapping apply.',
      'Use contact info that sounds normal and professional.',
      'Be honest about availability so you can actually keep the job.',
      'Proofread before submitting.',
      'Follow up politely, not repeatedly every two hours.'
    ],
    quickCheck: {
      prompt: 'What is the best move?',
      choices: ['Apply instantly with typos', 'Use a decent email and review answers once', 'Copy-paste nonsense to 30 places', 'Guess your schedule']
    },
    completionSummary: 'You now apply like a calm professional, not a chaos speedrunner.',
    linkedScenarioId: 'scenario-application-decision',
    estimatedMinutes: 3,
    completionXp: 16,
    completionCoins: 6,
    statChanges: { savings: 1, stress: -1 }
  },
  {
    id: 'lesson-6',
    moduleId: 'module-1',
    title: 'Interview Basics',
    description: 'Handle interviews with preparation, clear answers, and normal human energy.',
    hook: 'An interview is mostly proving you are prepared, normal, and reliable.',
    explanation: 'You do not need perfect lines, just clear examples and good timing.',
    realLifeContext: 'Interviewers are mostly checking if they can trust you to show up and learn.',
    steps: [
      'Know what interviewers are actually evaluating.',
      'Plan your arrival time and outfit the day before.',
      'Use short answer structure: situation, action, result.',
      'Body language counts: eye contact and calm voice help.',
      'Ask one smart question to show interest.'
    ],
    quickCheck: {
      prompt: 'Best answer to “Why should we hire you?”',
      choices: ['I need money fast', 'I am reliable, learn quickly, and can work the posted schedule', 'My mom said I should be here', 'No clue']
    },
    completionSummary: 'You have a simple interview game plan. That already puts you ahead.',
    linkedScenarioId: 'scenario-interview-response',
    estimatedMinutes: 4,
    completionXp: 18,
    completionCoins: 7,
    statChanges: { freedom: 2, stress: -1 }
  },
  {
    id: 'lesson-7',
    moduleId: 'module-1',
    title: 'First Day Expectations',
    description: 'Show up ready, learn fast, and recover from mistakes without panic.',
    hook: 'Nobody expects perfection. They do expect you to act like you belong there.',
    explanation: 'Early arrival, attention, and questions beat fake confidence.',
    realLifeContext: 'First day nerves are normal. Your attitude matters more than being flawless.',
    steps: [
      'Bring what you need and arrive a little early.',
      'Listen first so you do not miss key routines.',
      'Ask questions when you are unsure instead of guessing badly.',
      'Keep your phone away unless you are on break.',
      'When you make a mistake, own it and fix it.'
    ],
    quickCheck: {
      prompt: 'If you are confused on a task, what is best?',
      choices: ['Pretend and hope', 'Ask a clear question and write down the answer', 'Ignore it', 'Blame the training']
    },
    completionSummary: 'You now know how to look dependable on day one.',
    linkedScenarioId: 'scenario-first-day-choice',
    estimatedMinutes: 3,
    completionXp: 16,
    completionCoins: 6,
    statChanges: { freedom: 1, stress: -1 }
  },
  {
    id: 'lesson-8',
    moduleId: 'module-1',
    title: 'Hours, Pay, and Pay Periods',
    description: 'Understand when and how your work turns into actual dollars.',
    hook: 'Working is one thing. Understanding how money shows up is another.',
    explanation: 'Hourly rate × hours is step one. Pay periods explain the timing delay.',
    realLifeContext: 'If you track hours weekly, paycheck surprises drop a lot.',
    steps: [
      'Calculate gross pay with hours × hourly rate.',
      'Learn the difference between weekly and biweekly pay periods.',
      'Understand why payday can happen after your work week ends.',
      'Keep your own hour log so you can verify checks.',
      'Estimate expected pay before payday hits.'
    ],
    quickCheck: {
      prompt: 'You worked 12 hours at $15/hour. Estimated gross pay?',
      choices: ['$120', '$180', '$220', '$75']
    },
    completionSummary: 'You can now estimate pay and timing without guessing.',
    estimatedMinutes: 3,
    completionXp: 16,
    completionCoins: 6,
    statChanges: { savings: 1, stress: -1 }
  },
  {
    id: 'lesson-9',
    moduleId: 'module-1',
    title: 'How to Read a Paycheck',
    description: 'Decode gross pay, net pay, and deductions without panic.',
    hook: 'Your paycheck is not stealing from you, even if it feels dramatic.',
    explanation: 'Gross is before deductions; net is what you actually keep.',
    realLifeContext: 'Reading your paycheck helps you catch mistakes early and trust your numbers.',
    steps: [
      'Find gross pay and net pay first.',
      'Check common deductions like taxes and benefits.',
      'Verify your hours and hourly rate are correct.',
      'Understand why net is smaller than gross.',
      'Flag mismatches quickly and ask payroll politely.'
    ],
    quickCheck: {
      prompt: 'Which number is your take-home pay?',
      choices: ['Gross pay', 'Net pay', 'Tax total', 'Hourly rate']
    },
    completionSummary: 'You can read your paycheck and know what each number means.',
    linkedScenarioId: 'scenario-paycheck-interpretation',
    estimatedMinutes: 4,
    completionXp: 18,
    completionCoins: 7,
    statChanges: { savings: 2, freedom: 1 }
  },
  {
    id: 'lesson-10',
    moduleId: 'module-1',
    title: 'Your First Basic Budget',
    description: 'Build a simple spending plan so your paycheck does not vanish instantly.',
    hook: 'If all your money disappears instantly, that is called a learning experience.',
    explanation: 'Budgeting is giving every dollar a job, not banning fun forever.',
    realLifeContext: 'Even small savings habits can buy future freedom fast.',
    steps: [
      'List your regular needs and likely wants.',
      'Try a basic split: needs, wants, savings, goal money.',
      'Start tiny savings anyway; consistency beats perfect.',
      'Keep fun money, just set a cap before swiping.',
      'Review and adjust after each paycheck.'
    ],
    quickCheck: {
      prompt: 'Best first budget move for a $200 paycheck?',
      choices: ['Spend all on day one', 'Set a simple split for needs, wants, and savings', 'Ignore tracking', 'Loan all to your friend']
    },
    completionSummary: 'You built your first real budget. That is a big life-skill unlock.',
    linkedScenarioId: 'scenario-budget-tradeoff',
    estimatedMinutes: 4,
    completionXp: 20,
    completionCoins: 8,
    statChanges: { savings: 2, freedom: 1 }
  }
];
