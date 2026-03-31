import React from 'react';
import Reveal from './Reveal';
import JourneyStep from './JourneyStep';
import fclSteps from '../data/fclSteps';

export default function FCLJourney() {
  return (
    <section id="fcl">
      <Reveal>
        <div className="section-header">
          <div className="section-header__label">01 — Facility Clearance</div>
          <h2 className="section-header__title">Facility Clearance (FCL)</h2>
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
    </section>
  );
}
