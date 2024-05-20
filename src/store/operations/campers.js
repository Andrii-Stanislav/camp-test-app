import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCampers } from '../../api/campers';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async ({ limit, location, equipmentItems, vehicleType }) => {
    const { data } = await getCampers({
      limit,
      location,
      equipmentItems,
      vehicleType,
    });

    return data;
  },
);
