import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const PIE_COLORS = ['#2563eb', '#7c3aed', '#059669', '#d97706', '#64748b'];

export function AttorneyStats({ attorneyStats, attorneyName }) {
  const { winRateTrend, totalCasesHandled, averageWinRate, caseTypeDistribution } = attorneyStats || {};
  return (
    <section className="card attorney-stats">
      <h2 className="card__title">{attorneyName}'s Statistics</h2>
      {winRateTrend?.length > 0 && (
        <div className="attorney-stats__chart">
          <h3 className="attorney-stats__chart-title">Win Rate Trend over Time</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={winRateTrend} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="quarter" tick={{ fontSize: 11 }} />
              <YAxis domain={[70, 90]} tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v) => `${v}%`} />
              <Legend />
              <Line type="monotone" dataKey="attorney" name={`${attorneyName}'s performance`} stroke="#2563eb" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="industry" name="Industry Average" stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="4 4" dot={{ r: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
      <div className="attorney-stats__metrics">
        <div className="metric">
          <span className="metric__label">Total Cases Handled</span>
          <span className="metric__value">{totalCasesHandled != null ? totalCasesHandled.toLocaleString() : '—'}</span>
        </div>
        <div className="metric">
          <span className="metric__label">Average Win Rate</span>
          <span className="metric__value">{averageWinRate != null ? `${averageWinRate}%` : '—'}</span>
        </div>
      </div>
      {caseTypeDistribution?.length > 0 && (
        <div className="attorney-stats__pie">
          <h3 className="attorney-stats__chart-title">Case Type Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={caseTypeDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                label={({ name, value }) => `${name} (${value}%)`}
              >
                {caseTypeDistribution.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => `${v}%`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );
}
