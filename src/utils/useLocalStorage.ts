import * as React from 'react';

export default function useLocalStorage<T>(key: string, initialValue?: T) {
  if (typeof window !== 'undefined' && window.localStorage) {
    const [storedValue, setStoredValue] = React.useState<T>(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    });

    const setValue = (value: T) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    };
    return [storedValue, setValue];
  }
  return [initialValue, () => {}];
}
