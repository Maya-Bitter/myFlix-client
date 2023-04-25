import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view.jsx";
import { SignupView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    image: movie.Image,
    director: movie.Director.Name?.[0],
    };
});
  setMovies(movies);

});
}, [token]);

 // rest of the code

 //new code//

 //return (
 // <Row className="justify-content-md-center">
 // {!user ? (
 //   <Col md={5}>
 // <LoginView
 // onLoggedIn={(user, token) => {
 //   setUser(user);
 //   setToken(token);
 // }}
// />
// <SignupView />
// </Col>

// ) : selectedMovie ? (
// <Col md={8} style={{ border: "1px solid black" }}>
//<MovieView 
//movie={selectedMovie} 
// onBackClick={() => setSelectedMovie(null)} 
//  <Button variant="danger" onClick  ={() => {setUser(null); setToken(null); localStorage.clear(); }}>Logout</Button>
// </Col>
//movies.length === 0) ? (The list is empty!)
// <>
// {movies.map((movie) => (
//<MovieCard
//key={movie.id}
//movie={movie}
//onMovieClick={(newSelectedMovie) => {
//setSelectedMovie(newSelectedMovie);
//}}
//</>
// </Col>
// <Button variant="danger" onClick={() => {setUser(null);}}>Logout</Button>
// </>
//)}
//</Row>
//);
//};

if (!user) {
return (
<>
<LoginView
  onLoggedIn={(user, token) => {
    setUser(user);
    setToken(token);
  }}
/>
or
<SignupView />
</>
);
}

if (user) {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
  } else {
  alert("No such user");
}

if (selectedMovie) {
return (
<>
<button
  onClick={() => {
    setUser(null);
  }}
>
  Logout
</button>

<MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
</>
);
}

if (movies.length === 0) {
return (
  <>
  <button
    onClick={() => {
      setUser(null);
    }}
  >
    Logout
  </button>

<div>The list is empty!</div>
</>
  );
}

return (
<div>
<button
onClick={() => {
  setUser(null);
}}
>
Logout
</button>

{movies.map((movie) => (
<MovieCard
key={movie.id}
movie={movie}
onMovieClick={(newSelectedMovie) => {
setSelectedMovie(newSelectedMovie);
}}
/>
))}
</div>
);
};


