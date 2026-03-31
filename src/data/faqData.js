const faqData = [
  {
    question: 'Can I get a security clearance on my own?',
    answer: `<p>No. You must be <strong>sponsored</strong> by an employer with a Facility Clearance or by a government agency. There is no way to apply independently, pay a fee, and get cleared. The clearance is tied to a need — a specific job or contract that requires access to classified information.</p>`,
  },
  {
    question: 'Will marijuana use disqualify me?',
    answer: `<p><strong>Past use?</strong> Usually not, if it was infrequent and you've stopped. Adjudicators look at recency, frequency, and intent. Someone who tried it in college years ago is very different from someone who used it last month.</p><p><strong>Current or recent use?</strong> This is a problem. Marijuana is still illegal federally, and federal agencies don't care about state-level legalization. You need to show clear intent to stop and a period of abstinence (typically 12+ months for regular use).</p><p><strong>Bottom line:</strong> Be honest about it. People get cleared with past marijuana use regularly. Lying about it is far worse.</p>`,
  },
  {
    question: 'What about foreign contacts and travel?',
    answer: `<p>Having foreign friends, family, or travel history does <strong>not</strong> disqualify you. Millions of cleared personnel have foreign connections. What matters is:</p><ul><li>The nature and depth of the relationship</li><li>The country involved (some countries raise more concern than others)</li><li>Whether the contact could be used as leverage against you</li><li>Whether you've been honest about it</li></ul><p>Disclose everything. Investigators already know about your travel (passport records). Omitting a trip looks far worse than the trip itself.</p>`,
  },
  {
    question: 'How much does a clearance cost?',
    answer: `<p><strong>Free to you, the individual.</strong> The government (or your sponsoring employer) pays for the investigation. Approximate costs to the sponsor:</p><ul><li><strong>Confidential / Secret:</strong> ~$400–$600</li><li><strong>Top Secret:</strong> ~$5,000–$6,000</li><li><strong>TS with polygraph:</strong> Higher</li></ul><p>If anyone asks you to pay for your own clearance investigation, that's a scam.</p>`,
  },
  {
    question: "What's the difference between Secret and TS/SCI?",
    answer: `<p><strong>Secret</strong> gives you access to information that could cause "serious damage" to national security if disclosed. Most cleared personnel hold Secret.</p><p><strong>Top Secret (TS)</strong> covers information that could cause "exceptionally grave damage." Requires a more thorough investigation.</p><p><strong>TS/SCI</strong> (Sensitive Compartmented Information) isn't a clearance level — it's an <em>access designation</em> on top of TS. It means you can access specific intelligence programs. You need TS clearance <em>plus</em> SCI access granted by the intelligence community, usually requiring a polygraph and additional adjudication.</p>`,
  },
  {
    question: "What's the difference between a clearance and access?",
    answer: `<p><strong>Clearance = eligibility.</strong> It means you've been investigated and adjudicated as trustworthy to handle classified information at a certain level.</p><p><strong>Access = permission.</strong> It means you've been specifically authorized to view particular classified programs or information. You can have a TS clearance but zero access if you're not "read in" to any programs.</p><p>Think of it like a driver's license (clearance) vs. the keys to a specific car (access). The license proves you're qualified; the keys let you actually drive.</p>`,
  },
  {
    question: 'What is a "read-in" and "read-out"?',
    answer: `<p><strong>Read-in</strong> is the formal briefing you receive when granted access to a Special Access Program (SAP) or SCI compartment. You're told what the program is, what you can and can't do, and you sign a non-disclosure agreement. You're now "read in" — you have both the clearance and the access.</p><p><strong>Read-out</strong> is the reverse: a formal debriefing when your access ends (leaving a job, project ends, etc.). You're reminded of your ongoing obligations to protect the information, sign more paperwork, and your access is formally terminated. Your clearance itself may remain active.</p>`,
  },
  {
    question: 'Can I lose my clearance?',
    answer: `<p>Yes. Common reasons include:</p><ul><li><strong>Security violations</strong> — mishandling classified material</li><li><strong>Criminal conduct</strong> — arrests, especially for serious offenses</li><li><strong>Financial problems</strong> — excessive debt, bankruptcy (shows vulnerability to coercion)</li><li><strong>Drug use</strong> — any use while holding a clearance is a big deal</li><li><strong>Foreign influence</strong> — new foreign relationships that raise concern</li><li><strong>Dishonesty</strong> — lying on forms or during investigations</li></ul><p>Under continuous vetting, issues surface faster. You can appeal a revocation through formal channels.</p>`,
  },
  {
    question: 'What is reciprocity?',
    answer: `<p>Reciprocity means if Agency A cleared you, Agency B should accept that clearance without making you go through the whole process again. In theory, all federal agencies honor each other's clearances.</p><p><strong>In practice?</strong> It's not always seamless. Some agencies (especially in the IC) may require additional steps, polygraphs, or their own adjudication. But the government is actively working to improve this — Trusted Workforce 2.0/3.0 aims to make reciprocity smoother.</p>`,
  },
  {
    question: 'How long does a polygraph take?',
    answer: `<p><strong>2–4 hours</strong> is typical for a single session. CI polygraphs tend to be shorter; full-scope lifestyle polygraphs can run longer. Some agencies schedule multiple sessions on different days, especially if results are inconclusive or the examiner wants to cover more ground.</p><p>Plan for a full day — you won't know exactly how long until you're in it. Bring water and don't schedule anything immediately after.</p>`,
  },
  {
    question: 'What if I have dual citizenship?',
    answer: `<p>Dual citizenship alone doesn't automatically disqualify you, but it gets complicated. Key factors:</p><ul><li><strong>Country matters</strong> — dual citizenship with a Five Eyes ally (UK, Canada, Australia, NZ) is viewed differently than with an adversary nation</li><li><strong>Active use</strong> — using a foreign passport, voting in foreign elections, or claiming foreign benefits raises flags</li><li><strong>Willingness to renounce</strong> — for higher clearances (especially TS/SCI), you may be asked to renounce your foreign citizenship</li><li><strong>Clearance level</strong> — Confidential/Secret may be more flexible; TS/SCI and IC positions will scrutinize heavily</li></ul><p>Many dual citizens hold clearances. Disclose it fully and be prepared to demonstrate your primary allegiance to the U.S.</p>`,
  },
  {
    question: 'Can I travel internationally with a clearance?',
    answer: `<p><strong>Yes</strong>, but you have reporting obligations. What you need to know:</p><ul><li><strong>Report all foreign travel</strong> to your FSO before you go (and after you return)</li><li><strong>Some destinations require pre-approval</strong> — especially countries of concern (Russia, China, Iran, North Korea, etc.)</li><li><strong>CI briefing/debriefing</strong> — for certain destinations, you'll get a counterintelligence briefing before departure and a debrief when you return</li><li><strong>Don't bring work devices</strong> — assume your electronics will be compromised in adversary nations</li><li><strong>Be aware of approaches</strong> — intelligence services in some countries actively target cleared U.S. personnel</li></ul><p>Vacation to London or Tokyo? Usually no big deal beyond reporting. Trip to a high-risk country? Expect more scrutiny and process.</p>`,
  },
  {
    question: 'My clearance is taking forever — can I speed it up?',
    answer: `<p><strong>What actually helps:</strong></p><ul><li><strong>Interim clearance</strong> — ask your FSO if you qualify. Interim Secret is relatively common; interim TS is rarer. This lets you start working while the full investigation continues.</li><li><strong>Complete SF86 thoroughly</strong> — incomplete or inconsistent forms create the biggest delays. Every missing detail = another round of back-and-forth.</li><li><strong>Respond quickly</strong> — when investigators reach out, respond immediately. Same for your references.</li><li><strong>Congressional inquiry</strong> — your representative's office can send a status inquiry to DCSA. This doesn't speed things up directly, but it gets eyes on your case. Use this as a last resort after 12+ months.</li></ul><p><strong>What doesn't help:</strong> Calling DCSA repeatedly (they can't share investigation details), pestering your FSO daily (they have limited visibility too), or assuming it's because of something on your record (most delays are just backlog).</p>`,
  },
  {
    question: 'What about mental health treatment?',
    answer: `<p><strong>This one is important: seeking mental health treatment is NOT a negative.</strong></p><p>The <strong>Mental Health Stigma Reduction Act (MHSRA) of 2019</strong> significantly changed how mental health is evaluated. The SF86 no longer asks about routine counseling, and adjudicators are trained to view seeking help <em>positively</em> — it shows self-awareness and proactive behavior.</p><p><strong>What's NOT an issue:</strong></p><ul><li>Counseling for grief, relationship issues, career stress</li><li>Couples or family therapy</li><li>Treatment for anxiety or depression</li><li>Counseling related to military service</li></ul><p><strong>What may require additional review:</strong> Court-ordered treatment, conditions that impair judgment or reliability, or treatment that isn't being followed. Even then, it's evaluated in context — not auto-disqualifying.</p><p><strong>Bottom line:</strong> If you need help, get help. The clearance process rewards people who manage their health responsibly.</p>`,
  },
  {
    question: 'What about student loans or other debt?',
    answer: `<p><strong>Debt alone is NOT disqualifying.</strong> The vast majority of cleared personnel have mortgages, car loans, and student debt. What adjudicators care about is whether you're <em>managing it responsibly</em>.</p><p><strong>Green flags:</strong></p><ul><li>Making regular payments (even minimum payments)</li><li>On an income-driven repayment plan</li><li>Communicating with creditors if you're struggling</li><li>No accounts in collections (or actively resolving them)</li></ul><p><strong>Red flags:</strong></p><ul><li>Ignoring debts entirely — accounts in collections with no plan</li><li>Living way beyond your means</li><li>Unexplained wealth or spending</li><li>Gambling problems or financial patterns showing poor judgment</li></ul><p>The concern isn't "do you owe money" — it's "could your financial situation make you vulnerable to coercion or bribery." Show you're handling it like a responsible adult and you'll be fine.</p>`,
  },
];

export default faqData;
