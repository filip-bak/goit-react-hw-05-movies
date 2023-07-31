import styles from './ReviewsNotFound.module.css';

const ReviewsNotFound = () => {
  return (
    <p className={styles.text}>
      Currently, no reviews are available for this movie. Please check back
      later for updates.
    </p>
  );
};

export default ReviewsNotFound;
