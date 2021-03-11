/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Pagination(props) {
  const { prev, next } = props;
  return (
    <nav>
      <ul>
        <li>
          <a href='#' onClick={prev}>
            <span aria-hidden='true'>&laquo;</span>
            {/* <span className='sr-only'>Previous</span> */}
          </a>
        </li>
        <li>
          <a href='#' onClick={next}>
            <span aria-hidden='true'>&raquo;</span>
            {/* <span className='sr-only'>Next</span> */}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
