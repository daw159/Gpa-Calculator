import { GraduationCap, Mail, Github, Linkedin } from "lucide-react";

const SOCIAL_LINKS = {
  github: "https://github.com/daw159",
  linkedin: "https://www.linkedin.com/in/muhammad-dawood123/",
  email: "mailto:miandawood2938@gmail.com",
};

const iconClass =
  "rounded-full bg-primary-container p-2 text-on-primary-container transition-colors hover:bg-accent hover:text-on-accent";

function Footer() {
  return (
    <footer className="mt-12 w-full bg-primary-container/60 py-8 lg:mt-16">
      <div className="mx-auto flex w-full max-w-300 flex-col items-center gap-5 px-4 text-center md:px-6 lg:flex-row lg:justify-between lg:px-12 lg:text-left">
        <div className="flex items-center gap-2">
          <GraduationCap className="text-accent" size={22} />
          <span className="text-lg font-bold text-on-surface">
            GradeMate
          </span>
        </div>

        <div className="text-sm text-on-surface-variant">
          <span className="font-semibold text-on-surface">
            Muhammad Dawood
          </span>
          <span className="mx-2 opacity-50">•</span>
          <span className="font-mono text-accent">
            miandawood2938@gmail.com
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={iconClass}
          >
            <Github size={16} />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={iconClass}
          >
            <Linkedin size={16} />
          </a>
          <a href={SOCIAL_LINKS.email} aria-label="Email" className={iconClass}>
            <Mail size={16} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 w-full max-w-300 border-t border-outline/50 px-4 pt-4 text-center md:px-6 lg:px-12">
        <p className="font-mono text-xs text-on-surface-variant">
          © 2026 GradeMate. Made with React.
        </p>
      </div>
    </footer>
  );
}

export default Footer;