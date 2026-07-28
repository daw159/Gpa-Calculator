import { useState } from "react";
import { GraduationCap, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#grade-scale", label: "Grade Scale" },
  { href: "#about", label: "About" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();


  return (
    <header className="sticky top-0 z-50 border-b border-outline/60 bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-300 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 md:px-6 lg:px-12">
        {/* Logo */}
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <GraduationCap className="shrink-0 text-primary" size={24} />
          <span className="truncate text-lg font-bold text-primary sm:text-xl">
            GradeMate
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          {/* Desktop navigation */}
          <nav className="mr-2 hidden items-center gap-8 text-sm font-medium text-on-surface-variant lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative pb-1 transition-colors hover:text-primary"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>


          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {menuOpen && (
        <nav className="border-t border-outline/60 bg-surface px-4 py-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-on-surface-variant hover:bg-surface-container hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;