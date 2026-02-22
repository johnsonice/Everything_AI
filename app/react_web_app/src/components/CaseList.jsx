import { useState, useMemo } from 'react';
import { CaseCard } from './CaseCard';
import { casesList } from '../data/casesData';

export function CaseList({ selectedId, onSelectCase }) {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return casesList;
    return casesList.filter(
      (c) =>
        c.id.toLowerCase().includes(q) ||
        c.name.toLowerCase().includes(q) ||
        c.caseType.toLowerCase().includes(q) ||
        c.assignedAttorney.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="case-list">
      <div className="case-list__search-wrap">
        <span className="case-list__search-icon" aria-hidden>Q</span>
        <input
          type="search"
          className="case-list__search"
          placeholder="Search cases..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search cases"
        />
      </div>
      <div className="case-list__scroll">
        {filtered.map((c) => (
          <CaseCard
            key={c.id}
            case={c}
            selected={c.id === selectedId}
            onClick={() => onSelectCase(c.id)}
          />
        ))}
      </div>
    </div>
  );
}
