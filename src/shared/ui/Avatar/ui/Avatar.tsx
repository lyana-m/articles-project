import React, { useMemo } from 'react';
import cn from 'classnames';
import cls from './Avatar.module.scss';
import NoAvatar from '../../../assets/img/no-avatar.png';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
}

const Avatar = (props: AvatarProps) => {
  const { src = NoAvatar, alt, size = 100, className } = props;
  const classes = cn(cls.avatar, className);

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
