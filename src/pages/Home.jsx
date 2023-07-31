import useFetch from 'hooks/useFetch';

import MovieList from 'components/MovieList';
import Spinner from 'components/Spinner';
import ErrorPage from './ErrorPage';

const Home = () => {
  const {
    data: movies,
    isLoading,
    error,
  } = useFetch({ url: '/trending/movie/day' });

  if (error) return <ErrorPage />;

  return (
    <div className="container">
      <h1>Trending today</h1>
      {isLoading && <Spinner />}
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
