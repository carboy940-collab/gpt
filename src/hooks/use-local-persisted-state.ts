'use client';

import { useEffect, useState } from 'react';
import { readFromStorage, writeToStorage } from '@/lib/utils/storage';

export function useLocalPersistedState<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    setValue(readFromStorage<T>(key, initialValue));
  }, [initialValue, key]);

  useEffect(() => {
    writeToStorage(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}
