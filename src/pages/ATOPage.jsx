import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import usePageTitle from '../hooks/usePageTitle';

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`} onClick={() => setOpen(o => !o)}>
      <div className="faq-item__q">
        <span>{q}</span>
        <span className="faq-item__toggle">{open ? '−' : '+'}</span>
      </div>
      {open && <div className="faq-item__a" dangerouslySetInnerHTML={{ __html: a }} />}
    </div>
  );
}

const atoFaqs = [
  {
    q: 'How long does it take to get an ATO?',
    a: 'Typical timelines: <strong>6-12 months</strong> for a Moderate system with good preparation. <strong>12-18 months</strong> for FedRAMP. <strong>3-6 months</strong> if you\'re inheriting heavily from a FedRAMP-authorized environment and have experienced security staff. The biggest time sinks are SSP writing, waiting for the SCA assessment, and remediation cycles. Plan for at least one round of remediation after initial assessment.',
  },
  {
    q: 'How much does ATO cost?',
    a: '<strong>Internal ATO (agency-specific):</strong> $200K-$500K+ including security engineering, documentation, tools, and assessment support.<br/><strong>FedRAMP (3PAO assessed):</strong> $500K-$2M+ for initial authorization. 3PAO assessment fees alone run $150K-$400K. Annual continuous monitoring adds $200K-$500K/yr.<br/><br/>The biggest cost drivers: security engineering time (implementing controls), SSP writing (often outsourced to consultants at $200-$400/hr), and assessment remediation.',
  },
  {
    q: 'What\'s the difference between ATO and FedRAMP?',
    a: 'A standard <strong>ATO</strong> is issued by a single agency\'s Authorizing Official for a specific system deployment. It\'s valid only for that agency.<br/><br/><strong>FedRAMP</strong> is a government-wide program that standardizes cloud security assessment. A FedRAMP ATO is <strong>reusable across agencies</strong> — do the work once, and other agencies can leverage your authorization (with additional agency-specific requirements). FedRAMP is specifically for cloud service providers (IaaS, PaaS, SaaS).',
  },
  {
    q: 'Do I need a separate ATO for each agency?',
    a: 'Without FedRAMP: <strong>yes</strong>, technically each agency needs to authorize your system for their use. In practice, agencies may accept reciprocity or leverage another agency\'s assessment, but it\'s not guaranteed.<br/><br/>With FedRAMP: <strong>no</strong>. Your FedRAMP authorization is reusable. Agencies still issue their own ATO, but they leverage your FedRAMP package rather than conducting a full independent assessment. This is the "do once, use many" value proposition.',
  },
  {
    q: 'What happens if I fail the security assessment?',
    a: 'You don\'t "fail" — you get <strong>findings</strong>. Every finding goes into your POA&M with a remediation plan and timeline. The AO then decides whether the residual risk is acceptable. Common outcomes:<br/><ul><li>ATO with Conditions — authorized, but you must fix specific issues by specific dates</li><li>IATO — temporary authorization while you remediate</li><li>DATO — denied, but you can fix issues and resubmit</li></ul>The key is demonstrating a credible remediation plan. AOs rarely issue DATOs unless there are fundamental architectural security problems.',
  },
  {
    q: 'What\'s the difference between NIST 800-53 and NIST 800-171?',
    a: '<strong>NIST SP 800-53</strong> is the comprehensive catalog of security controls for federal information systems. It\'s what ATOs are assessed against. ~1,000+ controls across 20 families.<br/><br/><strong>NIST SP 800-171</strong> is a subset (~110 controls) specifically for protecting Controlled Unclassified Information (CUI) in non-federal systems — i.e., contractor systems. If you\'re a contractor handling CUI but not seeking a full ATO for your internal systems, 800-171 (and CMMC) is your framework. If your system will operate ON government infrastructure, you need a full 800-53-based ATO.',
  },
  {
    q: 'What is cATO and should I care?',
    a: '<strong>Continuous ATO (cATO)</strong> replaces the traditional "assess every 3 years" model with real-time, ongoing monitoring and authorization. Instead of a point-in-time snapshot, you maintain a continuous security posture dashboard.<br/><br/>You should care if you\'re building a DevSecOps pipeline for DoD. Platform One (Air Force) and Black Pearl (Navy) both support cATO pathways. The investment in automation and monitoring tools pays off through faster deployment cycles — new features can go live without re-authorization if your pipeline is approved.',
  },
  {
    q: 'Can I use AWS/Azure/GCP GovCloud to simplify ATO?',
    a: 'Absolutely — this is the <strong>smartest architectural decision</strong> you can make. AWS GovCloud, Azure Government, and Google Cloud for Government are all FedRAMP-authorized. By hosting on these platforms, you <strong>inherit 30-40% of controls</strong> automatically (physical security, infrastructure, hypervisor security, etc.).<br/><br/>Request the provider\'s <strong>Customer Responsibility Matrix (CRM)</strong> — it tells you exactly which controls they handle vs. what you own. Build your SSP from there.',
  },
  {
    q: 'What\'s an IATO and when would I get one?',
    a: 'An <strong>Interim ATO (IATO)</strong> is a temporary authorization, typically 90-180 days. You\'d get one when:<br/><ul><li>Your assessment revealed findings that need remediation, but the AO accepts the short-term risk</li><li>You need to operate before your full assessment is complete (mission need)</li><li>You\'re migrating between environments and need temporary authorization during transition</li></ul>IATOs are not renewable indefinitely — they\'re meant as a bridge to a full ATO. Expect pressure to complete remediation within the IATO period.',
  },
  {
    q: 'What tools do I need for ATO compliance?',
    a: 'Essential tooling:<br/><ul><li><strong>Vulnerability scanner</strong> — Nessus, Qualys, or Rapid7 for continuous scanning</li><li><strong>STIG compliance</strong> — OpenSCAP, SCAP Compliance Checker (SCC), or commercial tools like Anchore</li><li><strong>SIEM</strong> — Splunk, ELK Stack, or cloud-native (CloudWatch/Sentinel) for audit logging and monitoring</li><li><strong>GRC platform</strong> — eMASS (DoD-mandated), or commercial tools like Telos Xacta, CSAM, or RegScale for managing your SSP and POA&Ms</li><li><strong>Endpoint protection</strong> — CrowdStrike, Carbon Black, or Microsoft Defender for EDR</li><li><strong>Secrets management</strong> — HashiCorp Vault, AWS Secrets Manager for credential management</li></ul>Budget $50K-$200K/yr for tooling depending on scale.',
  },
];


const phases = [
  { id: 'overview', label: 'Phase 1: Overview', number: '01' },
  { id: 'categorize', label: 'Phase 2: Categorize', number: '02' },
  { id: 'select', label: 'Phase 3: Select Controls', number: '03' },
  { id: 'implement', label: 'Phase 4: Implement', number: '04' },
  { id: 'assess', label: 'Phase 5: Assess', number: '05' },
  { id: 'authorize', label: 'Phase 6: Authorize', number: '06' },
  { id: 'monitor', label: 'Phase 7: Monitor', number: '07' },
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
          <span className="phase-nav__label">{p.label.replace(/Phase \d+: /, '')}</span>
        </a>
      ))}
    </div>
  );
}

export default function ATOPage() {
  usePageTitle('Authority to Operate (ATO)');
  const [activePhase, setActivePhase] = useState('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActivePhase(e.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    phases.forEach(p => {
      const el = document.getElementById(p.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero title="ATO." subtitle="Authority to Operate — the complete guide to getting your system authorized" />

      <Reveal>
        <div className="page-back"><Link to="/">← Back to overview</Link></div>
      </Reveal>

      <Reveal>
        <div className="section-header">
          <div className="section-header__label">Authority to Operate</div>
          <h2 className="section-header__title">Getting Your System Authorized</h2>
          <p className="section-header__desc">
            Before any IT system can process, store, or transmit federal data, it needs an Authority to Operate.
            This is the government's way of formally accepting the risk of running your system. It's the single biggest
            technical gate between your product and a government contract. Here's exactly how the process works.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="why-block">
          <h2 className="why-block__title">Why You Need This</h2>
          <div className="why-block__content">
            <p>Every IT system that processes, stores, or transmits federal data must have an Authority to Operate before it goes live. No ATO, no deployment — it doesn't matter how good your product is, how urgent the mission need is, or how many generals want it. Without authorization, your system does not touch government networks.</p>
            <p>ATO is the single biggest technical gate between your product and a government customer. It typically takes <strong>6-18 months</strong> and costs <strong>$200K-$2M+</strong> depending on scope. But it's also one of the most powerful competitive moats in defense tech — once you have it, competitors can't just copy your product; they need to replicate your entire security posture.</p>
            <p>Most companies underestimate ATO because they don't understand it. They build first, then discover they need 325+ security controls, a 500-page System Security Plan, and an independent assessment. This guide gives you the full picture — so you can architect for compliance from day one and turn a regulatory burden into a strategic asset.</p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="pull-quote">
          "No ATO, no deployment. Period. It doesn't matter how good your product is — without authorization, it doesn't touch government networks."
        </div>
      </Reveal>

      <div className="gov-layout">
      <StickyNav activePhase={activePhase} />

      <main>
        {/* ─── PHASE 1: OVERVIEW ─── */}
        <PhaseSection id="overview" number="01" title="What Is an ATO?" subtitle="Understanding the authorization framework">
          <InfoBlock title="The Risk Management Framework (RMF)">
            <p>
              ATO lives inside the <strong>NIST Risk Management Framework (RMF)</strong>, defined in NIST SP 800-37.
              It's a structured, repeatable process for authorizing information systems. Every federal agency follows it.
              DoD uses a flavor called the <strong>DoD RMF</strong>, managed through eMASS (Enterprise Mission Assurance Support Service).
            </p>
            <p>
              The RMF replaced the old Certification & Accreditation (C&A) process in 2014. If anyone mentions DIACAP or DITSCAP, they're talking about the predecessors.
            </p>
          </InfoBlock>

          <InfoBlock title="Types of Authorization">
            <p>There are several paths to authorization, depending on your situation:</p>
            <ul>
              <li><strong>Full ATO</strong> — Standard authorization, typically valid for 3 years. Most common.</li>
              <li><strong>Interim ATO (IATO)</strong> — Temporary authorization (90-180 days) while you complete the full package. Higher risk tolerance, shorter leash.</li>
              <li><strong>ATO with Conditions</strong> — Authorized, but with specific constraints or remediation milestones you must hit.</li>
              <li><strong>Denial of ATO (DATO)</strong> — System cannot operate. You have unacceptable risk. Fix it and resubmit.</li>
              <li><strong>FedRAMP ATO</strong> — For cloud service providers. "Do once, use many" across agencies. Increasingly the standard for SaaS.</li>
              <li><strong>P-ATO (Provisional ATO)</strong> — Issued by the FedRAMP Joint Authorization Board. The gold standard for cloud.</li>
            </ul>
          </InfoBlock>

          <InfoBlock
            title="Who's Involved"
            tip="Build relationships with the ISSM and SCA early. They're your primary interfaces and can make or break your timeline."
          >
            <p>The ATO process involves several key roles:</p>
            <ul>
              <li><strong>Authorizing Official (AO)</strong> — The senior leader who accepts risk and signs the ATO. Usually a flag officer, SES, or agency head. They own the decision.</li>
              <li><strong>Information System Security Manager (ISSM)</strong> — Manages the security program for the system. Your primary POC for the authorization package.</li>
              <li><strong>Information System Security Officer (ISSO)</strong> — Day-to-day security operations. Implements and monitors controls.</li>
              <li><strong>Security Control Assessor (SCA)</strong> — Independent evaluator who tests your controls. Think of them as the auditor.</li>
              <li><strong>System Owner</strong> — The program office or organization that owns and operates the system.</li>
              <li><strong>Common Control Provider</strong> — Provides shared security controls (e.g., physical security, network infrastructure) that multiple systems inherit.</li>
            </ul>
          </InfoBlock>

          <InfoBlock
            title="The Authorization Package"
            gotcha="The package is not a one-time deliverable. It's a living set of documents you'll maintain for the life of the system."
          >
            <p>The ATO authorization package consists of three core documents:</p>
            <ol>
              <li><strong>System Security Plan (SSP)</strong> — The master document. Describes your system, its boundaries, data flows, and every security control implementation. Can easily be 200-500+ pages for complex systems.</li>
              <li><strong>Security Assessment Report (SAR)</strong> — The SCA's findings from testing your controls. Documents what passed, what failed, and residual risks.</li>
              <li><strong>Plan of Action & Milestones (POA&M)</strong> — Your remediation roadmap for any control deficiencies. Every finding needs a POA&M entry with an owner, timeline, and mitigation plan.</li>
            </ol>
          </InfoBlock>
        </PhaseSection>

        {/* ─── PHASE 2: CATEGORIZE ─── */}
        <PhaseSection id="categorize" number="02" title="Categorize the System" subtitle="FIPS 199 — determining your security impact level">
          <InfoBlock
            title="FIPS 199 Security Categorization"
            timeline="2-4 weeks for initial categorization"
            links={[
              { label: 'FIPS 199 Standard', url: 'https://csrc.nist.gov/publications/detail/fips/199/final' },
              { label: 'NIST SP 800-60 Vol. 1', url: 'https://csrc.nist.gov/publications/detail/sp/800-60/vol-1-rev-1/final' },
            ]}
          >
            <p>
              Every system gets categorized based on the potential impact of a security breach across three objectives:
              <strong> Confidentiality</strong>, <strong>Integrity</strong>, and <strong>Availability</strong>.
            </p>
            <p>Each objective gets rated Low, Moderate, or High. The system's overall categorization is the <strong>high-water mark</strong> — the highest rating across all three.</p>
            <ul>
              <li><strong>Low</strong> — Limited adverse effect. Loss would be an inconvenience.</li>
              <li><strong>Moderate</strong> — Serious adverse effect. Loss could significantly harm operations, assets, or individuals. <em>Most defense systems land here.</em></li>
              <li><strong>High</strong> — Severe or catastrophic adverse effect. Loss could cause mission failure, major financial harm, or loss of life.</li>
            </ul>
          </InfoBlock>

          <InfoBlock
            title="CNSS 1253 for National Security Systems"
            gotcha="If your system processes classified data, you're in NSS territory and follow CNSS 1253 instead of FIPS 199. The control sets are larger and more restrictive."
          >
            <p>
              National Security Systems (NSS) — systems that handle classified info or are critical to military/intelligence operations — use 
              <strong> CNSSI 1253</strong> for categorization instead of FIPS 199. The process is similar but adds overlays for classification level (Confidential, Secret, Top Secret) and specific mission requirements.
            </p>
            <p>
              The categorization directly determines how many controls you need to implement. A Moderate system might require ~325 controls. A High system could require 400+. This is why getting the categorization right matters — over-categorizing means unnecessary work; under-categorizing means getting bounced by the SCA.
            </p>
          </InfoBlock>

          <InfoBlock
            title="System Boundary Definition"
            tip="Draw your boundary tight. Every component inside the boundary needs controls. The more you can inherit from the hosting environment, the less you own."
          >
            <p>
              Before you can categorize, you need to define what's in scope. The <strong>authorization boundary</strong> is the line around everything you're responsible for securing:
            </p>
            <ul>
              <li>Hardware, software, firmware within the system</li>
              <li>Network connections and data flows</li>
              <li>People who administer or use the system</li>
              <li>Data at rest and in transit</li>
              <li>External interfaces and APIs</li>
              <li>Supporting infrastructure (unless inherited from a common control provider)</li>
            </ul>
            <p>
              Document this in a <strong>system boundary diagram</strong> — a network/architecture diagram that clearly shows what's inside vs. outside your authorization boundary.
            </p>
          </InfoBlock>
        </PhaseSection>

        {/* ─── PHASE 3: SELECT CONTROLS ─── */}
        <PhaseSection id="select" number="03" title="Select Security Controls" subtitle="NIST SP 800-53 — building your control baseline">
          <InfoBlock
            title="Control Baselines"
            links={[
              { label: 'NIST SP 800-53 Rev. 5', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
              { label: 'NIST SP 800-53B (Baselines)', url: 'https://csrc.nist.gov/publications/detail/sp/800-53b/final' },
            ]}
          >
            <p>
              Based on your FIPS 199 categorization, you start with a <strong>control baseline</strong> from NIST SP 800-53. These are organized into 20 control families:
            </p>
            <ul>
              <li><strong>AC</strong> — Access Control (who can get in)</li>
              <li><strong>AU</strong> — Audit and Accountability (logging everything)</li>
              <li><strong>AT</strong> — Awareness and Training</li>
              <li><strong>CM</strong> — Configuration Management</li>
              <li><strong>CP</strong> — Contingency Planning (disaster recovery)</li>
              <li><strong>IA</strong> — Identification and Authentication (MFA, PKI, CAC)</li>
              <li><strong>IR</strong> — Incident Response</li>
              <li><strong>MA</strong> — Maintenance</li>
              <li><strong>MP</strong> — Media Protection</li>
              <li><strong>PE</strong> — Physical and Environmental Protection</li>
              <li><strong>PL</strong> — Planning</li>
              <li><strong>PM</strong> — Program Management</li>
              <li><strong>PS</strong> — Personnel Security</li>
              <li><strong>RA</strong> — Risk Assessment</li>
              <li><strong>CA</strong> — Security Assessment and Authorization</li>
              <li><strong>SC</strong> — System and Communications Protection (encryption)</li>
              <li><strong>SI</strong> — System and Information Integrity (patching, AV)</li>
              <li><strong>SA</strong> — System and Services Acquisition</li>
              <li><strong>SR</strong> — Supply Chain Risk Management (new in Rev. 5)</li>
              <li><strong>PT</strong> — PII Processing and Transparency (new in Rev. 5)</li>
            </ul>
          </InfoBlock>

          <InfoBlock
            title="Tailoring and Overlays"
            tip="DISA publishes STIGs (Security Technical Implementation Guides) for virtually every technology. These are your implementation checklists. Download them early."
            links={[
              { label: 'DISA STIGs', url: 'https://public.cyber.mil/stigs/' },
            ]}
          >
            <p>
              The baseline is your starting point, not your finish line. You'll <strong>tailor</strong> it based on your specific system:
            </p>
            <ul>
              <li><strong>Scoping</strong> — Remove controls that don't apply (e.g., wireless controls if you have no wireless).</li>
              <li><strong>Compensating controls</strong> — Can't implement a control exactly as written? Document an alternative that provides equivalent protection.</li>
              <li><strong>Organization-defined parameters</strong> — Many controls have blanks you fill in (e.g., "lock account after [X] failed login attempts" — your org defines X).</li>
              <li><strong>Overlays</strong> — Additional requirements layered on top. DoD uses overlays for classified systems, cross-domain solutions, and specific mission areas.</li>
            </ul>
          </InfoBlock>

          <InfoBlock
            title="Inherited vs. System-Specific Controls"
            gotcha="Don't assume you can inherit a control just because it exists in the environment. Get written confirmation from the common control provider. If they can't provide a Customer Responsibility Matrix (CRM), you own it."
          >
            <p>
              This is where smart architecture saves you months of work:
            </p>
            <ul>
              <li><strong>Inherited controls</strong> — Controls provided by your hosting environment, cloud provider, or facility. If you're on AWS GovCloud or Azure Government, they handle physical security (PE family), some network controls, and more. FedRAMP P-ATO'd environments can pass through dozens of controls.</li>
              <li><strong>Shared controls</strong> — Partially inherited. The cloud provider handles the infrastructure side; you handle the application side. Example: the provider secures the hypervisor, you secure the OS and up.</li>
              <li><strong>System-specific controls</strong> — All yours. Application-level access control, data encryption, audit logging, etc.</li>
            </ul>
            <p>
              A well-architected system on FedRAMP-authorized infrastructure can inherit 30-40% of controls out of the box.
            </p>
          </InfoBlock>
        </PhaseSection>

        {/* ─── PHASE 4: IMPLEMENT ─── */}
        <PhaseSection id="implement" number="04" title="Implement Controls" subtitle="Building security into the system">
          <InfoBlock
            title="The System Security Plan (SSP)"
            timeline="4-12 weeks to write, depending on system complexity"
          >
            <p>
              The SSP is your magnum opus. It documents <strong>every</strong> control implementation — how your system meets each requirement. For a Moderate system, you're writing implementation descriptions for ~325 controls.
            </p>
            <p>A good SSP entry for each control includes:</p>
            <ul>
              <li><strong>Implementation status</strong> — Implemented, Partially Implemented, Planned, Inherited, Not Applicable</li>
              <li><strong>Implementation description</strong> — Exactly how your system satisfies the control. Be specific: name technologies, configurations, processes.</li>
              <li><strong>Responsible role</strong> — Who maintains this control</li>
              <li><strong>Evidence references</strong> — Screenshots, config files, policy documents that prove it</li>
            </ul>
          </InfoBlock>

          <InfoBlock
            title="Key Technical Controls You'll Implement"
            tip="Automate everything possible. STIG compliance scanning (e.g., with OpenSCAP, Nessus, or Anchore), automated patching, centralized logging — automation is both a time-saver and an audit trail."
          >
            <p>The controls that consume the most engineering effort:</p>
            <ul>
              <li><strong>FIPS 140-2/3 encryption</strong> — All data at rest and in transit must use FIPS-validated cryptographic modules. This means specific TLS configurations, specific encryption libraries, and validated implementations. No rolling your own crypto.</li>
              <li><strong>CAC/PIV authentication</strong> — Systems on DoD networks must support Common Access Card authentication. This means PKI infrastructure, certificate validation, and OCSP/CRL checking.</li>
              <li><strong>Audit logging</strong> — Every security-relevant event logged, with tamper-evident storage, and retained for the required period (often 1-5 years). Splunk, ELK, or cloud-native logging.</li>
              <li><strong>Vulnerability management</strong> — Regular scanning (Nessus, Qualys), STIG compliance checks, and a defined remediation timeline: Critical within 30 days, High within 60, Medium within 90.</li>
              <li><strong>Least privilege / RBAC</strong> — Role-based access control with separation of duties. No shared admin accounts. Privileged access management (PAM) for admin functions.</li>
              <li><strong>Continuous monitoring</strong> — SIEM integration, intrusion detection/prevention (IDS/IPS), endpoint detection and response (EDR).</li>
            </ul>
          </InfoBlock>

          <InfoBlock
            title="Documentation Beyond the SSP"
            gotcha="Missing even one of these can stall your assessment. The SCA will ask for all of them. Have them ready."
          >
            <p>The SSP is the centerpiece, but you'll also need:</p>
            <ul>
              <li><strong>Contingency Plan (CP)</strong> — Disaster recovery and business continuity. Must be tested annually.</li>
              <li><strong>Incident Response Plan (IRP)</strong> — How you detect, respond to, and recover from security incidents. Must include reporting timelines (usually 1 hour for Critical).</li>
              <li><strong>Configuration Management Plan</strong> — How you manage changes, baselines, and configuration items.</li>
              <li><strong>Access Control Policy</strong> — Who gets access, how, and under what conditions.</li>
              <li><strong>Privacy Impact Assessment (PIA)</strong> — If you process PII.</li>
              <li><strong>Interconnection Security Agreements (ISA/MOU)</strong> — For every external system connection.</li>
              <li><strong>Hardware/Software Inventory</strong> — Complete, accurate, and maintained.</li>
              <li><strong>Network Diagrams</strong> — Logical and physical. Data flow diagrams showing where data moves and how it's protected.</li>
              <li><strong>Ports, Protocols, and Services (PPS)</strong> — Every open port documented and justified.</li>
            </ul>
          </InfoBlock>
        </PhaseSection>

        {/* ─── PHASE 5: ASSESS ─── */}
        <PhaseSection id="assess" number="05" title="Assess Controls" subtitle="Independent evaluation — the moment of truth">
          <InfoBlock
            title="The Security Assessment"
            timeline="4-8 weeks for the assessment itself, but expect 2-4 weeks of remediation cycles afterward"
          >
            <p>
              The <strong>Security Control Assessor (SCA)</strong> — an independent evaluator — tests your controls against the SSP.
              They're verifying that what you documented is actually what's implemented. Assessment methods include:
            </p>
            <ul>
              <li><strong>Examine</strong> — Review documentation, configurations, policies, and procedures</li>
              <li><strong>Interview</strong> — Talk to system administrators, users, and security staff about how things actually work</li>
              <li><strong>Test</strong> — Hands-on validation. Vulnerability scans, penetration testing, configuration audits, attempting to break access controls</li>
            </ul>
            <p>
              The SCA produces the <strong>Security Assessment Report (SAR)</strong>, which documents every finding. Findings are categorized by severity and mapped to specific controls.
            </p>
          </InfoBlock>

          <InfoBlock
            title="Common Assessment Findings"
            tip="The three most common assessment killers: weak encryption configurations, missing or incomplete audit logs, and outdated/unpatched systems. Nail these before the SCA arrives."
          >
            <p>The things that trip up nearly every system:</p>
            <ul>
              <li><strong>Non-FIPS encryption</strong> — Using TLS 1.0/1.1, non-validated crypto modules, or missing encryption somewhere in the data flow</li>
              <li><strong>Incomplete audit logging</strong> — Missing event types, logs not protected from tampering, insufficient retention</li>
              <li><strong>Unpatched vulnerabilities</strong> — STIG findings not remediated, CVEs past their remediation deadline</li>
              <li><strong>Weak access controls</strong> — Shared accounts, missing MFA, overly broad permissions</li>
              <li><strong>Missing documentation</strong> — SSP entries that say "implemented" but have no evidence. Policies that exist on paper but aren't followed.</li>
              <li><strong>Configuration drift</strong> — Production doesn't match what's documented in the SSP</li>
              <li><strong>Unregistered connections</strong> — API calls or data flows not documented in the system boundary</li>
            </ul>
          </InfoBlock>

          <InfoBlock title="The POA&M Process">
            <p>
              Every finding that isn't immediately fixed goes into the <strong>Plan of Action & Milestones (POA&M)</strong>. This is your remediation tracker:
            </p>
            <ul>
              <li><strong>Weakness description</strong> — What's wrong, mapped to the specific control</li>
              <li><strong>Risk level</strong> — Very High, High, Moderate, Low</li>
              <li><strong>Remediation plan</strong> — Exactly what you're going to do to fix it</li>
              <li><strong>Milestones</strong> — Specific dates for each remediation step</li>
              <li><strong>Responsible party</strong> — Name, not just a role</li>
              <li><strong>Resources required</strong> — Budget, tools, personnel</li>
              <li><strong>Completion date</strong> — When it'll be done. This becomes a binding commitment.</li>
            </ul>
            <p>
              The AO may accept risk and grant ATO with open POA&M items, but they'll track them. Overdue POA&Ms can trigger ATO revocation.
            </p>
          </InfoBlock>
        </PhaseSection>

        {/* ─── PHASE 6: AUTHORIZE ─── */}
        <PhaseSection id="authorize" number="06" title="Authorize the System" subtitle="The AO makes the call">
          <InfoBlock
            title="The Authorization Decision"
            timeline="2-4 weeks for the AO to review and decide, assuming a clean package"
          >
            <p>
              The <strong>Authorizing Official</strong> reviews the complete authorization package — SSP, SAR, and POA&M — and makes a risk-based decision:
            </p>
            <ul>
              <li><strong>ATO</strong> — System is authorized to operate. Typically valid for 3 years (or ongoing under continuous monitoring).</li>
              <li><strong>ATO with Conditions</strong> — Authorized, but with specific requirements that must be met within defined timeframes.</li>
              <li><strong>IATO</strong> — Interim authorization for 90-180 days. Clock is ticking.</li>
              <li><strong>DATO</strong> — Denied. System cannot operate. Unacceptable risk.</li>
            </ul>
            <p>
              The AO is personally accepting risk. They're putting their name on a document that says "I've reviewed the security posture of this system and I'm comfortable with the residual risk." This is why senior leaders take it seriously — their career is on the line if something goes wrong.
            </p>
          </InfoBlock>

          <InfoBlock
            title="FedRAMP Authorization"
            tip="If you're a SaaS company selling to the government, FedRAMP is your path. A FedRAMP ATO is reusable across agencies — do the work once, sell to many. Start with the FedRAMP Marketplace to see what's already authorized."
            links={[
              { label: 'FedRAMP Marketplace', url: 'https://marketplace.fedramp.gov/' },
              { label: 'FedRAMP Authorization Process', url: 'https://www.fedramp.gov/program-basics/' },
            ]}
          >
            <p>
              For cloud service providers, <strong>FedRAMP</strong> (Federal Risk and Authorization Management Program) provides a standardized approach:
            </p>
            <ul>
              <li><strong>FedRAMP Ready</strong> — You've been assessed by a 3PAO and deemed ready. Listed in the Marketplace. Not yet authorized.</li>
              <li><strong>Agency ATO</strong> — A specific agency sponsors and authorizes you. Faster but limited initial reuse.</li>
              <li><strong>JAB P-ATO</strong> — The Joint Authorization Board (DoD, DHS, GSA) issues a Provisional ATO. The gold standard. Hardest to get, most reusable.</li>
              <li><strong>FedRAMP High</strong> — For systems handling the most sensitive unclassified data. ~421 controls. Required for DoD Impact Level 4-5.</li>
            </ul>
            <p>
              FedRAMP authorization typically takes <strong>12-18 months</strong> and costs <strong>$500K-$2M+</strong> for initial assessment (3PAO fees, tooling, engineering, documentation). But it's a massive competitive moat once you have it.
            </p>
          </InfoBlock>

          <InfoBlock
            title="DoD Impact Levels"
            gotcha="Many vendors assume IL4 is sufficient for DoD work. Check your contract requirements carefully — some programs require IL5, and IL6 (classified) is a completely different animal."
          >
            <p>
              DoD uses <strong>Impact Levels (IL)</strong> to categorize cloud deployments, defined in the <strong>DoD Cloud Computing SRG</strong>:
            </p>
            <ul>
              <li><strong>IL2</strong> — Public and non-CUI data. Can run on commercial cloud with FedRAMP Moderate.</li>
              <li><strong>IL4</strong> — Controlled Unclassified Information (CUI). Requires FedRAMP High + DoD-specific controls. Must be in U.S.-based datacenters with U.S. persons.</li>
              <li><strong>IL5</strong> — Higher sensitivity CUI and mission-critical data. Dedicated or virtual private cloud. More restrictive than IL4.</li>
              <li><strong>IL6</strong> — Classified (up to Secret). Air-gapped or accredited classified infrastructure. Think AWS Secret Region or Azure Government Secret.</li>
            </ul>
          </InfoBlock>
        </PhaseSection>

        {/* ─── PHASE 7: MONITOR ─── */}
        <PhaseSection id="monitor" number="07" title="Continuous Monitoring" subtitle="ATO is not the finish line — it's the starting line">
          <InfoBlock title="Ongoing Authorization">
            <p>
              The traditional "get ATO and forget about it for 3 years" model is dying. The government is moving toward <strong>continuous monitoring</strong> and <strong>ongoing authorization</strong>:
            </p>
            <ul>
              <li><strong>Monthly vulnerability scans</strong> — Results reported to the ISSM and AO</li>
              <li><strong>Quarterly POA&M reviews</strong> — Progress on remediations tracked and reported</li>
              <li><strong>Annual control assessments</strong> — A subset of controls re-tested each year (typically 1/3 per year, full rotation every 3 years)</li>
              <li><strong>Configuration change tracking</strong> — Every change to the system evaluated for security impact</li>
              <li><strong>Continuous ATO (cATO)</strong> — DoD's push toward real-time monitoring replacing periodic assessments. If your monitoring is mature enough, the AO can maintain ongoing authorization without reauthorization cycles.</li>
            </ul>
          </InfoBlock>

          <InfoBlock
            title="cATO — Continuous Authority to Operate"
            tip="cATO is where the puck is going. If you're building a new system, architect for continuous monitoring from day one. Invest in automation, dashboards, and real-time compliance tooling."
            links={[
              { label: 'DoD cATO Guide', url: 'https://software.af.mil/wp-content/uploads/2021/05/DoD-Enterprise-DevSecOps-2.0-Fundamentals-Guide.pdf' },
            ]}
          >
            <p>
              <strong>Continuous ATO</strong> is the future. Instead of a point-in-time assessment every 3 years, you maintain a real-time security posture dashboard that the AO can review at any time:
            </p>
            <ul>
              <li><strong>Automated compliance scanning</strong> — STIG checks running continuously, not annually</li>
              <li><strong>Real-time vulnerability management</strong> — New CVEs assessed and remediated within hours, not months</li>
              <li><strong>DevSecOps pipeline</strong> — Security testing integrated into CI/CD. Every deployment is assessed.</li>
              <li><strong>Security dashboards</strong> — AO and ISSM can see current risk posture at any time</li>
              <li><strong>Automated evidence collection</strong> — No more scrambling to gather screenshots before an assessment</li>
            </ul>
            <p>
              Platform One (Air Force) and Black Pearl (Navy) are leading the DoD's cATO adoption. If you're working with either, ask about their cATO reciprocity process.
            </p>
          </InfoBlock>

          <InfoBlock
            title="What Triggers Reauthorization"
            gotcha="Migrating to a new cloud environment — even between regions of the same provider — can trigger reauthorization. Plan accordingly."
          >
            <p>Even with ongoing monitoring, certain events require the AO to re-evaluate:</p>
            <ul>
              <li>Major architecture changes (new components, boundary changes)</li>
              <li>Migration to a new hosting environment</li>
              <li>Significant security incidents</li>
              <li>New interconnections with external systems</li>
              <li>Changes in data sensitivity (e.g., starting to process PII or classified data)</li>
              <li>Expiration of the current ATO period</li>
              <li>Directed reauthorization by higher authority</li>
            </ul>
          </InfoBlock>

          <InfoBlock title="ATO as Competitive Advantage">
            <p>
              Here's the thing most defense tech companies miss: <strong>ATO is a moat</strong>. It takes 6-18 months and significant investment to achieve. Once you have it:
            </p>
            <ul>
              <li>Competitors can't just copy your product — they need to replicate your entire security posture</li>
              <li>Government buyers strongly prefer existing ATOs over starting new authorization processes</li>
              <li>FedRAMP reciprocity means one ATO can unlock dozens of agencies</li>
              <li>Each additional ATO gets easier — you've built the muscle, documentation, and processes</li>
              <li>ATO maintenance is a forcing function for good security hygiene, which benefits your entire business</li>
            </ul>
            <p>
              Don't treat ATO as a tax. Treat it as a strategic asset.
            </p>
          </InfoBlock>
        </PhaseSection>
      </main>
      </div>

      <Reveal>
        <div className="section-header" style={{ marginTop: '4rem' }}>
          <div className="section-header__label">FAQ</div>
          <h2 className="section-header__title">Frequently Asked Questions</h2>
        </div>
      </Reveal>

      <Reveal>
        <div className="faq-list">
          {atoFaqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="page-next-links">
          <Link to="/government-business" className="page-next-link">Also read: Doing Business with the USG →</Link>
          <Link to="/fcl" className="page-next-link page-next-link--dim">Or learn about: Facility Clearance (FCL) →</Link>
        </div>
      </Reveal>
    </>
  );
}
