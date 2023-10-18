import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/StoreProvider';
import { ArticleItem } from 'entities/Article';
import { ArticleRecommendationsSchema } from '../types/articleRecommendationsSchema';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

export const articleRecommendationsAdapter = createEntityAdapter<ArticleItem>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations =
  articleRecommendationsAdapter.getSelectors<StoreSchema>((state) => state.articleRecommendations || articleRecommendationsAdapter.getInitialState());

const articleRecommendationsSlice = createSlice({
  name: 'articleRecommendations',
  initialState: articleRecommendationsAdapter.getInitialState<ArticleRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleRecommendations.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
      state.isLoading = false;
      articleRecommendationsAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchArticleRecommendations.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || '';
    });
  },
});

export const { reducer: articleRecommendationsReducer } = articleRecommendationsSlice;
