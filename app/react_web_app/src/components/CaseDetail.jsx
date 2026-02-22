import { CaseOverview } from './CaseOverview';
import { AttorneyStats } from './AttorneyStats';
import { PartiesInfo } from './PartiesInfo';
import { ProceduralTimeline } from './ProceduralTimeline';
import { getCaseDetail } from '../data/casesData';

export function CaseDetail({ caseId }) {
  const detail = getCaseDetail(caseId);
  return (
    <div className="case-detail">
      <CaseOverview detail={detail} />
      <AttorneyStats attorneyStats={detail.attorneyStats} attorneyName={detail.assignedAttorney} />
      <PartiesInfo plaintiff={detail.plaintiff} defendant={detail.defendant} />
      <ProceduralTimeline timeline={detail.proceduralTimeline} />
    </div>
  );
}
