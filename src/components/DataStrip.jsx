import React from 'react';
import Reveal from './Reveal';

const data = [
  { value: '~3 mo', label: 'Confidential' },
  { value: '~6 mo', label: 'Secret' },
  { value: '~12 mo', label: 'Top Secret' },
  { value: '$0', label: 'Cost to you' },
  { value: 'DCSA', label: 'Issued by' },
];

export default function DataStrip() {
  return (
    <Reveal>
      <div className="data-strip">
        {data.map(d => (
          <div key={d.label} className="data-strip__item">
            <div className="data-strip__value">{d.value}</div>
            <div className="data-strip__label">{d.label}</div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
