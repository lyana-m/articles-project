import React, { type PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { type DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { type StoreSchema } from '../config/StoreSchema';

interface StoreProviderProps {
  initialState?: DeepPartial<StoreSchema>;
}

const StoreProvider = ({ children, initialState }: PropsWithChildren<StoreProviderProps>) => {
  const store = createReduxStore(initialState as StoreSchema);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
