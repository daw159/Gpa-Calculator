import { useState } from "react";
import Button from "./Button";
import { GRADE_POINTS } from "../data/gradeScale";
import { FilePlus2, RotateCcw, Trash } from "lucide-react";

function CourseForm({ onAddCourse, onResetSemester, onResetAll }) {
  const [name, setName] = useState("");
  const [credits, setCredits] = useState("");
  const [grade, setGrade] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter a course name.");
      return;
    }
    if (!credits || Number(credits) <= 0) {
      setError("Credits must be a number greater than 0.");
      return;
    }
    if (!grade) {
      setError("Please select a grade.");
      return;
    }

    onAddCourse({
      id: `course-${Date.now()}`,
      name: name.trim(),
      credits: Number(credits),
      grade,
    });

    setName("");
    setCredits("");
    setGrade("");
    setError("");
  }

  const inputClass =
    "mt-1 w-full rounded-lg border border-primary/20 bg-transparent px-3 py-2 text-sm text-on-surface outline-none transition-shadow placeholder:text-on-surface-variant/60 focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-container)]";

  return (
    <form
      onSubmit={handleSubmit}
      className="glass flex flex-col gap-4 rounded-2xl p-5 sm:p-6"
    >
      <div className="flex items-center gap-2 text-lg font-bold text-primary sm:text-xl">
        <FilePlus2 size={20} />
        Add New Course
      </div>

      <div>
        <label className="font-mono text-xs uppercase text-on-surface-variant">
          Course Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Advanced Calculus"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <label className="font-mono text-xs uppercase text-on-surface-variant">
            Credits
          </label>
          <input
            type="number"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
            placeholder="3"
            className={`${inputClass} font-mono`}
          />
        </div>
        <div className="flex-1">
          <label className="font-mono text-xs uppercase text-on-surface-variant">
            Grade
          </label>
          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className={`${inputClass} bg-surface font-mono`}
          >
            <option value="" disabled>
              Select
            </option>
            {Object.keys(GRADE_POINTS).map((letter) => (
              <option key={letter} value={letter}>
                {letter}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && <p className="text-sm text-danger">{error}</p>}

      <Button type="submit" variant="primary" icon={FilePlus2}>
        Add Course
      </Button>

      <div className="flex flex-col gap-2 sm:flex-row sm:justify-center sm:gap-6">
        <button
          type="button"
          onClick={onResetSemester}
          className="flex items-center justify-center gap-2 text-sm text-on-surface-variant transition-colors hover:text-danger"
        >
          <RotateCcw size={14} />
          Reset Semester
        </button>
        <button
          type="button"
          onClick={onResetAll}
          className="flex items-center justify-center gap-2 text-sm text-on-surface-variant transition-colors hover:text-danger"
        >
          <Trash size={14} />
          Reset All Data
        </button>
      </div>
    </form>
  );
}

export default CourseForm;