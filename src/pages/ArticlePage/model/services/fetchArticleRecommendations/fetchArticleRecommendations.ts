import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { ArticleItem } from 'entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<ArticleItem[], void, ThunkConfig<string>>(
  'articles/fetchArticleRecommendations',
  async (_, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<ArticleItem[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: 4,
        },
      });

      if (!response.data) {
        throw Error('ArticleRecommendationsFetchigError');
      }

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('ArticleRecommendationsFetchigError');
    }
  }
);
