// src/Profile.js
import React, { useState, useEffect } from "react";

const ProfileIcon = ({ auth }) => {
  const [user, setUser] = useState(null);

  const [isToolTipDown, setIsToolTipDown] = useState(false);

  const toggleDropdown = () => {
    setIsToolTipDown(!isToolTipDown);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="profile_icon" onClick={toggleDropdown}>
      <img
        className="profile_icon_img"
        src={user?.photoURL}
        alt="prifle icon"
      />
      {isToolTipDown && (
        <div className="profile_tooltip_down">
          <ul>
            <li>
              <p>{user?.displayName}</p>
            </li>
            <li>
              <button className="primary_btn btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
