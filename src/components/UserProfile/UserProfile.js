import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../../assets/profilePic.svg';
import './UserProfile.scss';

const UserProfile = ({ user, incomes, outcomes }) => {
	let savingsText = () => {
		let amount = incomes - outcomes;
		amount = +(Math.round(amount + 'e+2') + 'e-2');
		if (amount < 0) {
			return `${amount}`;
		} else {
			return `${amount}`;
		}
	};
	return (
		<div className="profile-info-flexbox">
				<img className="profile-picture" src={profilePic} alt="User avatar" />
				<span className="profile-info user-name">{user.name}</span>

			<span className="profile-info user-incomes">
				Incomes: ${incomes !== null ? incomes : 0}
			</span>

			<span className="profile-info user-outcomes">
				Spends: ${outcomes !== null ? outcomes : 0}
			</span>

			<span className="profile-info account-balance">Account Balance: ${savingsText()}</span>
			<Link to="/charts" className="statisticsButton">
				See statistics
			</Link>
		</div>
	);
};

export default UserProfile;
