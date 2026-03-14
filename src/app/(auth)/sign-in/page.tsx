'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MobileShell } from '@/components/layout/mobile-shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { storageKeys } from '@/lib/constants/storage-keys';
import { writeToStorage } from '@/lib/utils/storage';
import { createBaseProfile, createDemoUser } from '@/features/auth/session';
import { baseProgress, baseStats } from '@/services/progress-service';
import { Avatar } from '@/types/avatar';

const starterAvatar: Avatar = {
  userId: 'demo-user',
  skinTone: 'medium',
  hairStyle: 'short',
  outfit: 'hoodie',
  accessory: 'none'
};

export default function SignInPage() {
  const router = useRouter();

  const startDemo = () => {
    writeToStorage(storageKeys.user, createDemoUser());
    writeToStorage(storageKeys.profile, createBaseProfile());
    writeToStorage(storageKeys.avatar, starterAvatar);
    writeToStorage(storageKeys.progress, baseProgress);
    writeToStorage(storageKeys.stats, baseStats);
    writeToStorage(storageKeys.rewards, []);
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
