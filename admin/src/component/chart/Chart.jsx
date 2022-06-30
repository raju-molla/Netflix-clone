import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import "./chart.css";
function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="charTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis datake="name" stroke="#5550fd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550fd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
