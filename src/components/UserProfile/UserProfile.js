import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../../assets/profilePic.svg";
import "./UserProfile.scss";

const UserProfile = ({ user, incomes, outcomes }) => {
  let savingsText = () => {
    let amount = incomes - outcomes;
    amount = +(Math.round(amount + "e+2") + "e-2");
    if (amount < 0) {
      return `${amount}`;
    } else {
      return `${amount}`;
    }
  };
  return (
    <div className="profile-info-flexbox">
      <img className="profile-picture" src={profilePic} alt="User avatar" />
      <span className="profile-info">{user.name}</span>
      <span className="profile-info">
        Incomes: ${incomes !== null ? incomes : 0}
      </span>
      <span className="profile-info">
        Spends: ${outcomes !== null ? outcomes : 0}
      </span>
      <span className="profile-info">Account Balance: ${savingsText()}</span>
      <Link to="/charts" className="statisticsButton">
        See statistics
      </Link>
    </div>
  );
};

export default UserProfile;
