import React, { useMemo } from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
}

const Avatar = (props: AvatarProps) => {
  const { src, alt, size = 100, className } = props;
  const classes = classNames(cls.avatar, {}, [className]);

  const styles = useMemo(
    () => ({
      height: `${size}px`,
      width: `${size}px`,
    }),
    [size]
  );

  return <img src={src} alt={alt} style={styles} className={classes} />;
};

export default Avatar;
