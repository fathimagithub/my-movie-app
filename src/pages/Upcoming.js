import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=deb9d62923510eaba6bddf80cdfdebd7&page=${currentPage}`);
        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      } catch (err) {
        setError('Error fetching upcoming movies');
        setLoading(false);
      }
    };

    fetchUpcomingMovies();
  }, [currentPage]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Upcoming Movies</h1>
      <MovieList movies={movies} />
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
};

export default Upcoming;