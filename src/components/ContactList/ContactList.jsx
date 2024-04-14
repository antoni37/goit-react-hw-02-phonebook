import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './contactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <ul className={css.contactList}>
        {contacts.map(contact => (
          <li className={css.contactItem} key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.number}</span>
            <button
              className={css.deleteButton}
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;