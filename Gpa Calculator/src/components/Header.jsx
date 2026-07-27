import { GraduationCap, Sun } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="relative w-full h-16 px-16 flex items-center justify-between">

        {/* Logo - far left */}
        <div className="flex items-center gap-2">
          <GraduationCap className="text-blue-700" size={24} />
          <span className="text-xl font-bold text-blue-700">
            Academic Clarity
          </span>
        </div>

        {/* Navigation - true center, absolutely positioned */}
       
        <nav className="absolute left-1/2 -translate-x-1/2 flex gap-10 text-sm font-medium text-gray-700">
          <a
            href="#home"
            className="relative pb-1 hover:text-blue-900 transition-colors group"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#grade-scale"
            className="relative pb-1 hover:text-blue-900 transition-colors group"
          >
            Grade Scale
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="relative pb-1 hover:text-blue-900 transition-colors group"
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        {/* Theme - far right */}
        <button className="p-8 rounded-full hover:bg-gray-100">
          <Sun size={20} />
        </button>

      </div>
    </header>
  );
}

export default Header;