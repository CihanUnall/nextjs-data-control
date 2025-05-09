// /app/hooks/useLocalStorage.js

import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(key);
      setValue(stored ? JSON.parse(stored) : initialValue);
      setIsClient(true);
    }
  }, [key]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, isClient]);

  return [value, setValue];
}
