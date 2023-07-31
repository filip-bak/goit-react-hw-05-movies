import React from 'react';
import PropTypes from 'prop-types';

import styles from './ReviewCards.module.css';

const ReviewCards = ({ reviews }) => {
  return (
    <ul className={styles.list}>
      {reviews?.results.map(({ id, author, content }) => (
        <li key={id} className={styles.item}>
          <h4 className={styles.author}>Author: {author}</h4>
          <p className={styles.content}>{content}</p>
        </li>
      ))}
    </ul>
  );
};

ReviewCards.propTypes = {
  reviews: PropTypes.shape({
    id: PropTypes.number,
    page: PropTypes.number,
    results: PropTypes.arrayOf(PropTypes.object),
    total_pages: PropTypes.number,
    total_results: PropTypes.number,
  }),
};

export default ReviewCards;
