import { configureStore } from '@reduxjs/toolkit';
import { type StoreSchema } from './StoreSchema';
import { counterReducer } from 'entities/Counter';

export const createReduxStore = (initialState: StoreSchema) => {
  return configureStore<StoreSchema>({
    reducer: { counter: counterReducer },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
