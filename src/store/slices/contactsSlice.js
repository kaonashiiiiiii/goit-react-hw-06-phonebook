import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  filter: ''
}

const heroesSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    contactCreated: (state, action) => {
      state.contacts = [...state.contacts, action.payload]
    },
    contactDeleted: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    }
  }
})

const { actions, reducer } = heroesSlice

export default reducer;

export const {
  setContacts,
  setFilter,
  contactCreated,
  contactDeleted 
} = actions