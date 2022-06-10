import { useEffect } from 'react';
import { useContacts } from '../hooks/contactsHook';
import { ContactsList } from './ContactsList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import * as localStorage from '../utils/localStorage';
import style from './AppContainer.module.css';

const CONTACTS_KEY = 'contacts';

export const App = () => {
  const { contacts, filter, addContact, changeFilter } = useContacts();

  useEffect(() => {
    localStorage.save(CONTACTS_KEY, contacts);
  }, [contacts]);

  const onAddContact = contact => {
    if (contacts && contacts.some(item => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    addContact(contact);
  };

  const onChangeFilter = event => {
    changeFilter(event.currentTarget.value);
  };

  return (
    <div className={style.appContainer}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactsList />
    </div>
  );
};
