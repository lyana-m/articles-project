import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/StoreProvider';
import { ArticleItem, ArticleListSortOrder, ArticleListView, ArticleItemType } from 'entities/Article';
import { ArticleListSchema } from '../types/acticleListSchema';
import { fetchArticles } from '../services/fetchArticles/fetchArticles';
import { LOCALSTORAGE_ARTICLE_LIST_VIEW } from 'shared/constants/localStorage';
import { SortDirection } from 'shared/types';
import { initialState } from '../constants/initialState';

export const articleListAdapter = createEntityAdapter<ArticleItem>({
  selectId: (article) => article.id,
});

export const getArticles = articleListAdapter.getSelectors<StoreSchema>(
  (state) => state.articleList || articleListAdapter.getInitialState()
);

const articleListSlice = createSlice({
  name: 'articles',
  initialState: articleListAdapter.getInitialState<ArticleListSchema>(initialState),
  reducers: {
    setView: (state, action: PayloadAction<ArticleListView>) => {
      state.view = action.payload;
      state.limit = state.view === 'list' ? 4 : 8;
      localStorage.setItem(LOCALSTORAGE_ARTICLE_LIST_VIEW, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<ArticleListSortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<SortDirection>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleItemType>) => {
      state.type = action.payload;
    },
    init: (state) => {
      const view = localStorage.getItem(LOCALSTORAGE_ARTICLE_LIST_VIEW) as ArticleListView;
      state.view = view;
      state.limit = view === 'list' ? 4 : 8;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;

      if (action.meta.arg.replace) {
        articleListAdapter.removeAll(state);
      }
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasMore = action.payload.length >= state.limit;

      if (action.meta.arg.replace) {
        articleListAdapter.setAll(state, action.payload);
      } else {
        articleListAdapter.addMany(state, action.payload);
      }
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || '';
    });
  },
});

export const { reducer: articleListReducer, actions: articleListActions } = articleListSlice;
