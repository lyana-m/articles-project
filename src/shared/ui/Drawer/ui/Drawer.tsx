import React, { ReactNode, useEffect } from 'react';
import cn from 'classnames';
import cls from './Drawer.module.scss';
import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal';
import { AnimationContextValues, AnimationProvider, useAsyncAnimation } from '@/shared/lib/AnimationProvider';

interface DrawerProps {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
}

const height = window.innerHeight - 100;

const Drawer = (props: DrawerProps) => {
  const { children, isOpen, className, onClose } = props;
  const { Spring, Gesture } = useAsyncAnimation() as Required<AnimationContextValues>;

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const openDrawer = () => {
    api.start({ y: 0, immediate: false });
  };

  const closeDrawer = (velocity = 0) => {
    api.start({ y: height, immediate: false, config: { ...Spring.config.stiff, velocity }, onResolve: onClose });
  };

  const bind = Gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          closeDrawer();
        } else {
          openDrawer();
        }
      } else api.start({ y: my, immediate: true });
    },
    { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
  );

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={cn(cls.drawer, className)}>
        <Overlay onClick={() => closeDrawer()} />
        <Spring.a.div style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }} {...bind()} className={cls.content}>
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
};

const DrawerWrapper = (props: DrawerProps) => {
  const { isLoaded } = useAsyncAnimation();

  if (!isLoaded) {
    return null;
  }

  return <Drawer {...props} />;
};

const DrawerProvider = (props: DrawerProps) => {
  return (
    <AnimationProvider>
      <DrawerWrapper {...props} />
    </AnimationProvider>
  );
};

export default DrawerProvider;
