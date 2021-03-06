import React from 'react';

function TableHeader() {
  return (
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
  );
}

export default TableHeader;
