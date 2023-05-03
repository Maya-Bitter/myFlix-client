import React, { useState, useEffect } from 'react';

export const ProfileView = ({ user }) => {
return (
<div class="container-fluid">
   <p>Welcome to myFlix</p>
<p className="Username">{user.Username}</p>
<p className="Password">{user.Email}</p>
</div>
)}; 



