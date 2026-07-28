import { CheckCircle2, Calculator, LayoutDashboard } from "lucide-react"
import aboutImg from "../assets/aboutimg.jpg"

function About() {
  return (
    <section id="about" className="w-full px-16 mt-16 grid grid-cols-2 gap-12 items-center">
      <img
        src={aboutImg}
        alt="Student working on academic goals"
        className="w-full h-80 object-cover rounded-2xl"
      />

      <div>
        <span className="text-xs font-mono font-medium text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
          ABOUT ACADEMIC CLARITY
        </span>

        <h3 className="text-3xl font-extrabold text-gray-900 mt-4">
          Built to make GPA tracking <span className="text-blue-700">effortless</span>
        </h3>

        <p className="mt-4 text-gray-600 text-base">
          Academic Clarity handles the arithmetic behind semester GPAs and
          overall CGPA, so you can organize your courses by semester, enter
          grades, and instantly see accurate results — no spreadsheets,
          no manual calculation, no guesswork.
        </p>

        <div className="mt-6 flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <Calculator size={20} className="text-teal-600 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900 text-sm">Automatic Calculations</p>
              <p className="text-sm text-gray-500">Semester GPA and overall CGPA update instantly as you add or remove courses.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <LayoutDashboard size={20} className="text-teal-600 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900 text-sm">Multi-Semester Tracking</p>
              <p className="text-sm text-gray-500">Organize courses across up to 10 semesters, switch between them anytime.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-teal-600 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900 text-sm">Standard 4.0 Grading Scale</p>
              <p className="text-sm text-gray-500">Built on a transparent, editable grade-to-points reference.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About