import { createAsyncThunk } from '@reduxjs/toolkit';
import { StoreSchema, ThunkConfig } from '@/app/providers/StoreProvider/config/StoreSchema';
import { getArticleListHasMore, getArticleListLoading, getArticleListPage } from '../../selectors/articleListSelectors';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { articleListActions } from '../../slice/articleListSlice';

export const fetchMoreArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articles/fetchMoreArticles',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const hasMore = getArticleListHasMore(getState() as StoreSchema);
    const isLoading = getArticleListLoading(getState() as StoreSchema);
    const page = getArticleListPage(getState() as StoreSchema);

    if (hasMore && !isLoading) {
      dispatch(articleListActions.setPage(page + 1));
      dispatch(fetchArticles({}));
    }
  }
);
