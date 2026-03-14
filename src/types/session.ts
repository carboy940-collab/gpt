import { User } from './user';

export interface SessionState {
  currentUser: User | null;
}
