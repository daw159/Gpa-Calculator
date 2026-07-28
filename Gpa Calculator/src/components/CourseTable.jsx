import { Trash2 } from "lucide-react"
import { GRADE_POINTS } from "../data/gradeScale"
import { calculateGPA } from "../utils/calculateGPA"

function CourseTable({ courses, onDeleteCourse }) {
    const { totalPoints, totalCredits, gpa } = calculateGPA(courses)

    return (
        <div className="bg-gray-50 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-indigo-900">Current Courses</h3>
                <span className="text-xs font-mono bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
                    {courses.length} Active
                </span>
            </div>

            {courses.length === 0 ? (
                <p className="text-sm text-gray-500 py-10 text-center">
                    No courses added yet — use the form to add your first course.
                </p>
            ) : (
                <>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-left text-xs font-mono text-gray-500 border-b border-gray-200">
                                <th className="pb-2 font-medium">Course Name</th>
                                <th className="pb-2 font-medium">Credits</th>
                                <th className="pb-2 font-medium">Grade</th>
                                <th className="pb-2 font-medium">Points</th>
                                <th className="pb-2 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => {
                                const points = course.credits * GRADE_POINTS[course.grade]

                                return (
                                    <tr key={course.id} className="border-b border-gray-100">
                                        <td className="py-3 font-medium text-gray-900">{course.name}</td>
                                        <td className="py-3 font-mono text-gray-700">{course.credits.toFixed(1)}</td>
                                        <td className="py-3">
                                            <span className="text-xs font-mono bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                                                {course.grade}
                                            </span>
                                        </td>
                                        <td className="py-3 font-mono text-gray-700">{points.toFixed(1)}</td>
                                        <td className="py-3 text-right">
                                            <button
                                                aria-label="Delete course"
                                                onClick={() => onDeleteCourse(course.id)}
                                                className="text-gray-400 hover:text-red-600"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                        <div className="flex gap-6 text-xs font-mono text-gray-600">
                            <span>TOTAL POINTS <strong className="text-gray-900">{totalPoints.toFixed(1)}</strong></span>
                            <span>TOTAL Credits <strong className="text-gray-900">{totalCredits.toFixed(1)}</strong></span>
                        </div>
                        <span className="text-sm font-mono bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-bold">
                            Semester GPA: {gpa.toFixed(2)}
                        </span>
                    </div>
                </>
            )}
        </div>
    )
}

export default CourseTable