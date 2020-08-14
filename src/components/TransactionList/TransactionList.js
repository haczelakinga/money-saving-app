import React from "react";
import "./TransactionList.scss";
import moment from "moment";
import blankList from "./../../assets/undraw_blank_canvas_3rbb.svg";

const TransactionList = ({
  transactions,
  deleteTransaction,
  editTransaction,
}) => {
  const updateTransaction = (clickedInput, uuid) => {
    clickedInput.classList.add("disableInput");
    clickedInput.classList.remove("enableInput");
    const name = clickedInput.name;
    const value = clickedInput.value;

    const info = {
      name,
      value,
      uuid,
    };

    return editTransaction(info);
  };

  const enableInput = (uuid) => (e) => {
    const clickedInput = e.target;
    clickedInput.classList.remove("disableInput");
    clickedInput.classList.add("enableInput");
    clickedInput.removeAttribute("readOnly");

    clickedInput.addEventListener("focusout", (event) => {
      updateTransaction(clickedInput, uuid);
    });

    clickedInput.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        updateTransaction(clickedInput, uuid);
      }
    });
  };

  if (transactions.length > 0) {
    let properDate = (date) => moment(date).format("YYYY-MM-DD");

    return (
      <div className="transactions-list-wrapper">
        <ul className="list-header">
          <li className="transactions-list--item">Transaction Name</li>
          <li>Cost</li>
          <li>Date</li>
          <li>Category</li>
        </ul>
        {transactions.map((transaction) => (
          <ul
            className="transactions-list"
            key={transaction.uuid}
            id={transaction.uuid}
          >
            <li className="transactions-list--item">
              <input
                name={"name"}
                className="disableInput"
                readOnly
                defaultValue={transaction.name}
                onClick={(e) => enableInput(transaction.uuid)(e)}
              />
            </li>
            <li>$ {transaction.amount}</li>
            <li>{properDate(transaction.date)}</li>
            <li>
              <i className={transaction.categoryIcon} />
            </li>
            <button
              className="delete-button"
              onClick={() => deleteTransaction(transaction.uuid)}
            >
              <i className="fas fa-trash-alt" />
            </button>
          </ul>
        ))}
      </div>
    );
  } else {
    return (
      <div className="blank-list">
        <p>No transaction available!</p>
        <p>You can add one above.</p>
        <img className="blank-list-image" src={blankList} alt={"blank list"} />
      </div>
    );
  }
};

export default TransactionList;
