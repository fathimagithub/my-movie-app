// Pagination.js
import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styles from './Pagination.module.css';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    const query = Object.fromEntries(searchParams);
    navigate(`?page=${page}`, { replace: true, state: { ...query } });
    onPageChange(page);
  };

  // Disable the previous button on the first page
  const isPrevDisabled = currentPage === 1;

  // Disable the next button on the last page
  const isNextDisabled = currentPage === totalPages;

  return (
    <div className={styles.pagination}>
      {currentPage > 1 && (
        <button
          className={styles.prevButton}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={isPrevDisabled}
        >
          Previous
        </button>
      )}
      {currentPage < totalPages && (
        <button
          className={styles.nextButton}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={isNextDisabled}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;