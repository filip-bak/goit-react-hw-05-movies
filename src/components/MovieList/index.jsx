import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './MovieList.module.css';

const MovieList = ({ movies, searchQuery }) => {
  return (
    <ul className={styles.list}>
      {movies?.results.map(({ id, title }) => (
        <li className={styles.item} key={id}>
          <Link
            to={`/movies/${id}`}
            state={{ prevPage: window.location.pathname, searchQuery }}
            className={styles.link}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.shape({
    page: PropTypes.number,
    results: PropTypes.arrayOf(PropTypes.object).isRequired,
    total_pages: PropTypes.number,
    total_results: PropTypes.number,
  }),
  searchQuery: PropTypes.string,
};

export default MovieList;
