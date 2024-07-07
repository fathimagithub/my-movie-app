import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [currentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        const query = searchParams.get('q');
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=deb9d62923510eaba6bddf80cdfdebd7&query=${query}&page=${currentPage}`);
        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      } catch (err) {
        setError('Error fetching search results');
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchParams, currentPage]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Search Results</h1>
      <MovieList movies={movies} />
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
};

export default SearchResults;