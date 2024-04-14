import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './app.module.css';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import contacts from 'contacts.json';

class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };

  addContact = contact => {
    const { name } = contact;
    const lowerCaseName = name.toLowerCase();
    const isNameUnique = !this.state.contacts.some(
      existingContact => existingContact.name.toLowerCase() === lowerCaseName
    );

    if (isNameUnique) {
      const id = nanoid();
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { ...contact, id }],
      }));
      this.setState({ name: '', number: '' });
    } else {
      alert(`${name} is already in contacts.`);
    }
  };

  handleAddContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  filterContacts = filter => {
    this.setState({ filter });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onFilter={this.filterContacts} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;
