import React from "react";
import "./TransactionList.scss";
import blankList from "./../../assets/undraw_blank_canvas_3rbb.svg";
import DatePicker from "react-datepicker";

class TransactionList extends React.Component {
  updateTransaction = (clickedInput, previousValue, uuid) => {
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

      return this.props.editTransaction(info);
    } else {
      clickedInput.value = previousValue;
    }
  };

  updateDate = (uuid, date) => {
    const info = {
      name: "date",
      value: date,
      uuid,
    };
    this.props.editTransaction(info);
  };

  enableInput = (uuid, previousValue) => (e) => {
    const clickedInput = e.target;
    clickedInput.classList.remove("disableInput");
    clickedInput.classList.add("enableInput");
    clickedInput.removeAttribute("readOnly");

    clickedInput.addEventListener("focusout", (event) => {
      this.updateTransaction(clickedInput, previousValue, uuid);
    });

    clickedInput.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        this.updateTransaction(clickedInput, previousValue, uuid);
      }
    });
  };

  render() {
    console.log("render");
    const { transactions } = this.props;
    if (transactions.length > 0) {
      return (
        <div className="transactions-list-wrapper">
          <ul className="list-header">
            <li className="transactions-list--item">Transaction Name</li>
            <li>Cost</li>
            <li>Date</li>
            <li>Category</li>
          </ul>
          {transactions.map((transaction) => (
            <ul className="transactions-list" key={transaction.uuid}>
              <li>
                <input
                  placeholder=""
                  name={"name"}
                  className="disableInput"
                  readOnly
                  defaultValue={transaction.name}
                  onClick={(e) =>
                    this.enableInput(transaction.uuid, transaction.name)(e)
                  }
                />
              </li>
              <li>
                $
                <input
                  name={"amount"}
                  className="disableInput cost-input"
                  type="number"
                  step="0.01"
                  min="0.01"
                  readOnly
                  defaultValue={transaction.amount}
                  onClick={(e) =>
                    this.enableInput(transaction.uuid, transaction.amount)(e)
                  }
                />
              </li>
              <li>
                <label>
                  {" "}
                  <DatePicker
                    className="calendar disableInput"
                    selected={new Date(transaction.date)}
                    onSelect={(date) => this.updateDate(transaction.uuid, date)}
                  />
                </label>
              </li>
              <li className="category-icon">
                <i className={transaction.categoryIcon} />
              </li>
              <button
                className="delete-button"
                onClick={() => this.props.deleteTransaction(transaction.uuid)}
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
          <img
            className="blank-list-image"
            src={blankList}
            alt={"blank list"}
          />
        </div>
      );
    }
  }
}

export default TransactionList;
