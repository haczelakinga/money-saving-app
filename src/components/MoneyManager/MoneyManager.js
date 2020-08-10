import React from 'react';
import './MoneyManager.scss'
import UserProfile from "../UserProfile/UserProfile";
import NewTransactionForm from "../NewTransactionForm/NewTransactionFormContainer";
import TransactionListContainer from "../TransactionList/TransactionListContainer";

const MoneyManager = () => {
    return (
        <div className='grid-wrapper'>
            <div className='grid-one-of-three'>
                <UserProfile />
            </div>
            <div className='grid-two-of-three'>
                <NewTransactionForm />
                <TransactionListContainer />
            </div>
        </div>
    )
}

export default MoneyManager;