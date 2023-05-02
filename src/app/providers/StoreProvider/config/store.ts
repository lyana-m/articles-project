import { configureStore } from '@reduxjs/toolkit';
import { type StoreSchema } from './StoreSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';

export const createReduxStore = (initialState: StoreSchema) => {
  const combinedReducers = { counter: counterReducer, user: userReducer, login: loginReducer };

  return configureStore<StoreSchema>({
    reducer: combinedReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
