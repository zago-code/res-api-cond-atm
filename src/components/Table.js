import React from 'react';

function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Estado</th>
          <th>Ciudad</th>
          <th>Temperatura (C)</th>
          <th>Probabilidad de lluvia (%)</th>
          <th>Húmedad relativa (%)</th>
          <th>Velocidad del viento (Km/h)</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Calories</td>
          <td>Carbs</td>
          <td>Protein</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
