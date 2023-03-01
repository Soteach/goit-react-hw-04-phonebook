import { InputForm } from './ContactForm/ContactForm';
import { useState, useEffect } from 'react';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Container, Header, Title, InputSection } from './App.styled';

const LOCAL_API_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_API_KEY)) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(LOCAL_API_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const checkContactAvailability = newData => {
    return contacts.find(
      ({ name }) => name.toLowerCase() === newData.name.toLowerCase()
    );
  };

  const formSubmitHandler = newData => {
    newData.id = nanoid();
    if (checkContactAvailability(newData)) {
      alert(`${newData.name} is already in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, newData]);
  };

  const contactDeleteHandler = contactId => {
    const filteredContacts = contacts.filter(({ id }) => {
      return id !== contactId;
    });

    setContacts(filteredContacts);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normilizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizeFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

  return (
    <Container>
      <Header>PhoneBook</Header>
      <InputSection>
        <InputForm onSubmit={formSubmitHandler} />
      </InputSection>
      {contacts.length > 0 && <Title>Contacts</Title>}
      {contacts.length > 0 && (
        <Filter filterValue={filter} onValueChange={changeFilter} />
      )}
      <Contacts contacts={visibleContacts} onDelete={contactDeleteHandler} />
    </Container>
  );
};
