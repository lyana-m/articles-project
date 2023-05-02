import React, { type PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { type DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { type StoreSchema } from '../config/StoreSchema';

interface StoreProviderProps {
  initialState?: DeepPartial<StoreSchema>;
}

const StoreProvider = ({ children, initialState }: PropsWithChildren<StoreProviderProps>) => {
  const store = createReduxStore(initialState as StoreSchema);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;

const store = createReduxStore({} as StoreSchema);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
