const fclSteps = [
  {
    title: 'Get a Government Sponsor',
    content: `You can't just apply for an FCL — a U.S. government agency (like DoD, DOE, or an intelligence agency) must sponsor you. This usually happens when:`,
    bullets: [
      'You win a contract that requires access to classified info',
      'You\'re in a "pre-award" phase — a contract is coming, and the agency wants you cleared in advance',
      'A prime contractor needs you as a cleared subcontractor',
    ],
    afterBullets: 'The sponsor submits a sponsorship request through DCSA, which formally kicks off the process. Without this, you\'re dead in the water.',
    callout: {
      type: 'info',
      text: '💡 <strong>No sponsor = no clearance.</strong> You cannot self-sponsor. If you\'re a startup wanting to work classified contracts, start by bidding on contracts that require clearance — the sponsorship comes with the work. Network with primes who might sub you onto classified programs.',
    },
  },
  {
    title: 'Register in NISS',
    content: `NISS = <strong>National Industrial Security System</strong>. This is DCSA's online portal where your company formally enters the clearance process. Your sponsor initiates this — they tell DCSA "we need this company cleared." You'll create an account and begin submitting your facility clearance package.`,
    bullets: [
      'Create your organization profile in NISS',
      'Upload corporate documents (articles of incorporation, bylaws, board resolutions)',
      'Identify your facility location(s) that need clearance',
      'Submit your DD Form 441 (Department of Defense Security Agreement)',
    ],
    callout: {
      type: 'info',
      text: '💡 NISS replaced the old e-FCL/ISFD system. If you see references to those, they\'re outdated. Everything goes through NISS now at <a href="https://www.dcsa.mil/Industrial-Security/National-Industrial-Security-System-NISS/" target="_blank" rel="noopener noreferrer">dcsa.mil/NISS</a>.',
    },
  },
  {
    title: 'Appoint Key Management Personnel (KMP)',
    content: 'DCSA requires specific people in security roles before they\'ll process your clearance. These individuals must be U.S. citizens, and they\'ll need their own personal security clearances (which DCSA will process as part of your FCL package):',
    bullets: [
      '<strong>FSO (Facility Security Officer)</strong> — Your primary security point of contact. Responsible for implementing the NISPOM at your facility, managing personnel clearances, conducting security briefings/debriefings, and reporting security incidents. Must complete FSO training at the CDSE (Center for Development of Security Excellence) within 6 months.',
      '<strong>ITPSO (Insider Threat Program Senior Official)</strong> — Oversees your insider threat program. Required since 2016. Must establish procedures for detecting, deterring, and reporting insider threats.',
      '<strong>Officers, Directors, and Senior Management</strong> — All officers and board members must either be cleared or formally excluded from access to classified information. Foreign nationals on your board? That\'s a FOCI issue (see next step).',
    ],
    callout: {
      type: 'success',
      text: '✅ <strong>Small company?</strong> One person can wear multiple hats. At companies with fewer than 10 employees, the owner/CEO often serves as FSO and ITPSO simultaneously. You don\'t need a full security department to get cleared.',
    },
  },
  {
    title: 'Address Foreign Ownership, Control, or Influence (FOCI)',
    content: `DCSA must confirm that no foreign entity can influence your company's handling of classified info. This is one of the most scrutinized areas — and the <strong>#1 cause of FCL delays</strong>. Even if you have zero foreign ties, you still submit documentation certifying that.`,
    bullets: [
      '<strong>No FOCI</strong> — The easy path. Submit SF328 certifying no foreign ownership, control, or influence. Most small U.S.-founded companies fall here.',
      '<strong>FOCI with mitigation</strong> — If you have foreign investors, board members, or parent companies, you\'ll need a formal mitigation instrument:',
    ],
    afterBullets: '<strong>FOCI Mitigation Instruments (from least to most restrictive):</strong>',
    callout: {
      type: 'info',
      text: `<strong>Board Resolution</strong> — For minor foreign interests. The board passes a resolution certifying the foreign interest doesn't affect classified work.<br/><br/>
      <strong>SCA (Security Control Agreement)</strong> — For minority foreign ownership. Establishes security controls and government oversight without excluding the foreign owner.<br/><br/>
      <strong>SSA (Special Security Agreement)</strong> — Allows foreign-owned companies to operate with a Government Security Committee (GSC) providing oversight. Most common for companies with significant foreign investment.<br/><br/>
      <strong>VTA (Voting Trust Agreement)</strong> — Foreign owners transfer voting rights to cleared U.S. trustees. More restrictive than SSA.<br/><br/>
      <strong>Proxy Agreement</strong> — Most restrictive. Foreign owner is completely excluded from management and board participation. Required when the foreign owner is from a country with adversarial interests.`,
    },
  },
  {
    title: 'Submit the SF328 and Corporate Documents',
    content: `<strong>SF328</strong> = Standard Form 328, "Certificate Pertaining to Foreign Interests." This is a sworn statement about your company's foreign connections (or lack thereof). Every company submits this — even if you have zero foreign ties. It's a legal document, so accuracy matters.`,
    bullets: [
      '<strong>SF328</strong> — Foreign interest certification (all companies)',
      '<strong>DD Form 441</strong> — DoD Security Agreement (your contract with the government to protect classified info)',
      '<strong>Corporate documents</strong> — Articles of incorporation, bylaws, stock ownership records, list of officers/directors',
      '<strong>KMP data</strong> — Names, SSNs, citizenship info for all key management personnel',
      '<strong>Facility information</strong> — Address, square footage, physical security details',
      '<strong>IT system details</strong> — If you\'ll process classified on information systems (triggers additional requirements under NIST SP 800-171)',
    ],
    callout: {
      type: 'info',
      text: '💡 <strong>Pro tip:</strong> Be thorough on the SF328. Omitting a foreign connection — even an innocent one — can result in your package being returned or, worse, questions about your integrity. Disclose everything and let DCSA make the determination.',
    },
  },
  {
    title: 'DCSA Processes Your Package',
    content: `DCSA (Defense Counterintelligence and Security Agency) reviews everything you've submitted. This is the "hurry up and wait" phase. They'll check your corporate records, verify KMP information, process background investigations for your KMP, and review your FOCI determination.`,
    bullets: [
      '<strong>Initial review</strong> — DCSA checks your package for completeness. Missing items get bounced back (1-2 weeks)',
      '<strong>FOCI determination</strong> — DCSA\'s FOCI division reviews your foreign interests. Simple cases: 2-4 weeks. Complex FOCI with mitigation instruments: 3-12 months',
      '<strong>KMP background investigations</strong> — Your key personnel undergo the same investigation process as any individual security clearance (SF86, interviews, record checks). This runs in parallel but can take 3-6 months for Secret, longer for Top Secret',
      '<strong>Adjudication</strong> — DCSA adjudicates your KMP clearances and your overall facility clearance eligibility',
    ],
    callout: {
      type: 'info',
      text: '⏱ <strong>Typical timeline:</strong> 4-8 months for a straightforward FCL with no FOCI issues and cooperative KMP. With FOCI mitigation: 6-18 months. Some complex cases take 2+ years. Start early.',
    },
  },
  {
    title: 'Security Vulnerability Assessment (SVA)',
    content: `A DCSA Industrial Security Representative visits your facility (in person or sometimes virtually for initial assessments). They're evaluating whether your facility can actually protect classified information at the level you've requested.`,
    bullets: [
      '<strong>Physical security</strong> — Perimeter controls, access points, intrusion detection, security containers (GSA-approved safes for storing classified documents)',
      '<strong>Document storage</strong> — Approved safes and vaults for classified materials. Secret requires a GSA-approved security container at minimum. Top Secret may require a vault or alarmed area',
      '<strong>Access controls</strong> — How you control who enters areas where classified work happens. Visitor logs, escort procedures, badge systems',
      '<strong>Information systems</strong> — If processing classified data electronically, your systems need to meet NIST SP 800-171 (for CUI) or be accredited for classified processing',
      '<strong>Security procedures</strong> — Your written security procedures, emergency plans, classification guides',
      '<strong>Insider threat program</strong> — Documentation showing you have a functioning insider threat program with awareness training and reporting procedures',
    ],
    callout: {
      type: 'info',
      text: '💡 <strong>Pro tip:</strong> Don\'t wait for the SVA to set up your security infrastructure. Have your safes, alarm systems, and written procedures in place before DCSA comes. The SVA is a pass/fail gate — failing means rework and delay.',
    },
  },
  {
    title: 'FCL Granted! 🎉',
    content: `Congratulations — you're now a cleared facility. Your FCL will be recorded in NISS and visible to government agencies and cleared contractors who need to verify your status. But getting the FCL is just the beginning — maintaining it is an ongoing commitment:`,
    bullets: [
      '<strong>Annual self-inspections</strong> — You must conduct and document a comprehensive security review of your own facility every year',
      '<strong>DCSA security reviews</strong> — DCSA will assess your facility periodically (every 1-3 years depending on your rating and any issues)',
      '<strong>Change reporting</strong> — You must report changes in ownership, KMP, foreign contacts, adverse information about cleared employees, and security incidents. Some have 1-business-day reporting requirements',
      '<strong>NISPOM compliance</strong> — The National Industrial Security Program Operating Manual (32 CFR Part 117) is your bible. Know it. Follow it.',
      '<strong>Security education</strong> — Annual refresher training for all cleared employees, initial security briefings for new clearance holders, debriefings when people leave',
      '<strong>Insider threat program maintenance</strong> — Ongoing monitoring, training, and reporting per NISPOM requirements',
      '<strong>Classified material accountability</strong> — Track every classified document that enters or leaves your facility. Annual inventories for Top Secret material',
    ],
    callout: {
      type: 'success',
      text: '✅ <strong>FCL levels:</strong> Your FCL level determines the highest classification of work you can perform. A Secret FCL lets you work Secret and below. A Top Secret FCL lets you work all levels. Most companies start with Secret — it covers ~80% of classified contracts.',
    },
  },
];

export default fclSteps;
