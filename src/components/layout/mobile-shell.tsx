import { PropsWithChildren } from 'react';

export function MobileShell({ children }: PropsWithChildren) {
  return <main className="mx-auto min-h-screen w-full max-w-md bg-game-bg px-4 py-6">{children}</main>;
}
