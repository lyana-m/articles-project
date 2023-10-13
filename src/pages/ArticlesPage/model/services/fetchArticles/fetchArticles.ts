import { createAsyncThunk } from '@reduxjs/toolkit';
import { StoreSchema, ThunkConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { ArticleItem } from 'entities/Article';
import { getArticlesLimit } from '../../selectors/articlesSelectors';

interface FetchArticlesArgs {
  page: number;
}

export const fetchArticles = createAsyncThunk<ArticleItem[], FetchArticlesArgs, ThunkConfig<string>>(
  'articles/fetchArticles',
  async (agrs, thunkAPI) => {
    const { page } = agrs;
    const limit = getArticlesLimit(thunkAPI.getState() as StoreSchema);
    try {
      const response = await thunkAPI.extra.api.get<ArticleItem[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
        },
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
