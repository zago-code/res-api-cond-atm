import TableRows from './TableRows';
import TableHeader from './TableHeader';

function Table({ data }) {
  return (
    <table>
      <TableHeader />
      <TableRows data={data} />
    </table>
  );
}

export default Table;
