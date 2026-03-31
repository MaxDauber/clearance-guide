import React from 'react';
import Reveal from './Reveal';

const statements = [
  {
    title: 'Inactive, Not Gone',
    body: 'When you leave a cleared job, your clearance goes into "inactive" status. It doesn\'t disappear — it\'s still on file in DISS (Defense Information System for Security). Any cleared employer can look you up.',
  },
  {
    title: 'The 2-Year Window',
    body: 'If you get a new cleared position within 2 years, your clearance can be reactivated without a new investigation. After 2 years of inactivity, you\'ll likely need to go through the process again.',
  },
  {
    title: 'Reciprocity Reality',
    body: 'In theory, all agencies honor each other\'s clearances. In practice, some agencies are faster than others. IC agencies may require additional steps (like a polygraph) even if you\'re already cleared.',
  },
  {
    title: 'Between Jobs? Do This.',
    body: 'Keep your contact info current with your last FSO. Report any life changes (moves, marriages, foreign travel). Stay clean — continuous vetting doesn\'t pause just because your clearance is inactive.',
  },
];

export default function TransferabilitySection() {
  return (
    <section>
      <Reveal>
        <div className="section-header">
          <div className="section-header__label">03 — Transferability</div>
          <h2 className="section-header__title">Transferability & Portability</h2>
          <p className="section-header__desc">
            Your clearance belongs to <em>you</em>, not your employer. Here's how it works when you move on.
          </p>
        </div>
      </Reveal>

      {statements.map((s, i) => (
        <Reveal key={i}>
          <div className="statement">
            <div className="statement__inner">
              <h3 className="statement__title">{s.title}</h3>
              <p className="statement__body">{s.body}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
