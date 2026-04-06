import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import JourneyStep from '../components/JourneyStep';
import fclSteps from '../data/fclSteps';
import usePageTitle from '../hooks/usePageTitle';

const fclFaqs = [
  {
    q: 'How long does it take to get an FCL?',
    a: 'For a straightforward case with no FOCI issues: <strong>4-8 months</strong>. With FOCI mitigation: <strong>6-18 months</strong>. Complex FOCI cases (foreign parent company, VTA/Proxy negotiations): <strong>1-2+ years</strong>. The biggest variables are FOCI complexity and how quickly your KMP background investigations clear.',
  },
  {
    q: 'How much does an FCL cost?',
    a: 'DCSA does not charge for the FCL itself — the government covers investigation costs. However, your <strong>real costs</strong> include: FSO salary or contractor ($60K-$120K/yr), GSA-approved security containers ($500-$5,000+), alarm/IDS systems ($2,000-$20,000), facility modifications for classified storage, security training, and potentially FOCI mitigation legal fees ($50K-$200K+ for complex structures). Budget <strong>$25K-$100K+ in Year 1</strong> depending on your situation.',
  },
  {
    q: 'Can I get an FCL without a classified contract?',
    a: 'No. You need a <strong>government sponsor</strong> — which comes from a classified contract, pre-award sponsorship, or a prime contractor who needs you cleared as a sub. You cannot self-sponsor. Some companies pursue "pre-award" sponsorship where an agency sponsors them in anticipation of a contract award, but this requires an active relationship with the sponsoring agency.',
  },
  {
    q: 'Can my FSO be a contractor or consultant?',
    a: 'No. Your FSO must be a <strong>W-2 employee</strong> and a U.S. citizen. You can hire an FSO consultant to help you <em>set up</em> your security program and train your FSO, but the actual FSO on record with DCSA must be an employee of your company. For small companies, this is often the CEO or COO who takes on FSO duties as a collateral duty.',
  },
  {
    q: 'What if I have foreign investors?',
    a: 'Foreign investment doesn\'t automatically disqualify you, but it triggers a <strong>FOCI review</strong> and likely requires a mitigation instrument (Board Resolution, SCA, SSA, VTA, or Proxy Agreement). The type depends on the degree of foreign ownership and control. Minority passive investment with no board seats is easier to mitigate than a foreign parent company with controlling interest. Get specialized FOCI counsel early — firms like DLA Piper, Hogan Lovells, and Akin Gump have dedicated practices.',
  },
  {
    q: 'What\'s the difference between FCL levels?',
    a: '<strong>Confidential</strong> — Lowest level. Rarely requested on its own.<br/><strong>Secret</strong> — Covers ~80% of classified contracts. Most companies start here.<br/><strong>Top Secret</strong> — Required for the most sensitive programs. More stringent facility requirements (may need a SCIF). KMP need Top Secret personal clearances.<br/><br/>Each level includes access to all levels below it. Your FCL level must match or exceed the classification level of the work you\'re performing.',
  },
  {
    q: 'Do I need a SCIF?',
    a: 'A <strong>SCIF (Sensitive Compartmented Information Facility)</strong> is only required if your contract involves SCI (Sensitive Compartmented Information) — typically intelligence-related work. A standard Secret or Top Secret FCL does not require a SCIF. SCIFs have stringent construction and accreditation requirements (ICD 705) and cost <strong>$250K-$2M+</strong> to build. If you need one, talk to a SCIF construction specialist early.',
  },
  {
    q: 'What happens if my FCL lapses?',
    a: 'If you lose your sponsor (e.g., your classified contract ends and you don\'t have another), DCSA will <strong>administratively terminate</strong> your FCL after a grace period. You\'ll need to go through the full process again to reinstate it. Some companies maintain "warm" sponsorship relationships to avoid lapses. Cleared employees\' personal clearances can also lapse if not associated with an active FCL.',
  },
  {
    q: 'Can I have multiple facility locations cleared?',
    a: 'Yes. Each location that handles classified information needs its own FCL (or to be covered as a branch office under your main FCL). Multi-site companies need to consider whether each location needs its own FSO or can be managed centrally. DCSA will conduct separate SVAs for each location.',
  },
  {
    q: 'What\'s the NISPOM and do I really need to know it?',
    a: 'The <strong>National Industrial Security Program Operating Manual (NISPOM)</strong> — now codified as 32 CFR Part 117 — is the regulation that governs how cleared contractors protect classified information. Yes, you absolutely need to know it. Your FSO should be intimately familiar with it. Key topics: personnel security, physical security, information system security, classification management, visits and meetings, international security, and insider threat. DCSA provides free NISPOM training through the <a href="https://www.cdse.edu/" target="_blank" rel="noopener noreferrer">CDSE</a>.',
  },
];

export default function FCLPage() {
  usePageTitle('Facility Clearance (FCL)');
  return (
    <>
      <Hero title="FCL." subtitle="Facility Clearance — the complete walkthrough" />

      <Reveal>
        <div className="page-back"><Link to="/">← Back to overview</Link></div>
      </Reveal>

      <Reveal>
        <div className="section-header">
          <div className="section-header__label">Facility Clearance</div>
          <h2 className="section-header__title">Getting Your Company Cleared</h2>
          <p className="section-header__desc">
            Your company needs a Facility Clearance before any employee can hold a security clearance under your organization
            or access classified information. The FCL is issued by DCSA (Defense Counterintelligence and Security Agency) and certifies that your
            facility meets the security requirements of the National Industrial Security Program. Without one, you can't sponsor personnel clearances,
            bid on classified work, or participate in classified programs — even as a subcontractor.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="why-block">
          <h2 className="why-block__title">Why You Need This</h2>
          <div className="why-block__content">
            <p>If your company wants to perform classified work for the U.S. government, you need a Facility Clearance. There are no exceptions and no shortcuts. Without an FCL, you cannot bid on classified contracts, you cannot access classified information — and critically, <strong>your employees cannot hold personal security clearances under your company</strong>. An individual's clearance must be sponsored by a cleared facility. No FCL means no cleared workforce, period.</p>
            <p>This matters even if you're not planning to handle classified documents yourself. If you want to hire cleared engineers, place cleared consultants, or sub on a classified program — your company needs its own FCL to sponsor and manage those clearances. Without it, your people either can't get cleared or have to hold their clearances through another company.</p>
            <p>The FCL process is one of the biggest barriers to entry in the defense industrial base. It takes <strong>4-18 months</strong>, requires a government sponsor, and involves scrutiny of your corporate structure, foreign ownership, and physical security. Companies that don't understand the process waste months on avoidable mistakes — incomplete FOCI documentation, unqualified KMP, inadequate facilities.</p>
            <p>This guide walks you through every step, from finding a sponsor to passing your first DCSA security review. Whether you're a startup entering the defense market or an established company expanding into classified work, this is your roadmap.</p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="pull-quote">
          <p className="pull-quote__text">
            <strong>Confidential</strong> — lowest level.{' '}
            <strong>Secret</strong> — most common (~80% of classified contracts).{' '}
            <strong>Top Secret</strong> — most stringent. Each level includes access to all levels below it.
          </p>
        </div>
      </Reveal>

      {fclSteps.map((step, i) => (
        <JourneyStep
          key={i}
          number={i + 1}
          step={step}
          align={i % 2 === 0 ? 'left' : 'right'}
        />
      ))}

      <Reveal>
        <div className="pull-quote">
          <p className="pull-quote__text" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: '#666' }}>
            ⚠️ Common gotchas: Incomplete FOCI documentation (the #1 delay), not having an FSO ready,
            underestimating the time commitment, and not starting KMP clearances early enough —
            they need personal clearances too, and those investigations run in parallel but take time.
          </p>
        </div>
      </Reveal>

      {/* Cost Breakdown */}
      <Reveal>
        <div className="section-header" style={{ marginTop: '4rem' }}>
          <div className="section-header__label">Budget Planning</div>
          <h2 className="section-header__title">What It Actually Costs</h2>
          <p className="section-header__desc">
            DCSA doesn't charge for the FCL itself, but the real costs add up. Here's what to budget for:
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="info-block">
          <h3 className="info-block__title">Year 1 Setup Costs</h3>
          <div className="info-block__content">
            <ul>
              <li><strong>FSO (full-time or collateral duty)</strong> — $60K-$120K/yr salary, or significant time commitment if collateral duty</li>
              <li><strong>GSA-approved security containers</strong> — $500-$5,000+ per safe depending on size and classification level</li>
              <li><strong>Intrusion Detection System (IDS)</strong> — $2,000-$20,000 for alarm systems meeting DCSA standards</li>
              <li><strong>Facility modifications</strong> — $5,000-$50,000+ for secure areas, reinforced doors, access controls</li>
              <li><strong>FSO training (CDSE courses)</strong> — Free through CDSE, but time investment of 40-80 hours</li>
              <li><strong>FOCI legal counsel (if needed)</strong> — $50,000-$200,000+ for complex mitigation structures</li>
              <li><strong>Security management software</strong> — $5,000-$25,000/yr for tools to manage clearances and compliance</li>
            </ul>
          </div>
          <div className="info-block__tip">💡 <strong>Pro tip:</strong> Total Year 1 budget: $25K-$100K+ for a small company with no FOCI issues. $100K-$500K+ with FOCI mitigation or SCIF requirements.</div>
        </div>
      </Reveal>

      {/* Key Resources */}
      <Reveal>
        <div className="section-header" style={{ marginTop: '4rem' }}>
          <div className="section-header__label">Resources</div>
          <h2 className="section-header__title">Essential Links</h2>
        </div>
      </Reveal>

      <Reveal>
        <div className="info-block">
          <div className="info-block__links">
            <a href="https://www.dcsa.mil/" target="_blank" rel="noopener noreferrer" className="info-block__link">DCSA Official Site ↗</a>
            <a href="https://www.dcsa.mil/Industrial-Security/National-Industrial-Security-System-NISS/" target="_blank" rel="noopener noreferrer" className="info-block__link">NISS Portal ↗</a>
            <a href="https://www.cdse.edu/" target="_blank" rel="noopener noreferrer" className="info-block__link">CDSE Training (Free) ↗</a>
            <a href="https://www.ecfr.gov/current/title-32/subtitle-A/chapter-I/subchapter-D/part-117" target="_blank" rel="noopener noreferrer" className="info-block__link">NISPOM (32 CFR Part 117) ↗</a>
            <a href="https://www.dcsa.mil/Industrial-Security/FOCI/" target="_blank" rel="noopener noreferrer" className="info-block__link">DCSA FOCI Information ↗</a>
          </div>
        </div>
      </Reveal>

      {/* FAQs */}
      <Reveal>
        <div className="section-header" style={{ marginTop: '4rem' }}>
          <div className="section-header__label">FAQ</div>
          <h2 className="section-header__title">Frequently Asked Questions</h2>
        </div>
      </Reveal>

      {(() => {
        const groups = [
          { theme: 'Process & Timeline', indices: [0, 2, 8] },
          { theme: 'Eligibility & Requirements', indices: [1, 3, 4, 5, 6] },
          { theme: 'Operations & Maintenance', indices: [7, 9] },
        ];
        return (
          <div className="faq-section">
            {groups.map(group => (
              <div key={group.theme} className="faq-group">
                <Reveal><div className="faq-group__title">{group.theme}</div></Reveal>
                {group.indices.map(idx => {
                  const faq = fclFaqs[idx];
                  if (!faq) return null;
                  return (
                    <Reveal key={idx}><div className="faq-item">
                      <div className="faq-item__q">{faq.q}</div>
                      <div className="faq-item__a" dangerouslySetInnerHTML={{ __html: faq.a }} />
                    </div></Reveal>
                  );
                })}
              </div>
            ))}
          </div>
        );
      })()}

      <Reveal>
        <div className="page-next-links">
          <Link to="/clearance" className="page-next-link">Next: Personal Security Clearance →</Link>
          <Link to="/ato" className="page-next-link">Also read: Authority to Operate (ATO) →</Link>
          <Link to="/government-business" className="page-next-link page-next-link--dim">Or start from: Doing Business with the USG →</Link>
        </div>
      </Reveal>
    </>
  );
}
