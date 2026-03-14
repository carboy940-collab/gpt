'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MobileShell } from '@/components/layout/mobile-shell';
import { AvatarPreview } from '@/components/avatar/avatar-preview';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { storageKeys } from '@/lib/constants/storage-keys';
import { readFromStorage, writeToStorage } from '@/lib/utils/storage';
import { Avatar } from '@/types/avatar';

const defaultAvatar: Avatar = {
  userId: 'demo-user',
  skinTone: 'medium',
  hairStyle: 'short',
  outfit: 'hoodie',
  accessory: 'none'
};

export default function AvatarPage() {
  const router = useRouter();
  const [avatar, setAvatar] = useState<Avatar>(() => readFromStorage(storageKeys.avatar, defaultAvatar));

  const updateAvatar = <K extends keyof Avatar>(key: K, value: Avatar[K]) => {
    setAvatar((prev) => ({ ...prev, [key]: value }));
  };

  const continueFlow = () => {
    writeToStorage(storageKeys.avatar, avatar);
    router.push('/lesson/module-1/lesson-1');
  };

  return (
    <MobileShell>
      <div className="space-y-4">
        <h1 className="text-2xl font-black">Build your avatar</h1>
        <p className="text-sm text-slate-700">Quick setup, then we drop you straight into your first mission.</p>
        <AvatarPreview avatar={avatar} />

        <Card>
          <label className="mb-2 block text-xs uppercase text-slate-500">Hair style</label>
          <select className="w-full rounded-lg border p-2" value={avatar.hairStyle} onChange={(e) => updateAvatar('hairStyle', e.target.value as Avatar['hairStyle'])}>
            <option value="short">Short</option>
            <option value="curly">Curly</option>
            <option value="braids">Braids</option>
          </select>
        </Card>

        <Card>
          <label className="mb-2 block text-xs uppercase text-slate-500">Outfit</label>
          <select className="w-full rounded-lg border p-2" value={avatar.outfit} onChange={(e) => updateAvatar('outfit', e.target.value as Avatar['outfit'])}>
            <option value="hoodie">Hoodie</option>
            <option value="blazer">Blazer</option>
            <option value="street">Street</option>
          </select>
        </Card>

        <Button onClick={continueFlow}>Start first lesson</Button>
      </div>
    </MobileShell>
  );
}
