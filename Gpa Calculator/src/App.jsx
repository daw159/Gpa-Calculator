import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import StatsCards from "./components/StatsCards"
import SemesterTabs from "./components/SemesterTabs"
import CourseForm from "./components/CourseForm"
import CourseTable from "./components/CourseTable"

const initialSemesters = [
  { id: "sem-1", name: "Semester 1", courses: [] },
  { id: "sem-2", name: "Semester 2", courses: [] },
  { id: "sem-3", name: "Semester 3", courses: [] },
  { id: "sem-4", name: "Semester 4", courses: [] },
]

const MAX_SEMESTERS = 10
const MAX_COURSES_PER_SEMESTER = 10

function App() {
  const [semesters, setSemesters] = useState(initialSemesters)
  const [activeSemesterId, setActiveSemesterId] = useState(initialSemesters[0].id)

  const activeSemester = semesters.find(
    (semester) => semester.id === activeSemesterId
  )

  function handleAddSemester() {
    if (semesters.length >= MAX_SEMESTERS) {
      alert("Maximum of 10 semesters allowed.")
      return
    }

    const newSemester = {
      id: `sem-${Date.now()}`,
      name: `Semester ${semesters.length + 1}`,
      courses: [],
    }

    setSemesters([...semesters, newSemester])
    setActiveSemesterId(newSemester.id)
  }

  function handleAddCourse(newCourse) {

    console.log(newCourse)
    if (activeSemester.courses.length >= MAX_COURSES_PER_SEMESTER) {
      alert("Maximum of 10 courses are allowed in one semester.")
      return
    }

    setSemesters(
      semesters.map((semester) =>
        semester.id === activeSemesterId
          ? {
            ...semester,
            courses: [...semester.courses, newCourse],
          }
          : semester
      )
    )
  }


  function handleDeleteCourse(courseId) {
    setSemesters(
      semesters.map((semester) =>
        semester.id === activeSemesterId
          ? {
            ...semester,
            courses: semester.courses.filter((course) => course.id !== courseId),
          }
          : semester
      )
    )
  }

  return (
    <div>
      <Header />
      <Hero />
      <StatsCards />

      <SemesterTabs
        semesters={semesters}
        activeSemesterId={activeSemesterId}
        onSelectSemester={setActiveSemesterId}
        onAddSemester={handleAddSemester}
        maxSemesters={MAX_SEMESTERS}
      />

      <section className="w-full px-16 mt-8 grid grid-cols-2 gap-6 items-start">
        <CourseForm onAddCourse={handleAddCourse} />
        <CourseTable courses={activeSemester.courses} onDeleteCourse={handleDeleteCourse} />
      </section>
    </div>
  )
}

export default App