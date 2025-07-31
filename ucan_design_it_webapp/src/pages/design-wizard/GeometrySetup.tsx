import { Stage, Layer, Rect } from 'react-konva';

const GeometrySetup = () => {
  return (
    <div>
      <h3>Geometry Setup</h3>
      <form>
        <div>
          <label>Edge Distances:</label>
          <input type="text" />
        </div>
        <div>
          <label>Base Plate Size:</label>
          <input type="text" />
        </div>
      </form>
      <Stage width={500} height={500}>
        <Layer>
          <Rect
            x={20}
            y={20}
            width={460}
            height={460}
            fill="lightgrey"
            stroke="black"
            strokeWidth={2}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default GeometrySetup;
