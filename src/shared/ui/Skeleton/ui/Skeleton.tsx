import React from 'react';
import cn from 'classnames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
}

const Skeleton = (props: SkeletonProps) => {
  const { width, height, borderRadius, className } = props;

  return <div className={cn(cls.skeleton, className)} style={{
    width,
    height,
    borderRadius,
  }} />;
};

export default Skeleton;
