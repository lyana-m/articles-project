import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StoreSchema';
import { Comment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string, ThunkConfig<string>>(
  'articleComments/fetchCommentsByArticleId',
  async (articleId: string, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user'
        }
      });

      if (!response.data) {
        throw Error('ArticleCommentsFetchigError');
      }

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('ArticleCommentsFetchigError');
    }
  }
);
