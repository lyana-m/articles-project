import { createAsyncThunk } from '@reduxjs/toolkit';
import { StoreSchema, ThunkConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { getArticleListInited } from '../../selectors/articleListSelectors';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { articleListActions } from '../../slice/articleListSlice';
import { SortDirection } from 'shared/types';
import { ArticleItemType, ArticleListSortOrder } from 'entities/Article';

export const initArticles = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articles/initArticles',
  async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const inited = getArticleListInited(getState() as StoreSchema);

    if (__PROJECT__ !== 'storybook' && !inited) {
      const sort = searchParams.get('sort');
      const order = searchParams.get('order');
      const search = searchParams.get('search');
      const type = searchParams.get('type');

      if (sort) {
        dispatch(articleListActions.setSort(sort as SortDirection));
      }

      if (order) {
        dispatch(articleListActions.setOrder(order as ArticleListSortOrder));
      }

      if (search) {
        dispatch(articleListActions.setSearch(search));
      }

      if (type) {
        dispatch(articleListActions.setType(type as ArticleItemType));
      }

      dispatch(articleListActions.init());
      dispatch(fetchArticles({}));
    }
  }
);
