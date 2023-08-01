import PropTypes from 'prop-types';
import { BeatLoader } from 'react-spinners';

const PageLoader = ({ color = '#4169e1' }) => {
  return (
    <BeatLoader
      color={color}
      cssOverride={{ position: 'absolute', right: '40px', top: '21px' }}
      speedMultiplier={1.2}
    />
  );
};

PageLoader.propTypes = { color: PropTypes.string };

export default PageLoader;
