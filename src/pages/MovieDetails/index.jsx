import { Outlet, useLocation, useParams } from 'react-router-dom';

import useFetch from 'hooks/useFetch';

import Spinner from 'components/Spinner';
import MovieInfo from 'pages/MovieDetails/MovieInfo';
import BackButton from 'components/BackButton';
import MovieInfoButtons from './MovieInfoButtons';
import ErrorPage from 'pages/ErrorPage';

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
      {isLoading && !movie ? (
        <Spinner position="center" />
      ) : (
        <>
          <MovieInfo movie={movie} />
          <MovieInfoButtons />

          <Outlet />
        </>
      )}
    </div>
  );
};

export default MovieDetails;
