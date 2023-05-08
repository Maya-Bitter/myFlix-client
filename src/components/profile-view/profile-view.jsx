import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MovieCard } from "../movie-card/movie-card";
import moment from 'moment/moment';

export const ProfileView = ({ user }) => {
const [username, setUsername] = useState(user.Username);
const [password, setPassword] = useState("");
const [email, setEmail] = useState(user.Email);
const [birthday, setBirthday] = useState(user.Birthday);

//let favoriteMovies = movies.filter(m => user.FavoriteMovies.includes(m._id))

const deletetUser = () => {
  const token = localStorage.getItem('token');

  fetch(`https://m-flix.herokuapp.com/users/${user.Username}`, { 
  method: "DELETE",
  headers: {
    "Content-Type": "application/json", 
    Authorization: `Bearer ${token}`,},
  }).then((response) => {
  if (response.ok) {
  alert("Your account has been deleted");
  localStorage.clear();
  window.location.reload();
  } else {
  alert("Could not delete your account");  
  }
  });
};

const handleSubmit = (event) => {
event.preventDefault();
const token = localStorage.getItem("token");

const data = {
Username: username,
Password: password,
Email: email,
Birthday: birthday,
};

fetch(`https://m-flix.herokuapp.com/users/${user.Username}`, {
method: "PUT",
body: JSON.stringify(data),
headers: {
  "Content-Type": "application/json", 
  Authorization: `Bearer ${token}`,},
 }).then((response) => {
  if (response.ok) {
    alert("Update successful");
    localStorage.clear();
    window.location.reload();
  } else {
    alert("Update failed");  
  }});
};

return (
  <div>

<br />

<Card border="primary" style={{ width: '20rem' }}>
<div class="text-center">
   <Card.Header>Your information</Card.Header>
   </div>
   <ListGroup variant="flush">
   <ListGroup.Item>Name: {user.Username}</ListGroup.Item>
   <ListGroup.Item>Email: {user.Email}</ListGroup.Item>
   </ListGroup>
   </Card>

   <br />

   <Card border="primary" style={{ width: '30rem' }}>
      
  <Form onSubmit={handleSubmit}>
  <Form.Group controlId="updateFormUsername">
  <Form.Label>Username:</Form.Label>
  <Form.Control
  type="text"
  value={username}
    onChange={(e) => setUsername(e.target.value)}
  required
     minLength="3"
     placeholder="Update your username"
 
     />
 </Form.Group>
 
 <Form.Group controlId="updateFormPassword">
 <Form.Label>Password:</Form.Label>
 <Form.Control
 type="password"
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 required
 minLength="8"
 placeholder="Update Password"
 />
 
 </Form.Group>
 <Form.Group controlId="updateFormEmail">
 <Form.Label>Email:</Form.Label>
 <Form.Control
 type="email"
   value={email}
 onChange={(e) => setEmail(e.target.value)}
   required
   placeholder="Update email"
 
 />
 </Form.Group>
 <Form.Group controlId="updateFormBirthday">
 <Form.Label>Birthday:</Form.Label>
 <Form.Control
   type="date"
   value={moment(birthday).format("YYYY-MM-DD")}
   onChange={(e) => setBirthday(e.target.value)}
   required
 />
 </Form.Group>
 <Button variant="primary" type="submit">Update</Button>
 <Button variant="outline-danger" onClick={deletetUser}>Delete account</Button>
 </Form>
 </Card>
 </div> 
);
};

 


  
