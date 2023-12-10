import { StoreSchema } from '@/app/providers/StoreProvider';

export const getArticleCommentsLoading = (state: StoreSchema) => state.articleComments?.isLoading || false;
export const getArticleCommentsError = (state: StoreSchema) => state.articleComments?.error;
