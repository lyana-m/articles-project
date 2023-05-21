import type { ReducersMapObject } from '@reduxjs/toolkit';
import type { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { type StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { DeepPartial } from 'app/types/common';

const asyncReducers: DeepPartial<ReducersMapObject<StoreSchema>> = { login: loginReducer };

export const StoreDecorator =
  (initialState: DeepPartial<StoreSchema>) => (Story: StoryFn) => {
    return (
      <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
        <Story />
      </StoreProvider>
    );
  };
