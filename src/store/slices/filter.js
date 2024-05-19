import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  equipmentItems: [],
  vehicleType: null,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeLocation: (state, action) => ({
      ...state,
      location: action.payload,
    }),
    toggleEquipmentItem: (state, action) => ({
      ...state,
      equipmentItems: state.equipmentItems.includes(action.payload)
        ? state.equipmentItems.filter((item) => item !== action.payload)
        : [...state.equipmentItems, action.payload],
    }),

    toggleVehicleType: (state, action) => ({
      ...state,
      vehicleType: action.payload !== state.vehicleType ? action.payload : null,
    }),
  },
});

export const { changeLocation, toggleEquipmentItem, toggleVehicleType } =
  filterSlice.actions;

export default filterSlice.reducer;
