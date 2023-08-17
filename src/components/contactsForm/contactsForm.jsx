import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlices';
import css from './contactsForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const [contact, setContact] = useState({
    name: '',
    phone: '',
  });

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addContact(contact.name, contact.phone));
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
      ></input>
      <input
        name="phone"
        placeholder="Phone Number"
        onChange={handleInputsChange}
        className={css.phone}
      ></input>
      <input type="submit" value="Add" className={css.submit}></input>
    </form>
  );
};
