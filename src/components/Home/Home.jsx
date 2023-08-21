import css from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  let login = localStorage.getItem('accountId');
  let userUI = `/phoneBook-7${login}/contacts`;

  return (
    <section className={css.container}>
      <h1>Phone Book</h1>
      <ul className={css.list}>
        <li className={css.listItem}>
          <button>
            {login ? (
              <Link to={userUI}>Contacts</Link>
            ) : (
              <Link to="/phoneBook-7/login">Contacts</Link>
            )}
          </button>
        </li>
        <li className={css.listItem}>
          <button>
            <Link to="/phoneBook-7/register">Register</Link>
          </button>
        </li>
        <li className={css.listItem}>
          <button>
            {login ? (
              <Link to={userUI}>Login</Link>
            ) : (
              <Link to="/phoneBook-7/login">Login</Link>
            )}
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Home;
