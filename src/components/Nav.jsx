import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Gov Business', to: '/government-business' },
  { label: 'FCL', to: '/fcl' },
  { label: 'Clearance', to: '/clearance' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <Link to="/" className="nav__logo">CLEARED.</Link>
      <div className="nav__links">
        {links.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={location.pathname === l.to ? 'active' : ''}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <button
        className={`nav__hamburger ${menuOpen ? 'nav__hamburger--open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
      <div className={`nav__overlay ${menuOpen ? 'nav__overlay--open' : ''}`}>
        <Link to="/">Home</Link>
        {links.map(l => (
          <Link key={l.to} to={l.to}>{l.label}</Link>
        ))}
      </div>
    </nav>
  );
}
