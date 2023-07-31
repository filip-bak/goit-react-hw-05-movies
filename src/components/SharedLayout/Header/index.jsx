import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <NavLink className={styles['nav-link']} to={'/'}>
          Home
        </NavLink>
        <NavLink className={styles['nav-link']} to={'/movies'}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
