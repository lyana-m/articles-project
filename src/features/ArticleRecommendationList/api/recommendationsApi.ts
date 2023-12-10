import { rtkApi } from '@/shared/api/rtkApi';

const extendedApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    articleRecommendationList: build.query({
      query: (limit) => ({ url: 'articles', params: { _limit: limit } }),
    }),
  }),
  overrideExisting: false,
});

export const { useArticleRecommendationListQuery } = extendedApi;
