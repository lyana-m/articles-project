import { StoreSchema } from 'app/providers/StoreProvider';

export const getArticlesView = (state: StoreSchema) => state.articles?.view || 'list';
export const getArticlesLoading = (state: StoreSchema) => state.articles?.isLoading;
export const getArticlesError = (state: StoreSchema) => state.articles?.error;
