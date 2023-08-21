import { ContactForm } from './contactsForm/contactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import css from './Contacts.module.css';

let login = localStorage.getItem('accountId');

const handleLogout = () => {
  localStorage.removeItem('accountId');
  window.location.replace('/goit-react-hw-08-phonebook/');
};
export const Contacts = () => {
  return (
    <div className={css.container}>
      <div className={css.app}>
        <h1>Phone Book</h1>
        {login ? (
          <div className={css.logoutContainer}>
            <button className={css.logout} onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          ''
        )}
        <ContactForm />
        <ContactsList />
      </div>
    </div>
  );
};
