import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="not-found__code">404</div>
      <p className="not-found__text">Page not found</p>
      <Link to="/" className="not-found__link">← Back to home</Link>
    </div>
  );
}
