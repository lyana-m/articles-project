import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import AppLink from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { getUserAuthData } from 'entities/User';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../../model/types/sidebar';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  const isAuth = useAppSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink theme="secondary" className={classNames(cls.link, { [cls.collapsed]: collapsed })} to={item.link}>
      <item.Icon />
      <span>{t(item.text)}</span>
    </AppLink>
  );
});

export default SidebarItem;
