import { StoreSchema } from '@/app/providers/StoreProvider';

export const getArticleData = (state: StoreSchema) => state.article?.data;
export const getArticleLoading = (state: StoreSchema) => state.article?.isLoading;
export const getArticleError = (state: StoreSchema) => state.article?.error;
