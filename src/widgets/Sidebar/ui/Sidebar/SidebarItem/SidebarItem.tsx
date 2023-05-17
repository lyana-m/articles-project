import React, { memo } from 'react';
import AppLink from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from '../../../model/items';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <AppLink theme="secondary" className={classNames(cls.link, { [cls.collapsed]: collapsed })} to={item.link}>
      <item.Icon />
      <span>{t(item.text)}</span>
    </AppLink>
  );
});

export default SidebarItem;
