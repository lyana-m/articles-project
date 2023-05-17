import React, { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeButton } from 'widgets/ThemeButton';
import { LangButton } from 'widgets/LangButton';
// import { BugButton } from 'widgets/PageError';
import { Button } from 'shared/ui/Button';
import cls from './Sidebar.module.scss';
import { sidebarItems } from '../../model/items';
import SidebarItem from './SidebarItem/SidebarItem';

const Sidebar = memo(() => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed })} data-testid="sidebar">
      <Button className={cls.collapseBtn} theme="backgroundInverted" square size="l" onClick={toggle}>
        {collapsed ? '>' : '<'}
      </Button>
      {/* <BugButton /> */}
      <div className={cls.links}>
        {sidebarItems.map((item) => (
          <SidebarItem key={item.text} item={item} collapsed={collapsed} />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeButton />
        <LangButton className={cls.lang} />
      </div>
    </div>
  );
});

export default Sidebar;
