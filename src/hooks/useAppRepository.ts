'use client';

import { getAppRepository } from '@/lib/persistence';

export function useAppRepository() {
  return getAppRepository();
}
