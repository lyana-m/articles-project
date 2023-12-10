import React, { useCallback } from 'react';
import cn from 'classnames';
import cls from './ArticleListFilters.module.scss';
import { ArcticleViewSwitcher } from '@/entities/Article';
import { useAppSelector } from '@/shared/hooks/useAppSelector/useAppSelector';
import {
  getArticleListOrder,
  getArticleListSearch,
  getArticleListSort,
  getArticleListType,
  getArticleListView,
} from '../../model/selectors/articleListSelectors';
import { ArticleItemType, ArticleListSortOrder, ArticleListView } from '@/entities/Article/model/types/article';
import { articleListActions } from '../../model/slice/articleListSlice';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { Input } from '@/shared/ui/Input';
import ArticleListSorting from '../ArticleListSorting/ArticleListSorting';
import { SortDirection } from '@/shared/types';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { useDebounce } from '@/shared/hooks/useDebounce/useDebounce';
import ArticleTypeTabs from '../ArticleTypeTabs/ArticleTypeTabs';

interface ArticleListFiltersProps {
  className?: string;
}

const ArticleListFilters = (props: ArticleListFiltersProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const view = useAppSelector(getArticleListView);
  const sort = useAppSelector(getArticleListSort);
  const order = useAppSelector(getArticleListOrder);
  const search = useAppSelector(getArticleListSearch);
  const type = useAppSelector(getArticleListType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticles({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const handleViewChange = useCallback(
    (view: ArticleListView) => {
      dispatch(articleListActions.setView(view));
    },
    [dispatch]
  );

  const handleSortChange = useCallback(
    (sort: SortDirection) => {
      dispatch(articleListActions.setSort(sort));
      dispatch(articleListActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const handleOrderChange = useCallback(
    (order: ArticleListSortOrder) => {
      dispatch(articleListActions.setOrder(order));
      dispatch(articleListActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const handleSeach = useCallback(
    (search: string) => {
      dispatch(articleListActions.setSearch(search));
      dispatch(articleListActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData]
  );

  const handleTypeChange = useCallback(
    (type: ArticleItemType) => {
      dispatch(articleListActions.setType(type));
      dispatch(articleListActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  return (
    <div className={cn(cls.articleListFilters, className)}>
      <div className={cls.sortWrapper}>
        <ArticleListSorting
          sort={sort}
          order={order}
          handleOrderChange={handleOrderChange}
          handleSortChange={handleSortChange}
        />
        <ArcticleViewSwitcher currentView={view} onViewChange={handleViewChange} />
      </div>
      <Input placeholder="Поиск..." value={search} onChange={handleSeach} />
      <ArticleTypeTabs className={cls.tabs} activeTab={type} onTypeChange={handleTypeChange} />
    </div>
  );
};

export default ArticleListFilters;
