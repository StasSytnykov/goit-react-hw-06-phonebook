import { ContactListItem } from './ContactListItem';
import { useContacts } from '../../hooks/contactsHook';

export const ContactsList = () => {
  const { contacts, filter, deleteContact } = useContacts();

  const getAddedContacts = () => {
    const toLowerCaseFilter = filter.toLocaleLowerCase();
    if (!contacts) {
      return;
    }
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(toLowerCaseFilter)
    );
  };

  const filterContact = getAddedContacts();

  return (
    <div>
      <ul>
        {filterContact &&
          filterContact.map(({ name, number, id }) => (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              id={id}
              deleteContact={deleteContact}
            />
          ))}
      </ul>
    </div>
  );
};
