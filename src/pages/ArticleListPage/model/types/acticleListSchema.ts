import { EntityState } from '@reduxjs/toolkit';
import { ArticleListView, ArticleItem, ArticleListSortOrder, ArticleItemType } from 'entities/Article/model/types/article';
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
  type: ArticleItemType,
  // pagination
  page: number;
  limit: number;
  hasMore: boolean;
}
