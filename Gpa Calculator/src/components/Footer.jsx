import { GraduationCap, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const SOCIAL_LINKS = {
  github: "https://github.com/daw159",
  linkedin: "https://www.linkedin.com/in/muhammad-dawood123/",
  email: "mailto:miandawood2938@gmail.com",
};

const iconClass =
  "rounded-full bg-primary-container p-2 text-on-primary-container transition-colors hover:bg-accent hover:text-on-accent";

function Footer() {
  return (
    <footer className="mt-12 w-full bg-primary text-on-primary py-8 lg:mt-16 dark:bg-primary-container/60 dark:text-on-surface">
      <div className="mx-auto flex w-full max-w-300 flex-col items-center gap-5 px-4 text-center md:px-6 lg:flex-row lg:justify-between lg:px-12 lg:text-left">
        <div className="flex items-center gap-2">
          <GraduationCap className="text-accent" size={22} />
          <span className="text-lg font-bold dark:text-on-surface">GradeMate</span>
        </div>

        <div className="text-sm text-on-primary/80 dark:text-on-surface-variant">
          <span className="font-semibold text-on-primary dark:text-on-surface">Muhammad Dawood</span>
          <span className="mx-2 opacity-50">•</span>
          <span className="font-mono text-accent">miandawood2938@gmail.com</span>
        </div>

        <div className="flex items-center gap-3">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconClass}><FaGithub size={18} /></a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconClass}><FaLinkedin size={16} /></a>
          <a href={SOCIAL_LINKS.email} aria-label="Email" className={iconClass}><Mail size={16} /></a>
        </div>
      </div>

      <div className="mx-auto mt-6 w-full max-w-300 border-t border-on-primary/20 px-4 pt-4 text-center md:px-6 lg:px-12 dark:border-outline/50">
        <p className="font-mono text-xs text-on-primary/70 dark:text-on-surface-variant">© 2026 GradeMate. Made with React.</p>
      </div>
    </footer>
  );
}

export default Footer;