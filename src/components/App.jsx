import { useState, useEffect } from 'react';
import { ContactsList } from './ContactsList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import * as localStorage from './utils/localStorage';
import style from './AppContainer.module.css';

const CONTACTS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(localStorage.read(CONTACTS_KEY));
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.save(CONTACTS_KEY, contacts);
  }, [contacts]);

  const onAddContact = contact => {
    if (contacts.some(item => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts(prevState => {
      return [...prevState, contact];
    });
  };

  const onDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const onChangeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getAddedContacts = () => {
    const toLowerCaseFilter = filter.toLocaleLowerCase();
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
