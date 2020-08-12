import React from "react";
import "./TransactionList.scss";
import moment from "moment";

const TransactionList = ({ transactions, deleteTransaction }) => {
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
          <ul className="transactions-list" key={transaction.uuid}>
            <li className="transactions-list--item">{transaction.name}</li>
            <li>$ {transaction.amount}</li>
            <li>{properDate(transaction.date)}</li>
            <li>
              <i className={transaction.categoryIcon}></i>
            </li>
            <button className="edit-button">
              <i className="fas fa-pen"></i>
            </button>
            <button
              className="delete-button"
              onClick={() => deleteTransaction(transaction.uuid)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </ul>
        ))}
      </div>
    );
  } else {
    return <div>'Add your first transaction'</div>;
  }
};

export default TransactionList;
