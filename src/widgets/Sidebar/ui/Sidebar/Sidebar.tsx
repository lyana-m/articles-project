import React, { memo, useState } from 'react';
import cn from 'classnames';
import { ThemeButton } from '@/widgets/ThemeButton';
import { LangButton } from '@/widgets/LangButton';
// import { BugButton } from 'widgets/PageError';
import { Button } from '@/shared/ui/Button';
import cls from './Sidebar.module.scss';
import SidebarItem from './SidebarItem/SidebarItem';
import { useAppSelector } from '@/shared/hooks/useAppSelector/useAppSelector';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { VStack } from '@/shared/ui/Stack';

const Sidebar = memo(() => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItems = useAppSelector(getSidebarItems);

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={cn(cls.Sidebar, { [cls.collapsed]: collapsed })} data-testid="sidebar">
      <Button className={cls.collapseBtn} theme="backgroundInverted" square size="l" onClick={toggle}>
        {collapsed ? '>' : '<'}
      </Button>
      {/* <BugButton /> */}
      <VStack alignItems="flex-start" gap="12" className={cls.links}>
        {sidebarItems.map((item) => (
          <SidebarItem key={item.text} item={item} collapsed={collapsed} />
        ))}
      </VStack>
      <div className={cls.switchers}>
        <ThemeButton />
        <LangButton className={cls.lang} />
      </div>
    </div>
  );
});

export default Sidebar;
