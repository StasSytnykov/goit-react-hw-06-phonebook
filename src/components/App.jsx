import { useEffect } from 'react';
import { useContacts } from '../hooks/contactsHook';
import { ContactsList } from './ContactsList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import * as localStorage from '../utils/localStorage';
import style from './AppContainer.module.css';

const CONTACTS_KEY = 'contacts';

export const App = () => {
  const { contacts } = useContacts();

  useEffect(() => {
    localStorage.save(CONTACTS_KEY, contacts);
  }, [contacts]);

  return (
    <div className={style.appContainer}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
