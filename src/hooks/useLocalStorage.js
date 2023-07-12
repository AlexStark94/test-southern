import { useEffect, useState } from 'react';

export function getItemFromLocalStorage(key, defaultValue) {
  if (typeof window === 'undefined') {
    return defaultValue;
  }
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    return defaultValue;
  }
}

export function useLocalStorage(key, initialValue, mode = 'csr') {
  const [storedValue, setStoredValue] = useState(() =>
    mode === 'csr' ? getItemFromLocalStorage(key, initialValue) : initialValue
  );

  useEffect(() => {
    setStoredValue((value) => getItemFromLocalStorage(key, value));
  }, [key]);

  const setValue = (value) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
