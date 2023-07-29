import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { skillSliceReducer } from './features/skillsSlice';
import { bioSliceReducer } from './features/bioSlice';

const combinedReducer = combineReducers({
  bio: bioSliceReducer,
  skills: skillSliceReducer,
});

export const store = configureStore({
  reducer: combinedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
