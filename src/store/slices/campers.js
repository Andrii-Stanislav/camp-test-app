import { createSlice } from '@reduxjs/toolkit';

import { fetchCampers } from '../operations/campers';

const PAGE_SIZE = 4;

const onPending = (state) => ({ ...state, isLoading: true });

const onError = (state, action) => ({
  ...state,
  isLoading: false,
  error: action?.payload.message,
});

const initialState = {
  items: [],
  page: 1,
  limit: PAGE_SIZE,
  showLoadMoreButton: true,
  totalItems: 0,
  isLoading: false,
  error: null,
};

export const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    setNextPage: (state) => ({
      ...state,
      page: state.page + 1,
    }),
  },
  extraReducers: (builder) => {
    builder
      // * fetchCampers
      .addCase(fetchCampers.pending, onPending)
      .addCase(fetchCampers.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        items: [...state.items, ...action.payload],
        showLoadMoreButton: action.payload?.length === state.limit,
      }))
      .addCase(fetchCampers.rejected, onError);
  },
});

export const { setNextPage } = campersSlice.actions;

export default campersSlice.reducer;
