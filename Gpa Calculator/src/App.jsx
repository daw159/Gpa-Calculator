import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsCards from "./components/StatsCards";
import SemesterTabs from "./components/SemesterTabs";
import CourseForm from "./components/CourseForm";
import CourseTable from "./components/CourseTable";
import GradeScale from "./components/GradeScale";
import About from "./components/About";
import Footer from "./components/Footer";
import { calculateCGPA } from "./utils/calculateCGPA";
import { exportTranscript } from "./utils/exportPDF";
import { loadFromStorage, saveToStorage } from "./utils/localStorage";

const initialSemesters = [
  { id: "sem-1", name: "Semester 1", courses: [] },
  
];

const MAX_SEMESTERS = 10;
const STORAGE_KEY = "gpa-calculator-semesters";
const ACTIVE_KEY = "gpa-calculator-active-semester";

function App() {
  const [semesters, setSemesters] = useState(initialSemesters);
  const [activeSemesterId, setActiveSemesterId] = useState(
    initialSemesters[0].id,
  );
  const [loaded, setLoaded] = useState(false);

  // Read the saved data once, right after the page opens.
  useEffect(() => {
    setSemesters(loadFromStorage(STORAGE_KEY, initialSemesters));
    setActiveSemesterId(loadFromStorage(ACTIVE_KEY, initialSemesters[0].id));
    setLoaded(true);
  }, []);

  // Save again whenever the data changes.
  useEffect(() => {
    if (!loaded) return;
    saveToStorage(STORAGE_KEY, semesters);
    saveToStorage(ACTIVE_KEY, activeSemesterId);
  }, [loaded, semesters, activeSemesterId]);



  const activeSemester =
    semesters.find((s) => s.id === activeSemesterId) || semesters[0];

  const allCourses = semesters.flatMap((semester) => semester.courses);
  const { totalCredits, gpa: cgpa } = calculateCGPA(semesters);
  const totalCourses = allCourses.length;

  function handleAddSemester() {
    if (semesters.length >= MAX_SEMESTERS) return;

    const newSemester = {
      id: `sem-${Date.now()}`,
      name: `Semester ${semesters.length + 1}`,
      courses: [],
    };
    setSemesters([...semesters, newSemester]);
    setActiveSemesterId(newSemester.id);
  }

  function handleAddCourse(newCourse) {
    setSemesters(
      semesters.map((semester) =>
        semester.id === activeSemesterId
          ? { ...semester, courses: [...semester.courses, newCourse] }
          : semester,
      ),
    );
  }

  function handleDeleteCourse(courseId) {
    setSemesters(
      semesters.map((semester) =>
        semester.id === activeSemesterId
          ? {
              ...semester,
              courses: semester.courses.filter((c) => c.id !== courseId),
            }
          : semester,
      ),
    );
  }

  function handleResetSemester() {
    const confirmed = window.confirm(
      `Remove all courses from ${activeSemester.name}? This can't be undone.`,
    );
    if (!confirmed) return;

    setSemesters(
      semesters.map((semester) =>
        semester.id === activeSemesterId
          ? { ...semester, courses: [] }
          : semester,
      ),
    );
  }

  function handleResetAll() {
    const confirmed = window.confirm(
      "Delete all semesters and courses? This can't be undone.",
    );
    if (!confirmed) return;

    setSemesters(initialSemesters);
    setActiveSemesterId(initialSemesters[0].id);
  }

  function handleExportPDF() {
    exportTranscript(semesters);
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Blurred colour blobs on the canvas (Level 0 of the design system) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -left-40 top-10 h-96 w-96 rounded-full blur-[120px]"
        style={{ backgroundColor: "var(--blob-indigo)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -right-40 top-1/3 h-96 w-96 rounded-full blur-[120px]"
        style={{ backgroundColor: "var(--blob-teal)" }}
      />

      <div className="relative">
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
        <section className="mx-auto mt-8 grid w-full max-w-300 grid-cols-1 items-start gap-6 px-4 md:px-6 lg:grid-cols-2 lg:px-12">
          <CourseForm
            onAddCourse={handleAddCourse}
            onResetSemester={handleResetSemester}
            onResetAll={handleResetAll}
          />
          <CourseTable
            courses={activeSemester.courses}
            onDeleteCourse={handleDeleteCourse}
          />
        </section>
        <GradeScale />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;