import { Avatar } from '@/types/avatar';

interface AvatarPreviewProps {
  avatar: Avatar;
}

export function AvatarPreview({ avatar }: AvatarPreviewProps) {
  return (
    <div className="rounded-2xl bg-white p-4 text-center border border-slate-100">
      <p className="text-5xl" aria-hidden>
        {avatar.accessory === 'headphones' ? '🎧' : avatar.accessory === 'glasses' ? '😎' : '🙂'}
      </p>
      <p className="mt-2 text-sm text-slate-600">{avatar.hairStyle} hair • {avatar.outfit} fit • {avatar.skinTone} tone</p>
    </div>
  );
}
