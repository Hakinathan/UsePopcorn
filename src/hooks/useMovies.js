import { useState, useEffect } from "react";
import { KEY } from "../config";

/**
 * A custom hook that fetches movies from the OMDb API based on a search query.
 * @param {string} query - The search query to fetch movies for.
 * @returns {Object} An object containing the fetched movies, a boolean indicating if the data is being loaded, and an error message if there was an error fetching the data.
 */
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();

          if (data.Response === "False") throw new Error(data.Error);

          setMovies(data.Search);
          setError("");
        } catch (error) {
          if (error.name !== "AbortError") setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      // Cleanup function to abort fetch request if query changes before fetch is complete
      return () => controller.abort();
    },
    [query]
  );

  return { movies, isLoading, error };
}
