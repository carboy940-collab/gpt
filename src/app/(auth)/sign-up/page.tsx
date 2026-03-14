import Link from 'next/link';
import { MobileShell } from '@/components/layout/mobile-shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SignUpPage() {
  return (
    <MobileShell>
      <div className="space-y-4">
        <h1 className="text-2xl font-black">Sign up (Phase 1)</h1>
        <Card>
          <p className="text-sm text-slate-700">Supabase auth wiring is scaffolded. For this vertical slice, jump into demo mode in one tap.</p>
        </Card>
        <Link href="/sign-in">
          <Button>Back to demo entry</Button>
        </Link>
      </div>
    </MobileShell>
  );
}
