import { GRADE_POINTS } from "../data/gradeScale"

function GradeScale() {
  return (
    <section id="grade-scale" className="w-full px-16 mt-10">
      <div className="border-2 border-teal-300 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-indigo-900">Grading Scale Reference</h3>
        <p className="text-sm text-gray-500 mt-1">
          Standard 4.0 weighted scale used for calculations.
        </p>

        <div className="mt-5 grid grid-cols-9 gap-3">
          {Object.entries(GRADE_POINTS).map(([letter, points]) => (
            <div
              key={letter}
              className="bg-gray-50 rounded-xl py-4 flex flex-col items-center justify-center"
            >
              <span className="font-bold text-indigo-900">{letter}</span>
              <span className="text-xs font-mono text-teal-700 mt-1">{points.toFixed(1)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GradeScale