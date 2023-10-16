import { useCallback, useRef } from 'react';

export const useDebounce = (callback: (...params: any[]) => void, delay: number) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  return useCallback((...params: any[]) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      callback(...params);
    }, delay);
  }, [delay, callback]);
};
