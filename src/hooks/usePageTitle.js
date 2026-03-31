import { useEffect } from 'react';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — CLEARED.` : 'CLEARED. — The Comprehensive Survival Guide';
  }, [title]);
}
