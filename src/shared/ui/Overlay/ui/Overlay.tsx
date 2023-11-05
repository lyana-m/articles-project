import React from 'react';
import cn from 'classnames';
import cls from './Overlay.module.scss';

interface OverlayProps {
  onClick?: () => void;
  className?: string;
}

const Overlay = (props: OverlayProps) => {
  const { className, onClick } = props;

  return <div className={cn(cls.overlay, className)} onClick={onClick} />;
};

export default Overlay;
