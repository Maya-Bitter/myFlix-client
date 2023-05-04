import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const ProfileView = ({ user }) => {
return (
<div class="container-fluid">
   <p>Welcome to myFlix</p>
<p className="Username">{user.Username}</p>
<p className="Email">{user.Email}</p>
</div>

)}; 

