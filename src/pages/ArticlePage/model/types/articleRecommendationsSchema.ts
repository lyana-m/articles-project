import { EntityState } from '@reduxjs/toolkit';
import { ArticleItem } from '@/entities/Article';

export interface ArticleRecommendationsSchema extends EntityState<ArticleItem> {
  isLoading: boolean;
  error?: string;
}
