import { DEMO_USER_ID } from '@/lib/constants/demo-user';
import { User, UserProfile } from '@/types/user';

export function createDemoUser(): User {
  return {
    id: DEMO_USER_ID,
    mode: 'demo',
    createdAt: new Date().toISOString()
  };
}

export function createBaseProfile(userId: string): UserProfile {
  return {
    userId,
    displayName: 'Player One',
    gradeLevel: '9',
    onboardingComplete: false,
    currentModuleId: 'module-1',
    currentLessonId: 'lesson-1'
  };
}
