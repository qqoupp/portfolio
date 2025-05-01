import React from "react";
import profileImage from "./profile.jpg";

const Profile = () => {
  return (
    <div className="w-10 h-10 rounded-lg">
      <img src={profileImage} alt="profile" />
    </div>
  );
};
export default Profile;
