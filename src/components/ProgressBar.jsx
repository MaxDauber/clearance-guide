import { useEffect, useRef, useCallback } from 'react';

export default function ProgressBar() {
  const barRef = useRef(null);
  const rafId = useRef(0);

  const onScroll = useCallback(() => {
    if (rafId.current) return; // already scheduled
    rafId.current = requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
      rafId.current = 0;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [onScroll]);

  return <div ref={barRef} className="progress-bar" style={{ width: 0 }} />;
}
