import { configureStore, ReducersMapObject, CombinedState, Reducer } from '@reduxjs/toolkit';
import { StoreSchema } from './StoreSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { api } from 'shared/api/api';
import { uiSliceReducer } from 'features/UI';
import { rtkApi } from 'shared/api/rtkApi';

export const createReduxStore = (initialState: StoreSchema, asyncReducers?: ReducersMapObject<StoreSchema>) => {
  const staticReducers = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    ui: uiSliceReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(staticReducers);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StoreSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: { api },
        },
      }).concat(rtkApi.middleware),
  });

  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
};
