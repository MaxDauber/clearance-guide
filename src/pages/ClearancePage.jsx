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
