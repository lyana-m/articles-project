import React, { memo, PropsWithChildren } from 'react';
import { LinkProps, Link } from 'react-router-dom';
import cn from 'classnames';
import cls from './AppLink.module.scss';

export type AppLinkTheme = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
  className?: string
  to: string
  theme?: AppLinkTheme
}

const AppLink = memo((props: PropsWithChildren<AppLinkProps>) => {
  const { className, children, to, theme = 'primary', ...otherProps } = props;

  return <Link to={to} className={cn(cls.AppLink, className, cls[theme])} {...otherProps}>{children}</Link>;
});

export default AppLink;
