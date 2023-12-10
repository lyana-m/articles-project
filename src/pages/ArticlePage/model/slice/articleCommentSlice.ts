import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StoreSchema } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { ArticleCommentsSchema } from '../types/articleCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const articleCommentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments =
  articleCommentsAdapter.getSelectors<StoreSchema>((state) => state.articleComments || articleCommentsAdapter.getInitialState());

const articleCommentsSlice = createSlice({
  name: 'articleComments',
  initialState: articleCommentsAdapter.getInitialState<ArticleCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
      state.isLoading = false;
      articleCommentsAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || '';
    });
  },
});

export const { reducer: articleCommentsReducer } = articleCommentsSlice;
