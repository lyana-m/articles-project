import { createSelector } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/StoreProvider';

export const getScrollPositions = (store: StoreSchema) => store.ui.scroll;
export const getScrollPositionByPage = createSelector(
  getScrollPositions,
  (state: StoreSchema, page: string) => page,
  (scroll, page) => scroll[page]
);
