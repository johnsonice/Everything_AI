// Plaintiff and Defendant info in two columns.
function PartyBlock({ title, party }) {
  if (!party) return null;
  const { companyName, businessAddress, entityType, authorizedRepresentative, businessScope, legalCounsel } = party;
  return (
    <div className="party-block">
      <h3 className="party-block__title">{title}</h3>
      <dl className="party-block__list">
        <div><dt>Company Name</dt><dd>{companyName}</dd></div>
        <div><dt>Business Address</dt><dd>{businessAddress}</dd></div>
        <div><dt>Entity Type</dt><dd>{entityType}</dd></div>
        <div><dt>Authorized Representative</dt><dd>{authorizedRepresentative}</dd></div>
        <div><dt>Business Scope</dt><dd>{businessScope}</dd></div>
        {legalCounsel && (
          <>
            <div><dt>Legal Counsel</dt><dd>{legalCounsel.attorneyName}</dd></div>
            <div><dt>Law Firm</dt><dd>{legalCounsel.lawFirm}</dd></div>
            <div><dt>Bar Number</dt><dd>{legalCounsel.barNumber}</dd></div>
          </>
        )}
      </dl>
    </div>
  );
}

export function PartiesInfo({ plaintiff, defendant }) {
  return (
    <section className="card parties-info">
      <h2 className="card__title">Parties Information</h2>
      <div className="parties-info__grid">
        <PartyBlock title="Plaintiff's Information" party={plaintiff} />
        <PartyBlock title="Defendant's Information" party={defendant} />
      </div>
    </section>
  );
}
