import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const ProfileView = ({ user }) => {
return (

   <Card style={{ width: '18rem' }}>
   <Card.Header>Welcome to myFlix</Card.Header>
   <ListGroup variant="flush">
   <ListGroup.Item>Your information</ListGroup.Item>
   <ListGroup.Item>Name: {user.Username}</ListGroup.Item>
   <ListGroup.Item>Email: {user.Email}</ListGroup.Item>
   </ListGroup>
   </Card>
   
)}; 

