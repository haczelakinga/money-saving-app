import React from "react";
import profilePic from "../../assets/profilePic.svg";
import './UserProfile.scss';

const UserProfile = () => {
    return (
        <div className='profile-info-flexbox'>
            <img className='profile-picture' src={profilePic} alt='Profile Picture'/>
            <span className='profile-info'>Kinga Haczela</span>
            <span className='profile-info'>Currency: $</span>
            <span className='profile-info'>Your target: $2000</span>
        </div>
    )
}

export default UserProfile;
