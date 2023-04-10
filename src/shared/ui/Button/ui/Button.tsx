import React, { type FC, type HTMLAttributes } from 'react'
import { classNames } from '../../../lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    ...otherProps
  } = props

  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
