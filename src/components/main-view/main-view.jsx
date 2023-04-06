import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
const [movies, setMovies] = useState([
{
id: 1,
title: "Silence of the Lambs",
description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
genre: "Thriller",
director: "Jonathan Demme",
image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
},
{
id: 2,
title: "Luther: The Fallen Sun",
description: "A dark psychological crime drama starring Idris Elba as Luther, a man struggling with his own terrible demons, who might be as dangerous as the depraved murderers he hunts.",
genre: "Thriller",
director: "Jamie Payne",
image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xsW7M4b4gawgFKCzcXHL2MSeswj.jpg",
},
{
id: 3,
title: "Plane",
description: "A burger-loving hit man, his philosophical partner, a drug-addled gangste's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
genre: "Action",
director: "Jean-Francois Richet",
image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg",
}
]);

const [selectedMovie, setSelectedMovie] = useState(null);

if (selectedMovie) {
return <MovieView Movie={selectedMovie} />;
}

if (Movie.length === 0) {
return <div>The list is empty!</div>;
}
return (
<div>
{movies.map((movie) => (
<MovieCard
    key={Movie.id}
    movie={movie}
    onClick={() => {
    setSelectedMovie(movie);
    }}
/>
))}
</div>
);
};