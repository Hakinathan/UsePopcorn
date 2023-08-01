/**
 * A component that displays an error message.
 * @param {string} mess - The error message to display.
 * @returns {JSX.Element} - The JSX code to display the error message.
 */
export default function ErrorMessage({ mess }) {
  return <p className="error">{mess}</p>;
}
