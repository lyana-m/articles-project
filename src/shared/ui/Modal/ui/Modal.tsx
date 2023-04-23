import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { type PropsWithChildren, useEffect, useRef, useState, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Portal from '../../Portal/ui/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  className?: string;
  onClose?: () => void;
}

const MODAL_CLOSING_DELAY = 300;

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const [isClosing, setIsClosing] = useState(false);
  const { isOpen, className, children, onClose } = props;

  const { theme } = useTheme();

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
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      clearTimeout(timerId.current);
    };
  }, [handleEsc, isOpen]);

  return (
    <Portal>
      <div className={classNames('modal', mods, [className, theme])}>
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
