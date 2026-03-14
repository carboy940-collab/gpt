interface RewardToastProps {
  xp: number;
  coins: number;
}

export function RewardToast({ xp, coins }: RewardToastProps) {
  return (
    <div className="rounded-xl bg-game-success/15 p-3 text-sm text-emerald-800">
      <p className="font-semibold">Reward unlocked</p>
      <p>+{xp} XP • +{coins} coins</p>
    </div>
  );
}
