// Key-value case overview card.
export function CaseOverview({ detail }) {
  const rows = [
    { label: 'Case ID', value: detail.id },
    { label: 'Case Type', value: detail.caseType },
    { label: 'Risk Level', value: detail.riskLevel },
    { label: 'Current Phase', value: detail.currentPhase },
    { label: 'Filing Date', value: detail.filingDate },
    { label: 'Estimated Closure', value: detail.estimatedClosure },
    { label: 'Jurisdiction', value: detail.jurisdiction },
    { label: 'Assigned Attorney', value: `${detail.assignedAttorney} (Win Rate: ${detail.attorneyWinRate})` },
  ];
  return (
    <section className="card case-overview">
      <h2 className="card__title">Case Overview</h2>
      <dl className="case-overview__grid">
        {rows.map(({ label, value }) => (
          <div key={label} className="case-overview__row">
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
