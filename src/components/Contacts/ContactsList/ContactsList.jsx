import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../../redux/contactSlices';
import css from './ContactsList.module.css';
import { fetchItems } from '../../../redux/operation';
import axios from 'axios';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts['items']);
  const accountId = localStorage.getItem('accountId');

  const handleDelete = id => {
    dispatch(deleteContact(id));
    axios.delete(
      `https://64d8c6245f9bf5b879ce8b5a.mockapi.io/accounts/${accountId}/contacts/${id}`
    );
  };

  useEffect(() => {
    dispatch(fetchItems(accountId));
  }, [dispatch, accountId]);

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contact}>
          <div className={css.info}>
            <span className={css.name}>{contact.name}</span>
            <span className={css.phone}>{contact.phone}</span>
          </div>
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
