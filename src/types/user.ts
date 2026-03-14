export type AuthMode = 'demo' | 'authenticated';

export interface User {
  id: string;
  email?: string;
  mode: AuthMode;
  createdAt: string;
}

export interface UserProfile {
  userId: string;
  displayName: string;
  gradeLevel: string;
  onboardingComplete: boolean;
  currentModuleId: string;
  currentLessonId: string;
}
