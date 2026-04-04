import React from 'react';
import Reveal from './Reveal';
import faqData from '../data/faqData';

const groups = [
  {
    theme: 'Eligibility & Process',
    indices: [0, 3, 4, 5, 6],
  },
  {
    theme: 'Lifestyle & History',
    indices: [1, 2, 7, 10, 13],
  },
  {
    theme: 'Concerns & Edge Cases',
    indices: [8, 9, 11, 12, 14],
  },
];

function stripHtml(html) {
  return html
    .replace(/<\/p><p>/g, '\n\n')
    .replace(/<\/?(p|ul|li|strong|em|br\s*\/?)>/g, (match) => {
      if (match === '<strong>') return '';
      if (match === '</strong>') return '';
      if (match === '<em>') return '_';
      if (match === '</em>') return '_';
      if (match === '<li>') return '• ';
      if (match === '</li>') return '\n';
      if (match.startsWith('<br')) return '\n';
      return '';
    })
    .replace(/<[^>]*>/g, '')
    .trim();
}

export default function FAQSection() {
  return (
    <section id="faq">
      <Reveal>
        <div className="section-header">
          <div className="section-header__label">05 — FAQ</div>
          <h2 className="section-header__title">Frequently Asked Questions</h2>
          <p className="section-header__desc">
            Quick answers to the things everyone asks. All visible, no clicking required.
          </p>
        </div>
      </Reveal>

      <div className="faq-section">
        {groups.map((group) => (
          <div key={group.theme} className="faq-group">
            <Reveal>
              <div className="faq-group__title">{group.theme}</div>
            </Reveal>
            {group.indices.map((idx) => {
              const faq = faqData[idx];
              if (!faq) return null;
              return (
                <Reveal key={idx}>
                  <div className="faq-item">
                    <div className="faq-item__q">{faq.question}</div>
                    <div className="faq-item__a" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
