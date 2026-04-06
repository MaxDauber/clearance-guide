const personalSteps = [
  {
    title: 'Get Sponsored',
    content: 'Your employer (who must already have an FCL) or a government agency initiates the process for you. They submit a request saying "we need this person cleared to [level] for [reason]."',
    callout: {
      type: 'info',
      text: '💡 <strong>You cannot sponsor yourself.</strong> There is no way to walk into an office and apply. You need a job (or job offer) that requires a clearance.',
    },
  },
  {
    title: 'Fill Out the SF86',
    content: 'The <strong>SF86</strong> (Questionnaire for National Security Positions) is the big one. You\'ll fill it out via <strong>eApp</strong> (the new online system, replacing the older e-QIP). It covers the last <strong>7–10 years</strong> of your life:',
    bullets: [
      "Where you've lived, worked, and gone to school",
      'Foreign contacts, travel, and financial interests',
      'Criminal history, drug use, alcohol-related incidents',
      "Mental health treatment (only specific types — it's not a fishing expedition)",
      'Financial issues — bankruptcies, delinquencies, collections',
      'Personal references who can vouch for your character',
    ],
    callout: {
      type: 'success',
      text: "✅ <strong>Don't panic.</strong> The SF86 looks intimidating, but the #1 rule is: <strong>be honest.</strong> They're looking for honesty and trustworthiness, not perfection. People with past drug use, financial issues, and even minor criminal records get cleared every day — as long as they're truthful about it.",
    },
  },
  {
    title: 'Investigation by DCSA',
    content: 'DCSA (Defense Counterintelligence and Security Agency) investigates your background. What actually happens:',
    bullets: [
      '<strong>Records checks</strong> — FBI, court records, financial, employment, education',
      '<strong>Subject interview</strong> — an investigator sits down with you and goes through your SF86',
      '<strong>Reference interviews</strong> — they talk to people you listed (and people those people mention)',
      '<strong>Field work</strong> — for TS, they visit your neighborhoods, employers, schools',
    ],
    callout: {
      type: 'info',
      text: '💡 <strong>For Secret clearances</strong>, it\'s mostly automated records checks. <strong>Top Secret</strong> involves a full field investigation with in-person interviews. The higher the level, the deeper they dig.',
    },
  },
  {
    title: 'Adjudication',
    content: 'An adjudicator reviews the investigation results against the <strong>13 adjudicative guidelines</strong>:',
    bullets: [
      'Allegiance to the U.S.',
      'Foreign influence & foreign preference',
      'Sexual behavior',
      'Personal conduct (honesty)',
      'Financial considerations',
      'Alcohol & drug involvement',
      'Criminal conduct',
      'Emotional/mental health',
      'Handling protected information',
      'Outside activities & misuse of IT',
    ],
    afterBullets: 'They weigh the <strong>"whole person"</strong> — one red flag doesn\'t automatically disqualify you. They look at recency, frequency, and whether you\'ve shown rehabilitation.',
  },
  {
    title: 'Continuous Vetting & Trusted Workforce 2.0',
    content: 'The old model of reinvestigating people every 5-10 years is being replaced by <strong>Trusted Workforce 2.0 (TW 2.0)</strong>:',
    bullets: [
      '<strong>Continuous vetting</strong> — automated checks run ongoing (financial, criminal, travel records)',
      '<strong>No more periodic reinvestigations</strong> — replaced by continuous monitoring',
      '<strong>Tiered investigations</strong> — the depth matches the sensitivity of the position',
      '<strong>Faster enrollment</strong> — goal is to speed up initial investigations too',
    ],
    callout: {
      type: 'info',
      text: '💡 <strong>What Trusted Workforce 2.0 means for you:</strong> More automation, faster processing, better reciprocity between agencies, and a shift from "snapshot" investigations to continuous monitoring. Good news for applicants — fewer surprises.',
    },
  },
  {
    title: 'Clearance Granted! 🎉',
    content: "Congrats — you're cleared. A few things to know:",
    bullets: [
      '<strong>Reciprocity</strong> — if you switch employers or agencies, your clearance should transfer (keyword: "should" — it doesn\'t always go smoothly)',
      '<strong>Reinstatement</strong> — if your clearance lapses (within 2 years of last activity), it can often be reinstated without a full new investigation',
      '<strong>Your obligations</strong> — report foreign travel, contacts, financial changes, arrests, or anything that could affect your clearance',
    ],
  },
];

export default personalSteps;
