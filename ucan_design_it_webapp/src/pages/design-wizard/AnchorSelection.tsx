const AnchorSelection = () => {
  return (
    <div>
      <h3>Anchor Selection</h3>
      <div>
        <h4>Filters</h4>
        <label>Anchor Type:</label>
        <select>
          <option>Type A</option>
          <option>Type B</option>
        </select>
        <label>Material:</label>
        <select>
          <option>Material X</option>
          <option>Material Y</option>
        </select>
        <label>Thread Type:</label>
        <select>
          <option>Thread 1</option>
          <option>Thread 2</option>
        </select>
      </div>
      <div>
        <h4>Product Cards</h4>
        {/* Product cards will be displayed here */}
      </div>
    </div>
  );
};

export default AnchorSelection;
