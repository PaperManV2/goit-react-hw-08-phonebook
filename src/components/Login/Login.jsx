import css from './Login.module.css';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
  const CheckDataBaseHandler = async () => {
    try {
      const response = await axios.get(
        'https://64d8c6245f9bf5b879ce8b5a.mockapi.io/accounts'
      );

      const data = response.data;

      for (const element of data) {
        if (
          element['email'] === account.email.trim() &&
          element['password'] === account.password.trim()
        ) {
          localStorage.setItem('accountId', element['id']);
          return element['id'];
        }
      }

      return false; // No match found
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to be caught by the caller
    }
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
      <form name="loginForm" className={css.form}>
        <label form="loginForm">
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            className={css.emailInput}
            onChange={handleInputsChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          ></input>
        </label>
        <label form="loginForm">
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
            CheckDataBaseHandler()
              .then(data => {
                console.log(data);

                if (data) {
                  window.location.replace(
                    `/goit-react-hw-08-phonebook/${data}/contacts`
                  );
                } else {
                  console.log('Data not available or condition not met.');
                }
              })
              .catch(error => {
                console.error('Error fetching data:', error);
              });
          }}
        ></input>
      </form>
    </section>
  );
};

export default Login;
