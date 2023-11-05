import React, { ReactNode, useCallback, useRef, useState } from 'react';
import cn from 'classnames';
import cls from './Drawer.module.scss';
import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal';

interface DrawerProps {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
}

const MODAL_CLOSING_DELAY = 300;

const Drawer = (props: DrawerProps) => {
  const { children, isOpen, className, onClose } = props;

  const timerId = useRef<ReturnType<typeof setTimeout>>();

  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerId.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, MODAL_CLOSING_DELAY);
    }
  }, [onClose]);

  return (
    <Portal>
      <div className={cn(cls.drawer, className, { [cls.opened]: isOpen, [cls.closing]: isClosing })}>
        <Overlay onClick={handleClose} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};

export default Drawer;
