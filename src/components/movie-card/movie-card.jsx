import React from "react"

// Here you import the PropTypes library
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

// The MovieCard function component 
export const MovieCard = ({ movie }) => {
return (

<Card className="h-100">
<Card.Img variant="top" scr={movie.image} /> 
<Card className="text-center">
<Card.Header>Featured</Card.Header></Card>
<Card.Body>
<Card.Title>{movie.title}</Card.Title>
<Card.Text>{movie.description}</Card.Text>
<Button onClick={() => onMovieClick(movie)} variant="outline-primary">
more information
</Button>
</Card.Body>
</Card>

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

 