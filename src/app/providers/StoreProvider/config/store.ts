import { configureStore } from '@reduxjs/toolkit';
import { type StoreSchema } from './StoreSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

export const createReduxStore = (initialState: StoreSchema) => {
  const combinedReducers = { counter: counterReducer, user: userReducer };

  return configureStore<StoreSchema>({
    reducer: combinedReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
