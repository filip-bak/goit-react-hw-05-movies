import { useLocation, useNavigate } from 'react-router-dom';

import styles from './MovieInfoButtons.module.css';

const MovieInfoButtons = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const redirectToCast = e => {
    navigate('cast', {
      state: {
        prevPage: location.state.prevPage,
        searchQuery: location.state?.searchQuery,
      },
    });
  };

  const redirectToReviews = e => {
    navigate('reviews', {
      state: {
        prevPage: location.state.prevPage,
        searchQuery: location.state?.searchQuery,
      },
    });
  };

  return (
    <div className={styles.box}>
      <p className={styles.text}>Additional information</p>
      <button onClick={redirectToCast} className={styles.btn} data-info="cast">
        Cast
      </button>
      <button
        onClick={redirectToReviews}
        className={styles.btn}
        data-info="reviews"
      >
        Reviews
      </button>
    </div>
  );
};

export default MovieInfoButtons;
