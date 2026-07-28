import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import StatsCards from "./components/StatsCards"
import SemesterTabs from "./components/SemesterTabs"
import CourseForm from "./components/CourseForm"
import CourseTable from "./components/CourseTable"
import GradeScale from "./components/GradeScale"
import About from "./components/About"
import Footer from "./components/Footer"
import { calculateGPA } from "./utils/calculateGPA"

const initialSemesters = [
  { id: "sem-1", name: "Semester 1", courses: [] },
  { id: "sem-2", name: "Semester 2", courses: [] },
  { id: "sem-3", name: "Semester 3", courses: [] },
  { id: "sem-4", name: "Semester 4", courses: [] },
]

const MAX_SEMESTERS = 10

function App() {
  const [semesters, setSemesters] = useState(initialSemesters)
  const [activeSemesterId, setActiveSemesterId] = useState(initialSemesters[0].id)

  const activeSemester = semesters.find((s) => s.id === activeSemesterId)

  const allCourses = semesters.flatMap((semester) => semester.courses)
  const { totalCredits, gpa: cgpa } = calculateGPA(allCourses)
  const totalCourses = allCourses.length

  function handleAddSemester() {
    if (semesters.length >= MAX_SEMESTERS) return

    const newSemester = {
      id: `sem-${Date.now()}`,
      name: `Semester ${semesters.length + 1}`,
      courses: [],
    }
    setSemesters([...semesters, newSemester])
    setActiveSemesterId(newSemester.id)
  }

  function handleAddCourse(newCourse) {
    setSemesters(
      semesters.map((semester) =>
        semester.id === activeSemesterId
          ? { ...semester, courses: [...semester.courses, newCourse] }
          : semester
      )
    )
  }

  function handleDeleteCourse(courseId) {
    setSemesters(
      semesters.map((semester) =>
        semester.id === activeSemesterId
          ? { ...semester, courses: semester.courses.filter((c) => c.id !== courseId) }
          : semester
      )
    )
  }

  function handleResetSemester() {
    const confirmed = window.confirm(
      `Remove all courses from ${activeSemester.name}? This can't be undone.`
    )
    if (!confirmed) return

    setSemesters(
      semesters.map((semester) =>
        semester.id === activeSemesterId
          ? { ...semester, courses: [] }
          : semester
      )
    )
  }

  function handleExportPDF() {
    // Real PDF generation (jsPDF) comes later — placeholder for now
    console.log("Export PDF clicked — logic not implemented yet")
  }

  return (
    <div>
      <Header />
      <Hero gpa={cgpa} />
      <StatsCards
        cgpa={cgpa}
        currentSemesterName={activeSemester.name}
        totalCredits={totalCredits}
        totalCourses={totalCourses}
      />
      <SemesterTabs
        semesters={semesters}
        activeSemesterId={activeSemesterId}
        onSelectSemester={setActiveSemesterId}
        onAddSemester={handleAddSemester}
        maxSemesters={MAX_SEMESTERS}
        onExportPDF={handleExportPDF}
      />
      <section className="w-full px-16 mt-8 grid grid-cols-2 gap-6 items-start">
        <CourseForm onAddCourse={handleAddCourse} onResetSemester={handleResetSemester} />
        <CourseTable courses={activeSemester.courses} onDeleteCourse={handleDeleteCourse} />
      </section>
      <GradeScale />
      <About />
      <Footer />
    </div>
  )
}

export default App