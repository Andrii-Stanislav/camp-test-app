import { configureStore, combineReducers } from '@reduxjs/toolkit';

// import { userReducer } from './user';
// import { memesReducer } from './memes';
// import { situationsReducer } from './situations';
// import { gameReducer } from './game';

const rootReducers = combineReducers({
  // user: userReducer,
  // memes: memesReducer,
  // situations: situationsReducer,
  // game: gameReducer,
});

export const store = configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV !== 'production',
});
