import React from 'react';
import PropTypes from 'prop-types';
import { getImagePath } from 'utils/getImagePath';

import styles from './CastCards.module.css';

const CastCards = ({ staff }) => {
  return (
    <ul className={styles.list}>
      {staff?.cast.map(({ id, name, character, profile_path }, i) => (
        <li key={`${id}${i}`} className={styles.item}>
          {profile_path !== null ? (
            <img
              className={styles.img}
              src={getImagePath({ size: 200, path: profile_path })}
              alt=""
            />
          ) : (
            <div className={styles.placeholder}></div>
          )}

          <p className={styles.name}>{name || '???'}</p>
          <p className={styles.character}>Charakter: {character || '???'}</p>
        </li>
      ))}
    </ul>
  );
};

CastCards.propTypes = {
  staff: PropTypes.shape({
    cast: PropTypes.arrayOf(PropTypes.object),
    crew: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.number,
  }),
};

export default CastCards;
