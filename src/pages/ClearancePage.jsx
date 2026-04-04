import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import DataStrip from '../components/DataStrip';
import PersonalJourney from '../components/PersonalJourney';
import TransferabilitySection from '../components/TransferabilitySection';
import PolygraphSection from '../components/PolygraphSection';
import FAQSection from '../components/FAQSection';
import usePageTitle from '../hooks/usePageTitle';

export default function ClearancePage() {
  usePageTitle('Personal Security Clearance');
  return (
    <>
      <Hero title="CLEARED." subtitle="Personal Security Clearance — everything you need to know" />

      <Reveal>
        <div className="page-back"><Link to="/">← Back to overview</Link></div>
      </Reveal>

      <DataStrip />

      <Reveal>
        <div className="why-block">
          <h2 className="why-block__title">Why You Need This</h2>
          <div className="why-block__content">
            <p>Over 4 million Americans hold active security clearances. If you want to work on the most consequential national security problems — from intelligence analysis to weapons systems to cyber operations — a personal clearance is the price of admission. No clearance, no access. Period.</p>
            <p>Cleared professionals command a <strong>20-40% salary premium</strong> over their non-cleared peers. A Top Secret/SCI clearance is one of the most valuable career assets in the national security workforce. But the process is opaque, slow, and full of misconceptions that cost people time and opportunities.</p>
            <p>This guide cuts through the noise. Whether you're a first-time applicant wondering if your college marijuana use is disqualifying (it's probably not), a cleared professional navigating a transfer, or an employer trying to understand timelines — everything you need is here.</p>
          </div>
        </div>
      </Reveal>

      <main>
        <PersonalJourney />
        <TransferabilitySection />
        <PolygraphSection />
        <FAQSection />
      </main>

      <Reveal>
        <div className="page-next-links">
          <Link to="/fcl" className="page-next-link">Also read: Facility Clearance (FCL) →</Link>
          <Link to="/government-business" className="page-next-link page-next-link--dim">Or start from: Doing Business with the USG →</Link>
        </div>
      </Reveal>
    </>
  );
}
