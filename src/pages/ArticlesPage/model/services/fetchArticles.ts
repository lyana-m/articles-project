import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { ArticleItem } from 'entities/Article';

export const fetchArticles = createAsyncThunk<ArticleItem[], undefined, ThunkConfig<string>>(
  'articles/fetchArticles',
  async (_, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<ArticleItem[]>('/articles', {
        params: {
          _expand: 'user'
        }
      });

      if (!response.data) {
        throw Error('ArticlesFetchigError');
      }

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('ArticlesFetchigError');
    }
  }
);
