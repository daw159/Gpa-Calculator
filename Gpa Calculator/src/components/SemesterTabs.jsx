import { Plus } from "lucide-react"

function SemesterTabs({ semesters, activeSemesterId, onSelectSemester, onAddSemester, maxSemesters }) {
  const limitReached = semesters.length >= maxSemesters

  return (
    <section className="w-full px-16 mt-10 flex items-center gap-3">
      {semesters.map((semester) => {
        const isActive = semester.id === activeSemesterId

        return (
          <button
            key={semester.id}
            onClick={() => onSelectSemester(semester.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              isActive
                ? "bg-indigo-900 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {semester.name}
          </button>
        )
      })}

      <button
        onClick={onAddSemester}
        disabled={limitReached}
        className={`w-9 h-9 rounded-full border border-dashed flex items-center justify-center transition-colors ${
          limitReached
            ? "border-gray-200 text-gray-300 cursor-not-allowed"
            : "border-gray-300 text-gray-500 hover:border-gray-400 hover:text-gray-700"
        }`}
        aria-label={limitReached ? "Semester limit reached" : "Add semester"}
      >
        <Plus size={16} />
      </button>
    </section>
  )
}

export default SemesterTabs