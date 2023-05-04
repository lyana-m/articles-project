/* eslint-disable @typescript-eslint/no-dynamic-delete */
import { type AnyAction, combineReducers, type ReducersMapObject, type Reducer } from '@reduxjs/toolkit';
import type { StoreSchemaKeys, StoreSchema, ReducerManager } from './StoreSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StoreSchema>): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: StoreSchemaKeys[] = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: StoreSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: StoreSchemaKeys, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StoreSchemaKeys) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    },
  };
}
