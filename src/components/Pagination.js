/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Pagination(props) {
  const { prev, next, page, maxPage, block, onNext, onPrev } = props;
  return (
    <nav>
      <ul>
        <li>
          <span>{`DataBlock: ${block}`}</span>
        </li>
        <li>
          <a href='#' onClick={onPrev}>
            <span>prev-block</span>
          </a>
        </li>
        <li>
          <a href='#' onClick={prev}>
            <span aria-hidden='true'>&laquo;</span>
            {/* <span className='sr-only'>Previous</span> */}
          </a>
        </li>
        <li>
          <span>{`${page} of ${maxPage}`}</span>
        </li>
        <li>
          <a href='#' onClick={next}>
            <span aria-hidden='true'>&raquo;</span>
            {/* <span className='sr-only'>Next</span> */}
          </a>
        </li>
        <li>
          <a href='#' onClick={onNext}>
            <span>next-block</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
