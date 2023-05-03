import React, { useState, useEffect } from 'react';

export const ProfileView = ({ user }) => {

return (
   <div className="user-container">
      <div classname="user-card">
      <p className="Username">{user.Username}</p>
      <p className="Password">{user.Email}</p>
</div>
</div>
);
};




