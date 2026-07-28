import { useState } from "react"
import { FilePlus2 } from "lucide-react"
import Button from "./Button"
import { GRADE_POINTS } from "../data/gradeScale"

function CourseForm({ onAddCourse }) {
    const [name, setName] = useState("")
    const [credits, setCredits] = useState("")
    const [grade, setGrade] = useState("")   // blank placeholder — user must actively choose

    function handleSubmit(e) {
        e.preventDefault()

        console.log("Form submitted")

        if (!name.trim()) {
            console.log("Course name is empty")
            return
        }

        if (!credits || Number(credits) <= 0) {
            console.log("Credits are invalid")
            return
        }

        if (!grade) {
            console.log("Grade not selected")
            return
        }

        console.log("Calling onAddCourse")


        console.log("Calling onAddCourse");
        console.log(onAddCourse);

        onAddCourse({


            id: `course-${Date.now()}`,
            name: name.trim(),
            credits: Number(credits),
            grade,   // store the letter only — points get derived wherever needed
        })

        setName("")
        setCredits("")
        setGrade("")
    }

    return (
        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-indigo-900 font-bold text-xl">
                <FilePlus2 size={20} />
                Add New Course
            </div>

            <div>
                <label className="text-xs font-medium text-gray-600">Course Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Advanced Calculus"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500"
                />
            </div>

            <div className="flex gap-4">
                <div className="flex-1">
                    <label className="text-xs font-medium text-gray-600">Credits</label>
                    <input
                        type="number"
                        value={credits}
                        onChange={(e) => setCredits(e.target.value)}
                        placeholder="3"
                        className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:border-teal-500"
                    />
                </div>
                <div className="flex-1">
                    <label className="text-xs font-medium text-gray-600">Grade</label>
                    <select
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:border-teal-500 bg-white"
                    >
                        <option value="" disabled>Select</option>
                        {Object.keys(GRADE_POINTS).map((letter) => (
                            <option key={letter} value={letter}>{letter}</option>
                        ))}
                    </select>
                </div>
            </div>

            <Button type="submit" variant="primary" icon={FilePlus2}>Add Course</Button>
        </form>
    )
}

export default CourseForm