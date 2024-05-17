// import { createSelector } from '@reduxjs/toolkit';

export const getCampers = state => state.campers.items;

// export const getFilter = state => state.filter;

// export const getIsLoadingContacts = state => state.contacts.isLoading;

// export const getContactsLength = state => getContacts(state)?.length;

// export const getFilteredContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) =>
//     (contacts ?? []).filter(
//       ({ name }) => name && name.toLowerCase().includes(filter.toLowerCase())
//     )
// );
