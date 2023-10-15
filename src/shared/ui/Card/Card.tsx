import React, { HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

const Card = (props: CardProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <div className={cn(cls.card, className)} {...otherProps}>
      {children}
    </div>
  );
};

export default Card;
