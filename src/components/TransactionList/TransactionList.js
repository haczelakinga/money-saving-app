import React from "react";
import "./TransactionList.scss";
import blankList from "./../../assets/undraw_blank_canvas_3rbb.svg";
import DatePicker from "react-datepicker";

const TransactionList = ({
  transactions,
  editTransaction,
  deleteTransaction,
}) => {
  const updateTransaction = (clickedInput, previousValue, uuid) => {
    clickedInput.classList.add("disableInput");
    clickedInput.classList.remove("enableInput");
    if (clickedInput.value.length > 0) {
      clickedInput.classList.remove("empty-input");
      const name = clickedInput.name;
      const value = clickedInput.value;

      const info = {
        name,
        value,
        uuid,
      };

      return editTransaction(info);
    } else {
      clickedInput.value = previousValue;
    }
  };

  const updateDate = (uuid, date) => {
    const info = {
      name: "date",
      value: date,
      uuid,
    };
    editTransaction(info);
  };

  const enableInput = (uuid, previousValue) => (e) => {
    const clickedInput = e.target;
    clickedInput.classList.remove("disableInput");
    clickedInput.classList.add("enableInput");
    clickedInput.removeAttribute("readOnly");

    clickedInput.addEventListener("focusout", (event) => {
      updateTransaction(clickedInput, previousValue, uuid);
    });

    clickedInput.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        updateTransaction(clickedInput, previousValue, uuid);
      }
    });
  };

  if (transactions.length > 0) {
    return (
      <div className="transactions-list-wrapper">
        <ul className="list-header">
          <li>In/Out</li>
          <li>Transaction Name</li>
          <li>Cost</li>
          <li>Date</li>
          <li>Category</li>
        </ul>
        {transactions.map((transaction) => (
          <ul className={`transactions-list`} key={transaction.uuid}>
            <li>
              <i className={transaction.transactionTypeIcon} />
            </li>
            <li>
              <input
                placeholder=""
                name={"name"}
                className="disableInput"
                readOnly
                defaultValue={transaction.name}
                onClick={(e) =>
                  enableInput(transaction.uuid, transaction.name)(e)
                }
              />
            </li>
            <li>
              $
              <input
                name={"amount"}
                className="disableInput cost-input"
                type="number"
                step="0.1"
                min="0.1"
                readOnly
                defaultValue={transaction.amount}
                onClick={(e) =>
                  enableInput(transaction.uuid, transaction.amount)(e)
                }
              />
            </li>
            <li>
              <label>
                {" "}
                <DatePicker
                  className="calendar disableInput"
                  selected={new Date(transaction.date)}
                  onSelect={(date) => updateDate(transaction.uuid, date)}
                />
              </label>
            </li>
            <li className="category-icon">
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
      <div className="transactions-list-wrapper">
        <div className="blank-list">
          <p>No transaction available!</p>
          <p>You can add one above.</p>
          <img
            className="blank-list-image"
            src={blankList}
            alt={"blank list"}
          />
        </div>
      </div>
    );
  }
};

export default TransactionList;
