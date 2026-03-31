import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import usePageTitle from '../hooks/usePageTitle';

const phases = [
  { id: 'foundation', label: 'Phase 1: Foundation', number: '01' },
  { id: 'opportunities', label: 'Phase 2: Opportunities', number: '02' },
  { id: 'proposals', label: 'Phase 3: Proposals', number: '03' },
  { id: 'compliance', label: 'Phase 4: Compliance', number: '04' },
  { id: 'security', label: 'Phase 5: Security', number: '05' },
];

function PhaseSection({ id, number, title, subtitle, children }) {
  return (
    <section id={id} className="phase-section">
      <div className="phase-section__header">
        <Reveal>
          <span className="phase-section__ghost">{number}</span>
          <div className="phase-section__label">Phase {number}</div>
          <h2 className="phase-section__title">{title}</h2>
          {subtitle && <p className="phase-section__subtitle">{subtitle}</p>}
        </Reveal>
      </div>
      <div className="phase-section__body">
        {children}
      </div>
    </section>
  );
}

function InfoBlock({ title, children, tip, gotcha, timeline, links }) {
  return (
    <Reveal>
      <div className="info-block">
        <h3 className="info-block__title">{title}</h3>
        <div className="info-block__content">{children}</div>
        {tip && <div className="info-block__tip">💡 <strong>Pro tip:</strong> {tip}</div>}
        {gotcha && <div className="info-block__gotcha">⚠️ <strong>Common gotcha:</strong> {gotcha}</div>}
        {timeline && <div className="info-block__timeline">⏱ <strong>Timeline:</strong> {timeline}</div>}
        {links && (
          <div className="info-block__links">
            {links.map((l, i) => (
              <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" className="info-block__link">{l.label} ↗</a>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}

function StickyNav({ activePhase }) {
  return (
    <div className="phase-nav">
      {phases.map(p => (
        <a
          key={p.id}
          href={`#${p.id}`}
          className={`phase-nav__item ${activePhase === p.id ? 'phase-nav__item--active' : ''}`}
        >
          <span className="phase-nav__num">{p.number}</span>
          <span className="phase-nav__label">{p.label.replace(/Phase \d: /, '')}</span>
        </a>
      ))}
    </div>
  );
}

export default function GovernmentBusinessPage() {
  usePageTitle('Doing Business with the U.S. Government');
  const [activePhase, setActivePhase] = useState('foundation');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActivePhase(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    phases.forEach(p => {
      const el = document.getElementById(p.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero title="USG." subtitle="Doing Business with the U.S. Government — the survival guide" />

      <Reveal>
        <div className="page-back"><Link to="/">← Back to overview</Link></div>
      </Reveal>

      <Reveal>
        <div className="pull-quote">
          <p className="pull-quote__text" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)' }}>
            From <strong>"I want to sell to the government"</strong> to actually doing it.<br />
            Five phases. Every step. No hand-waving.
          </p>
        </div>
      </Reveal>

      <div className="gov-layout">
        <StickyNav activePhase={activePhase} />

        <div className="gov-content">
          {/* ── PHASE 1: FOUNDATION ── */}
          <PhaseSection id="foundation" number="01" title="Foundation" subtitle="Get legal, get registered, get visible to the government — and set realistic expectations.">

            <InfoBlock
              title="Your First Contract Will Take 3x Longer Than You Think"
              gotcha="From 'we should sell to the government' to actual revenue hitting your bank account, plan for 12-24 months minimum. That's not pessimism — that's the median. Registration takes weeks, finding the right opportunity takes months, the proposal cycle takes months, award takes months, and then you wait 30-60 days to get paid. Your burn rate needs to survive that entire runway."
            >
              <p>This is the thing that kills more government-aspiring startups than anything else: <strong>unrealistic timelines</strong>. Here's a realistic breakdown of your first year:</p>
              <ul>
                <li><strong>Months 1-2:</strong> Registration (SAM.gov, NAICS codes, business size determination)</li>
                <li><strong>Months 2-6:</strong> Finding opportunities, building relationships, responding to RFIs, attending industry days</li>
                <li><strong>Months 6-9:</strong> Writing your first proposal (and probably losing)</li>
                <li><strong>Months 9-12:</strong> Debriefing, learning, writing your second proposal</li>
                <li><strong>Months 12-18:</strong> Award, contract negotiation, kickoff</li>
                <li><strong>Months 18-20:</strong> First invoice submitted... and then you wait 30-60 days for payment</li>
              </ul>
              <p>The companies that succeed plan for this. The ones that assume "we'll have revenue in 6 months" run out of money. If you're VC-backed, make sure your investors understand government sales cycles. If you're bootstrapped, keep your commercial revenue flowing while you build the government pipeline.</p>
            </InfoBlock>

            <InfoBlock
              title="Hire a Contracts Manager Before You Think You Need One"
              tip="A good contracts/compliance person pays for themselves 10x over. They'll catch the clause that would have cost you $500K, structure your accounting system correctly the first time, and keep you from accidentally violating the False Claims Act. The FAR is not something you figure out on the fly."
            >
              <p>The single best hire you can make when entering government contracting is someone who <strong>already knows the system</strong>. This doesn't have to be a full-time employee on day one — a part-time consultant or fractional contracts manager works. But you need someone who can:</p>
              <ul>
                <li>Read and interpret FAR/DFARS clauses (so you know what you're signing)</li>
                <li>Set up a DCAA-compliant accounting system and timekeeping processes</li>
                <li>Review proposals for compliance before submission</li>
                <li>Manage contract modifications, invoicing, and deliverable tracking</li>
                <li>Keep you out of trouble with the alphabet soup of regulations</li>
              </ul>
              <p>The alternative — a startup founder Googling "what is FAR 52.232-25" at midnight before a proposal deadline — is how expensive mistakes get made. Every experienced government contractor will tell you the same thing: <strong>they wish they'd made this hire sooner.</strong></p>
            </InfoBlock>

            <InfoBlock
              title="Get an EIN (Employer Identification Number)"
              tip="You can get an EIN online in minutes. Don't pay a third party — it's free directly from the IRS."
              timeline="Immediate (online) or 4 weeks (mail)"
              links={[{ label: 'IRS EIN Application', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online' }]}
            >
              <p>Your company's tax ID. Required for everything that follows. Think of it as your company's Social Security Number. You need this before you can register anywhere in the federal system.</p>
            </InfoBlock>

            <InfoBlock
              title="Register in SAM.gov"
              gotcha="The #1 mistake: letting your registration lapse. SAM.gov requires ANNUAL renewal. Set a calendar reminder 60 days before expiration. If it lapses, you can't receive contract payments — and reactivation can take weeks."
              timeline="2-8 weeks for new registration"
              links={[{ label: 'SAM.gov Registration', url: 'https://sam.gov' }]}
            >
              <p><strong>SAM.gov</strong> (System for Award Management) is the central registry for companies doing business with the federal government. No SAM registration = no contracts, no payments, nothing.</p>
              <p>When you register, you'll get a <strong>UEI</strong> (Unique Entity ID) — this replaced the old DUNS number in 2022. The UEI is now your primary business identifier across the federal system.</p>
              <p><strong>What you'll need:</strong></p>
              <ul>
                <li>EIN and legal business name</li>
                <li>Bank account info (for electronic payments via EFT)</li>
                <li>NAICS codes (your business categories)</li>
                <li>Points of contact (government and electronic)</li>
                <li>Annual revenue and employee count</li>
                <li>A login.gov account (they migrated to this — set it up first)</li>
              </ul>
            </InfoBlock>

            <InfoBlock
              title="Get Your CAGE Code"
              tip="You don't apply for a CAGE code separately — it's automatically assigned when you complete your SAM.gov registration. If you're outside the US, you get an NCAGE code through your country's national codification bureau."
              timeline="Auto-assigned with SAM.gov registration"
            >
              <p>The <strong>CAGE code</strong> (Commercial and Government Entity) is a 5-character identifier for your facility/location. DoD and NATO use it to identify contractors. You'll need it on proposals, contracts, and security paperwork.</p>
            </InfoBlock>

            <InfoBlock
              title="Determine Your NAICS Codes"
              tip="Look at what codes your competitors use and what codes appear on contracts you want to win. You can list multiple NAICS codes in SAM.gov. Don't just pick one — list every code that legitimately describes your work."
              links={[{ label: 'NAICS Code Search', url: 'https://www.census.gov/naics/' }]}
            >
              <p><strong>NAICS codes</strong> (North American Industry Classification System) categorize what your business does. They matter because:</p>
              <ul>
                <li>Contracts are often searched by NAICS code</li>
                <li>Small business size standards are NAICS-specific (you might be "small" under one code but not another)</li>
                <li>Set-aside contracts specify which NAICS codes qualify</li>
              </ul>
              <p>Common tech/defense NAICS codes: 541511 (Custom Software), 541512 (Computer Systems Design), 541330 (Engineering Services), 541715 (R&D in Physical Sciences), 518210 (Cloud/Data Processing), 541519 (Other Computer-Related Services).</p>
            </InfoBlock>

            <InfoBlock
              title="Determine Your Business Size"
              gotcha="Size standards change. The SBA updates them periodically. What made you 'small' last year might not this year — or vice versa. Check annually. Also: if you get acquired or grow past the threshold mid-contract, there are recertification rules."
              links={[{ label: 'SBA Size Standards', url: 'https://www.sba.gov/size-standards' }]}
            >
              <p>The SBA sets size standards for every NAICS code — usually by annual revenue or employee count. Being classified as a <strong>"small business"</strong> unlocks massive advantages in government contracting:</p>
              <ul>
                <li>Access to set-aside contracts (reserved for small businesses only)</li>
                <li>Evaluation preferences on some full-and-open competitions</li>
                <li>Eligibility for special certifications (HUBZone, SDVOSB, WOSB, 8(a), etc.)</li>
                <li>The government has a statutory goal: <strong>23% of contract dollars</strong> go to small businesses</li>
                <li>Large primes need small business subcontractors to meet their own subcontracting plans</li>
              </ul>
            </InfoBlock>
          </PhaseSection>

          {/* ── PHASE 2: FINDING OPPORTUNITIES ── */}
          <PhaseSection id="opportunities" number="02" title="Finding Opportunities" subtitle="Where contracts live, how to find them, how to position yourself — and the certifications that give you an unfair advantage.">

            <InfoBlock
              title="Don't Ignore the Small Contracts"
              tip="A $150K task order you can win in 30 days is worth more than a $10M IDIQ you'll spend 18 months chasing with a 15% win probability. Do the math on expected value, not contract ceiling."
            >
              <p>Every startup wants to chase the $10M contracts. <strong>Don't.</strong> Not yet. The $100K-$500K contracts are where you:</p>
              <ul>
                <li><strong>Build past performance</strong> — you need 3-5 relevant contracts before you're competitive on big deals</li>
                <li><strong>Build relationships</strong> — the contracting officer on a $200K contract today might be running a $20M procurement next year</li>
                <li><strong>Learn the system</strong> — invoicing, deliverables, modifications, reporting. Learn on small contracts where mistakes are recoverable.</li>
                <li><strong>Generate revenue</strong> — small contracts close faster and pay faster. They keep your lights on while you build toward bigger wins.</li>
              </ul>
              <p>Micro-purchases (under $10K) require almost no competition. Simplified acquisitions (under $250K) have streamlined processes. These are the easiest entry points, and most companies ignore them because they don't sound impressive. That's exactly why you should pursue them.</p>
            </InfoBlock>

            <InfoBlock
              title="The Incumbent Almost Always Wins"
              gotcha="If you're bidding against an incumbent on a recompete, assume they have a 60-70% win rate. If their performance has been satisfactory, you don't just need to be better — you need to be dramatically better, or offer something the incumbent can't. Marginal improvements don't overcome switching costs."
            >
              <p>Recompetes — where an existing contract is being re-awarded — are the most common type of large procurement. And the deck is stacked in favor of whoever already has the contract:</p>
              <ul>
                <li>They know the customer's real requirements (not just what's in the solicitation)</li>
                <li>They have the incumbent staff who the government doesn't want to disrupt</li>
                <li>They have perfect past performance on THIS exact work</li>
                <li>They have relationships with every stakeholder</li>
              </ul>
              <p><strong>How to compete against an incumbent:</strong></p>
              <ul>
                <li>Find contracts where the incumbent performed poorly (look for re-solicitations, shortened periods of performance, or complaints)</li>
                <li>Find NEW requirements with no incumbent — new programs, new missions, new technology</li>
                <li>Offer a fundamentally different approach (not just cheaper — better in a way the incumbent can't match)</li>
                <li>Team with the incumbent's dissatisfied staff (yes, this happens)</li>
              </ul>
            </InfoBlock>

            <InfoBlock
              title="SAM.gov Contract Search"
              tip="Set up saved searches and email alerts. The best opportunities get crowded fast — early awareness is everything. Check daily, not weekly."
              links={[{ label: 'SAM.gov Contract Opportunities', url: 'https://sam.gov/content/opportunities' }]}
            >
              <p>SAM.gov replaced FBO (FedBizOpps) as the single source for federal contract opportunities. All agencies post solicitations here. You can search by keyword, NAICS code, set-aside type, agency, and more.</p>
              <p>Learn the lingo: <strong>Presolicitation</strong> means it's coming soon. <strong>Combined Synopsis/Solicitation</strong> means it's live and you can bid. <strong>Sources Sought</strong> means they're still doing market research. <strong>Award Notice</strong> means someone already won.</p>
            </InfoBlock>

            <InfoBlock title="GovWin / Deltek">
              <p>The premium intelligence platform for government contracting. Tracks opportunities from pre-solicitation through award. Expensive but invaluable for serious players — it shows you opportunities <strong>before</strong> they hit SAM.gov, including forecasted procurements and agency budgets.</p>
              <p>Other tools worth knowing: <strong>Bloomberg Government (BGOV)</strong>, <strong>GovTribe</strong> (more affordable), and <strong>USAspending.gov</strong> (free — shows where money is actually flowing).</p>
            </InfoBlock>

            <InfoBlock
              title="FPDS (Federal Procurement Data System)"
              links={[{ label: 'FPDS', url: 'https://www.fpds.gov' }]}
            >
              <p>Research <strong>past awards</strong> — who won what, for how much, and under what vehicle. Invaluable for competitive intelligence. Want to know who holds the incumbent contract you're targeting? It's in FPDS. Want to know how much the government paid last time? FPDS. Want to know if the incumbent is a small business that's about to graduate out of small business status? FPDS.</p>
            </InfoBlock>

            <InfoBlock title="Agency-Specific Portals">
              <p>Many agencies have their own opportunity portals and innovation programs:</p>
              <ul>
                <li><strong>DIU</strong> (Defense Innovation Unit) — commercial solutions for DoD</li>
                <li><strong>AFWERX</strong> — Air Force innovation hub</li>
                <li><strong>NavalX</strong> — Navy innovation</li>
                <li><strong>In-Q-Tel</strong> — IC venture capital</li>
                <li><strong>DHS S&T</strong> — Homeland Security science & tech</li>
                <li><strong>NASA SBIR</strong> — space and aeronautics R&D</li>
                <li><strong>CDAO</strong> — Chief Digital and AI Office (DoD AI/ML work)</li>
              </ul>
            </InfoBlock>

            <InfoBlock
              title="Sources Sought & RFIs"
              tip="ALWAYS respond to Sources Sought notices in your space. It costs nothing and puts you on the contracting officer's radar. Many contracts are shaped by who responds to the RFI. Your response literally influences the requirements — this is legal and expected."
            >
              <p><strong>Sources Sought notices</strong> and <strong>Requests for Information (RFIs)</strong> are how agencies do market research before writing a solicitation. They're asking "who can do this?" Responding doesn't commit you to anything but signals interest and capability.</p>
              <p>A strong RFI response includes: your relevant capabilities, past performance summaries, suggested approach, and — critically — your business size and socioeconomic status. If enough small businesses respond, the contracting officer may set the procurement aside for small businesses.</p>
            </InfoBlock>

            <InfoBlock
              title="Industry Days & Conferences"
              tip="Bring business cards, a 30-second pitch, and questions. Don't sell — listen and learn. The relationships you build here lead to teaming arrangements and subcontracting opportunities. Follow up within 48 hours."
            >
              <p>Agencies host industry days before major procurements. These are your chance to meet program managers, contracting officers, and potential teaming partners face-to-face. Also: AUSA, AFCEA, Sea-Air-Space, and similar defense conferences are where deals get started.</p>
              <p>The real value isn't the panels — it's the hallway conversations and the happy hours. Government people attend these too, and they're allowed to talk to you (despite what some believe). Just don't discuss specific procurements that are in evaluation.</p>
            </InfoBlock>

            <InfoBlock title="Teaming Arrangements">
              <p>You don't have to go it alone. <strong>Teaming</strong> with established primes is how most small companies break in:</p>
              <ul>
                <li><strong>Subcontracting</strong> — work under a prime on their contract. Lowest barrier to entry. Great for building past performance.</li>
                <li><strong>Joint Ventures</strong> — form a new entity to bid together. SBA allows mentor-protégé JVs where the small business retains its size status.</li>
                <li><strong>Teaming Agreements</strong> — formal agreement to bid together, with defined roles. Get it in writing BEFORE the proposal.</li>
                <li><strong>Contractor Team Arrangements (CTAs)</strong> — on GSA Schedule, team with other schedule holders</li>
              </ul>
              <p>The <strong>SBA Mentor-Protégé Program</strong> is worth investigating: a large company mentors you, and your JV together can bid as a small business. This is a legitimate and powerful tool.</p>
            </InfoBlock>

            <InfoBlock
              title="The Past Performance Catch-22"
              tip="Your commercial work counts. A successful SaaS deployment for a Fortune 500 company IS relevant past performance for a government cloud contract. Frame it right."
              gotcha="Never fabricate or exaggerate past performance. Evaluators call your references. Getting caught lying is a career-ending move — you can be debarred (banned from all federal contracting)."
            >
              <p>The biggest barrier for new companies: you need past performance to win contracts, but you need contracts to get past performance. Here's how experienced companies solve this:</p>
              <ul>
                <li><strong>Subcontract first</strong> — work under a prime for 1-2 years. That's legitimate past performance you can cite.</li>
                <li><strong>SBIR/STTR</strong> — these programs explicitly don't require past performance. They evaluate your technical approach and team. This is the #1 entry point for startups.</li>
                <li><strong>GSA Schedule</strong> — commercial past performance counts for your Schedule application. Once on Schedule, those orders become government past performance.</li>
                <li><strong>Use commercial references</strong> — many solicitations accept "relevant experience" from commercial work, especially for non-traditional companies.</li>
                <li><strong>Team with someone who has it</strong> — a JV or teaming arrangement lets you leverage your partner's past performance.</li>
                <li><strong>Start small</strong> — micro-purchases (under $10K) and simplified acquisitions (under $250K) often have minimal past performance requirements.</li>
              </ul>
            </InfoBlock>

            <InfoBlock
              title="Whoever Writes the Requirements Wins the Contract"
              tip="This isn't corruption — it's how the system is designed to work. The government WANTS industry input to write better requirements. They literally publish RFIs asking for it. The companies that engage early shape requirements toward their strengths. The companies that wait for the RFP are playing someone else's game."
            >
              <p>Here's the uncomfortable truth that experienced contractors know: <strong>if you're not engaged during the requirements phase, you've already lost.</strong> The company that helped the government understand what's technically possible — through whitepapers, RFI responses, capability briefings, and relationship building — has shaped the requirements to match their solution.</p>
              <p>This is legal. This is expected. This is how the system works. The government doesn't write requirements in a vacuum — they talk to industry, they read RFI responses, they attend industry demos. The companies that show up during this phase have an enormous advantage when the RFP finally drops, because the RFP describes their solution.</p>
              <p><strong>How to engage:</strong></p>
              <ul>
                <li>Respond to every RFI in your space — even if you're not sure you'll bid</li>
                <li>Request meetings with program offices (pre-solicitation contact is legal)</li>
                <li>Publish whitepapers on problems the government is trying to solve</li>
                <li>Present at industry days and government-hosted events</li>
                <li>Demonstrate your technology to potential government users</li>
              </ul>
            </InfoBlock>

            <InfoBlock
              title="Congressional Relationships Matter More Than You Think"
              tip="Congressional staffers — especially on the Armed Services, Appropriations, and Intelligence committees — are surprisingly accessible. A well-written one-pager about your technology and how it supports national security can get you a meeting. These staffers brief their members, and their members control the budget."
            >
              <p>Many companies think congressional engagement is only for Lockheed and Boeing. <strong>Wrong.</strong> A congressional champion can:</p>
              <ul>
                <li><strong>Save a program from cancellation</strong> — add funding in the authorization or appropriations bill when the DoD tries to cut it</li>
                <li><strong>Accelerate bureaucracy</strong> — a congressional inquiry letter makes things happen that were stuck for months</li>
                <li><strong>Flag your company to an agency</strong> — "have you talked to Company X about this problem?" from a member of Congress gets attention</li>
                <li><strong>Add language that helps you</strong> — report language or bill provisions that create requirements aligned with your capabilities</li>
              </ul>
              <p>This isn't about lobbying (though lobbyists can help). It's about educating your elected representatives about national security challenges and how your technology addresses them. Start with your own representatives — the ones from your state and district. They have a natural interest in companies that employ their constituents.</p>
            </InfoBlock>

            <InfoBlock
              title="Capture Management — How the Pros Win"
              tip="If the first time you hear about an opportunity is when the RFP drops on SAM.gov, you've already lost. The winners knew about it 12-18 months ago."
            >
              <p><strong>Capture management</strong> is the process of tracking, shaping, and positioning for opportunities BEFORE the solicitation drops. This is how professional government contractors consistently win — the written proposal is the last 20% of the work.</p>
              <p><strong>The capture process:</strong></p>
              <ul>
                <li><strong>Identify</strong> — find opportunities 12-24 months out via budget docs, FYDP, agency strategic plans, and industry intelligence</li>
                <li><strong>Qualify</strong> — is this real? Is it funded? Can you win? Do you have (or can you build) the past performance? Run a bid/no-bid decision.</li>
                <li><strong>Shape</strong> — respond to RFIs, meet with the program office (pre-solicitation contact is legal and expected), demonstrate your solution. You're helping the government understand what's possible.</li>
                <li><strong>Position</strong> — build your team, lock in key personnel, secure teaming partners, develop your price-to-win.</li>
                <li><strong>Win</strong> — write the proposal. If you've done the first four steps well, this is the easy part.</li>
              </ul>
              <p>Keep a <strong>pipeline</strong> of opportunities at various stages. A healthy pipeline has 3-5x the value of what you need to win to hit your revenue targets.</p>
            </InfoBlock>

            <InfoBlock
              title="Government Fiscal Year & Budget Cycle"
              tip="The last two weeks of September (end of fiscal year) are legendary for rapid contracting. Agencies rush to spend remaining funds before they expire. If you have a GSA Schedule, this is when the phone rings."
              gotcha="Continuing Resolutions (CRs) freeze new program starts. If the government is operating under a CR (which happens most years), agencies can only spend at prior-year levels on existing programs. Your new program? It's on hold until a real budget passes."
            >
              <p>Understanding the government's money cycle is essential for timing your pursuits:</p>
              <ul>
                <li><strong>October 1</strong> — Fiscal year starts (FY26 starts Oct 1, 2025)</li>
                <li><strong>February</strong> — President's Budget Request drops. This is your first look at what agencies want to fund next year. READ IT for your market.</li>
                <li><strong>Spring/Summer</strong> — Congressional hearings, markups, and authorization/appropriations bills. Watch for your programs.</li>
                <li><strong>August-September</strong> — End-of-year spending rush. "Use it or lose it" money. Agencies are desperate to obligate funds.</li>
                <li><strong>October-December</strong> — New fiscal year. Often starts with a Continuing Resolution if Congress hasn't passed appropriations.</li>
              </ul>
              <p>The <strong>PPBE process</strong> (Planning, Programming, Budgeting, Execution) means the government is planning budgets 2-5 years ahead. The money being spent THIS year was programmed 2-3 years ago. If you want to influence what gets funded, you need to engage during the planning phase — not when the RFP drops.</p>
            </InfoBlock>

            <InfoBlock
              title="The 'Valley of Death'"
              gotcha="90% of successful pilots never become programs of record. The technology worked. The users loved it. The budget wasn't there. Plan for this from day one."
            >
              <p>The <strong>Valley of Death</strong> is the gap between a successful pilot/prototype and a funded production contract. This is where most defense tech startups die — not because their technology failed, but because they couldn't navigate the transition.</p>
              <p><strong>How to survive it:</strong></p>
              <ul>
                <li><strong>Build user advocacy</strong> — the warfighter or end-user who loves your product is your best advocate. Get them writing memos, making calls, and championing your solution up the chain.</li>
                <li><strong>Find a congressional champion</strong> — a member of Congress (especially on Armed Services or Appropriations committees) who believes in your program can add funding in the authorization or appropriations bill.</li>
                <li><strong>Plan the transition from day one</strong> — your OTA prototype should include a transition plan to a FAR-based production contract. Don't figure this out after the pilot ends.</li>
                <li><strong>Get on a program of record</strong> — programs of record have dedicated budget lines. Getting your technology adopted into an existing program of record is easier than creating a new one.</li>
                <li><strong>SBIR Phase III</strong> — if you came through SBIR, Phase III gives agencies the authority to sole-source production contracts to you. USE THIS.</li>
                <li><strong>Don't run out of money</strong> — the transition can take 12-24 months. Make sure you have the runway (or revenue from other contracts) to survive it.</li>
              </ul>
            </InfoBlock>

            <InfoBlock
              title="Set-Aside Certifications — Your Unfair Advantage"
              tip="Contracting officers are incentivized to meet small business goals. A set-aside certification can literally mean the difference between competing against 200 companies and competing against 20."
            >
              <p>The federal government <strong>reserves</strong> a percentage of contracts for small businesses in various categories. These "set-aside" contracts are only open to certified companies — everyone else is locked out. This is by design: it's how the government ensures small businesses get a fair share.</p>
              <p><strong>Key certifications:</strong></p>
              <ul>
                <li><strong>8(a) Business Development</strong> — SBA's flagship program for disadvantaged small businesses. 9-year program with sole-source authority up to $4.5M (services) or $7M (manufacturing). If you qualify, this is the single most powerful certification.</li>
                <li><strong>HUBZone</strong> — your principal office must be in a Historically Underutilized Business Zone, and 35%+ employees must live in one. Sole-source up to $7M/$4.5M and a 10% price evaluation preference.</li>
                <li><strong>SDVOSB</strong> (Service-Disabled Veteran-Owned) — for businesses owned/controlled by service-disabled veterans. Certification now through SBA (moved from VA self-certification in 2023).</li>
                <li><strong>WOSB</strong> (Women-Owned Small Business) — for businesses at least 51% owned and controlled by women. Set-asides in industries where women are underrepresented.</li>
                <li><strong>EDWOSB</strong> (Economically Disadvantaged Women-Owned) — additional set-asides beyond WOSB.</li>
              </ul>
              <p>You can hold multiple certifications simultaneously. A service-disabled veteran woman in a HUBZone? That's three set-aside categories. Stack them.</p>
            </InfoBlock>

          </PhaseSection>

          {/* ── PHASE 3: PROPOSALS & CONTRACTING ── */}
          <PhaseSection id="proposals" number="03" title="Proposals & Contracting" subtitle="Contract types, vehicles, pricing, IP — and how to actually win work.">

            <InfoBlock title="Understanding Contract Types">
              <p>The government uses specific contract structures. Know them cold:</p>
              <ul>
                <li><strong>Firm Fixed Price (FFP)</strong> — you name a price, deliver, get paid. Risk is on you. Most common for well-defined work. If you underbid, you eat the cost. If you're efficient, you keep the margin.</li>
                <li><strong>Cost Plus (CP)</strong> — government reimburses your costs plus a fee. Variants: Cost Plus Fixed Fee (CPFF), Cost Plus Incentive Fee (CPIF), Cost Plus Award Fee (CPAF). Requires a DCAA-approved accounting system — this is non-negotiable.</li>
                <li><strong>Time & Materials (T&M)</strong> — pay by the hour plus materials. Used when scope is uncertain. Government doesn't love T&M (no cost ceiling), so it's used sparingly.</li>
                <li><strong>IDIQ (Indefinite Delivery/Indefinite Quantity)</strong> — umbrella contract with task orders. You win the IDIQ, then compete for individual task orders under it. The IDIQ itself has no guaranteed money (just a minimum, often $500).</li>
                <li><strong>BPAs (Blanket Purchase Agreements)</strong> — simplified buying against existing contracts (often GSA Schedule). Great for recurring purchases.</li>
              </ul>
            </InfoBlock>

            <InfoBlock
              title="GSA Schedule (MAS)"
              timeline="6-12 months to get on Schedule"
              gotcha="GSA Schedule prices must be your 'best price' — the Most Favored Customer pricing. If you offer better prices to commercial customers, GSA wants the same or better. Also: you need to report sales quarterly through the Industrial Funding Fee (IFF) system and pay 0.75% of sales."
              links={[{ label: 'GSA MAS', url: 'https://www.gsa.gov/buy-through-us/purchasing-programs/multiple-award-schedule' }]}
            >
              <p>The <strong>GSA Multiple Award Schedule (MAS)</strong> is a long-term government-wide contract. Once you're on it, agencies can buy from you directly without full competition — dramatically shortening procurement timelines. It's like being in the government's pre-approved vendor catalog.</p>
              <p>Getting on Schedule requires a proposal demonstrating your pricing, past performance, and capabilities. It's an investment — but it opens doors that are otherwise closed.</p>
              <p>Once you're on, market yourself on <strong>GSA Advantage</strong> (the government's online shopping site). Update your catalog regularly. Agencies can find you and place orders directly.</p>
            </InfoBlock>

            <InfoBlock
              title="Other Transaction Authorities (OTAs)"
              tip="OTAs are the fast lane for startups. DIU can go from pitch to prototype contract in 60-90 days. Compare that to 12-18 months for a traditional procurement. The catch: OTA prototypes don't automatically become production contracts. You still need a transition plan."
            >
              <p><strong>OTAs</strong> let agencies award contracts outside the traditional FAR process. Faster, more flexible, designed to attract non-traditional defense contractors (i.e., startups and commercial tech companies).</p>
              <ul>
                <li><strong>DIU (Defense Innovation Unit)</strong> — commercial solutions for DoD problems</li>
                <li><strong>AFWERX</strong> — Air Force innovation accelerator</li>
                <li><strong>Army Applications Lab</strong> — Army equivalent</li>
                <li><strong>NSIN</strong> — National Security Innovation Network</li>
              </ul>
              <p>Key advantage: OTAs can lead to follow-on <strong>production OTs</strong> without competition, IF at least one non-traditional contractor participated and the prototype was successful. This is the startup-to-production pipeline.</p>
            </InfoBlock>

            <InfoBlock
              title="SBIR/STTR — The Startup Funding Path"
              tip="Phase III is the hidden gem: once you complete Phase II, agencies can sole-source Phase III production/deployment contracts to you — no competition, no dollar limit. This is how small SBIR companies land massive contracts. Also: SBIR data rights let you keep your IP for 20 years."
              links={[{ label: 'SBIR.gov', url: 'https://www.sbir.gov' }]}
            >
              <p><strong>Small Business Innovation Research (SBIR)</strong> and <strong>Small Business Technology Transfer (STTR)</strong> are competitive grant programs:</p>
              <ul>
                <li><strong>Phase I</strong> — Feasibility study. ~$50K-$275K. 6-12 months. Prove the concept works.</li>
                <li><strong>Phase II</strong> — Full R&D. ~$500K-$1.7M. 2 years. Build and demonstrate the prototype.</li>
                <li><strong>Phase III</strong> — Commercialization. No SBIR funding — but agencies can sole-source production contracts to you. No dollar limit. No competition required. This is the real prize.</li>
              </ul>
              <p>Topics are published by each agency. You write a proposal responding to a specific topic. It's a great entry point for tech startups with no prior government experience.</p>
              <p><strong>STTR</strong> requires a university/research institution partner (at least 30% of work). Use this if you have a strong academic collaboration.</p>
            </InfoBlock>

            <InfoBlock title="Writing Proposals That Win">
              <p>Government proposals have a specific structure. Most solicitations require:</p>
              <ul>
                <li><strong>Technical Volume</strong> — how you'll do the work, your approach, methodology. Be specific. "We'll use agile" is not a plan. "We'll run 2-week sprints with demos to the government PM every other Thursday" is.</li>
                <li><strong>Management Volume</strong> — your team, org structure, key personnel, management approach. Name actual people with actual resumes.</li>
                <li><strong>Past Performance</strong> — relevant contracts you've completed successfully. Include contract numbers, points of contact, dollar values, and what you delivered.</li>
                <li><strong>Cost/Price Volume</strong> — detailed pricing, labor categories, rates, basis of estimate. This is where math meets strategy.</li>
              </ul>
              <p>Follow the solicitation instructions <strong>exactly</strong>. Page limits, font sizes, section order, file naming conventions — deviations can get you eliminated before anyone reads your content. The government calls these "material deviations" and they give evaluators an easy reason to throw you out.</p>
            </InfoBlock>

            <InfoBlock
              title="Color Team Reviews"
              tip="If you're not doing color team reviews, you're submitting first drafts against companies submitting fourth drafts. You will lose."
            >
              <p>Serious government contractors run a structured review process before submitting proposals. This is non-negotiable for anything over $1M:</p>
              <ul>
                <li><strong>Blue Team</strong> — solution development. Before writing starts, align on the win strategy, technical approach, and key discriminators.</li>
                <li><strong>Pink Team</strong> — outline and compliance check. Is the proposal structured to answer every requirement? Are we compliant? Are we hitting every evaluation criteria?</li>
                <li><strong>Red Team</strong> — full draft review by people who haven't been writing it. They score it like the government would. Harsh, honest feedback. This is where proposals go from good to great.</li>
                <li><strong>Gold Team</strong> — final executive review. Pricing sanity check, risk assessment, final go/no-go. Senior leadership signs off.</li>
              </ul>
              <p>Build your proposal schedule <strong>backwards</strong> from the due date, leaving time for each review and revision cycle. Most winning proposals go through 3-4 major rewrites.</p>
            </InfoBlock>

            <InfoBlock
              title="Pricing Strategy"
              gotcha="Underbidding to win is a classic mistake. If you can't perform at your bid price, you'll either deliver garbage (and tank your past performance) or burn through your cash. The government doesn't want the lowest price — they want the best value."
            >
              <p>Government pricing is its own discipline. Key concepts:</p>
              <ul>
                <li><strong>Loaded labor rates</strong> — your direct labor rate plus fringe benefits, overhead, and G&A. A $50/hr developer might cost the government $120/hr fully loaded.</li>
                <li><strong>Indirect rates</strong> — fringe (~30%), overhead (~40-80%), G&A (~10-20%). These vary wildly by company. Get a CPA who specializes in government contracting.</li>
                <li><strong>Wrap rate</strong> — the multiplier from direct labor to fully burdened cost. Typical range: 2.0-3.0x for services companies.</li>
                <li><strong>Price-to-win (PTW)</strong> — estimate what the government expects to pay and what competitors will bid. Price competitively but sustainably. You can research this through FPDS (past awards), budget documents, and industry intelligence.</li>
                <li><strong>Best Value vs LPTA</strong> — "Best Value" weighs technical quality and price together (bid your value). "Lowest Price Technically Acceptable" means the cheapest compliant bid wins (sharpen your pencil).</li>
              </ul>
            </InfoBlock>

            <InfoBlock
              title="Data Rights & Intellectual Property"
              gotcha="If you develop something entirely with government funding and don't negotiate data rights upfront, the government gets UNLIMITED rights. That means they can give your software to your competitor. Negotiate this BEFORE you sign."
              tip="SBIR data rights are golden: you retain rights for 20 years from contract completion. This is one of the biggest advantages of the SBIR program for tech startups."
            >
              <p>This is the <strong>#1 thing tech companies get wrong</strong> when selling to the government. Who owns the IP? It depends on who paid for development:</p>
              <ul>
                <li><strong>Unlimited Rights</strong> — government can use, modify, reproduce, release, and disclose without restriction. Applies to work developed entirely with government funds.</li>
                <li><strong>Government Purpose Rights</strong> — government can use for any government purpose, including giving to other contractors working on government programs. But they can't release it commercially. Lasts 5 years, then becomes unlimited.</li>
                <li><strong>Limited Rights (technical data) / Restricted Rights (software)</strong> — government can use it internally but can't release it outside the government. This is what you want for your commercial IP.</li>
                <li><strong>Specifically Negotiated License Rights</strong> — you and the government negotiate custom terms. This is possible and sometimes necessary for complex IP situations.</li>
              </ul>
              <p><strong>Mixed funding is the key</strong>: if you co-invest your own money alongside government funding, you get Government Purpose Rights (better than Unlimited). This is why smart companies always contribute their own IR&D to government-funded work.</p>
              <p>Put your data rights assertions in your <strong>proposal</strong>. Mark your deliverables with the appropriate legends. If you don't assert your rights, you lose them by default.</p>
            </InfoBlock>

            <InfoBlock
              title="Oral Presentations"
              tip="Practice, practice, practice. Agencies increasingly use orals because they're faster and harder to game with proposal mills. Your actual team members need to present — not hired consultants. They'll ask your chief architect hard technical questions."
            >
              <p>Increasingly common, especially for DoD and IC procurements. Instead of (or in addition to) a written proposal, you present your solution to an evaluation panel. This favors companies with strong technical talent who can think on their feet.</p>
              <p>Common format: a slide presentation followed by Q&A. The Q&A is often more important than the slides. Evaluators are testing whether your team actually understands the problem and their proposed solution. Rehearse with tough questions.</p>
            </InfoBlock>
          </PhaseSection>

          {/* ── PHASE 4: COMPLIANCE & OPERATIONS ── */}
          <PhaseSection id="compliance" number="04" title="Compliance & Operations" subtitle="The regulatory landscape, getting paid, and handling the inevitable changes. Not glamorous, but absolutely essential.">

            <InfoBlock
              title="Your Contracting Officer Is Your Bottleneck — Treat Them Accordingly"
              tip="A good relationship with your CO is worth more than a perfect proposal. They're human beings doing impossible jobs. Be the contractor who makes their life easy, and they'll prioritize your actions over the contractor who sends sloppy paperwork and 'urgent' emails every day."
            >
              <p>Nobody tells you this, but your <strong>Contracting Officer (CO/KO)</strong> is the single most important person in your government contracting life — and they're handling 50+ contracts simultaneously. They're overwhelmed, understaffed, and drowning in paperwork. Everything flows through them: modifications, option exercises, payments, disputes.</p>
              <p><strong>How to be their favorite contractor:</strong></p>
              <ul>
                <li><strong>Pre-format everything</strong> — don't send them raw data and expect them to figure it out. Draft the modification language yourself. Fill in every field on invoices. Make their job copy-paste.</li>
                <li><strong>Don't make them chase you</strong> — deliver reports on time, respond to requests within 24 hours, proactively flag problems before they become crises</li>
                <li><strong>Understand their constraints</strong> — they're bound by the FAR, their agency's policies, and their warrant authority. Don't ask them to do things they can't do.</li>
                <li><strong>Keep a clean file</strong> — if they can pull your contract file and everything is organized, current, and compliant, you're golden</li>
                <li><strong>Be respectful of their time</strong> — batch your requests. One email with three items beats three separate emails.</li>
              </ul>
              <p>The COR (Contracting Officer's Representative) is your day-to-day technical contact, but they have <strong>no authority</strong> to change the contract. Only the CO can obligate funds or modify terms. Know the difference.</p>
            </InfoBlock>

            <InfoBlock
              title="FAR (Federal Acquisition Regulation)"
              gotcha="You don't need to memorize the FAR. But you DO need to know which clauses are in your contract and what they require. Read your contract — every clause. Pay special attention to the ones labeled 'deviation' — those are agency-specific modifications."
              links={[{ label: 'FAR', url: 'https://www.acquisition.gov/far' }]}
            >
              <p>The <strong>FAR</strong> is the ~2,000-page rulebook governing federal procurement. Every government contract incorporates FAR clauses. Key areas to know:</p>
              <ul>
                <li>Labor standards and wage determinations</li>
                <li>Intellectual property and data rights</li>
                <li>Subcontracting requirements and reporting</li>
                <li>Change management and modifications</li>
                <li>Termination procedures (for convenience and cause)</li>
                <li>Inspection and acceptance criteria</li>
                <li>Limitation of funds/cost clauses (know when to stop working)</li>
              </ul>
            </InfoBlock>

            <InfoBlock title="DFARS — DoD-Specific Requirements" links={[{ label: 'DFARS', url: 'https://www.acquisition.gov/dfars' }]}>
              <p>The <strong>Defense Federal Acquisition Regulation Supplement (DFARS)</strong> adds DoD-specific requirements on top of the FAR. Key DFARS clauses cover cybersecurity (252.204-7012), supply chain risk, safeguarding covered defense information, and restrictions on foreign-manufactured components.</p>
            </InfoBlock>

            <InfoBlock title="CUI (Controlled Unclassified Information)">
              <p><strong>CUI</strong> is information that isn't classified but still requires safeguarding. If you handle government data, you're almost certainly dealing with CUI. Requirements include:</p>
              <ul>
                <li>Marking and handling procedures per NIST 800-171</li>
                <li>Access controls — only authorized personnel on a need-to-know basis</li>
                <li>Storage and transmission requirements (encrypted at rest and in transit)</li>
                <li>Incident reporting within 72 hours if CUI is compromised</li>
                <li>Flow-down to subcontractors — your subs need to protect CUI too</li>
              </ul>
            </InfoBlock>

            <InfoBlock
              title="CMMC (Cybersecurity Maturity Model Certification)"
              timeline="CMMC requirements are being phased into contracts starting 2025. Get ahead of this — assessment wait times will spike."
              links={[{ label: 'CMMC Info', url: 'https://dodcio.defense.gov/CMMC/' }]}
            >
              <p>CMMC is the DoD's framework for verifying contractor cybersecurity. Three levels:</p>
              <ul>
                <li><strong>Level 1</strong> — Basic cyber hygiene. Self-assessment. 15 practices. For contracts involving Federal Contract Information (FCI).</li>
                <li><strong>Level 2</strong> — Advanced. Aligns with NIST 800-171 (110 controls). Third-party assessment required for critical contracts. This is where most CUI-handling contractors land.</li>
                <li><strong>Level 3</strong> — Expert. NIST 800-172. Government-led assessment. For highest-priority programs.</li>
              </ul>
              <p>Start with a gap assessment against NIST 800-171. Create a Plan of Action & Milestones (POA&M) for any gaps. Consider using a CMMC-compliant cloud enclave (Microsoft GCC High, AWS GovCloud) rather than trying to certify your entire corporate IT.</p>
            </InfoBlock>

            <InfoBlock
              title="NIST 800-171"
              gotcha="Many companies claim compliance but aren't. CMMC third-party assessments will expose this. Start your SSP (System Security Plan) now — it takes months to do right."
              links={[{ label: 'NIST 800-171', url: 'https://csrc.nist.gov/publications/detail/sp/800-171/rev-2/final' }]}
            >
              <p>The cybersecurity framework for protecting CUI in non-federal systems. <strong>110 security controls</strong> across 14 families (access control, incident response, system integrity, etc.). If you handle CUI, you need a System Security Plan documenting how you implement each control.</p>
            </InfoBlock>

            <InfoBlock
              title="ATO (Authority to Operate)"
              timeline="6-18 months is typical. Plan accordingly — this is often the longest part of getting a system into production."
              gotcha="Don't build first and ATO later. Bake security controls into your architecture from day one. Retrofitting is 3x more expensive and time-consuming."
            >
              <p>If your product will run on government networks, you need an <strong>ATO</strong> — formal authorization that your system meets security requirements.</p>
              <ul>
                <li><strong>RMF (Risk Management Framework)</strong> — the 6-step process: Categorize, Select, Implement, Assess, Authorize, Monitor</li>
                <li><strong>FedRAMP</strong> — for cloud products. Get FedRAMP authorized and any agency can use you. Expensive (~$500K-$2M) but valuable: it's a moat.</li>
                <li><strong>DISA STIGs</strong> — Security Technical Implementation Guides. Configuration standards for DoD systems.</li>
                <li><strong>Provisional vs Full ATO</strong> — provisional lets you operate with conditions; full means you're fully authorized</li>
                <li><strong>Continuous Monitoring</strong> — ATO isn't one-and-done. Monthly vulnerability scans, annual assessments, ongoing compliance.</li>
                <li><strong>cATO</strong> — Continuous ATO. The new hotness. Instead of a one-time assessment, you maintain continuous compliance through automated monitoring and DevSecOps. Faster to maintain but harder to set up initially.</li>
              </ul>
            </InfoBlock>

            <InfoBlock
              title="DCAA Compliance & Accounting"
              gotcha="Set up a compliant accounting system BEFORE you win a cost-type contract. DCAA can audit you at any time, and an inadequate system can mean suspended payments. Use accounting software designed for government contractors — Unanet, Deltek Costpoint, or PROCAS."
              links={[{ label: 'DCAA', url: 'https://www.dcaa.mil' }]}
            >
              <p>The <strong>Defense Contract Audit Agency (DCAA)</strong> audits contractor accounting systems and costs. For cost-reimbursement contracts, you need:</p>
              <ul>
                <li>An adequate accounting system (job cost accounting, timekeeping by contract/task)</li>
                <li>Compliance with Cost Accounting Standards (CAS)</li>
                <li>Proper indirect rate structures (overhead, G&A, fringe)</li>
                <li>Timekeeping that passes audit scrutiny — employees must record time daily, corrections must be documented</li>
                <li>Segregation of costs by contract — no commingling of direct charges between contracts</li>
              </ul>
            </InfoBlock>

            <InfoBlock title="Organizational Conflict of Interest (OCI)">
              <p>If you help define requirements for a procurement, you may be <strong>barred from competing</strong> on it. OCIs come in three flavors:</p>
              <ul>
                <li><strong>Unequal access to information</strong> — you have inside info competitors don't</li>
                <li><strong>Biased ground rules</strong> — you helped write the rules you're competing under</li>
                <li><strong>Impaired objectivity</strong> — you're evaluating your own work or a competitor's</li>
              </ul>
              <p>Mitigation plans exist (firewalls, recusals), but OCIs can kill deals. Be aware and plan around them. If you're doing SETA (Systems Engineering and Technical Assistance) work, you're almost certainly creating an OCI for the production contract. Decide which one is more valuable to you.</p>
            </InfoBlock>

            <InfoBlock
              title="Getting Paid"
              tip="Register in WAWF immediately after contract award. Don't wait until your first invoice is due. Also: set up electronic funds transfer (EFT) in SAM.gov — paper checks add weeks."
              timeline="Prompt Payment Act requires payment within 30 days of a proper invoice. If they're late, you earn interest automatically."
              links={[{ label: 'WAWF', url: 'https://wawf.eb.mil' }]}
            >
              <p>Getting paid by the government is reliable but slow. Here's how it works:</p>
              <ul>
                <li><strong>WAWF (Wide Area Workflow)</strong> — the electronic invoicing system for DoD contracts. Submit invoices here. Civilian agencies often use IPP (Invoice Processing Platform) instead.</li>
                <li><strong>Prompt Payment Act</strong> — the government must pay within 30 days of receiving a proper invoice. If they don't, you earn interest at the Treasury rate. Yes, you can (and should) claim it.</li>
                <li><strong>Progress payments</strong> — for long-term FFP contracts, you can request progress payments (typically 80% of costs incurred) so you're not floating the entire contract.</li>
                <li><strong>Milestone payments</strong> — tied to specific deliverables. Common in OTAs and some FFP contracts.</li>
                <li><strong>Cost-reimbursement</strong> — submit vouchers (SF-1034) for costs incurred. Usually monthly.</li>
              </ul>
              <p><strong>The reality nobody warns you about:</strong> Net 30 is the law, but <strong>Net 60-90 is the reality.</strong> Your invoice gets submitted, then it sits in the COR's inbox for review, then it gets forwarded to the CO, then it goes to finance, then it enters the payment queue. Each step can add days or weeks. Build this into your financial planning — if you're a services company with payroll every two weeks, you need 2-3 months of operating cash before your first payment arrives.</p>
              <p>Invoice on the <strong>first business day you're allowed to</strong>. Every day you delay submitting an invoice is a day you're financing the government's operations for free. And if your invoice gets rejected for a formatting error? Back to the end of the line. Get your WAWF templates perfect before your first submission.</p>
            </InfoBlock>

            <InfoBlock
              title="Contract Modifications & Unfunded Mandates (The Silent Killer)"
              gotcha="NEVER do unfunded work. 'We'll figure it out later' means YOU eat the cost. A program manager saying 'can you just add this feature?' is not authorization. 'Sure — we'll draft a mod for the CO' is the only correct response. Companies that can't say this go bankrupt doing free work. Document every out-of-scope request in writing, even if you don't push back immediately."
            >
              <p>Work always evolves. The government will ask for things outside scope — not maliciously, but because missions change and needs evolve. The problem: <strong>unfunded mandates will kill your company.</strong> Here's how it works:</p>
              <ul>
                <li><strong>Bilateral modifications</strong> — both parties agree. Used for adding scope, extending periods, adjusting terms.</li>
                <li><strong>Unilateral modifications</strong> — the government directs a change (within the Changes clause). You comply, then negotiate the cost impact.</li>
                <li><strong>REAs (Requests for Equitable Adjustment)</strong> — when government actions increase your costs or change your work, you submit an REA to recover additional costs. Document EVERYTHING as you go — reconstructing costs after the fact is painful and less convincing.</li>
                <li><strong>Options</strong> — pre-priced contract extensions. The government exercises them (or doesn't) at their discretion.</li>
              </ul>
              <p>The <strong>Contracting Officer (KO)</strong> is the only person who can legally modify a contract. Not the program manager, not the COR, not the general. If anyone other than the KO tells you to change scope, smile and say "let's get that in writing through the KO."</p>
            </InfoBlock>

            <InfoBlock
              title="GAO Protests"
              tip="The mere POSSIBILITY of a protest gives you leverage. If you've been unfairly eliminated and the agency knows you'll protest, they sometimes take corrective action voluntarily. But use this weapon carefully — it's a one-way door for that relationship."
              timeline="GAO must decide within 100 days of filing. During that time, the contract is usually on hold (automatic stay)."
            >
              <p>If you believe the government made a procurement error, you can file a <strong>protest</strong> with the Government Accountability Office (GAO):</p>
              <ul>
                <li><strong>Pre-award protest</strong> — the solicitation itself has errors or unfair requirements. File before the proposal due date.</li>
                <li><strong>Post-award protest</strong> — the evaluation or award decision was flawed. Must file within 10 days of award or debriefing (whichever is later).</li>
                <li><strong>What happens</strong> — GAO reviews the record, the agency responds, GAO issues a decision. If you win, the agency takes corrective action (re-evaluate, re-solicit, etc.).</li>
                <li><strong>The stay</strong> — filing a timely post-award protest usually triggers an automatic stay (the winner can't start work). This is powerful leverage.</li>
              </ul>
              <p><strong>When to protest:</strong> the evaluation was clearly inconsistent with the stated criteria, the agency didn't follow its own rules, or there was a clear error in the evaluation. When NOT to protest: you just didn't like the outcome, you're trying to delay a competitor, or you want to maintain the relationship for future work. Protesting makes you radioactive with that contracting office for a while.</p>
            </InfoBlock>

            <InfoBlock
              title="Debriefings — Your Legal Right"
              tip="Take detailed notes. Bring your proposal manager. Ask follow-up questions. Then go back and compare their feedback against your proposal. This is the most valuable free consulting you'll ever receive."
              gotcha="You have only 3 business days after the debriefing to file a protest. If you're considering protesting, request the debriefing immediately and have your lawyer on standby."
            >
              <p>When you lose a competition, <strong>REQUEST A DEBRIEFING</strong>. You have the legal right under FAR 15.506. Many companies skip this and it's insane. Here's what you learn:</p>
              <ul>
                <li>Your proposal's strengths and weaknesses</li>
                <li>How you were rated in each evaluation factor</li>
                <li>The overall ranking of your proposal relative to the winner (not other losers)</li>
                <li>The rationale for the award decision</li>
              </ul>
              <p>This is how you get better. Every debriefing teaches you something. Common themes you'll hear: "non-specific approach" (too vague), "understaffed" (not enough people in your management plan), "relevant but not highly relevant past performance" (you stretched too far). Use this feedback to win the next one.</p>
              <p>For negotiated procurements, you can request the debriefing before or after award. Always request it.</p>
            </InfoBlock>
          </PhaseSection>

          {/* ── PHASE 5: SECURITY ── */}
          <PhaseSection id="security" number="05" title="Security" subtitle="When your work requires access to classified information.">

            <InfoBlock title="When You Need a Facility Clearance (FCL)">
              <p>If your contract involves access to classified information, your company needs a <strong>Facility Clearance</strong>. This is a separate process from personal clearances — your company itself must be cleared.</p>
              <p>You can't self-initiate an FCL — a government agency or cleared prime contractor must <strong>sponsor</strong> you. This usually happens during the contracting process. The DD Form 254 (Contract Security Classification Specification) attached to your contract specifies the clearance level required.</p>
              <p><Link to="/fcl" className="info-block__page-link">Read the full FCL guide →</Link></p>
            </InfoBlock>

            <InfoBlock title="When Employees Need Personal Clearances">
              <p>Individual employees who will access classified information need <strong>personal security clearances</strong>. Your company must have an FCL first, then sponsor employees for clearances.</p>
              <p>Clearance levels: <strong>Confidential</strong> (least sensitive), <strong>Secret</strong> (most common), <strong>Top Secret</strong> (most rigorous). Some positions also require <strong>SCI</strong> (Sensitive Compartmented Information) access or <strong>SAP</strong> (Special Access Program) access — these are additional access levels above Top Secret.</p>
              <p><Link to="/clearance" className="info-block__page-link">Read the full clearance guide →</Link></p>
            </InfoBlock>

            <InfoBlock
              title="Personnel Security Planning"
              tip="Hire people who already hold active clearances whenever possible. A cleared candidate can start work immediately on your classified contract. An uncleared candidate? You're waiting 6-18 months while paying their salary on unclassified work."
              gotcha="Clearances are 'use it or lose it.' If a cleared employee isn't working on classified material, their clearance goes inactive after 24 months and you'll have to reinvestigate. Plan your staffing to keep clearances active."
              timeline="Secret: 3-6 months average. Top Secret: 6-15 months. TS/SCI with poly: 12-24 months. Plan accordingly."
            >
              <p>The single biggest operational mistake in classified work: <strong>winning a contract and then discovering your team isn't cleared</strong>. Plan clearance timelines into your staffing from day one:</p>
              <ul>
                <li><strong>Pre-clear key personnel</strong> — if you're pursuing classified work, start sponsoring clearances for your core team NOW, before the contract award. Some agencies will process clearances during the proposal phase for key personnel.</li>
                <li><strong>Maintain a bench of cleared staff</strong> — expensive but essential if classified work is your bread and butter. Some companies hire cleared people and put them on internal R&D until a contract materializes.</li>
                <li><strong>Factor clearance timelines into your proposal</strong> — if you're proposing uncleared staff, your management plan needs to show how you'll handle the gap period.</li>
                <li><strong>Reciprocity</strong> — clearances are supposed to transfer between agencies. In practice, it can still take weeks to process the transfer. Start early.</li>
                <li><strong>Interim clearances</strong> — DCSA can grant interim Secret clearances relatively quickly (weeks, not months) while the full investigation continues. Interim TS is possible but less common.</li>
              </ul>
            </InfoBlock>

            <InfoBlock title="Insider Threat Program">
              <p>All cleared facilities must establish an <strong>Insider Threat Program</strong>. Required elements:</p>
              <ul>
                <li>Designated Insider Threat Program Senior Official (ITPSO)</li>
                <li>Training for all cleared employees</li>
                <li>Procedures for gathering, integrating, and reporting relevant information</li>
                <li>Self-assessments and response procedures</li>
                <li>Reporting suspicious contacts, behaviors, or indicators to your FSO and DCSA</li>
              </ul>
            </InfoBlock>

            <InfoBlock
              title="ITAR/EAR — Export Control Basics"
              gotcha="ITAR violations carry severe penalties — criminal fines up to $1M and 20 years imprisonment per violation. This is not theoretical. Companies get prosecuted. The State Department publishes consent agreements publicly. Your company name will be on it forever."
            >
              <p>If your work involves defense articles or technical data, export controls apply:</p>
              <ul>
                <li><strong>ITAR</strong> (International Traffic in Arms Regulations) — State Department. Covers defense articles on the USML (U.S. Munitions List). Strict — you can't share ITAR-controlled info with non-U.S. persons without a license.</li>
                <li><strong>EAR</strong> (Export Administration Regulations) — Commerce Department. Covers dual-use items. More permissive than ITAR but still regulated.</li>
                <li>You need a compliance program if you handle controlled items or data</li>
                <li>Even "deemed exports" (sharing info with a foreign national in the US) count — that includes your H-1B employees</li>
                <li>Register with the State Department's DDTC if you manufacture or export defense articles</li>
              </ul>
            </InfoBlock>
          </PhaseSection>
        </div>
      </div>

      <Reveal>
        <div className="page-next-links">
          <Link to="/fcl" className="page-next-link">Next: Facility Clearance →</Link>
          <Link to="/clearance" className="page-next-link page-next-link--dim">Or skip to: Personal Security Clearance →</Link>
        </div>
      </Reveal>
    </>
  );
}
