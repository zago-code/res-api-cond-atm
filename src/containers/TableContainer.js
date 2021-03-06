import React from 'react';
import Table from '../components/Table';

function TableContainer({ data }) {
  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default TableContainer;
