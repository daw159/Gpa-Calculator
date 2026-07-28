import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// Gives any component the current theme and a way to switch it.
// Returns { isDark, toggleTheme }.
export function useTheme() {
  return useContext(ThemeContext);
}

export default useTheme;