import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './BackButton.module.css';

const BackButton = ({ query }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectBack = e => {
    if (location.state?.prevPage.includes('/movies')) {
      navigate('/movies', { state: { searchQuery: query } });
      return;
    }
    navigate('/');
  };

  return <button className={styles.btn} onClick={redirectBack}></button>;
};

BackButton.propTypes = { query: PropTypes.string };

export default BackButton;
