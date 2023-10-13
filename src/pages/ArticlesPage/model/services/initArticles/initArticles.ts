import { createAsyncThunk } from '@reduxjs/toolkit';
import { StoreSchema, ThunkConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { getArticlesIsInited } from '../../selectors/articlesSelectors';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { articlesActions } from '../../slice/articlesSlice';

export const initArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articles/initArticles',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const inited = getArticlesIsInited(getState() as StoreSchema);

    if (__PROJECT__ !== 'storybook' && !inited) {
      dispatch(articlesActions.init());
      dispatch(fetchArticles({ page: 1 }));
    }
  }
);
