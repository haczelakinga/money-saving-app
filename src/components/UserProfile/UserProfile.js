import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../../assets/profilePic.svg";
import "./UserProfile.scss";

const UserProfile = ({ user, incomes, outcomes }) => {
  let savingsText = () => {
    let amount = incomes - outcomes;
    if (amount < 0) {
      return `You are down by: $${amount}`;
    } else {
      return `You have $${amount} in your piggi bank`;
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
        Outcomes: ${outcomes !== null ? outcomes : 0}
      </span>
      <span className="profile-info">{savingsText()}</span>
      <Link to="/charts" className="statisticsButton">
        See statistics
      </Link>
    </div>
  );
};

export default UserProfile;
