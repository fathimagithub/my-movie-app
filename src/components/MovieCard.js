// MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  return (
    <div className={styles.movieCard}>
      <Link to={`/movie/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <div className={styles.movieInfo}>
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;