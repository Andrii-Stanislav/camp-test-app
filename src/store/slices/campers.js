import { createSlice } from '@reduxjs/toolkit';

import { fetchCampers } from '../operations/campers';

const PAGE_SIZE = 4;

const initialState = {
  items: [],
  page: 1,
  limit: PAGE_SIZE,
  hideLoadMoreButton: false,
  totalItems: 0,
  isLoading: false,
};

export const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    setFirstPage: (state) => ({
      ...state,
      page: 1,
      limit: PAGE_SIZE,
    }),
    setNextPage: (state) => ({
      ...state,
      page: state.page + 1,
      limit: state.limit + PAGE_SIZE,
    }),
  },
  extraReducers: (builder) => {
    builder
      // * fetchCampers
      .addCase(fetchCampers.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(fetchCampers.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        items: action.payload,
        hideLoadMoreButton:
          state.page > 1 && action.payload?.length === state.items?.length,
      }))
      .addCase(fetchCampers.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        items: [],
      }));
  },
});

export const { setFirstPage, setNextPage } = campersSlice.actions;

export default campersSlice.reducer;
