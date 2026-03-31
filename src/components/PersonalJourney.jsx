import React from 'react';
import Reveal from './Reveal';
import JourneyStep from './JourneyStep';
import personalSteps from '../data/personalSteps';

const sf86Tips = [
  'Be honest. Seriously. Lying or omitting is worse than whatever you\'re hiding. Investigators are trained to find inconsistencies.',
  'Gather info early. You\'ll need addresses, dates, supervisors, and contact info going back 7-10 years. Start a spreadsheet before you even get the form.',
  'Don\'t guess on dates. "Approximately" is fine. Wrong dates that look like you\'re hiding something are not.',
  'List your references wisely. Pick people who actually know you well and will answer their phone.',
  'Disclose, disclose, disclose. When in doubt, include it. "I wasn\'t sure if this was relevant, but…" is always better than an investigator finding something you didn\'t mention.',
];

export default function PersonalJourney() {
  return (
    <section id="personal">
      <Reveal>
        <div className="section-header">
          <div className="section-header__label">02 — Personal Clearance</div>
          <h2 className="section-header__title">Personal Security Clearance</h2>
          <p className="section-header__desc">
            An individual clearance lets you personally access classified information. You can't apply on your own — an employer or agency must sponsor you.
          </p>
        </div>
      </Reveal>

      {personalSteps.map((step, i) => (
        <JourneyStep
          key={i}
          number={i + 1}
          step={step}
          align={i % 2 === 0 ? 'right' : 'left'}
        />
      ))}

      <Reveal>
        <div className="tips-block">
          <h4 className="tips-block__title">Tips for Your SF86</h4>
          {sf86Tips.map((tip, i) => (
            <div key={i} className="tips-block__item">{tip}</div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
