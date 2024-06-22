import {useEffect, useState} from 'react';

function useFetch(url, interval = null) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();

    // Set up interval if interval is provided and valid
    let intervalId;
    if (interval && typeof interval === 'number' && interval > 0) {
      intervalId = setInterval(fetchData, interval);
    }

    // Clean up interval on component unmount
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [url, interval]);

  return {data, error};
}

export default useFetch;
