import React, { ReactNode } from 'react';
import cn from 'classnames';
import cls from './Flex.module.scss';

type FlexDirection = 'row' | 'column';
type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between';
type AlignItems = 'flex-start' | 'flex-end' | 'center';
type Gap = '2' | '4' | '8' | '12' | '16' | '24' | '32';

export interface FlexProps {
  className?: string;
  children: ReactNode;
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  fullWidth?: boolean;
  gap?: Gap;
}

const Flex = (props: FlexProps) => {
  const {
    flexDirection = 'row',
    justifyContent = 'flex-start',
    alignItems = 'center',
    fullWidth = true,
    gap,
    children,
    className,
  } = props;

  const flexClasses = cn(
    cls.flex,
    cls[flexDirection],
    cls[`justify-content-${justifyContent}`],
    cls[`align-items-${alignItems}`],
    className,
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    { [cls[`gap-${gap}`]]: Boolean(gap), [cls.full]: fullWidth }
  );

  return <div className={flexClasses}>{children}</div>;
};

export default Flex;
