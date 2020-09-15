import React from "react";
import profilePic from "../../assets/profilePic.svg";
import "./UserProfile.scss";
import pic from "./../../../src/assets/undraw_pie_chart_6efe.svg";

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
      <button className="statisticsButton">See statistics</button>
    </div>
  );
};

export default UserProfile;
