import { useNavigate } from 'react-router-dom';

import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleRedirectBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Oops! An Error Occurred</h2>
      <p className={styles.message}>Something went wrong!</p>
      <button className={styles.btn} onClick={handleRedirectBack}>
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
