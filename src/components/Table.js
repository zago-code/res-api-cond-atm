import { useState } from 'react';
import TableRows from './TableRows';
import TableHeader from './TableHeader';
import Pagination from './Pagination';
import useGetData from '../hooks/useGetData';
import usePagination from '../hooks/usePagination';

function Table() {
  const [blockData, setBlockData] = useState(1);
  const dataObj = useGetData(blockData);
  let data = [];
  let maxBlock = 0;
  if (dataObj.results) {
    maxBlock = Math.round(dataObj.pagination.total / 100);
    data = dataObj.results;
  }

  function handleChangeBlockNext(even) {
    setBlockData((blockData) => Math.min(blockData + 1, maxBlock));
  }

  function handleChangeBlockPrev(even) {
    setBlockData((blockData) => Math.max(blockData - 1, 1));
  }

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
      <Pagination
        page={dataFilter.currentPage}
        maxPage={dataFilter.maxPage}
        prev={handleChangePrevious}
        next={handleChangeNext}
        block={blockData}
        onNext={handleChangeBlockNext}
        onPrev={handleChangeBlockPrev}
      />
    </>
  );
}

export default Table;
