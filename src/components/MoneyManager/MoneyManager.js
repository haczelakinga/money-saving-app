import React from 'react';
import './MoneyManager.scss';
import UserProfile from '../UserProfile/UserProfileContainer';
import NewTransactionForm from '../NewTransactionForm/NewTransactionFormContainer';
import TransactionListContainer from '../TransactionList/TransactionListContainer';

const MoneyManager = () => {
	return (
		<div className="grid-wrapper">
			<div className="grid-one-of-three">
				<UserProfile />
			</div>

			<div className="grid-two-of-three">
				<h1 className="title">New Transaction</h1>
				<NewTransactionForm />
				<TransactionListContainer />
			</div>
		</div>
	);
};

export default MoneyManager;
