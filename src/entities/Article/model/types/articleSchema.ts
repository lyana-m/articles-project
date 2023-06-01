import { ArticleItem } from './article';

export interface ArticleSchema {
  data?: ArticleItem;
  isLoading: boolean;
  error?: string;
}
