import { type PropsWithChildren, useEffect, useRef, useState, useCallback } from 'react';
import cn from 'classnames';
import Portal from '../../Portal/ui/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  className?: string;
  lazy?: boolean;
  onClose?: () => void;
}

const MODAL_CLOSING_DELAY = 300;

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { isOpen, className, children, lazy, onClose } = props;

  const timerId = useRef<ReturnType<typeof setTimeout>>();

  const mods = {
    [cls.open]: isOpen,
    [cls.closing]: isClosing,
  };

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerId.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, MODAL_CLOSING_DELAY);
    }
  }, [onClose]);

  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
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

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={cn(cls.modal, mods, className)}>
        <div className={cls.overlay} onClick={handleClose}>
          <div className={cls.content} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
export default Modal;
