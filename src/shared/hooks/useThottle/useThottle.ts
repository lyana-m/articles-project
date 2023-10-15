import { useCallback, useEffect, useRef } from 'react';

export const useThottle = (callback: (...args: any[]) => void, delay: number) => {
  const throttleRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(
    () => () => {
      // очищаем таймер
      clearTimeout(timerRef.current);
    },
    []
  );

  return useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      // вызываем коллбек только когда throttleRef false
      callback(...args);
      // только что вызвали коллбек, теперь надо подождать перед следующим вызовом
      // пока не истечет таймаут, мы не попадем в if
      throttleRef.current = true;

      timerRef.current = setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }
  }, [delay, callback]);
};
