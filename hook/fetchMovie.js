import { useState, useEffect } from "react";
import axios from "axios";

const API_TOKEN = process.env.API_TOKEN;

const fetchMovie = (id) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization: API_TOKEN,
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);

      const image = "https://image.tmdb.org/t/p/original";

      response.data.poster_path = image + response.data.poster_path;
      response.data.backdrop_path = image + response.data.backdrop_path;

      setData(response.data);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default fetchMovie;
