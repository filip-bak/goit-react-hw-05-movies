import PropTypes from 'prop-types';

import { getGenres } from 'utils/getGenres';
import { getYearOfDate } from 'utils/getYear';
import { getImagePath } from 'utils/getImagePath';

import styles from './MovieInfo.module.css';

const MovieInfo = ({ movie }) => {
  return (
    <>
      {movie &&
        [movie].map(
          ({
            id,
            title,
            overview,
            poster_path,
            genres,
            release_date,
            vote_average,
          }) => (
            <div key={`${id}`} className={styles.container}>
              {poster_path && (
                <img
                  className={styles.img}
                  src={getImagePath({ size: 300, path: poster_path })}
                  alt=""
                />
              )}
              <ul className={styles.list}>
                <li className={styles.item}>
                  <h2 className={styles.title}>
                    {title} {getYearOfDate(release_date)}
                  </h2>
                  <p className={styles.description}>
                    UserScore: {Math.floor(vote_average * 10) + '%'}
                  </p>
                </li>
                <li className={styles.item}>
                  <h3 className={styles.subtitle}>Overview </h3>
                  <p className={`${styles.description} ${styles.overview}`}>
                    {overview || 'Overview not available'}
                  </p>
                </li>
                <li className={styles.item}>
                  <h3 className={styles.subtitle}>Genres </h3>
                  <p className={styles.description}>
                    {getGenres(genres) || 'Unknown'}
                  </p>
                </li>
              </ul>
            </div>
          )
        )}
    </>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;
