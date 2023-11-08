import { useCallback, useEffect, useRef, useState } from 'react';

const DEFAULT_ANIMATION_DELAY = 300;

interface UseModalParams {
  isOpen: boolean;
  onClose?: () => void;
  animationDelay?: number;
}

export const useModal = ({ isOpen, onClose, animationDelay = DEFAULT_ANIMATION_DELAY }: UseModalParams) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const timerId = useRef<ReturnType<typeof setTimeout>>();

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerId.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [onClose, animationDelay]);

  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      clearTimeout(timerId.current);
    };
  }, [handleEsc, isOpen]);

  return { isClosing, isMounted, close };
};
