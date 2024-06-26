import { useState, useEffect } from "react";
import axios from "axios";

const API_TOKEN = process.env.API_TOKEN;

const fetchReviews = (id) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,

    headers: {
      accept: "application/json",
      Authorization: API_TOKEN,
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);

      const image = "https://image.tmdb.org/t/p/original";

      response.data.results.map((item) => {
        item.author_details.avatar_path == null
          ? (item.author_details.avatar_path =
            "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png")
          : (item.author_details.avatar_path =
            image + item.author_details.avatar_path);
      });

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

export default fetchReviews;
