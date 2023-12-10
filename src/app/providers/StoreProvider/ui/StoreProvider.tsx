import React, { type PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { DeepPartial } from '@/app/types/common';
import { createReduxStore } from '../config/store';
import { type StoreSchema } from '../config/StoreSchema';

interface StoreProviderProps {
  initialState?: DeepPartial<StoreSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>;
}

const StoreProvider = ({ children, initialState, asyncReducers }: PropsWithChildren<StoreProviderProps>) => {
  const store = createReduxStore(initialState as StoreSchema, asyncReducers as ReducersMapObject<StoreSchema>);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<ReturnType<typeof createReduxStore>['getState']>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
