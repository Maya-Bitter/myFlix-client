// import React from "react"; (not sure if it should be here???)

// Here you import the PropTypes library
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

// The MovieCard function component 
export const MovieCard = ({ movie, onMovieClick }) => {
return (

<card>
<Card.Img variant="top" scr={movie.image} />
<Card.Body>
<Card.Title>{movie.title}</Card.Title>
<Card.Text>{movie.description}</Card.Text>
<Button onClick={() => onMovieClick(movie)} variant="link">
open
</Button>
</Card.Body>
</card>

  );
};

// Here is where we define all the props constraints for the MovieCard

MovieCard.propTypes = {
    movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
    }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};

 