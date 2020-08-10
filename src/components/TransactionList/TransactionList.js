import React from "react";
import './TransactionList.scss'

const TransactionList = ({transactions}) => {
    if (transactions) {
        return (
            <div className='transactions-list-wrapper'>
                <ul className='list-header'>
                    <li className='transactions-list--item'>Transaction Name</li>
                    <li>Cost</li>
                    <li>Date</li>
                    <li>Category</li>

                </ul>
                {transactions.map(transaction => (
                    <ul className='transactions-list'>
                        <li className='transactions-list--item'>{transaction.name}</li>
                        <li>$ {transaction.amount}</li>
                        <li>{transaction.date}</li>
                        <li><i className={transaction.category}></i></li>
                        <i className="fas fa-pen edit-icon"></i>
                    </ul>
                ))}
            </div>
        )
    }

}

export default TransactionList;