import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Start as light. The real value is read from localStorage after the
  // component mounts (see useEffect below) so the server and the browser
  // always render the same thing on the first paint.
  const [isDark, setIsDark] = useState(false);

  // Runs once on mount: read the saved choice, or fall back to the
  // system preference.
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setIsDark(saved === "dark");
    } else {
      setIsDark(true);   // default new visitors to dark mode instead of system preference
    }
  }, []);

  // Whenever isDark changes: toggle the .dark class on <html> and save it.
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}