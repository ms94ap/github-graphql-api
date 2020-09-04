import React from "react";
import "../css/pagination.css";

function Pagination({ reposPerPage, totalRepos, paginate, currentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <ul className="pagination-list">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`pagination-list-item ${
              currentPage !== number ? "active" : "pagination-item-current-page"
            } `}
          >
            <a
              onClick={() => paginate(number)}
              href="!#"
              className={`pagination-list-item-number ${
                currentPage === number && "pagination-number-current-page"
              }`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
