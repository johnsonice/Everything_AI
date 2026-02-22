// Procedural timeline table.
export function ProceduralTimeline({ timeline }) {
  if (!timeline?.length) return null;
  return (
    <section className="card procedural-timeline">
      <h2 className="card__title">Procedural Timeline</h2>
      <div className="timeline-wrap">
        <table className="timeline-table">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Time Period</th>
              <th>Progress Status</th>
              <th>Key Milestones</th>
            </tr>
          </thead>
          <tbody>
            {timeline.map((row, i) => (
              <tr key={i}>
                <td>{row.stage}</td>
                <td>{row.timePeriod}</td>
                <td>
                  <span className={`timeline-status ${row.progress === 'In Progress' ? 'timeline-status--active' : ''}`}>
                    {row.progress === 'In Progress' && <span className="timeline-status__dot" />}
                    {row.progress}
                  </span>
                </td>
                <td>{row.milestones}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
