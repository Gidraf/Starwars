import { configureStore, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import filmReducer from '../reducers/AllReducer';

export const store = configureStore({
  reducer: {
    films: filmReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
