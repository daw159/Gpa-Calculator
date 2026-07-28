import { calculateGPA } from "./calculateGPA";


export function calculateCGPA(semesters) {
  const allCourses = semesters.flatMap((semester) => semester.courses);
  return calculateGPA(allCourses);
}

export default calculateCGPA;