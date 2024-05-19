// import { createSelector } from '@reduxjs/toolkit';

// * campers

export const getCampers = (state) => state.campers.items;

export const isLoadingCampers = (state) => state.campers.isLoading;

// * filter

export const getLocationFilter = (state) => state.filter.location;

export const getEquipmentItemsFilter = (state) => state.filter.equipmentItems;

export const getVehicleTypeFilter = (state) => state.filter.vehicleType;
