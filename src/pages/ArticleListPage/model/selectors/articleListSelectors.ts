import { StoreSchema } from 'app/providers/StoreProvider';

export const getArticleListView = (state: StoreSchema) => state.articleList?.view || 'list';
export const getArticleListLoading = (state: StoreSchema) => state.articleList?.isLoading;
export const getArticleListError = (state: StoreSchema) => state.articleList?.error;
export const getArticleListPage = (state: StoreSchema) => state.articleList?.page || 1;
export const getArticleListLimit = (state: StoreSchema) => state.articleList?.limit || 8;
export const getArticleListHasMore = (state: StoreSchema) => state.articleList?.hasMore;
export const getArticleListInited = (state: StoreSchema) => state.articleList?._inited;
