import { StoreSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../constants/initialState';

export const getArticleListView = (state: StoreSchema) => state.articleList?.view || initialState.view;
export const getArticleListLoading = (state: StoreSchema) => state.articleList?.isLoading || initialState.isLoading;
export const getArticleListError = (state: StoreSchema) => state.articleList?.error || initialState.error;
export const getArticleListPage = (state: StoreSchema) => state.articleList?.page || initialState.page;
export const getArticleListLimit = (state: StoreSchema) => state.articleList?.limit || initialState.limit;
export const getArticleListHasMore = (state: StoreSchema) => state.articleList?.hasMore;
export const getArticleListInited = (state: StoreSchema) => state.articleList?._inited;
export const getArticleListSort = (state: StoreSchema) => state.articleList?.sort || initialState.sort;
export const getArticleListOrder = (state: StoreSchema) => state.articleList?.order || initialState.order;
export const getArticleListSearch = (state: StoreSchema) => state.articleList?.search || initialState.search;
export const getArticleListType = (state: StoreSchema) => state.articleList?.type || initialState.type;
