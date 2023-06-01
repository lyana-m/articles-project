import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { ArticleItem } from '../../types/article';

export const fetchArticleById = createAsyncThunk<ArticleItem, string, ThunkConfig<string>>(
  'article/fetchArticleById',
  async (id: string, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<ArticleItem>(`/articles/${id}`);

      if (!response.data) {
        throw Error('ArticleDataFetchigError');
      }

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('ArticleDataFetchigError');
    }
  }
);
