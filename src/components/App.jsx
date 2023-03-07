import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import { settingItem } from '../helpers/localStorageFunc';
import { gettingItem } from '../helpers/localStorageFunc';

const App = () => {
  const [contacts, setContacts] = useState(() => gettingItem('contacts') ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    settingItem('contacts', contacts);
  }, [contacts]);

  const onAddContact = contact => {
    if (contacts.some(c => c.name === contact.name)) {
      alert('This contact is already in the Phonebook');
      return false;
    }

    const finalContact = {
      id: nanoid(),
      ...contact,
    };

    setContacts(prevState => [finalContact, ...prevState]);
    return true;
  };

  const onRemoveContact = contactName => {
    setContacts(prevState =>
      prevState.filter(contact => contact.name !== contactName)
    );
  };

  const onFilterContacts = e => {
    setFilter(e.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div
      style={{
        marginLeft: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <h2>Phonebook</h2>
      <Phonebook
        onAddContact={onAddContact}
        onRemoveContact={onRemoveContact}
      />
      <Filter onFilterContacts={onFilterContacts} />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <i>-- no contacts here --</i>
      ) : (
        <ContactList
          contacts={filteredContacts}
          onRemoveContact={onRemoveContact}
        />
      )}
    </div>
  );
};

export default App;
