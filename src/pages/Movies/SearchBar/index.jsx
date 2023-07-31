import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit, storedQuery }) => {
  const [searchQuery, setSearchQuery] = useState(storedQuery);

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(searchQuery);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={searchQuery}
        placeholder="Search movies"
        autoComplete="off"
        onChange={e => setSearchQuery(e.target.value)}
        name="movieName"
        type="text"
      />
      <button className={styles.btn} type="submit"></button>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  storedQuery: PropTypes.string,
};

export default SearchBar;
