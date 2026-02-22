import { useState } from 'react';
import { CaseList } from './components/CaseList';
import { CaseDetail } from './components/CaseDetail';
import { ChatPanel } from './components/ChatPanel';
import { BackgroundPaths } from './components/ui/background-paths';
import { casesList } from './data/casesData';
import './App.css';

function App() {
  const [selectedId, setSelectedId] = useState(casesList[0]?.id ?? null);

  return (
    <div className="app-wrapper" style={{ position: 'relative' }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <BackgroundPaths title="" />
      </div>
      <div className="app" style={{ position: 'relative', zIndex: 1 }}>
        <aside className="app__sidebar app__sidebar--left">
          <CaseList selectedId={selectedId} onSelectCase={setSelectedId} />
        </aside>
        <main className="app__main">
          {selectedId ? <CaseDetail caseId={selectedId} /> : <div className="case-detail__empty">Select a case</div>}
        </main>
        <aside className="app__sidebar app__sidebar--right">
          <ChatPanel />
        </aside>
      </div>
    </div>
  );
}

export default App;
