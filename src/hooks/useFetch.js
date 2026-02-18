import { useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    fetch(url)
      .then(response => {
        if (!response.ok) {
          setError(error);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        setError(error);
      }).finally(() => {
        setLoading(false);
      })
  }, [url]);

  return { data, loading, error };

}


// consuming this hook
// const { data, loading, error } = useFetch("www.bla.com/movies");