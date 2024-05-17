import { configureStore, combineReducers } from '@reduxjs/toolkit';

import campersReducer from './slices/campers';
import filterReducer from './slices/filter';

const rootReducers = combineReducers({
  campers: campersReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV !== 'production',
});
