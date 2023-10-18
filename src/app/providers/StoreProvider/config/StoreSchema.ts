import { AnyAction, CombinedState, Reducer, ReducersMapObject, EnhancedStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { ArticleSchema } from 'entities/Article';
import { LoginSchema } from 'features/AuthByUsername';
import { ArticleCommentsSchema, ArticleRecommendationsSchema } from 'pages/ArticlePage';
import { NewCommentFormSchema } from 'features/NewCommentForm';
import { ArticleListSchema } from 'pages/ArticleListPage';
import { UISchema } from 'features/UI';

export interface StoreSchema {
  counter: CounterSchema;
  user: UserSchema;
  ui: UISchema;

  // async reducers
  login?: LoginSchema;
  profile?: ProfileSchema;
  article?: ArticleSchema;
  articleComments?: ArticleCommentsSchema;
  newCommentForm?: NewCommentFormSchema;
  articleList?: ArticleListSchema;
  articleRecommendations?: ArticleRecommendationsSchema;
}

export type StoreSchemaKeys = keyof StoreSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StoreSchema>;
  reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>;
  add: (key: StoreSchemaKeys, reducer: Reducer) => void;
  remove: (key: StoreSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore {
  reducerManager: ReducerManager;
}

export interface ExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  extra: ExtraArg;
  rejectValue: T;
  getState: () => StoreSchema;
}
