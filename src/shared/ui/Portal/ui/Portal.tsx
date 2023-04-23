import type { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  node?: HTMLElement;
}

const Portal = (props: PropsWithChildren<PortalProps>) => {
  const { children, node = document.body } = props;

  return createPortal(children, node);
};
export default Portal;
