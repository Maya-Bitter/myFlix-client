import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const ProfileView = ({ user }) => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [birthday, setBirthday] = useState("");

const deletetUser = () => {
const token = localStorage.getItem('token');

fetch("https://m-flix.herokuapp.com/users/${user.Username}", { 
method: "DELETE",
headers: { Authorization: `Bearer ${token}` }
}).then((response) => {
if (response.ok) {
alert("Your account has been deleted");
LocalStorage.clear();
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

fetch("https://m-flix.herokuapp.com/users/${user.Username}", {
method: "PUT",
body: JSON.stringify(data),
headers: {
Authorization: `Bearer ${token}` }
}).then((response) => {
  if (response.ok) {
    alert("Update successful");
    LocalStorage.clear();
    window.location.reload();
  } else {
    alert("Update failed");
  }
});
};

return (
  <div>

   <Card style={{ width: '18rem' }}>
   <Card.Header>Welcome to myFlix</Card.Header>
   <ListGroup variant="flush">
   <ListGroup.Item>Your information</ListGroup.Item>
   <ListGroup.Item>Name: {user.Username}</ListGroup.Item>
   <ListGroup.Item>Email: {user.Email}</ListGroup.Item>
   </ListGroup>
   </Card>
      
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
   value={birthday}
   onChange={(e) => setBirthday(e.target.value)}
   required
 />
 </Form.Group>
 <Button variant="primary" type="submit">
 Update
 </Button>

 <a class ="btn btn-primary" onClick={deletetUser}>Delete</a>
 </Form>
 </div> 
);
};

 


  
