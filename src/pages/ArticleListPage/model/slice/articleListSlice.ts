import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/StoreProvider';
import { ArticleItem } from 'entities/Article';
import { ArticleListSchema } from '../types/acticleListSchema';
import { fetchArticles } from '../services/fetchArticles/fetchArticles';
import { ArticleListView } from 'entities/Article/model/types/article';
import { LOCALSTORAGE_ARTICLE_LIST_VIEW } from 'shared/constants/localStorage';

export const articleListAdapter = createEntityAdapter<ArticleItem>({
  selectId: (article) => article.id,
});

export const getArticles = articleListAdapter.getSelectors<StoreSchema>(
  (state) => state.articleList || articleListAdapter.getInitialState()
);

const articleListSlice = createSlice({
  name: 'articles',
  initialState: articleListAdapter.getInitialState<ArticleListSchema>({
    isLoading: false,
    error: undefined,
    view: 'list',
    page: 1,
    hasMore: true,
    limit: 8,
    ids: [],
    entities: {},
    _inited: false,
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
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      articleListAdapter.addMany(state, action.payload);
      state.hasMore = action.payload.length > 0;
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || '';
    });
  },
});

export const { reducer: articleListReducer, actions: articleListActions } = articleListSlice;
