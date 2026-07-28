import { GRADE_POINTS } from "../data/gradeScale";

export function calculateGPA(courses) {
  const totalPoints = courses.reduce(
    (sum, course) => sum + course.credits * GRADE_POINTS[course.grade],
    0,
  );
  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);

  const gpa = totalCredits === 0 ? 0 : totalPoints / totalCredits;

  return { totalPoints, totalCredits, gpa };
}