import React, { type FC } from 'react';
import { type LinkProps, Link } from 'react-router-dom';
import { classNames } from '../../lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkTheme = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
  className?: string
  to: string
  theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = (props) => {
  const { className, children, to, theme = 'primary', ...otherProps } = props;

  return <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>{children}</Link>;
};

export default AppLink;
