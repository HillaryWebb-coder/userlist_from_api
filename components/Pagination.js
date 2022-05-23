import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Pagination({
  page,
  pageForward,
  pageBackward,
  maxPages
}) {
  return (
    <div className="pagination">
      <button
        className="btn mobile-pagination"
        onClick={pageBackward}
        disabled={page <= 1 ? true : false}
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="mobile-pagination"
          color="white"
        />
      </button>
      <button
        className="btn desktop-pagination"
        onClick={pageBackward}
        disabled={page <= 1 ? true : false}
      >
        Previous
      </button>
      <p>
        {page}/{maxPages}
      </p>
      <button
        className="btn mobile-pagination"
        onClick={pageForward}
        disabled={page >= maxPages ? true : false}
      >
        <FontAwesomeIcon
          icon={faAngleRight}
          className="mobile-pagination"
          color="white"
        />
      </button>
      <button
        className="btn desktop-pagination"
        onClick={pageForward}
        disabled={page >= maxPages ? true : false}
      >
        Next
      </button>
    </div>
  );
}
