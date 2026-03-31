import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import usePageTitle from '../hooks/usePageTitle';

const pathways = [
  {
    number: '01',
    title: 'Doing Business with the USG',
    desc: 'The complete map from "I want to sell to the government" to actually doing it. SAM.gov registration, contract vehicles, SBIR/STTR, GSA Schedules, compliance frameworks, and everything in between.',
    to: '/government-business',
    label: 'Read the survival guide',
  },
  {
    number: '02',
    title: 'Facility Clearance (FCL)',
    desc: 'Your company needs a Facility Clearance before any employee can hold or access classified information. Here\'s exactly how to get one — sponsors, NISS, KMP, FOCI, and the full DCSA process.',
    to: '/fcl',
    label: 'Get your facility cleared',
  },
  {
    number: '03',
    title: 'Personal Security Clearance',
    desc: 'An individual clearance lets you personally access classified information. SF86, investigations, adjudication, polygraphs, transferability, and what actually matters (and what doesn\'t).',
    to: '/clearance',
    label: 'Understand personal clearances',
  },
];

const journeySteps = [
  'Business Registration',
  'Government Contracting',
  'Facility Clearance',
  'Personal Clearances',
  'Classified Work',
];

export default function HomePage() {
  usePageTitle(null);

  return (
    <>
      <Hero
        title="CLEARED."
        subtitle="The comprehensive survival guide to navigating the world of building a business with the U.S. Government"
      />

      <Reveal>
        <div className="journey-map">
          {journeySteps.map((step, i) => (
            <React.Fragment key={step}>
              <div className="journey-map__step">
                <div className="journey-map__dot" />
                <div className="journey-map__label">{step}</div>
              </div>
              {i < journeySteps.length - 1 && <div className="journey-map__line" />}
            </React.Fragment>
          ))}
        </div>
      </Reveal>

      {pathways.map((p, i) => (
        <Reveal key={i}>
          <Link to={p.to} className="pathway">
            <div className="pathway__inner">
              <div className="pathway__number">{p.number}</div>
              <div className="pathway__content">
                <h2 className="pathway__title">{p.title}</h2>
                <p className="pathway__desc">{p.desc}</p>
                <span className="pathway__link">
                  {p.label}
                  <span className="pathway__link-arrow">→</span>
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      ))}

      <Reveal>
        <div className="pull-quote pull-quote--section" style={{ padding: '8rem 2rem' }}>
          <p className="pull-quote__text" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', color: '#666' }}>
            This is the resource you bookmark and send to every founder who asks<br />
            <strong style={{ color: '#e8e8e8' }}>"How do I sell to DoD?"</strong>
          </p>
        </div>
      </Reveal>
    </>
  );
}
