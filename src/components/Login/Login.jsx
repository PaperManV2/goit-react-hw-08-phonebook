import css from './Login.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAccountId } from '../../redux/contactSlices';

const Login = () => {
  const dispatch = useDispatch();

  const CheckDataBaseHandler = async () => {
    const response = await axios.get(
      'https://64d8c6245f9bf5b879ce8b5a.mockapi.io/accounts'
    );

    const data = response.data;

    data.forEach(element => {
      if (
        element['email'] === account.email.trim() &&
        element['password'] === account.password.trim()
      ) {
        dispatch(setAccountId(element['id']));
        return element['id'];
      } else {
        return false;
      }
    });
  };

  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const handleInputsChange = e => {
    setAccount(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className={css.container}>
      <h1>Login</h1>
      <form name="registerForm" className={css.form}>
        <label form="registerForm">
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            className={css.emailInput}
            onChange={handleInputsChange}
          ></input>
        </label>
        <label form="registerForm">
          <input
            name="password"
            type="password"
            placeholder="Password"
            className={css.passwordInput}
            onChange={handleInputsChange}
          ></input>
        </label>
        <input
          type="submit"
          className={css.submitInput}
          value="Submit"
          onClick={e => {
            e.preventDefault();
            const data = CheckDataBaseHandler();

            if (data) {
              window.location.replace(`/accounts/${data}/contacts`);
            }
          }}
        ></input>
      </form>
    </section>
  );
};

export default Login;
