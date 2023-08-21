import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  return (
    <Routes>
      <Route path="/phoneBook-7/" element={<Home />}></Route>
      <Route
        path="/phoneBook-7/:accountId/contacts"
        element={<Contacts />}
      ></Route>
      <Route path="/phoneBook-7/register" element={<Register />}></Route>
      <Route path="/phoneBook-7/login" element={<Login />}></Route>
    </Routes>
  );
};
