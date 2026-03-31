const fclSteps = [
  {
    title: 'Get a Government Sponsor',
    content: `You can't just apply for an FCL — a U.S. government agency (like DoD, DOE, or an intelligence agency) must sponsor you. This usually happens when:`,
    bullets: [
      'You win a contract that requires access to classified info',
      'You\'re in a "pre-award" phase — a contract is coming, and the agency wants you cleared in advance',
      'A prime contractor needs you as a cleared subcontractor',
    ],
    callout: {
      type: 'info',
      text: '💡 **No sponsor = no clearance.** You cannot self-sponsor. If you\'re a startup wanting to work classified contracts, start by bidding on contracts that require clearance — the sponsorship comes with the work.',
    },
  },
  {
    title: 'Register in NISS',
    content: `NISS = **National Industrial Security System** (it replaced the old ISFD system). This is DCSA's online portal where your company formally enters the clearance process. Your sponsor initiates this — they tell DCSA "we need this company cleared."`,
  },
  {
    title: 'Appoint Key Management Personnel (KMP)',
    content: 'You need people in specific security roles. At minimum:',
    bullets: [
      '**FSO** (Facility Security Officer) — your point person for all security matters. Must be a U.S. citizen and an employee (not a contractor).',
      '**ITPSO** (Insider Threat Program Senior Official) — oversees your insider threat program',
      '**Insider Threat Program Senior Official** — can be the same person as the ITPSO at small companies',
    ],
    callout: {
      type: 'success',
      text: '✅ **Small company?** One person can wear multiple hats. The owner/CEO often serves as FSO at companies with <10 employees.',
    },
  },
  {
    title: 'Address Foreign Ownership, Control, or Influence (FOCI)',
    content: `DCSA needs to confirm that no foreign entity can influence your company's handling of classified info. If you have foreign investors, board members, or parent companies, you'll need a mitigation plan:`,
    bullets: [
      '**VTA** (Voting Trust Agreement) — foreign owners transfer voting rights to a cleared U.S. trustee',
      '**SSA** (Special Security Agreement) — allows foreign-owned companies to operate with oversight',
      '**Proxy Agreement** — foreign owner is completely excluded from management',
      '**SCA** (Security Control Agreement) — lighter-touch for minority foreign ownership',
    ],
    callout: {
      type: 'info',
      text: '💡 **No foreign ownership at all?** Great — this step is mostly paperwork for you. Just submit the SF328 (next step) certifying you\'re clean.',
    },
  },
  {
    title: 'Submit SF328',
    content: `**SF328** = Standard Form 328, "Certificate Pertaining to Foreign Interests." This is a sworn statement about your company's foreign connections (or lack thereof). Every company submits this — even if you have zero foreign ties.`,
  },
  {
    title: 'DCSA Processes Your Package',
    content: `DCSA (Defense Counterintelligence and Security Agency) reviews everything you've submitted. They may come back with questions. This is the "hurry up and wait" phase. Typical wait: **2–6 months**.`,
  },
  {
    title: 'Security Vulnerability Assessment',
    content: `A DCSA representative inspects your facility (in person or virtually). They're checking that you can actually protect classified info — physical security, document storage, IT systems, security procedures, etc.`,
  },
  {
    title: 'FCL Granted! 🎉',
    content: `You're now a cleared facility. But the work doesn't stop:`,
    bullets: [
      '**Annual self-inspections** — review your own security posture',
      '**DCSA reviews** — periodic assessments by DCSA (every 1-3 years)',
      '**Reporting requirements** — changes in ownership, KMP, foreign contacts, security incidents',
      '**Maintain NISPOM compliance** — the National Industrial Security Program Operating Manual is your bible now',
    ],
  },
];

export default fclSteps;
