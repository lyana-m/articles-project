import { AnyAction, CombinedState, Reducer, ReducersMapObject, EnhancedStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { ArticleSchema } from 'entities/Article';
import { LoginSchema } from 'features/AuthByUsername';
import { ArticleCommentsSchema } from 'pages/ArticlePage';
import { NewCommentFormSchema } from 'features/NewCommentForm';

export interface StoreSchema {
  counter: CounterSchema;
  user: UserSchema;
  // async reducers
  login?: LoginSchema;
  profile?: ProfileSchema;
  article?: ArticleSchema;
  articleComments?: ArticleCommentsSchema;
  newCommentForm?: NewCommentFormSchema;
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
