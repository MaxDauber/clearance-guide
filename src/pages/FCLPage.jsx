import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import JourneyStep from '../components/JourneyStep';
import fclSteps from '../data/fclSteps';
import usePageTitle from '../hooks/usePageTitle';

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
          <h2 className="section-header__title">Getting Your Facility Cleared</h2>
          <p className="section-header__desc">
            Your company needs an FCL before any employee can hold or access classified information. Here's exactly how to get one.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="pull-quote">
          <p className="pull-quote__text">
            <strong>Confidential</strong> — lowest level. <strong>Secret</strong> — most common. <strong>Top Secret</strong> — most stringent. Each level includes access to all levels below it.
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
            ⚠️ Common gotchas: Incomplete FOCI documentation (the #1 delay), not having an FSO ready, underestimating the time commitment, and not starting KMP clearances early enough — they need personal clearances too.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="page-next-links">
          <Link to="/clearance" className="page-next-link">Next: Personal Security Clearance →</Link>
          <Link to="/government-business" className="page-next-link page-next-link--dim">Or start from: Doing Business with the USG →</Link>
        </div>
      </Reveal>
    </>
  );
}
