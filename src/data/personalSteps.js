const personalSteps = [
  {
    title: 'Get Sponsored',
    content: 'Your employer (who must already have an FCL) or a government agency initiates the process for you. They submit a request saying "we need this person cleared to [level] for [reason]."',
    callout: {
      type: 'info',
      text: '💡 **You cannot sponsor yourself.** There is no way to walk into an office and apply. You need a job (or job offer) that requires a clearance.',
    },
  },
  {
    title: 'Fill Out the SF86',
    content: 'The **SF86** (Questionnaire for National Security Positions) is the big one. You\'ll fill it out via **eApp** (the new online system, replacing the older e-QIP). It covers the last **7–10 years** of your life:',
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
      text: "✅ **Don't panic.** The SF86 looks intimidating, but the #1 rule is: **be honest.** They're looking for honesty and trustworthiness, not perfection. People with past drug use, financial issues, and even minor criminal records get cleared every day — as long as they're truthful about it.",
    },
  },
  {
    title: 'Investigation by DCSA',
    content: 'DCSA (Defense Counterintelligence and Security Agency) investigates your background. What actually happens:',
    bullets: [
      '**Records checks** — FBI, court records, financial, employment, education',
      '**Subject interview** — an investigator sits down with you and goes through your SF86',
      '**Reference interviews** — they talk to people you listed (and people those people mention)',
      '**Field work** — for TS, they visit your neighborhoods, employers, schools',
    ],
    callout: {
      type: 'info',
      text: '💡 **For Secret clearances**, it\'s mostly automated records checks. **Top Secret** involves a full field investigation with in-person interviews. The higher the level, the deeper they dig.',
    },
  },
  {
    title: 'Adjudication',
    content: 'An adjudicator reviews the investigation results against the **13 adjudicative guidelines**:',
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
    afterBullets: 'They weigh the **"whole person"** — one red flag doesn\'t automatically disqualify you. They look at recency, frequency, and whether you\'ve shown rehabilitation.',
  },
  {
    title: 'Continuous Vetting & Trusted Workforce 2.0',
    content: 'The old model of reinvestigating people every 5-10 years is being replaced by **Trusted Workforce 2.0 (TW 2.0)**, now evolving into **3.0**:',
    bullets: [
      '**Continuous vetting** — automated checks run ongoing (financial, criminal, travel records)',
      '**No more periodic reinvestigations** — replaced by continuous monitoring',
      '**Tiered investigations** — the depth matches the sensitivity of the position',
      '**Faster enrollment** — goal is to speed up initial investigations too',
    ],
    callout: {
      type: 'info',
      text: '💡 **What TW 3.0 changes:** More automation, faster processing, better reciprocity between agencies, and a shift from "snapshot" investigations to continuous monitoring. Good news for applicants — fewer surprises.',
    },
  },
  {
    title: 'Clearance Granted! 🎉',
    content: "Congrats — you're cleared. A few things to know:",
    bullets: [
      '**Reciprocity** — if you switch employers or agencies, your clearance should transfer (keyword: "should" — it doesn\'t always go smoothly)',
      '**Reinstatement** — if your clearance lapses (within 2 years of last activity), it can often be reinstated without a full new investigation',
      '**Your obligations** — report foreign travel, contacts, financial changes, arrests, or anything that could affect your clearance',
    ],
  },
];

export default personalSteps;
