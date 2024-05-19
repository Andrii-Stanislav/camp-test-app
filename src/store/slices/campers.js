import { createSlice } from '@reduxjs/toolkit';

import { fetchCampers } from '../operations/campers';

const onPending = (state) => ({ ...state, isLoading: true });

const onError = (state, action) => ({
  ...state,
  isLoading: false,
  error: action?.payload.message,
});

const initialState = {
  items: [],
  totalItems: 0,
  isLoading: false,
  error: null,
};

export const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // * fetchCampers
      .addCase(fetchCampers.pending, onPending)
      .addCase(fetchCampers.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        items: action.payload,
      }))
      .addCase(fetchCampers.rejected, onError);
  },
});

export default campersSlice.reducer;
