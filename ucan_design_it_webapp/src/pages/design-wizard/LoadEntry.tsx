const LoadEntry = () => {
  return (
    <div>
      <h3>Load Entry</h3>
      {/* TODO: Replace with react-data-grid */}
      <table>
        <thead>
          <tr>
            <th>Nx</th>
            <th>Vy</th>
            <th>Mx</th>
            <th>My</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LoadEntry;
