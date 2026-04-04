import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <hr className="footer__rule" />
      <div className="footer__inner">
        <div>
          <div className="footer__brand">CLEARED.</div>
        </div>
        <div className="footer__meta">
          <p className="footer__disclaimer">
            This guide is for informational purposes only and does not constitute legal, security, or compliance advice.
            For official guidance on security clearances and facility clearances, consult{' '}
            <a href="https://www.dcsa.mil" target="_blank" rel="noopener noreferrer">DCSA</a>,{' '}
            <a href="https://www.nist.gov" target="_blank" rel="noopener noreferrer">NIST</a>, and{' '}
            <a href="https://www.fedramp.gov" target="_blank" rel="noopener noreferrer">FedRAMP</a>.
            Regulations and processes change — always verify current requirements with the relevant authorizing bodies.
          </p>
          <p className="footer__credit">Built by <a href="https://www.linkedin.com/in/maxdauber/" target="_blank" rel="noopener noreferrer" style={{color: '#888', textDecoration: 'underline'}}>Max Dauber</a></p>
        </div>
      </div>
    </footer>
  );
}
