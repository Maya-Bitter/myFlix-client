import React from "react";

// Here you import the PropTypes library
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";

// The MovieCard function component
export const MovieCard = ({ movie, user, updateUser }) => {
  const isFav = user.FavoriteMovies.includes(movie.id);
  const token = localStorage.getItem("token");

  const addToFav = () => {
    fetch(
      `https://m-flix.herokuapp.com/users/${user.Username}/movies/${movie.id}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed");
          return false;
        }
      })
      .then((user) => {
        if (user) {
          console.log("User", user);
          alert("Successfully added to favorites");
          updateUser(user);
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  const removeFromFav = () => {
    fetch(
      `https://m-flix.herokuapp.com/users/${user.Username}/movies/${movie.id}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed");
          return false;
        }
      })
      .then((user) => {
        if (user) {
          console.log("User", user);
          alert("Successfully removed from favorites");
          updateUser(user);
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text numer>{movie.description}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
          <Button variant="link">open</Button>
        </Link>
        {isFav ? (
          <Button variant="danger" size="sm" onClick={removeFromFav}>
            Remove from favorites
          </Button>
        ) : (
          <Button variant="success" size="sm" onClick={addToFav}>
            Add to favorites
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

// Here is where we define all the props constraints for the MovieCard

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.object,
  updateUser: PropTypes.func.isRequired,
};
