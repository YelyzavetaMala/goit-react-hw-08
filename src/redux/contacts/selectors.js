export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters.name;
import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);
