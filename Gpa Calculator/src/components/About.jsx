import { CheckCircle2, Calculator, LayoutDashboard } from "lucide-react";
import aboutImg from "../assets/images/aboutimg.jpg";

const FEATURES = [
  {
    icon: Calculator,
    title: "Automatic Calculations",
    text: "Semester GPA and overall CGPA update instantly as you add or remove courses.",
  },
  {
    icon: LayoutDashboard,
    title: "Multi-Semester Tracking",
    text: "Organize courses across up to 10 semesters, switch between them anytime.",
  },
  {
    icon: CheckCircle2,
    title: "Standard 4.0 Grading Scale",
    text: "Built on a transparent, editable grade-to-points reference.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="mx-auto mt-12 grid w-full max-w-300 grid-cols-1 items-center gap-8 px-4 md:px-6 lg:mt-16 lg:grid-cols-2 lg:gap-12 lg:px-12"
    >
      <img
        src={aboutImg.url}
        alt="Student working on academic goals"
        loading="lazy"
        className="h-56 w-full rounded-2xl object-cover sm:h-72 lg:h-80"
      />

      <div>
        <span className="rounded-full bg-accent-container px-3 py-1 font-mono text-xs font-medium text-accent">
          ABOUT ACADEMIC CLARITY
        </span>

        <h2 className="mt-4 text-2xl font-extrabold text-on-surface sm:text-3xl">
          Built to make GPA tracking{" "}
          <span className="text-primary">effortless</span>
        </h2>

        <p className="mt-4 text-base text-on-surface-variant">
          GradeMate handles the arithmetic behind semester GPAs and
          overall CGPA, so you can organize your courses by semester, enter
          grades, and instantly see accurate results — no spreadsheets, no
          manual calculation, no guesswork.
        </p>

        <div className="mt-6 flex flex-col gap-4">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex items-start gap-3">
              <feature.icon
                size={20}
                className="mt-0.5 shrink-0 text-accent"
              />
              <div className="min-w-0">
                <p className="text-sm font-bold text-on-surface">
                  {feature.title}
                </p>
                <p className="text-sm text-on-surface-variant">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;