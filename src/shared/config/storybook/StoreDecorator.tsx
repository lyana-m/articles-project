import type { ReducersMapObject } from '@reduxjs/toolkit';
import type { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { type StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { DeepPartial } from 'app/types/common';
import { profileReducer } from 'features/EditableProfileCard';
import { articleReducer } from 'entities/Article';
import { articleCommentsReducer } from 'pages/ArticlePage/model/slice/articleCommentSlice';
import { newCommentFormReducer } from 'features/NewCommentForm/model/slice/newCommentFormSlice';
import { articleListReducer } from 'pages/ArticleListPage/model/slice/articleListSlice';

const asyncReducers: DeepPartial<ReducersMapObject<StoreSchema>> = {
  login: loginReducer,
  profile: profileReducer,
  article: articleReducer,
  articleComments: articleCommentsReducer,
  newCommentForm: newCommentFormReducer,
  articleList: articleListReducer,
};

export const StoreDecorator = (initialState: DeepPartial<StoreSchema>) => (Story: StoryFn) => {
  return (
    <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
      <Story />
    </StoreProvider>
  );
};
