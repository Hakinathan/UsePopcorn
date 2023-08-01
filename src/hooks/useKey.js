import { useEffect } from "react";

/**
 * A custom hook that executes a callback when a key is pressed.
 * @param {string} key - The key to listen for.
 * @param {Function} callback - The callback to execute when the key is pressed.
 */
export function useKey(key, callback) {
  useEffect(() => {
    const handler = function (event) {
      if (event.code.toLowerCase() === key.toLowerCase()) {
        callback();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });
}
