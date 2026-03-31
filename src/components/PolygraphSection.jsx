import React from 'react';
import Reveal from './Reveal';

const expectItems = [
  { title: 'Duration', text: '2–4 hours is typical. Some sessions run longer. Full-scope polygraphs for IC agencies may require multiple sessions on different days.' },
  { title: 'The Process', text: "Pre-test interview (examiner explains everything and reviews questions), the actual polygraph (sensors attached, questions asked), and post-test discussion. It's designed to feel intense — that's the point." },
  { title: 'The Reality', text: "Polygraphs are controversial — not admissible in most courts and the scientific community is divided. But the IC relies on them heavily. They're as much about the interview as the machine." },
  { title: 'Inconclusive?', text: 'Not necessarily disqualifying. Inconclusive results are common — you\'ll likely be asked to retake. A "failed" poly leads to further review, not automatic denial. Many people pass on the second attempt.' },
];

const tips = [
  'Be honest. The same rule as the SF86. Trying to hide something creates the exact physiological response they\'re looking for.',
  'Don\'t overthink it. Anxiety is normal and examiners know that. You don\'t need to be perfectly calm — just truthful.',
  'Don\'t research "how to beat it." Examiners specifically ask if you\'ve researched countermeasures. Using them is a federal offense for people in national security positions.',
  'Stay hydrated, get sleep, and breathe. It\'s a long session. Physical comfort helps you think clearly.',
];

export default function PolygraphSection() {
  return (
    <section id="polygraph">
      <Reveal>
        <div className="section-header">
          <div className="section-header__label">04 — Polygraph</div>
          <h2 className="section-header__title">Polygraph Examinations</h2>
          <p className="section-header__desc">
            Not everyone needs one — but if you're going IC, you almost certainly will.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="pull-quote">
          <p className="pull-quote__text" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)' }}>
            Primarily required by intelligence community agencies — <strong>CIA, NSA, NGA, DIA, NRO, ODNI</strong> — and some DoD special-access positions. Most DoD Secret/TS clearances do <em>not</em> require a polygraph.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="poly-compare">
          <div className="poly-compare__col">
            <div className="poly-compare__tag">Counterintelligence</div>
            <h3 className="poly-compare__title">CI Polygraph</h3>
            <p className="poly-compare__desc">
              Focused scope: espionage, unauthorized disclosure of classified information, and foreign intelligence contacts. Generally shorter and more straightforward.
            </p>
            <div className="poly-compare__agencies">DIA<br/>NGA<br/>Some DoD</div>
          </div>
          <div className="poly-compare__divider" />
          <div className="poly-compare__col">
            <div className="poly-compare__tag">Full-Scope / Lifestyle</div>
            <h3 className="poly-compare__title">Full-Scope Polygraph</h3>
            <p className="poly-compare__desc">
              Covers everything in the CI poly plus drug use, criminal activity, financial issues, and personal conduct. More extensive — the examiner will probe deeper into your life history.
            </p>
            <div className="poly-compare__agencies">CIA<br/>NSA<br/>NRO<br/>ODNI</div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="poly-expect">
          {expectItems.map((item, i) => (
            <div key={i} className="poly-expect__item">
              <h4 className="poly-expect__title">{item.title}</h4>
              <p className="poly-expect__text">{item.text}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="tips-block">
          <h4 className="tips-block__title">Tips for Your Polygraph</h4>
          {tips.map((tip, i) => (
            <div key={i} className="tips-block__item">{tip}</div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
