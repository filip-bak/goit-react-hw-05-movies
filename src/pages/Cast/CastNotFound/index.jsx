import styles from './CastNotFound.module.css';

const CastNotFound = () => {
  return (
    <p className={styles.text}>
      Currently, no cast information is available for this movie.
    </p>
  );
};

export default CastNotFound;
