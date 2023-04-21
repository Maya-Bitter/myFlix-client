import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view.jsx";
import { SignupView } from "../signup-view/signup-view";

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

if (!user) {
return (
<LoginView
  onLoggedIn={(user, token) => {
    setUser(user);
    setToken(token);
  }}
/>
);
}

if (data.user) {
  localStorage.setItem("user", JSON.stringify(data.user));
  localStorage.setItem("token", data.token);
  onLoggedIn(data.user, data.token);
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


