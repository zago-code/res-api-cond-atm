function TableRows({ data }) {
  const results = data.results;
  return (
    <tbody>
      {results &&
        results.map((item) => (
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
        ))}
    </tbody>
  );
}

export default TableRows;
