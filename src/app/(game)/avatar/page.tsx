'use client';

import { useRouter } from 'next/navigation';
import { MobileShell } from '@/components/layout/mobile-shell';
import { AvatarPreview } from '@/components/avatar/avatar-preview';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/types/avatar';
import { useAvatar } from '@/hooks/useAvatar';

export default function AvatarPage() {
  const router = useRouter();
  const [avatar, setAvatar] = useAvatar();

  const updateAvatar = <K extends keyof Avatar>(key: K, value: Avatar[K]) => {
    setAvatar({ ...avatar, [key]: value });
  };

  const continueFlow = () => {
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
