import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook/" element={<Home />}></Route>
      <Route
        path="/goit-react-hw-08-phonebook/:accountId/contacts"
        element={<Contacts />}
      ></Route>
      <Route
        path="/goit-react-hw-08-phonebook/register"
        element={<Register />}
      ></Route>
      <Route
        path="/goit-react-hw-08-phonebook/login"
        element={<Login />}
      ></Route>
    </Routes>
  );
};
