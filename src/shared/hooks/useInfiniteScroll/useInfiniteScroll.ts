import { MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollParams {
  callback?: () => void;
  targetRef: MutableRefObject<HTMLElement | null>;
  containerRef: MutableRefObject<HTMLElement | null>;
}

export const useInfiniteScroll = (params: UseInfiniteScrollParams) => {
  const { targetRef, containerRef, callback } = params;

  const targetEl = targetRef.current;
  const containerEl = containerRef.current;

  useEffect(() => {
    if (targetEl && containerEl && callback) {
      const options = {
        root: containerEl,
        rootMargin: '0px',
        threshold: 1.0,
      };

      const cb = (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      };

      const observer = new IntersectionObserver(cb, options);

      observer.observe(targetEl);

      return () => {
        if (observer) observer.unobserve(targetEl);
      };
    }
  }, [callback, targetEl, containerEl]);
};
