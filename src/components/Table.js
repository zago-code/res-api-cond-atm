// import { useState, useEffect } from 'react';
import TableRows from './TableRows';
import TableHeader from './TableHeader';
import Pagination from './Pagination';
import useGetData from '../hooks/useGetData';
import usePagination from '../hooks/usePagination';

function Table() {
  const dataObj = useGetData(1);
  let data = [];
  if (dataObj.results) data = dataObj.results;
  const dataFilter = usePagination(data, 10);
  if (dataFilter.currentData()) data = dataFilter.currentData();

  function handleChangeNext(even) {
    data = dataFilter.next();
  }

  function handleChangePrevious(even) {
    data = dataFilter.prev();
  }

  return (
    <>
      <table>
        <TableHeader />
        <TableRows data={data} />
      </table>
      <Pagination prev={handleChangePrevious} next={handleChangeNext} />
    </>
  );
}

export default Table;
