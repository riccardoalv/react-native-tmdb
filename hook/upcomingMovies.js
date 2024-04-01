import { useState, useEffect } from "react";
import axios from "axios";

const API_TOKEN = process.env.API_TOKEN;

const upcomingMovies = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization: API_TOKEN,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      const image = "https://image.tmdb.org/t/p/original";

      response.data.results.map((item) => {
        item.poster_path = image + item.poster_path;
        item.backdrop_path = image + item.backdrop_path;
      });

      setData(response.data.results);

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

export default upcomingMovies;
