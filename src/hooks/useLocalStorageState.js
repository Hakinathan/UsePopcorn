import { useState, useEffect } from "react";

/**
 * A custom React hook that returns a stateful value and a function to update it,
 * which are stored in the browser's localStorage and persist across page refreshes.
 *
 * @param {[*]} initialState - The initial state value.
 * @param {string} key - The key to use when storing the state in localStorage.
 * @returns {[*, Function]} - An array containing the current state value and a function to update it.
 */
export function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  // Effect to save watched movies to localStorage with Watched value in dependency array
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
