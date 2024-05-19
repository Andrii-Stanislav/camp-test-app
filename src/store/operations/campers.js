import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCampers } from '../../api/campers';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async ({ page, limit }) => {
    const { data } = await getCampers({ page, limit });

    return data;
  },
);
