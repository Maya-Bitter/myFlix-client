# Achievement 3 Project: myFlix-client 

### **Contents**

[App link myFlix](https://maya-flix.netlify.app/)

[Project description & dependencies](#Project-description-&-dependencies)

[Essential Views & Features](#Essential-Views-&-Features)

[Technical Requirements](#Technical-Requirements)

[Project & dev dependencies](#Project-dependencies)

## Project description & dependencies:

Using React, I built the client-side for a movie app called myFlix based on its existing server-side code (REST API and database) 
which I built in the previous Achievement [movie_api](https://github.com/Maya-Bitter/movie_api) 

The API and MongoDB database that I built meet the information needs of myFlix users. 
Now, I created the interface they’ll use when making requests to—and receiving responses from—the server-side. 

The client-side of this app will include several interface views 
(built using the React library) that will handle data through the (previously defined) REST API endpoints.

[go to start](#Contents)

## Essential Views & Features:

### Main view

* Returns ALL movies to the user (each movie item with an image, title, and description)
* Filtering the list of movies with a “search” feature
* Ability to select a movie for more details
* Ability to log out
* Ability to navigate to Profile view

### Page 2 - Single Movie view

* Returns data (description, genre, director, image) about a single movie to the user
* Allows users to add a movie to their list of favorites

### Login view

* Allows users to log in with a username and password

### Signup view

* Allows new users to register (username, password, email, date of birth)

### Profile view

* Displays user registration details
* Allows users to update their info (username, password, email, date of birth)
* Displays favorite movies
* Allows users to remove a movie from their list of favorites
* Allows existing users to deregister

[go to start](#Contents)


### Technical Requirements

* The application must be a single-page application (SPA)

* The application must use state routing to navigate between views and share URLs

* The application must use Parcel as its build tool

* The application must be written using the React library and in ES2015+

* The application must use Bootstrap as a UI library for styling and responsiveness

* The application must contain function components

* The application must be hosted online

* The application may use React Redux for state management of at least one feature (i.e., filtering movies)

[go to start](#Contents)


### Project dependencies:

- "bootstrap: ^5.2.3,"
- "moment": "^2.29.4",
- "prop-types: ^15.8.1,"
- "react: ^18.2.0,"
- "react-bootstrap: ^2.7.2,"
- "react-dom: ^18.2.0,"
- "react-router: ^6.10.0,"
- "react-router-dom: ^6.10.0"

### dev dependencies:

- "@parcel/transformer-sass": "^2.8.3"
- "parcel": "^2.8.3"
- "process": "^0.11.10"

  [go to start](#Contents)


  



