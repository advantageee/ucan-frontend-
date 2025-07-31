import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { calculate } from "../../services/api";
import { exportToPdf } from "../../services/pdfExport";

interface CalculationResult {
  utilization: number;
  capacity: number;
  safetyFactor: number;
  status: string;
  data: { name: string; value: number }[];
}

const Results = () => {
  const [results, setResults] = useState<CalculationResult | null>(null);

  useEffect(() => {
    calculate({}).then((data) => setResults(data as CalculationResult));
  }, []);

  if (!results) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Results</h3>
      <div>
        <h4>Summary</h4>
        <p>Utilization: {results.utilization.toFixed(2)}%</p>
        <p>Capacity: {results.capacity.toFixed(2)}kN</p>
        <p>Safety Factor: {results.safetyFactor.toFixed(2)}</p>
        <p>Status: <span style={{ color: results.status === 'Pass' ? 'green' : 'red' }}>{results.status}</span></p>
      </div>
      <div>
        <h4>Charts</h4>
        <BarChart
          width={500}
          height={300}
          data={results.data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
      <button onClick={exportToPdf}>Export to PDF</button>
    </div>
  );
};

export default Results;
