import { GRADE_POINTS } from "../data/gradeScale";

function GradeScale() {
  return (
    <section
      id="grade-scale"
      className="mx-auto mt-10 w-full max-w-300 px-4 md:px-6 lg:px-12"
    >
      <div className="glass rounded-2xl border-2 border-accent/40 p-5 sm:p-6">
        <h3 className="text-lg font-bold text-primary">
          Grading Scale Reference
        </h3>
        <p className="mt-1 text-sm text-on-surface-variant">
          Standard 4.0 weighted scale used for calculations.
        </p>

        <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
          {Object.entries(GRADE_POINTS).map(([letter, points]) => (
            <div
              key={letter}
              className="flex flex-col items-center justify-center rounded-xl bg-surface-container/70 py-4"
            >
              <span className="font-bold text-primary">{letter}</span>
              <span className="mt-1 font-mono text-xs text-accent">
                {points.toFixed(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GradeScale;