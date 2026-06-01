import { useEffect, useRef, useState } from 'react';

// Shared IntersectionObserver: one observer for all Reveal components
const callbacks = new Map();
let sharedObserver = null;

function getObserver() {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cb = callbacks.get(entry.target);
          if (cb) {
            cb();
            callbacks.delete(entry.target);
            sharedObserver.unobserve(entry.target);
          }
        }
      });
    },
    { threshold: 0.08, rootMargin: '50px' }
  );
  return sharedObserver;
}

export default function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = getObserver();
    callbacks.set(el, () => setVisible(true));
    obs.observe(el);

    return () => {
      callbacks.delete(el);
      obs.unobserve(el);
    };
  }, []);

  return [ref, visible];
}
