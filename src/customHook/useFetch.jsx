import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    };

    fetchData(url).catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  }, [url]);

  return { loading, data, error };
};

export default useFetch;
