import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import useFetch from 'hooks/useFetch';

import MovieList from 'components/MovieList';
import SearchBar from './SearchBar';
import Spinner from 'components/Spinner';
import ErrorPage from 'pages/ErrorPage';

const Movies = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const baseValue = location.state !== null ? location.state?.searchQuery : '';

  const [query, setQuery] = useState(baseValue);

  const {
    data: movies,
    isLoading,
    error,
    updateParams,
  } = useFetch({
    url: '/search/movie',
    initialParams: { query: query },
  });

  function handleSubmit(query) {
    setQuery(query);
    updateParams({ query });
  }

  useEffect(() => {
    // Reset state after page refresh
    navigate();
  }, [navigate]);

  if (error) return <ErrorPage />;

  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} storedQuery={query} />

      <Spinner loading={isLoading}>
        <MovieList movies={movies} searchQuery={query} />
      </Spinner>
    </div>
  );
};

export default Movies;
