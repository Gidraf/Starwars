import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import Constants from '../utils/Constants';
import type { RootState } from './index';

const filmsSlice = createSlice({
  name: 'films',
  initialState: [],
  reducers: {
    searchReducer: {
      reducer: (state, action: PayloadAction<[]>) => (state = action.payload),
      prepare: (value?: []) => ({ payload: value || [] }),
    },
    animationReducer: {
      reducer: (state, action: PayloadAction<[]>) => (state = action.payload),
      prepare: (value?: []) => ({ payload: value || [] }),
    },
  },
});

export const films = (state: RootState) => state.films;

export const { searchReducer } = filmsSlice.actions;
export default filmsSlice.reducer;
