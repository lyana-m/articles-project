import React, { ReactNode, UIEvent, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import cls from './Page.module.scss';
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { uiSliceActions } from '@/features/UI';
import { useAppSelector } from '@/shared/hooks/useAppSelector/useAppSelector';
import { getScrollPositionByPage } from '@/features/UI/model/selectors/uiSelectors';
import { useThottle } from '@/shared/hooks/useThottle/useThottle';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

const Page = (props: PageProps) => {
  const { children, className, onScrollEnd } = props;

  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { pathname } = useLocation();

  const scrollPosition = useAppSelector((s) => getScrollPositionByPage(s, pathname));

  const dispatch = useAppDispatch();

  useInfiniteScroll({ targetRef, containerRef, callback: onScrollEnd });

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = scrollPosition;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onScroll = useThottle((e: UIEvent) => {
    dispatch(
      uiSliceActions.setScroll({
        scrollPosition: e.currentTarget.scrollTop,
        page: pathname,
      })
    );
  }, 500);

  return (
    <div className={cn(cls.page, className)} ref={containerRef} onScroll={onScroll}>
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={targetRef} /> : null}
    </div>
  );
};

export default Page;
