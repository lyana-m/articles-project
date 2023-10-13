import React, { ReactNode, useRef } from 'react';
import cn from 'classnames';
import cls from './Page.module.scss';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll/useInfiniteScroll';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

const Page = (props: PageProps) => {
  const { children, className, onScrollEnd } = props;

  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useInfiniteScroll({ targetRef, containerRef, callback: onScrollEnd });

  return (
    <div className={cn(cls.page, className)} ref={containerRef}>
      {children}
      <div ref={targetRef} />
    </div>
  );
};

export default Page;
