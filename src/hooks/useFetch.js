import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const useFetch = ({ url, initialParams = {} }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [params, updateParams] = useState(initialParams);
  const prevQueryRef = useRef(null);

  const allParams = new URLSearchParams({
    api_key: process.env.REACT_APP_API_KEY,
    ...params,
  });

  const isSameData = prevQueryRef?.current === params?.query;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}?${allParams}`, { signal });
        console.log('API: ', response.data);
        setData(response.data);
        prevQueryRef.current = params?.query;
      } catch (err) {
        if (err.name === 'CanceledError') {
          setIsLoading(true);
          console.log('Request aborted');
        } else {
          setError(err);
          console.log(err);
          setData(null);
        }
      } finally {
        setIsLoading(false);
      }
    };

    // if search query is "" then reset data and skip fetch request
    if (!url || params?.query === '') {
      setData(null);
      prevQueryRef.current = null;
      setIsLoading(false);
      return;
    }
    // if data is the same as previous, skip fetch request
    if (isSameData) {
      setIsLoading(false);
      return;
    }

    fetchData();

    return () => {
      controller?.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, params]);

  return { data, error, isLoading, updateParams };
};

export default useFetch;
