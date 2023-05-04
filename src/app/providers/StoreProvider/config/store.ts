import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StoreSchema } from './StoreSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';

export const createReduxStore = (initialState: StoreSchema, asyncReducers?: ReducersMapObject<StoreSchema>) => {
  const staticReducers = { ...asyncReducers, counter: counterReducer, user: userReducer };

  const reducerManager = createReducerManager(staticReducers);

  const store = configureStore<StoreSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
};
