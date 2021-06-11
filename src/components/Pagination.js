import React from 'react';
import PropTypes from 'prop-types';

export const Pagination = ({ itemsPerPage, totalItems, paginate, curPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination cl_after'>
        {pageNumbers.map(number => (
          <li key={number}>
            <span onClick={() => paginate(number)} className={ curPage == number ? (
                "active"
              ) : (
                ""
              )}>
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number,
  totalItems: PropTypes.number,
  paginate: PropTypes.func,
  curPage: PropTypes.number
};