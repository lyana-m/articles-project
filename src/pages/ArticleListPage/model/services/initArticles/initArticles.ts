import { createAsyncThunk } from '@reduxjs/toolkit';
import { StoreSchema, ThunkConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { getArticleListInited } from '../../selectors/articleListSelectors';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { articleListActions } from '../../slice/articleListSlice';

export const initArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articles/initArticles',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const inited = getArticleListInited(getState() as StoreSchema);

    if (__PROJECT__ !== 'storybook' && !inited) {
      dispatch(articleListActions.init());
      dispatch(fetchArticles({}));
    }
  }
);
