import { useState, useEffect } from 'react';
import getDataAPI from '../services/getDataAPI';

function GetData(_URL) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataAPI(_URL).then((initialState) => setData(initialState));
  }, [_URL]);

  return data;
}
export default GetData;
