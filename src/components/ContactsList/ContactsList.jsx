import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactSlices';
import css from './ContactsList.module.css';
import { fetchItems } from '../../redux/operation';

const ContactsList = () => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts['items']);

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contact}>
          <span className={css.name}>{contact.name}</span>
          <span className={css.phone}>{contact.phone}</span>
          <button
            className={css.delete}
            onClick={() => {
              handleDelete(contact.id);
            }}
          >
            Delete Contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
