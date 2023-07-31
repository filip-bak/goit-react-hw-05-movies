import { useParams } from 'react-router-dom';

import useFetch from 'hooks/useFetch';

import Spinner from 'components/Spinner';
import CastCards from './CastCards';
import CastNotFound from './CastNotFound';
import { useEffect } from 'react';
import ErrorPage from 'pages/ErrorPage';

const Cast = () => {
  const { movieId } = useParams();

  const {
    data: staff,
    isLoading,
    error,
  } = useFetch({
    url: `/movie/${movieId}/credits`,
  });

  useEffect(() => {
    // Cast button styling
    const buttons = document.querySelector('[data-info="cast"]');
    buttons.classList.add('active-btn');

    return () => {
      buttons.classList.remove('active-btn');
    };
  }, []);

  const isEmpty = staff?.cast.length === 0;

  if (error) return <ErrorPage />;

  return (
    <div>
      {isLoading ? <Spinner position="center" /> : null}
      {isEmpty ? <CastNotFound /> : <CastCards staff={staff} />}
    </div>
  );
};

export default Cast;
