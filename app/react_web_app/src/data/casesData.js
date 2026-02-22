// Case list and case-detail data for legal dashboard (in-memory, production-style).

export const CASE_STATUS = {
  TRIAL: { label: 'Trial Phase', color: 'status--green' },
  DISCOVERY: { label: 'Discovery Phase', color: 'status--blue' },
  CLOSED: { label: 'Closed', color: 'status--grey' },
  PRE_TRIAL: { label: 'Pre-Trial', color: 'status--amber' },
};

export const casesList = [
  {
    id: 'CA-2025-0526',
    status: 'Trial Phase',
    statusKey: 'TRIAL',
    name: 'Horizon Data Solutions, Inc. vs. Apex Software Services LLC',
    caseType: 'Contract Dispute',
    riskLevel: 'Medium Risk',
    jurisdiction: 'U.S. District Court, Central District of California',
    assignedAttorney: 'Sarah L. Whitman',
    attorneyWinRate: '87%',
    lastUpdated: '2025-12-18 09:15',
  },
  {
    id: 'CA-2025-0482',
    status: 'Discovery Phase',
    statusKey: 'DISCOVERY',
    name: 'Summit Holdings Ltd. vs. Pacific Maritime Corp.',
    caseType: 'Real Estate & Construction',
    riskLevel: 'High Risk',
    jurisdiction: 'Superior Court of California, County of Los Angeles',
    assignedAttorney: 'Michael R. Chen',
    attorneyWinRate: '82%',
    lastUpdated: '2025-12-17 14:30',
  },
  {
    id: 'CA-2025-0411',
    status: 'Closed',
    statusKey: 'CLOSED',
    name: 'TechVenture Inc. vs. DataGuard Systems',
    caseType: 'Intellectual Property',
    riskLevel: 'Low Risk',
    jurisdiction: 'U.S. District Court, Northern District of California',
    assignedAttorney: 'Sarah L. Whitman',
    attorneyWinRate: '87%',
    lastUpdated: '2025-11-28 11:00',
  },
  {
    id: 'CA-2025-0398',
    status: 'Pre-Trial',
    statusKey: 'PRE_TRIAL',
    name: 'Global Health Partners vs. MedSecure LLC',
    caseType: 'Data Privacy & Cybersecurity',
    riskLevel: 'Medium Risk',
    jurisdiction: 'U.S. District Court, District of Delaware',
    assignedAttorney: 'Emily J. Foster',
    attorneyWinRate: '91%',
    lastUpdated: '2025-12-15 16:45',
  },
];

// Full detail for selected case (CA-2025-0526 as primary; others can reuse or be minimal).
export function getCaseDetail(caseId) {
  const base = casesList.find((c) => c.id === caseId) || casesList[0];
  return {
    ...base,
    currentPhase: 'Trial Phase (Dec 25-31, 2025)',
    filingDate: 'June 15, 2025',
    estimatedClosure: 'March 30, 2026 (AI Prediction)',
    attorneyStats: {
      winRateTrend: [
        { quarter: '2024 Q4', attorney: 84.2, industry: 72.1 },
        { quarter: '2025 Q1', attorney: 85.1, industry: 72.8 },
        { quarter: '2025 Q2', attorney: 86.0, industry: 73.2 },
        { quarter: '2025 Q3', attorney: 86.5, industry: 73.5 },
        { quarter: '2025 Q4', attorney: 87.68, industry: 74.0 },
      ],
      totalCasesHandled: 212594,
      averageWinRate: 87.68,
      caseTypeDistribution: [
        { name: 'Contract Dispute', value: 40 },
        { name: 'Real Estate & Construction', value: 18 },
        { name: 'Intellectual Property', value: 15 },
        { name: 'Data Privacy & Cybersecurity', value: 12 },
        { name: 'Others', value: 15 },
      ],
    },
    plaintiff: {
      companyName: 'Horizon Data Solutions, Inc.',
      businessAddress: '4200 Pacific Coast Highway, Suite 300, Los Angeles, CA 90292',
      entityType: 'C-Corporation',
      authorizedRepresentative: 'James T. Morrison, CEO',
      businessScope: 'Enterprise data analytics and cloud infrastructure',
      legalCounsel: {
        attorneyName: 'Sarah L. Whitman',
        lawFirm: 'Whitman & Associates LLP',
        barNumber: 'CA Bar #284751',
      },
    },
    defendant: {
      companyName: 'Apex Software Services LLC',
      businessAddress: '1800 Avenue of the Stars, Suite 1100, Los Angeles, CA 90067',
      entityType: 'Limited Liability Company',
      authorizedRepresentative: 'Rachel K. Park, Managing Member',
      businessScope: 'Software development and IT consulting',
      legalCounsel: {
        attorneyName: 'David M. Reeves',
        lawFirm: 'Reeves & Collins',
        barNumber: 'CA Bar #192847',
      },
    },
    proceduralTimeline: [
      { stage: 'Filing Phase', timePeriod: 'June 15, 2025 - June 20, 2025', progress: 'Completed', milestones: 'Case Filed Successfully' },
      { stage: 'Discovery Phase', timePeriod: 'June 21, 2025 - Oct 15, 2025', progress: 'Completed', milestones: 'Document Production Completed' },
      { stage: 'Pre-Trial Preparation', timePeriod: 'Oct 16, 2025 - Dec 10, 2025', progress: 'Completed', milestones: 'Trial Date Scheduled; Motions Resolved' },
      { stage: 'Trial Phase', timePeriod: 'Dec 25, 2025 - Dec 31, 2025', progress: 'In Progress', milestones: 'First Hearing (Dec 15, 2025)' },
      { stage: 'Judgment', timePeriod: 'TBD', progress: 'Pending', milestones: 'Awaiting verdict' },
    ],
  };
}

// Seed Q&A for AI Legal Assistant (shown when no user messages yet).
export const seedLegalQA = [
  {
    id: 'seed-1',
    role: 'user',
    content: 'How does the court generally assess liquidated damages in this case?',
  },
  {
    id: 'seed-1a',
    role: 'assistant',
    content: 'Under the Uniform Commercial Code (UCC) §2-718 and common law, liquidated damages are enforceable only if they constitute a reasonable forecast of actual harm at contract formation and are not a penalty. Courts in the Central District of California typically examine: (1) anticipated or actual loss, (2) difficulty of proof of loss, and (3) whether the amount is disproportionate. We should emphasize industry standards and our documented losses to support the clause.',
  },
  {
    id: 'seed-2',
    role: 'user',
    content: 'Defendant claims product quality issues. How should we respond?',
  },
  {
    id: 'seed-2a',
    role: 'assistant',
    content: 'Recommended steps: (1) Engage a third-party lab to assess the alleged defects and document findings. (2) Collect and preserve all communications, specs, and acceptance records. (3) Obtain expert opinion on industry standards and whether the deliverables met contract terms. (4) Prepare a timeline of delivery, testing, and any notice of non-conformity. (5) Consider counterclaims if their allegations are shown to be in bad faith.',
  },
  {
    id: 'seed-3',
    role: 'user',
    content: 'Can we request a continuance of the trial?',
  },
  {
    id: 'seed-3a',
    role: 'assistant',
    content: 'Continuances are at the court’s discretion. Local rules and the judge’s standing order govern timing and good cause. Typically you must show good cause (e.g., unavailability of a key witness, new evidence, or illness). File a motion as soon as the need is known and serve opposing counsel. Be prepared to explain why the interests of justice outweigh any prejudice to the other party.',
  },
  {
    id: 'seed-4',
    role: 'user',
    content: 'Is there an appeal option if we lose?',
  },
  {
    id: 'seed-4a',
    role: 'assistant',
    content: 'Yes. A final judgment from the U.S. District Court can be appealed to the U.S. Court of Appeals for the Ninth Circuit. You generally have 30 days after entry of judgment to file a notice of appeal. Success rates vary by issue; we can analyze comparable appeals and prepare a post-trial strategy if needed.',
  },
  {
    id: 'seed-5',
    role: 'user',
    content: 'How to prepare for courtroom presentation?',
  },
  {
    id: 'seed-5a',
    role: 'assistant',
    content: 'Key steps: (1) Organize exhibits and demonstratives in order of use. (2) Prepare opening and closing outlines and key witness examinations. (3) Conduct moot sessions with co-counsel. (4) Verify technology and backup for any electronic presentations. (5) Review the judge’s preferences and local rules on time limits and courtroom decorum.',
  },
  {
    id: 'seed-6',
    role: 'user',
    content: 'Should we hire expert witnesses?',
  },
  {
    id: 'seed-6a',
    role: 'assistant',
    content: 'Expert witnesses are essential when technical, financial, or industry-specific issues are in dispute. Here, an expert on software deliverables and industry standards could rebut defendant’s quality claims, and a damages expert could support our liquidated-damages position. Retain early so they can review materials and prepare reports within the discovery schedule.',
  },
];
