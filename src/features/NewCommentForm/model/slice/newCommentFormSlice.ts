import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { NewCommentFormSchema } from '../types/newCommentForm';
// import { sendArticleNewComment } from 'pages/ArticlePage/services/sendNewArticleComment';

const initialState: NewCommentFormSchema = {
  text: '',
  error: undefined,
};

export const newCommentFormSlice = createSlice({
  name: 'newCommentForm',
  initialState,
  reducers: {
    setComment: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(sendNewComment.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(sendNewComment.fulfilled, (state, action) => {
    //   state.isLoading = false;
    // });
    // builder.addCase(sendArticleNewComment.rejected, (state, action) => {
    //   state.error = action.payload;
    // });
  },
});

export const { actions: newCommentFormActions } = newCommentFormSlice;
export const { reducer: newCommentFormReducer } = newCommentFormSlice;
