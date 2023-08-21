import css from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  let login = localStorage.getItem('accountId');
  let userUI = `/goit-react-hw-08-phonebook${login}/contacts`;

  return (
    <section className={css.container}>
      <h1>Phone Book</h1>
      <ul className={css.list}>
        <li className={css.listItem}>
          <button>
            {login ? (
              <Link to={userUI}>Contacts</Link>
            ) : (
              <Link to="/goit-react-hw-08-phonebook/login">Contacts</Link>
            )}
          </button>
        </li>
        <li className={css.listItem}>
          <button>
            <Link to="/goit-react-hw-08-phonebook/register">Register</Link>
          </button>
        </li>
        <li className={css.listItem}>
          <button>
            {login ? (
              <Link to={userUI}>Login</Link>
            ) : (
              <Link to="/goit-react-hw-08-phonebook/login">Login</Link>
            )}
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Home;
