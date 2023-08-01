import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useFetch from 'hooks/useFetch';

import Spinner from 'components/Spinner';
import ReviewCards from './ReviewCards';
import ReviewsNotFound from './ReviewsNotFound';
import ErrorPage from 'pages/ErrorPage';

const Reviews = () => {
  const { movieId } = useParams();

  const {
    data: reviews,
    isLoading,
    error,
  } = useFetch({
    url: `/movie/${movieId}/reviews`,
  });

  useEffect(() => {
    // Reviews button styling
    const buttons = document.querySelector('[data-info="reviews"]');
    buttons.classList.add('active-btn');

    return () => {
      buttons.classList.remove('active-btn');
    };
  }, []);

  const isEmpty = reviews?.results.length === 0;

  if (error) return <ErrorPage />;

  return (
    <div>
      <Spinner loading={isLoading} position="center">
        {isEmpty ? <ReviewsNotFound /> : <ReviewCards reviews={reviews} />}
      </Spinner>
    </div>
  );
};

export default Reviews;
