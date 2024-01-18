import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

const extendedApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    articleRaiting: build.query<Rating[], { userId: string; articleId: string }>({
      query: ({ userId, articleId }) => ({ url: 'article-ratings', params: { userId, articleId } }),
    }),
  }),
  overrideExisting: false,
});

export const { useArticleRaitingQuery } = extendedApi;
