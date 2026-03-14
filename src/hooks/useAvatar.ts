'use client';

import { useEffect, useState } from 'react';
import { Avatar } from '@/types/avatar';
import { useAppRepository } from './useAppRepository';
import { DEMO_USER_ID } from '@/lib/constants/demo-user';

const fallbackAvatar: Avatar = {
  userId: DEMO_USER_ID,
  skinTone: 'medium',
  hairStyle: 'short',
  outfit: 'hoodie',
  accessory: 'none'
};

export function useAvatar() {
  const repository = useAppRepository();
  const [avatar, setAvatarState] = useState<Avatar>(fallbackAvatar);

  useEffect(() => {
    setAvatarState(repository.getAvatar() ?? fallbackAvatar);
  }, [repository]);

  const setAvatar = (next: Avatar) => {
    setAvatarState(next);
    repository.saveAvatar(next);
  };

  return [avatar, setAvatar] as const;
}
