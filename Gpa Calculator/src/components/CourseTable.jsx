import { Trash2 } from "lucide-react";
import { GRADE_POINTS } from "../data/gradeScale";
import { calculateGPA } from "../utils/calculateGPA";

function CourseTable({ courses, onDeleteCourse }) {
  const { totalPoints, totalCredits, gpa } = calculateGPA(courses);

  return (
    <div className="glass rounded-2xl p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="min-w-0 truncate text-lg font-bold text-primary">
          Current Courses
        </h3>
        <span className="shrink-0 rounded-full bg-accent-container px-3 py-1 font-mono text-xs text-accent">
          {courses.length} Active
        </span>
      </div>

      {courses.length === 0 ? (
        <p className="py-10 text-center text-sm text-on-surface-variant">
          No courses added yet — use the form to add your first course.
        </p>
      ) : (
        <>
          {/* Mobile: stacked cards */}
          <ul className="flex flex-col gap-3 md:hidden">
            {courses.map((course) => {
              const points = course.credits * GRADE_POINTS[course.grade];

              return (
                <li
                  key={course.id}
                  className="rounded-xl border border-outline/50 bg-surface-container/60 p-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="min-w-0 flex-1 font-medium text-on-surface">
                      {course.name}
                    </p>
                    <button
                      aria-label="Delete course"
                      onClick={() => onDeleteCourse(course.id)}
                      className="shrink-0 text-on-surface-variant transition-colors hover:text-danger"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-on-surface-variant">
                    <span>Credits: {course.credits.toFixed(1)}</span>
                    <span className="rounded-full bg-lavender px-2 py-0.5 text-primary">
                      {course.grade}
                    </span>
                    <span>Points: {points.toFixed(1)}</span>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Tablet & desktop: table */}
          <table className="hidden w-full text-sm md:table">
            <thead>
              <tr className="border-b border-outline/60 text-left font-mono text-xs text-on-surface-variant">
                <th className="pb-2 font-medium">Course Name</th>
                <th className="pb-2 font-medium">Credits</th>
                <th className="pb-2 font-medium">Grade</th>
                <th className="pb-2 font-medium">Points</th>
                <th className="pb-2 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => {
                const points = course.credits * GRADE_POINTS[course.grade];

                return (
                  <tr key={course.id} className="border-b border-outline/40">
                    <td className="py-3 font-medium text-on-surface">
                      {course.name}
                    </td>
                    <td className="py-3 font-mono text-on-surface-variant">
                      {course.credits.toFixed(1)}
                    </td>
                    <td className="py-3">
                      <span className="rounded-full bg-lavender px-2 py-1 font-mono text-xs text-primary">
                        {course.grade}
                      </span>
                    </td>
                    <td className="py-3 font-mono text-on-surface-variant">
                      {points.toFixed(1)}
                    </td>
                    <td className="py-3 text-right">
                      <button
                        aria-label="Delete course"
                        onClick={() => onDeleteCourse(course.id)}
                        className="text-on-surface-variant transition-colors hover:text-danger"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="mt-4 flex flex-col gap-3 border-t border-outline/60 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-on-surface-variant">
              <span>
                TOTAL POINTS{" "}
                <strong className="text-on-surface">
                  {totalPoints.toFixed(1)}
                </strong>
              </span>
              <span>
                TOTAL CREDITS{" "}
                <strong className="text-on-surface">
                  {totalCredits.toFixed(1)}
                </strong>
              </span>
            </div>
            <span className="self-start rounded-full bg-accent-container px-3 py-1 font-mono text-sm font-bold text-accent sm:self-auto">
              Semester GPA: {gpa.toFixed(2)}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default CourseTable;