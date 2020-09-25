import React from "react";
import "./Pagination.scss";

const Pagination = ({ transactionsPerPage, totalTransactions, paginate }) => {
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(totalTransactions / transactionsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const handle = (number) => (e) => {
    console.log(pageNumbers);
    const buttons = document.querySelectorAll(".pagination-button");
    for (let button of buttons) {
      button.classList.remove("current-page");
    }
    e.target.classList.add("current-page");
    return paginate(number);
  };

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className="pagination-button"
              onClick={(e) => handle(number)(e)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
