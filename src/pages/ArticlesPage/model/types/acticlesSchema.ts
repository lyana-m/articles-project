import { EntityState } from '@reduxjs/toolkit';
import { ArticleListView, ArticleItem } from 'entities/Article/model/types/article';

export interface ArticlesSchema extends EntityState<ArticleItem> {
  isLoading: boolean;
  error?: string;
  view: ArticleListView;
  page: number;
  limit?: number;
  hasMore: boolean;
}
