import { useState } from "react";
export const useLocalStorage = (keyName, defaultValue) => {
  const [user, setUser] = useState(() => {
    try {
      const token = window.localStorage.getItem(keyName) != null ? JSON.parse(window.localStorage.getItem(keyName)) : null;
      return JSON.parse(token)
    } catch (err) {
      return null;
    }
  });
 
  return user
};