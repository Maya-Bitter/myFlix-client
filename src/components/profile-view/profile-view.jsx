import React, { useState, useEffect } from 'react';

const ProfileView = () => {
   const [users, setUsers] = useState([]);
   useEffect(() => {
      fetch('https://m-flix.herokuapp.com/users')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setUsers(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
    <div className="user-container">
       {users.map((post) => {
          return (
             <div className="post-card" key={user.id}>
                <h2 className="post-title">{user.password}</h2>
                <p className="post-body">{user.email}</p>
                <p className="post-body">{user.birthday}</p>
            </div>
          );
       })}
    </div>
    );
 };
 
 export default ProfileView;