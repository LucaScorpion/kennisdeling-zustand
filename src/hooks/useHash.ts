import { useCallback, useEffect, useState } from 'react';

export function useHash(): [string, (newHash: string | number) => void] {
  const [hash, setHash] = useState(() => window.location.hash.substring(1));

  const onHashChange = useCallback(() => {
    const rawHash = window.location.hash;
    if (rawHash) {
      setHash(rawHash.substring(1));
    } else {
      setHash('');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [onHashChange]);

  const updateHash = useCallback((newHash: string | number) => {
    window.location.hash = newHash.toString();
  }, []);

  return [hash, updateHash];
}
