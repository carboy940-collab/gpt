import { User, UserProfile } from '@/types/user';

export function createDemoUser(): User {
  return {
    id: 'demo-user',
    mode: 'demo',
    createdAt: new Date().toISOString()
  };
}

export function createBaseProfile(): UserProfile {
  return {
    userId: 'demo-user',
    displayName: 'Player One',
    gradeLevel: '9',
    onboardingComplete: false,
    currentModuleId: 'module-1',
    currentLessonId: 'lesson-1'
  };
}
