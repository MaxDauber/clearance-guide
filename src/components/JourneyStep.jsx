import React from 'react';
import Reveal from './Reveal';

export default function JourneyStep({ number, step, align = 'left' }) {
  const cls = align === 'right' ? 'journey-step journey-step--right' : 'journey-step';

  return (
    <div className={cls}>
      <div className="journey-step__visual">
        <span className="journey-step__number">{String(number).padStart(2, '0')}</span>
      </div>
      <div className="journey-step__content">
        <Reveal>
          <div className="journey-step__tag">Step {String(number).padStart(2, '0')}</div>
          <h3 className="journey-step__title">{step.title}</h3>
          <div className="journey-step__text">
            <p>{step.content}</p>
            {step.bullets && (
              <ul>
                {step.bullets.map((b, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
                ))}
              </ul>
            )}
            {step.afterBullets && <p style={{ marginTop: '0.75rem' }}>{step.afterBullets}</p>}
          </div>
          {step.callout && (
            <div className="journey-step__callout" dangerouslySetInnerHTML={{ __html: step.callout.text }} />
          )}
        </Reveal>
      </div>
    </div>
  );
}
