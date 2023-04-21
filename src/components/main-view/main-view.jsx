import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view.jsx";
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
const [movies, setMovies] = useState([]);
const [selectedMovie, setSelectedMovie] = useState(null);
const [user, setUser] = useState(null);

useEffect(() => {
fetch("https://m-flix.herokuapp.com/movies")
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

  setMovies(moviesFromApi);
});
}, []);

if (!user) {
  return <LoginView />;
}

if (selectedMovie) {
  return (
    <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
  );
}

if (movies.length === 0) {
  return <div>The list is empty!</div>;
}

return (
<div>
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
