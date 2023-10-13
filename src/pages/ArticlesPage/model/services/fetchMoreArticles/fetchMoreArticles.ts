import { createAsyncThunk } from '@reduxjs/toolkit';
import { StoreSchema, ThunkConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { getArticlesHasMore, getArticlesLoading, getArticlesPage } from '../../selectors/articlesSelectors';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { articlesActions } from '../../slice/articlesSlice';

export const fetchMoreArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articles/fetchMoreArticles',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const hasMore = getArticlesHasMore(getState() as StoreSchema);
    const isLoading = getArticlesLoading(getState() as StoreSchema);
    const page = getArticlesPage(getState() as StoreSchema);

    if (hasMore && !isLoading) {
      dispatch(articlesActions.setPage(page + 1));
      dispatch(fetchArticles({ page: page + 1 }));
    }
  }
);
