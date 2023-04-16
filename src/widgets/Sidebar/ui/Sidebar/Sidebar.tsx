import React, { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeButton } from 'widgets/ThemeButton';
import { LangButton } from 'widgets/LangButton';
import { BugButton } from 'widgets/PageError';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])} data-testid="sidebar">
      <button onClick={toggle}>TOGGLE</button>
      <BugButton />
      <div className={cls.switchers}>
        <ThemeButton />
        <LangButton className={cls.lang} />
      </div>
    </div>
  );
};

export default Sidebar;
