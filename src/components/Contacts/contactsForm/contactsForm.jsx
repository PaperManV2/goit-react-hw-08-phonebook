import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../redux/contactSlices';
import css from './contactsForm.module.css';
import axios from 'axios';

export const ContactForm = () => {
  const dispatch = useDispatch();
  
  const accountId = localStorage.getItem('accountId');

  const contacts = useSelector(state => state.contacts['items']);

  const [contact, setContact] = useState({
    name: '',
    phone: '',
  });

  const checkIfExist = () => {
    for( let item of contacts) {
      if(item.phone === contact.phone) {
        return true;
      }
    }
    return false;
  }

  
  const handleSubmit = async e => {
    e.preventDefault();
    if(!checkIfExist()) {
      dispatch(addContact(contact.name, contact.phone));
      const response = await axios.post(
        `https://64d8c6245f9bf5b879ce8b5a.mockapi.io/accounts/${accountId}/contacts`,
        {
          phone: contact.phone,
          name: contact.name,
        }
      );
      if(response.status === 200 ||response.status === 201) {
        window.location.replace(window.location.href)
      }
    } else {
      console.log("The phone number is already saved in Data Base")
    }
  };

  const handleInputsChange = e => {
    setContact(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
      <input
        name="name"
        placeholder="Name"
        onChange={handleInputsChange}
        className={css.name}
        pattern="^[A-Za-z.'\- ]+$"
      ></input>
      <input
        name="phone"
        placeholder="Phone Number"
        onChange={handleInputsChange}
        className={css.phone}
        pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
      ></input>
      <input type="submit" value="Add" className={css.submit} />
    </form>
  );
};
