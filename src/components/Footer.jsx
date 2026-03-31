import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <hr className="footer__rule" />
      <div className="footer__inner">
        <div>
          <div className="footer__brand">CLEARED.</div>
        </div>
        <div className="footer__links">
          <Link to="/government-business">Gov Business</Link>
          <Link to="/fcl">Facility Clearance</Link>
          <Link to="/clearance">Personal Clearance</Link>
        </div>
        <div className="footer__meta">
          <p className="footer__disclaimer">
            For official guidance, visit{' '}
            <a href="https://www.dcsa.mil" target="_blank" rel="noopener noreferrer">dcsa.mil</a>
          </p>
          <p className="footer__credit">Built by MULTIVAC</p>
        </div>
      </div>
    </footer>
  );
}
