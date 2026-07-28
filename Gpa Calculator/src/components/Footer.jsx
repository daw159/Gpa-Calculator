import { GraduationCap, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const SOCIAL_LINKS = {
    github: "https://github.com/daw159",
    linkedin: "https://www.linkedin.com/in/muhammad-dawood123/",
    email: "mailto:miandawood2938@gmail.com",
}

function Footer() {
    return (
        <footer className="w-full px-16 py-8 mt-16 bg-indigo-950 text-white">
            <div className="flex items-center justify-between flex-wrap gap-4">

                {/* Left: Logo + tagline */}
                <div className="flex items-center gap-2">
                    <GraduationCap className="text-teal-400" size={22} />
                    <span className="font-bold text-lg">Academic Clarity</span>
                </div>

                {/* Middle: Name + email */}
                <div className="text-sm text-indigo-200">
                    <span className="font-semibold text-white">Muhammad Dawood</span>
                    <span className="mx-2 text-indigo-600">•</span>
                    <span className="font-mono text-teal-300">miandawood2938@gmail.com</span>
                </div>

                {/* Right: Social icons */}
                <div className="flex items-center gap-3">
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-full bg-indigo-900 text-indigo-200 hover:bg-teal-500 hover:text-white transition-colors">
                        <FaGithub size={16} />
                    </a>

                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full bg-indigo-900 text-indigo-200 hover:bg-teal-500 hover:text-white transition-colors">
                        <FaLinkedin size={16} />
                    </a>

                    <a href={SOCIAL_LINKS.email} aria-label="Email" className="p-2 rounded-full bg-indigo-900 text-indigo-200 hover:bg-teal-500 hover:text-white transition-colors">
                        <Mail size={16} />
                    </a>
                </div>

            </div>

            <div className="border-t border-indigo-800 mt-6 pt-4 text-center">
                <p className="text-xs font-mono text-indigo-300">
                    © 2026 Academic Clarity. Made with React.
                </p>
            </div>
        </footer>
    )
}

export default Footer