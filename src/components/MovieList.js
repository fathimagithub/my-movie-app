// MovieList.js
import React from 'react';
import MovieCard from './MovieCard';
import styles from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <div className={styles.movieList}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;