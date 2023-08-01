import { useState } from "react";

/**
 * A collapsible box component that can be toggled open and closed.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to display inside the box.
 * @returns {JSX.Element} - The rendered Box component.
 */
export default function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
