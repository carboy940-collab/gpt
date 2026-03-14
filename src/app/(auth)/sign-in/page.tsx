'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MobileShell } from '@/components/layout/mobile-shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { createBaseProfile, createDemoUser } from '@/features/auth/session';
import { baseProgress, baseStats } from '@/services/progress-service';
import { Avatar } from '@/types/avatar';
import { getAppRepository } from '@/lib/persistence';

export default function SignInPage() {
  const router = useRouter();

  const startDemo = () => {
    const repository = getAppRepository();
    const user = createDemoUser();

    const starterAvatar: Avatar = {
      userId: user.id,
      skinTone: 'medium',
      hairStyle: 'short',
      outfit: 'hoodie',
      accessory: 'none'
    };

    repository.initializeDemoData(user, createBaseProfile(user.id), starterAvatar, {
      ...baseProgress,
      userId: user.id
    }, baseStats);

    router.push('/avatar');
  };

  return (
    <MobileShell>
      <div className="space-y-4">
        <h1 className="text-2xl font-black">Welcome 👋</h1>
        <Card>
          <p className="text-sm text-slate-700">Choose demo mode for instant play, or sign in later with Supabase auth.</p>
        </Card>
        <Button onClick={startDemo}>Continue in Demo Mode</Button>
        <Link href="/sign-up">
          <Button variant="secondary">I want an account</Button>
        </Link>
      </div>
    </MobileShell>
  );
}
