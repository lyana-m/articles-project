import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StoreSchemaKeys } from 'app/providers/StoreProvider/config/StoreSchema';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { useStore } from 'react-redux';

export interface AsyncReduser {
  reducerKey: StoreSchemaKeys;
  reducer: Reducer;
  removeAfterUnmount?: boolean;
}

export const useAsyncReducers = (reducers: AsyncReduser[], removeAfterUnmount = true) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const mountedReduces = store.reducerManager.getReducerMap();
    console.log(mountedReduces);
    reducers.forEach((reducer) => {
      const mounted = mountedReduces[reducer.reducerKey];

      if (!mounted) {
        store.reducerManager.add(reducer.reducerKey, reducer.reducer);
        dispatch({ type: `@@INIT ${reducer.reducerKey}` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        reducers.forEach((reducer) => {
          store.reducerManager.remove(reducer.reducerKey);
          dispatch({ type: `@@DESTROY ${reducer.reducerKey}` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
