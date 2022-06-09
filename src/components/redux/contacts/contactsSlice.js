import { combineReducers, createSlice } from '@reduxjs/toolkit';
import * as localStorage from '../../utils/localStorage';

const CONTACTS_KEY = 'contacts';

// Slice

const contactSlice = createSlice({
  name: 'contacts',
  initialState: localStorage.read(CONTACTS_KEY)
    ? localStorage.read(CONTACTS_KEY)
    : [],
  reducers: {
    addContact: (state, action) => [...state, action.payload],
    deleteContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: { changeFilter: (_, action) => action.payload },
});

const appReducer = combineReducers({
  [contactSlice.name]: contactSlice.reducer,
  [filterSlice.name]: filterSlice.reducer,
});

// Actions

export const { addContact, deleteContact } = contactSlice.actions;
export const { changeFilter } = filterSlice.actions;

// Selectors

export const getContact = state => state.contacts;
export const onFilterChange = state => state.filter;

// Hooks

export default appReducer;
