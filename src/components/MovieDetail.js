import React from 'react';
import CastList from './CastList';

const MovieDetail = ({ movie }) => {
  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: '#f0f0f0',
        boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.5)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          flex: '0 0 300px',
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div
        style={{
          flex: '1',
          padding: '2rem',
        }}
      >
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
        <h3>Cast</h3>
        <CastList cast={movie.cast} />
      </div>
    </div>
  );
};

export default MovieDetail;