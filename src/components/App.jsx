import { ContactForm } from './contactsForm/contactsForm';
import ContactsList from './ContactsList/ContactsList';
import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/:accountId/contacts"
        element={
          <div className={css.container}>
            <div className={css.app}>
              <h1>Phone Book</h1>
              <ContactForm />
              <ContactsList />
            </div>
          </div>
        }
      ></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};
