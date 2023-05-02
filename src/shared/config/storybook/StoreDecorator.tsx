import type { DeepPartial } from '@reduxjs/toolkit';
import type { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { type StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';

export const StoreDecorator = (initialState: DeepPartial<StoreSchema>) => (Story: StoryFn) => {
  return (
    <StoreProvider initialState={initialState}>
      <Story />
    </StoreProvider>
  );
};
