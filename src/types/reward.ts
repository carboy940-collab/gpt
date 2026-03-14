export interface RewardTransaction {
  id: string;
  userId: string;
  source: 'lesson' | 'scenario' | 'badge';
  sourceId: string;
  xp: number;
  coins: number;
  createdAt: string;
}
