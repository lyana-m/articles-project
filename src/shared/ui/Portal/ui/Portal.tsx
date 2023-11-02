import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

interface PortalProps {
  node?: HTMLElement;
  children: ReactNode;
}

const Portal = (props: PortalProps) => {
  const { children, node = document.body } = props;

  return createPortal(<>{children}</>, node) as JSX.Element;
};
export default Portal;
