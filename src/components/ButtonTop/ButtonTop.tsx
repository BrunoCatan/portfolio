import { useState } from "react";
import "../ButtonTop/ButtonTop.css";
import { BsArrowUpCircle } from "react-icons/bs";

export function ButtonTop() {
  const [pageYPosition, setPageYPosition] = useState(0);

  function getPageYAfterScroll() {
    setPageYPosition(window.scrollY);
  }

  window.addEventListener("scroll", getPageYAfterScroll);
  return (
    <div>
      {pageYPosition > 50 && (
        <a href="#top" className="ButtonTop">
          <BsArrowUpCircle className="ButtonIcon" />
        </a>
      )}
    </div>
  );
}
