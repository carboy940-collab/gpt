import { PropsWithChildren } from 'react';

export function Card({ children }: PropsWithChildren) {
  return <section className="rounded-2xl bg-game-card p-4 shadow-sm border border-slate-100">{children}</section>;
}
