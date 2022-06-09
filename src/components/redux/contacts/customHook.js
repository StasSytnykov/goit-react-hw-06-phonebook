import { useDispatch, useSelector } from 'react-redux';
import { contactsActions } from '.';
import { getContact, onFilterChange } from './contactsSlice';

export const useContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const onAddContact = contact => dispatch(contactsActions.addContact(contact));
  const onDeleteContact = contactId =>
    dispatch(contactsActions.deleteContact(contactId));

  return { contacts, addContact: onAddContact, deleteContact: onDeleteContact };
};

export const useFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(onFilterChange);
  const onChangeFilter = changeFilter =>
    dispatch(contactsActions.changeFilter(changeFilter));

  return { filter, changeFilter: onChangeFilter };
};
