import React, { type FC, type ButtonHTMLAttributes } from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonTheme = 'clear' | 'clearInverted' | 'outline' | 'background' | 'backgroundInverted';
export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme = 'clear', square = false, size = 'm', ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };

  return (
    <button className={classNames(cls.button, mods, [className, cls[theme], cls[size]])} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
