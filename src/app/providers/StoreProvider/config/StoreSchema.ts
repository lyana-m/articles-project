import type { AnyAction, CombinedState, Reducer, ReducersMapObject, EnhancedStore } from '@reduxjs/toolkit';
import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUsername';

export interface StoreSchema {
  counter: CounterSchema;
  user: UserSchema;
  login?: LoginSchema;
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
