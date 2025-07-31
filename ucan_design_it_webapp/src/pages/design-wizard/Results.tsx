import { exportToPdf } from "../../services/pdfExport";

const Results = () => {
  return (
    <div>
      <h3>Results</h3>
      <div>
        <h4>Summary</h4>
        <p>Utilization: 80%</p>
        <p>Capacity: 100kN</p>
        <p>Safety Factor: 1.25</p>
        <p>Status: <span style={{ color: 'green' }}>Pass</span></p>
      </div>
      <div>
        <h4>Charts</h4>
        {/* Charts will be displayed here */}
      </div>
      <button onClick={exportToPdf}>Export to PDF</button>
    </div>
  );
};

export default Results;
