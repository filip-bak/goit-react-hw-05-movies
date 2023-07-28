import { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const useFetch = ({ url, params, array }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const allParams = new URLSearchParams({
    api_key: '8ffc049be01c9ac683da541d3958668c',
    ...params,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${url}?${allParams}`);
      setData(response.data);
    };

    try {
      setIsLoading(true);
      if (params?.query === '') {
        setData(null);
        return;
      }
      fetchData();
    } catch (e) {
      setError(e);
      setData(null);
    } finally {
      setIsLoading(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, array]);

  return { data, isLoading, error };
};

export default useFetch;
