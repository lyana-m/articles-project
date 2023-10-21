import { createAsyncThunk } from '@reduxjs/toolkit';
import { StoreSchema, ThunkConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { ArticleItem } from 'entities/Article';
import {
  getArticleListLimit,
  getArticleListOrder,
  getArticleListPage,
  getArticleListSearch,
  getArticleListSort,
  getArticleListType,
} from '../../selectors/articleListSelectors';
import { addSearchParams } from 'shared/lib/url/addSearchParams/addSearchParams';

interface FetchArticlesArgs {
  replace?: boolean;
}

export const fetchArticles = createAsyncThunk<ArticleItem[], FetchArticlesArgs, ThunkConfig<string>>(
  'articles/fetchArticles',
  async (_, thunkAPI) => {
    const { getState } = thunkAPI;

    const page = getArticleListPage(getState() as StoreSchema);
    const limit = getArticleListLimit(getState() as StoreSchema);
    const sort = getArticleListSort(getState() as StoreSchema);
    const order = getArticleListOrder(getState() as StoreSchema);
    const search = getArticleListSearch(getState() as StoreSchema);
    const type = getArticleListType(getState() as StoreSchema);

    try {
      addSearchParams({ sort, order, search, type });
      const response = await thunkAPI.extra.api.get<ArticleItem[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
          q: search || undefined,
          type_like: type === 'ALL' ? undefined : type,
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
