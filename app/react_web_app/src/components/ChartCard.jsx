import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export function LineChartCard({ title, data, dataKeys }) {
  return (
    <div className="chart-card">
      <h3 className="chart-card__title">{title}</h3>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          {dataKeys.map(({ key, color }) => (
            <Line key={key} type="monotone" dataKey={key} stroke={color} name={key} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function BarChartCard({ title, data, dataKey = 'value', name }) {
  return (
    <div className="chart-card">
      <h3 className="chart-card__title">{title}</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey={dataKey} name={name || dataKey} fill="#646cff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function AreaChartCard({ title, data, dataKeys }) {
  return (
    <div className="chart-card">
      <h3 className="chart-card__title">{title}</h3>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          {dataKeys.map(({ key, color }) => (
            <Area key={key} type="monotone" dataKey={key} stackId="1" stroke={color} fill={color} name={key} />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
