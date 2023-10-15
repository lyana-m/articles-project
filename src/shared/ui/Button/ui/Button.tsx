import React, { ButtonHTMLAttributes, memo, PropsWithChildren } from 'react';
import cn from 'classnames';
import cls from './Button.module.scss';

export type ButtonTheme = 'clear' | 'clearInverted' | 'outline' | 'outline_red' | 'background' | 'backgroundInverted';
export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

const Button = memo((props: PropsWithChildren<ButtonProps>) => {
  const { className, children, theme = 'clear', square = false, size = 'm', ...otherProps } = props;

  const mods = {
    [cls.square]: square,
  };

  return (
    <button className={cn(cls.button, mods, className, cls[theme], cls[size])} {...otherProps}>
      {children}
    </button>
  );
});

export default Button;
