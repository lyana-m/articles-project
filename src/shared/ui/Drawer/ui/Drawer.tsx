import React, { ReactNode } from 'react';
import cn from 'classnames';
import cls from './Drawer.module.scss';
import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal';
import { useModal } from 'shared/hooks/useModal/useModal';

interface DrawerProps {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
}

const Drawer = (props: DrawerProps) => {
  const { children, isOpen, className, onClose } = props;

  const { isClosing, close } = useModal({ isOpen, onClose });

  return (
    <Portal>
      <div className={cn(cls.drawer, className, { [cls.opened]: isOpen, [cls.closing]: isClosing })}>
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};

export default Drawer;
