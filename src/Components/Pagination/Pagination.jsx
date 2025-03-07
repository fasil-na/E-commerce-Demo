import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

const Pagination = ({ currentPage, totalResults, pageSize, onPageChange }) => {
  // Calculate total pages based on total results and page size
  const totalPages = Math.ceil(totalResults / pageSize);

  return (
    <div className="pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage >= totalPages}>
        Next
      </button>
    </div>
  );
};

// Define prop types for Pagination component
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired, 
  totalResults: PropTypes.number.isRequired, 
  pageSize: PropTypes.number.isRequired, 
  onPageChange: PropTypes.func.isRequired, 
};

export default Pagination;
