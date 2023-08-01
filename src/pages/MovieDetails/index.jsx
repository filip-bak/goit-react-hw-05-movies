import { Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import useFetch from 'hooks/useFetch';

import Spinner from 'components/Spinner';
import MovieInfo from 'pages/MovieDetails/MovieInfo';
import BackButton from 'components/BackButton';
import MovieInfoButtons from './MovieInfoButtons';
import ErrorPage from 'pages/ErrorPage';
import PageLoader from 'components/PageLoader';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();

  const {
    data: movie,
    isLoading,
    error,
  } = useFetch({
    url: `/movie/${movieId}`,
  });

  if (error) return <ErrorPage />;

  return (
    <div className="container">
      <BackButton query={location.state?.searchQuery} />

      <MovieInfo movie={movie} />
      <MovieInfoButtons />

      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
