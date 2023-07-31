import PropTypes from 'prop-types';
import { PulseLoader } from 'react-spinners';

const Spinner = ({ position = 'left' }) => {
  return (
    <PulseLoader
      color="#ce3d3d"
      cssOverride={{
        textAlign: position,
      }}
    />
  );
};

Spinner.propTypes = {
  position: PropTypes.oneOf(['left', 'center', 'right']),
};

export default Spinner;
