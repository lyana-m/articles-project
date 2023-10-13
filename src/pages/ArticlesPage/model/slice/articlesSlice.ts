import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/StoreProvider';
import { ArticleItem } from 'entities/Article';
import { ArticlesSchema } from '../types/acticlesSchema';
import { fetchArticles } from '../services/fetchArticles/fetchArticles';
import { ArticleListView } from 'entities/Article/model/types/article';
import { LOCALSTORAGE_ARTICLE_LIST_VIEW } from 'shared/constants/localStorage';

export const articlesAdapter = createEntityAdapter<ArticleItem>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StoreSchema>(
  (state) => state.articles || articlesAdapter.getInitialState()
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: articlesAdapter.getInitialState<ArticlesSchema>({
    isLoading: false,
    error: undefined,
    view: 'list',
    page: 1,
    hasMore: true,
    ids: [],
    entities: {},
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleListView>) => {
      state.view = action.payload;
      state.limit = state.view === 'list' ? 4 : 8;
      localStorage.setItem(LOCALSTORAGE_ARTICLE_LIST_VIEW, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    init: (state) => {
      const view = localStorage.getItem(LOCALSTORAGE_ARTICLE_LIST_VIEW) as ArticleListView;
      state.view = view;
      state.limit = view === 'list' ? 4 : 8;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      articlesAdapter.addMany(state, action.payload);
      state.hasMore = action.payload.length > 0;
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || '';
    });
  },
});

export const { reducer: articlesReducer, actions: articlesActions } = articlesSlice;
