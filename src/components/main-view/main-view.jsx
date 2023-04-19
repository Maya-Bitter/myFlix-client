import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
const [movies, setMovies] = useState([]);

const [selectedMovie, setSelectedMovie] = useState(null);

useEffect(() => {
fetch("https://m-flix.herokuapp.com/movies")
.then((response) => response.json())
.then((movies) => {
  const moviesFromApi = movies.map((movie) => {
    return {
      id: movie._id,
      title: movie.title,
      description: movie.description,
      image: movie.imageUrl,
      director: movie.director.Name?.[0]
    };
  });

  setMovies(moviesFromApi);
});
}, []);

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
