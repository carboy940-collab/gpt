import { LifeStats } from '@/types/stats';

export function LifeStatsPanel({ stats }: { stats: LifeStats }) {
  const entries = [
    ['Money', stats.money],
    ['Savings', stats.savings],
    ['Stress', stats.stress],
    ['Freedom', stats.freedom]
  ] as const;

  return (
    <div className="grid grid-cols-2 gap-2">
      {entries.map(([label, value]) => (
        <div className="rounded-xl bg-white p-3 border border-slate-100" key={label}>
          <p className="text-xs uppercase text-slate-500">{label}</p>
          <p className="text-lg font-bold text-slate-900">{value}</p>
        </div>
      ))}
    </div>
  );
}
