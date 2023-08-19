import css from './Home.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  let login = useSelector(state => state.contacts['accountId']);
  let userUI = `/accounts/${login}/contacts`;
  return (
    <section className={css.container}>
      <h1>Phone Book</h1>
      <ul className={css.list}>
        <li className={css.listItem}>
          <button>
            {login ? (
              <Link to={userUI}>Contacts</Link>
            ) : (
              <Link to="/login">Contacts</Link>
            )}
          </button>
        </li>
        <li className={css.listItem}>
          <button>
            <Link to="/register">Register</Link>
          </button>
        </li>
        <li className={css.listItem}>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Home;
