import React from 'react';
import { ArticleItemType } from '@/entities/Article/model/types/article';
import { Tabs } from '@/shared/ui/Tabs';

const typeTabs: Array<{ value: ArticleItemType; name: string }> = [
  { value: 'ALL', name: 'Все' },
  { value: 'IT', name: 'IT' },
  { value: 'SCIENCE', name: 'Наука' },
  { value: 'ECONOMICS', name: 'Экономика' },
];

interface ArticleTypeTabsProps {
  className?: string;
  activeTab: ArticleItemType;
  onTypeChange: (type: ArticleItemType) => void;
}

const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
  const { activeTab, className, onTypeChange } = props;

  return <Tabs className={className} tabs={typeTabs} activeTab={activeTab} onTabClick={onTypeChange} />;
};

export default ArticleTypeTabs;
