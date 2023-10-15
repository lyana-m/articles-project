import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { UISchema } from '../types/uiSchema';

const initialState: UISchema = {
  scroll: {},
};

export const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {
    setScroll: (state, action: PayloadAction<{ scrollPosition: number; page: string }>) => {
      state.scroll[action.payload.page] = action.payload.scrollPosition;
    },
  },
});

export const { actions: uiSliceActions } = uiSlice;
export const { reducer: uiSliceReducer } = uiSlice;
