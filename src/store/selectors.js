// import { createSelector } from '@reduxjs/toolkit';

// * campers

export const getCampers = (state) => state.campers.items;

export const getCampersPage = (state) => state.campers.page;

export const getCampersLimit = (state) => state.campers.limit;

export const getIsLoadingCampers = (state) => state.campers.isLoading;

export const getShowLoadMoreButton = (state) =>
  state.campers.showLoadMoreButton;

// * filter

export const getLocationFilter = (state) => state.filter.location;

export const getEquipmentItemsFilter = (state) => state.filter.equipmentItems;

export const getVehicleTypeFilter = (state) => state.filter.vehicleType;
