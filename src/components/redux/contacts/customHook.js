import { useDispatch, useSelector } from 'react-redux';
import { contactsActions } from '.';
import { getContact, onFilterChange } from './contactsSlice';

export const useContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const filter = useSelector(onFilterChange);
  const onAddContact = contact => dispatch(contactsActions.addContact(contact));
  const onDeleteContact = contactId =>
    dispatch(contactsActions.deleteContact(contactId));
  const onChangeFilter = changeFilter =>
    dispatch(contactsActions.changeFilter(changeFilter));

  return {
    contacts,
    filter,
    addContact: onAddContact,
    deleteContact: onDeleteContact,
    changeFilter: onChangeFilter,
  };
};
