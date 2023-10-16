import { EntityState } from '@reduxjs/toolkit';
import { ArticleListView, ArticleItem, ArticleListSortOrder } from 'entities/Article/model/types/article';
import { SortDirection } from 'shared/types';

export interface ArticleListSchema extends EntityState<ArticleItem> {
  isLoading: boolean;
  error?: string;
  _inited: boolean;
  // filters
  view: ArticleListView;
  sort: SortDirection;
  order: ArticleListSortOrder;
  search: string;
  // pagination
  page: number;
  limit: number;
  hasMore: boolean;
}
