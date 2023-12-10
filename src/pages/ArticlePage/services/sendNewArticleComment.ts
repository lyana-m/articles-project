import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExtraArg, StoreSchema } from '@/app/providers/StoreProvider/config/StoreSchema';
import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { getArticleData } from '@/entities/Article';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const sendArticleNewComment = createAsyncThunk<Comment, string, { rejectValue: string; extra: ExtraArg }>(
  'newCommentForm/sendNewComment',
  async (text, { getState, extra, rejectWithValue, dispatch }) => {
    const user = getUserAuthData(getState() as StoreSchema);
    const article = getArticleData(getState() as StoreSchema);

    if (!user || !text || !article) {
      return rejectWithValue('NewCommentSendingError');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        userId: user.id,
        articleId: article.id,
        text,
      });

      if (!response.data) {
        throw Error('NewCommentSendingError');
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (error) {
      return rejectWithValue('NewCommentSendingError');
    }
  }
);
