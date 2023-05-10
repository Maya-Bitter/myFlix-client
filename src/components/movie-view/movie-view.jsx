import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./movie-view.scss";
import { propTypes } from "react-bootstrap/esm/Image";

export const MovieView = ({ movies }) => {

const { movieId } = useParams();

const movie = movies.find((m) => m.id === movieId);

return (
    <div>
    <div>
    <img className="w-100" src={movie.image} />
    
    </div>
    <div>
    <span>Title: </span>
    <span>{movie.title}</span>
    </div>
    <div>
    <span>Description: </span>
    <span>{movie.description}</span>
    </div>
    <div>
    <span>Genre: </span>
    <span>{movie.genre}</span>
    </div>
    <div>
    <span>Director: </span>
    <span>{movie.director}</span>
    </div>
    <Link to={`/`}>
    <button className="back-button">Back</button>
    </Link>
    </div>
    );
    };

    // Here is where we define all the props constraints for the MovieView

MovieView.propTypes = {
    movie: PropTypes.shape({
    director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
    }).isRequired,

    genre: PropTypes.shape({
    Name: PropTypes.string.isRequired
    }).isRequired,

    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
})
};