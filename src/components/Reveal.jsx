import React from 'react';
import useReveal from '../hooks/useReveal';

export default function Reveal({ children, className = '', style }) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
