import TableRows from './TableRows';
import TableHeader from './TableHeader';
import GetData from '../hooks/GetData';

function Table() {
  const data = GetData('https://api.datos.gob.mx/v1/condiciones-atmosfericas');
  return (
    <table>
      <TableHeader />
      <TableRows data={data} />
    </table>
  );
}

export default Table;
