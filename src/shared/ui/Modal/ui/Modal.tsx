import { type PropsWithChildren } from 'react';
import cn from 'classnames';
import Portal from '../../Portal/ui/Portal';
import cls from './Modal.module.scss';
import { Overlay } from '../../Overlay';
import { useModal } from 'shared/hooks/useModal/useModal';

interface ModalProps {
  isOpen: boolean;
  className?: string;
  lazy?: boolean;
  onClose?: () => void;
}

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { isOpen, className, children, lazy, onClose } = props;

  const { isClosing, isMounted, close } = useModal({ isOpen, onClose });

  const mods = {
    [cls.open]: isOpen,
    [cls.closing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={cn(cls.modal, mods, className)}>
        <Overlay className={cls.overlay} onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
export default Modal;
