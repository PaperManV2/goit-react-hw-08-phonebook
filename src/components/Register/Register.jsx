import axios from 'axios';
import css from './Register.module.css';
import { useState } from 'react';
const Register = () => {
  const CheckDataBaseHandler = async () => {
    try {
      const response = await axios.get(
        'https://64d8c6245f9bf5b879ce8b5a.mockapi.io/accounts'
      );

      const data = response.data;
      const id = data.length + 1;
      const conditionMet = await data.some(
        element => element['email'] === account.email.trim()
      );
      return {
        condition: conditionMet,
        id: id,
      };
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
      <h1>Register</h1>
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
          onClick={async e => {
            e.preventDefault();

            try {
              const data = await CheckDataBaseHandler();

              if (!data.condition) {
                await axios.post(
                  'https://64d8c6245f9bf5b879ce8b5a.mockapi.io/accounts',
                  {
                    email: account.email,
                    password: account.password,
                  }
                );
                localStorage.setItem('accountId', data.id);
                window.location.replace(
                  `/goit-react-hw-08-phonebook/${data.id}/contacts`
                );
              } else {
                console.log('Data not available or condition not met.');
              }
            } catch (error) {
              console.error('Error:', error);
            }
          }}
        ></input>
      </form>
    </section>
  );
};

export default Register;
