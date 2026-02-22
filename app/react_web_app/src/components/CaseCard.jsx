// Single case card in the left sidebar list.
export function CaseCard({ case: c, selected, onClick }) {
  const statusClass = c.statusKey === 'TRIAL' ? 'status--green' : c.statusKey === 'CLOSED' ? 'status--grey' : c.statusKey === 'DISCOVERY' ? 'status--blue' : 'status--amber';
  return (
    <button
      type="button"
      className={`case-card ${selected ? 'case-card--selected' : ''}`}
      onClick={onClick}
      aria-pressed={selected}
    >
      <div className="case-card__id">{c.id}</div>
      <span className={`case-card__status status-tag ${statusClass}`}>{c.status}</span>
      <h3 className="case-card__name">{c.name}</h3>
      <dl className="case-card__meta">
        <div><dt>Case Type</dt><dd>{c.caseType}</dd></div>
        <div><dt>Risk Level</dt><dd>{c.riskLevel}</dd></div>
        <div><dt>Jurisdiction</dt><dd>{c.jurisdiction}</dd></div>
        <div><dt>Assigned Attorney</dt><dd>{c.assignedAttorney} (Win Rate: {c.attorneyWinRate})</dd></div>
        <div><dt>Last Updated</dt><dd>{c.lastUpdated}</dd></div>
      </dl>
    </button>
  );
}
