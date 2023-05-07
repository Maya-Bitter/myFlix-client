import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {

const { movieId } = useParams();

const movie = movies.find((m) => m.id === movieId);

return (

<div>
<Card style={{ width: '50rem' }}>
<div>
<img className="w-100" src={movie.image} />
</div>

<Card.Title>Title: {movie.title}</Card.Title>
<Card.Body>Director: {movie.director}</Card.Body>
<Card.Body>Description: {movie.description}</Card.Body>
<Card.Body>Genre: {movie.genre}</Card.Body>

<Link to={`/`}>
<button className="back-button">Back</button>
</Link>
</Card>
</div>
)};
