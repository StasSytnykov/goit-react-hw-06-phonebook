import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsActions } from './redux/contacts';
import { getContact, onFilterChange } from './redux/contacts/contactsSlice';
import { ContactsList } from './ContactsList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import * as localStorage from './utils/localStorage';
import style from './AppContainer.module.css';

const CONTACTS_KEY = 'contacts';

export const App = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(onFilterChange);
  const dispatch = useDispatch();
  console.log(contacts);

  useEffect(() => {
    localStorage.save(CONTACTS_KEY, contacts);
  }, [contacts]);

  const onAddContact = contact => {
    if (contacts && contacts.some(item => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    dispatch(contactsActions.addContact(contact));
  };

  const onDeleteContact = contactId => {
    dispatch(contactsActions.deleteContact(contactId));
  };

  const onChangeFilter = event => {
    dispatch(contactsActions.changeFilter(event.currentTarget.value));
  };

  const getAddedContacts = () => {
    const toLowerCaseFilter = filter.toLocaleLowerCase();
    if (!contacts) {
      return;
    }
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(toLowerCaseFilter)
    );
  };

  return (
    <div className={style.appContainer}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactsList
        contactsArr={getAddedContacts()}
        deleteContact={onDeleteContact}
      />
    </div>
  );
};
