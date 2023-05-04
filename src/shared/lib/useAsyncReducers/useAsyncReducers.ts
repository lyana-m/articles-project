import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StoreSchemaKeys } from 'app/providers/StoreProvider/config/StoreSchema';
import { useAppDispatch } from 'app/providers/StoreProvider/hooks/useDispatch';
import { useEffect } from 'react';
import { useStore } from 'react-redux';

export interface AsyncReduser {
  reducerKey: StoreSchemaKeys;
  reducer: Reducer;
}

export const useAsyncReducers = (reducers: AsyncReduser[]) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    reducers.forEach((reducer) => {
      store.reducerManager.add(reducer.reducerKey, reducer.reducer);
      dispatch({ type: `@@INIT ${reducer.reducerKey}` });
    });

    return () => {
      reducers.forEach((reducer) => {
        store.reducerManager.remove(reducer.reducerKey);
        dispatch({ type: `@@DESTROY ${reducer.reducerKey}` });
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
