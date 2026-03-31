import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    const t = requestAnimationFrame(() => {
      requestAnimationFrame(() => setShow(true));
    });
    return () => cancelAnimationFrame(t);
  }, [location.pathname]);

  return (
    <div className={`page-transition-enter ${show ? 'page-transition-enter-active' : ''}`}>
      {children}
    </div>
  );
}
