import css from './Register.module.css';

const CheckDataBaseHandler = () => {};

const Register = () => {
  return (
    <section className={css.container}>
      <h1>Register</h1>
      <form
        name="registerForm"
        onSubmit={CheckDataBaseHandler}
        className={css.form}
      >
        <label form="registerForm">
          <input
            type="email"
            placeholder="E-mail"
            className={css.emailInput}
          ></input>
        </label>
        <label form="registerForm">
          <input
            type="password"
            placeholder="Password"
            className={css.passwordInput}
          ></input>
        </label>
        <input type="submit" className={css.submitInput} value="Submit"></input>
      </form>
    </section>
  );
};

export default Register;
