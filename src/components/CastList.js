import React from 'react';

const CastList = ({ cast }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
        gridGap: '1rem',
      }}
    >
      {cast.map((actor) => (
        <div
          key={actor.id}
          style={{
            textAlign: 'center',
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt={actor.name}
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          <h4
            style={{
              marginTop: '0.5rem',
              marginBottom: '0.25rem',
            }}
          >
            {actor.name}
          </h4>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#666',
            }}
          >
            {actor.character}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CastList;