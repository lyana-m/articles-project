import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StoreSchema } from './StoreSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { api } from 'shared/api/api';

export const createReduxStore = (initialState: StoreSchema, asyncReducers?: ReducersMapObject<StoreSchema>) => {
  const staticReducers = { ...asyncReducers, counter: counterReducer, user: userReducer };

  const reducerManager = createReducerManager(staticReducers);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: { api },
        },
      }),
  });

  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
};
