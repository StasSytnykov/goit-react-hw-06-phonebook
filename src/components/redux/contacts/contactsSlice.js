import { combineReducers, createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'items',
  initialState: [],
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
console.log(contactSlice.actions);

export const { addContact, deleteContact } = contactSlice.actions;
export const { changeFilter } = filterSlice.actions;

export default appReducer;
