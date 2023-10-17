import React, { useCallback } from 'react';
import cn from 'classnames';
import cls from './Tabs.module.scss';
import Card from '../../Card/Card';

interface TabItem<T extends string> {
  value: T;
  name: string;
}

interface TabsProps<T extends string> {
  tabs: Array<TabItem<T>>;
  activeTab: string;
  onTabClick: (value: T) => void;
  className?: string;
}

const Tabs = <T extends string>(props: TabsProps<T>) => {
  const { tabs, activeTab, className, onTabClick } = props;

  const handleTabClick = useCallback(
    (value: T) => {
      onTabClick(value);
    },
    [onTabClick]
  );

  return (
    <div className={cn(cls.tabs, className)}>
      {tabs.map((tab) => (
        <Card
          className={cn(cls.tab, { [cls.active]: tab.value === activeTab })}
          key={tab.value}
          onClick={() => handleTabClick(tab.value)}
        >
          {tab.name}
        </Card>
      ))}
    </div>
  );
};

export default Tabs;
