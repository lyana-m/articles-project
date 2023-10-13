import { StoreSchema } from 'app/providers/StoreProvider';

export const getArticlesView = (state: StoreSchema) => state.articles?.view || 'list';
export const getArticlesLoading = (state: StoreSchema) => state.articles?.isLoading;
export const getArticlesError = (state: StoreSchema) => state.articles?.error;
export const getArticlesPage = (state: StoreSchema) => state.articles?.page || 1;
export const getArticlesLimit = (state: StoreSchema) => state.articles?.limit;
export const getArticlesHasMore = (state: StoreSchema) => state.articles?.hasMore;
