const DesignCodeAndBaseMaterial = () => {
  return (
    <div>
      <h3>Design Code & Base Material</h3>
      <form>
        <div>
          <label>Code:</label>
          <select>
            <option>ACI</option>
            <option>CSA</option>
          </select>
        </div>
        <div>
          <label>Material Strength:</label>
          <input type="text" />
        </div>
        <div>
          <label>Crack State:</label>
          <select>
            <option>Cracked</option>
            <option>Uncracked</option>
          </select>
        </div>
        <div>
          <label>Drilling Method:</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default DesignCodeAndBaseMaterial;
