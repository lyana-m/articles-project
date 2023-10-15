import React from 'react';
import cn from 'classnames';
import cls from './ArticleListFilters.module.scss';

interface ArticleListFiltersProps {
  className?: string;
}

const ArticleListFilters = (props: ArticleListFiltersProps) => {
  const { className } = props;

  return <div className={cn(cls.articleListFilters, className)}>ARTICLELISTFILTERS</div>;
};

export default ArticleListFilters;
