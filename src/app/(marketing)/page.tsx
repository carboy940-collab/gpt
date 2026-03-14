import Link from 'next/link';
import { MobileShell } from '@/components/layout/mobile-shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function MarketingPage() {
  return (
    <MobileShell>
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-wide text-game-primary">Now What?</p>
        <h1 className="text-3xl font-black leading-tight">Level up your first job skills in bite-size missions.</h1>
        <Card>
          <p className="text-sm text-slate-700">
            Learn real life moves, make choices, and earn XP while building your paycheck brain.
          </p>
        </Card>
        <Link href="/sign-in">
          <Button>Start Phase 1 Demo</Button>
        </Link>
      </div>
    </MobileShell>
  );
}
