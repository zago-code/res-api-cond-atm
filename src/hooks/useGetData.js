import { useState, useEffect } from 'react';
import getDataAPI from '../services/getDataAPI';

function useGetData(nextBlockData) {
  const _URL = `https://api.datos.gob.mx/v1/condiciones-atmosfericas?page=${nextBlockData}`;
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataAPI(_URL).then((initialState) => setData(initialState));
  }, [_URL]);

  return data;
}
export default useGetData;
