import React from 'react';

export default function Hero({ title = 'CLEARED.', subtitle, children }) {
  return (
    <section className="hero">
      <h1 className="hero__word">{title}</h1>
      {subtitle && <p className="hero__sub">{subtitle}</p>}
      {children}
      <div className="hero__scroll" />
    </section>
  );
}
