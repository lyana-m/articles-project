import React, { HTMLAttributeAnchorTarget } from 'react';
import cn from 'classnames';
import cls from './ArticleList.module.scss';
import { ArticleItem, ArticleListView } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles?: ArticleItem[];
  view?: ArticleListView;
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletonArray = (view: ArticleListView) => {
  return new Array(view === 'tile' ? 12 : 3).fill(0).map((_, i) => <ArticleListItemSkeleton view={view} key={i} />);
};

const ArticleList = (props: ArticleListProps) => {
  const { articles, view = 'tile', isLoading, className, target = '_self' } = props;

  return (
    <div className={cn(cls.articleList, cls[view], className)}>
      {articles?.length
        ? articles.map((article) => <ArticleListItem key={article.id} view={view} article={article} target={target} />)
        : null}
      {isLoading ? getSkeletonArray(view) : null}
    </div>
  );
};

export default ArticleList;
