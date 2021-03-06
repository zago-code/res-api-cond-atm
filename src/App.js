import { useState, useEffect } from 'react';
import Header from './components/Header';
import TableContainer from './containers/TableContainer';
import getDataAPI from './services/getDataAPI.js';

function GetState(_URL) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataAPI(_URL).then((initialState) => setData(initialState));
  }, [_URL]);

  return data;
}
function App() {
  const data = GetState('https://api.datos.gob.mx/v1/condiciones-atmosfericas');
  return (
    <main>
      <Header />
      <TableContainer data={data} />
    </main>
  );
}

export default App;
