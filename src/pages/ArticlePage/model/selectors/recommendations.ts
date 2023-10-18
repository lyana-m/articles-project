import { StoreSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsLoading = (state: StoreSchema) => state.articleRecommendations?.isLoading ?? false;
export const getArticleRecommendationsError = (state: StoreSchema) => state.articleRecommendations?.error;
