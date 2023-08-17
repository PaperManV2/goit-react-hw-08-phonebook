import { ContactForm } from './contactsForm/contactsForm';
import ContactsList from './ContactsList/ContactsList';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <div className={css.app}>
        <h1>Phone Book</h1>
        <ContactForm />
        <ContactsList />
      </div>
    </div>
  );
};
