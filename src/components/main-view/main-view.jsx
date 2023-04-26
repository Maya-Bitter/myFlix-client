import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view.jsx";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

useEffect(() => {
if (!token) return;

fetch("https://m-flix.herokuapp.com/movies", {
headers: { Authorization: `Bearer ${token}` },
})
.then((response) => response.json())
.then((movies) => {

const moviesFromApi = movies.map((movie) => {
  return {
    id: movie._id,
    title: movie.Title, 
    genre: movie.Genre.Name,
    description: movie.Description,
    image: movie.ImagePath,
    director: movie.Director?.Name,
    };
});
  setMovies(moviesFromApi);

});
}, [token]);

// rest of the code

// new code 3.7 //

return (
<BrowserRouter>
<Row className="justify-content-md-center">
<Routes>
<Route
path="/signup"
element={
<>
{user ? (
<Navigate to="/" />
) : (
<Col md={5}>
  <SignupView />
</Col>
)}
</>

}
/>
<Route
path="/login"
element={
<>
{user ? (
<Navigate to="/" />
) : (
<Col md={5}>
  <LoginView onLoggedIn={(user) => setUser(user)} />
</Col>
)}
</>

}
/>
<Route
path="/movies/:movieId"
element={
<>
{!user ? (
<Navigate to="/login" replace />
) : movies.length === 0 ? (
<Col>The list is empty!</Col>
) : (
<Col md={8}>
  <MovieView movies={movies} />
</Col>
)}
</>
}
/>
<Route
path="/"
element={
<>
{!user ? (
<Navigate to="/login" replace />
) : movies.length === 0 ? (
<Col>The list is empty!</Col>
) : (
<>
  {movies.map((movie) => (
    <Col className="mb-4" key={movie.id} md={3}>
      <MovieCard movie={movie} />
    </Col>
  ))}
</>
)}
</>
}
/>
</Routes>
</Row>
</BrowserRouter>
);
};

// old code until 3.7 //

//return (
//<Row className="justify-content-md-center">
//{!user ? (
//<>
//<Col md={5}>
//Login 
//<LoginView onLoggedIn={(user, token) => 
//{ setUser(user); 
//setToken(token)
//LocalStorage.setItem("user", JSON.strinify(user));
//LocalStorage.setItem("token", token);
//}} 
///>
//or signup
//<SignupView />
//  </Col>
//   </>
// ) : selectedMovie ? (
//<Col md={8} style={{ border: "1px solid black" }}>
//  <MovieView 
//movie={selectedMovie} 
// onBackClick={() => setSelectedMovie(null)} 
// />
//<Button variant="dark" onClick  ={() => {setUser(null); setToken(null); localStorage.clear(); }}>Logout</Button>
// </Col>

//) : movies.length === 0 ? (
// <div>The list is empty!</div>
//) : (
// <>
// {movies.map((movie) => (
// <Col key={movie._id} md={3}>

//<MovieCard
//movie={movie}
//onMovieClick={(newSelectedMovie) => {

//setSelectedMovie(newSelectedMovie);
//}}
///>
// </Col>
//  ))}
// <Button variant="dark" onClick={() => {setUser(null);}}>Logout</Button>
// </>
//)}
//</Row>
//);
//};
