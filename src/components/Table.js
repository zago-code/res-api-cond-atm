import React from 'react';

function Table({ data }) {
  const results = data.results;
  const setRows = () =>
    results &&
    results.map((item, index) => (
      <tr key={item._id}>
        {/* <th>{index + 1}</th> */}
        <td>{item.state}</td>
        <td>{item.name}</td>
        <td>{item.tempc}</td>
        <td>{item.probabilityofprecip}</td>
        <td>{item.relativehumidity}</td>
        <td>{item.windspeedkm}</td>
        <td>{item.skydescriptionlong}</td>
      </tr>
    ));
  return (
    <table>
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>Estado</th>
          <th>Ciudad</th>
          <th>Temperatura (C)</th>
          <th>Probabilidad de lluvia (%)</th>
          <th>Húmedad relativa (%)</th>
          <th>Velocidad del viento (Km/h)</th>
          <th>Clima</th>
        </tr>
      </thead>
      <tbody>{setRows()}</tbody>
    </table>
  );
}

export default Table;
