import { LineChartCard, BarChartCard, AreaChartCard } from './ChartCard';
import { monthlySeries, categoryBarData, areaStackData } from '../data/sampleData';

export function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1>Data viz dashboard</h1>
      </header>
      <div className="dashboard__grid">
        <LineChartCard
          title="Monthly trend"
          data={monthlySeries}
          dataKeys={[
            { key: 'value', color: '#646cff' },
            { key: 'other', color: '#82ca9d' },
          ]}
        />
        <BarChartCard title="Categories" data={categoryBarData} name="Value" />
        <AreaChartCard
          title="Stacked by quarter"
          data={areaStackData}
          dataKeys={[
            { key: 'a', color: '#646cff' },
            { key: 'b', color: '#82ca9d' },
            { key: 'c', color: '#ffc658' },
          ]}
        />
      </div>
    </div>
  );
}
