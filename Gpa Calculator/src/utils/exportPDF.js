import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { GRADE_POINTS } from "../data/gradeScale";
import { calculateGPA } from "./calculateGPA";




export function exportTranscript(semesters) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  const allCourses = semesters.flatMap((semester) => semester.courses);
  const overall = calculateGPA(allCourses);

  // ---- Title block ----
  doc.setFontSize(20);
  doc.setTextColor(62, 59, 146);
  doc.text("Academic Transcript", 14, 20);

  doc.setFontSize(10);
  doc.setTextColor(90, 90, 100);
  const today = new Date().toISOString().slice(0, 10);
  doc.text(`Generated on ${today}`, 14, 27);
  doc.text(
    `Overall CGPA: ${overall.gpa.toFixed(2)}   |   Total Credits: ${overall.totalCredits.toFixed(1)}   |   Courses: ${allCourses.length}`,
    14,
    33,
  );

  let cursorY = 42;

  // ---- One table per semester ----
  semesters.forEach((semester) => {
    if (semester.courses.length === 0) return;

    const semesterResult = calculateGPA(semester.courses);

    doc.setFontSize(12);
    doc.setTextColor(30, 30, 40);
    doc.text(semester.name, 14, cursorY);

    autoTable(doc, {
      startY: cursorY + 3,
      head: [["Course Name", "Credits", "Grade", "Points"]],
      body: semester.courses.map((course) => [
        course.name,
        course.credits.toFixed(1),
        course.grade,
        (course.credits * GRADE_POINTS[course.grade]).toFixed(1),
      ]),
      foot: [
        [
          `Semester GPA: ${semesterResult.gpa.toFixed(2)}`,
          semesterResult.totalCredits.toFixed(1),
          "",
          semesterResult.totalPoints.toFixed(1),
        ],
      ],
      theme: "grid",
      styles: { fontSize: 9, cellPadding: 2.5 },
      headStyles: { fillColor: [62, 59, 146], textColor: 255 },
      footStyles: { fillColor: [230, 230, 250], textColor: [39, 34, 123] },
      margin: { left: 14, right: 14 },
    });

    cursorY = doc.lastAutoTable.finalY + 12;
  });

  if (allCourses.length === 0) {
    doc.setFontSize(11);
    doc.setTextColor(120, 120, 130);
    doc.text("No courses have been added yet.", 14, cursorY);
    cursorY += 10;
  }

  // ---- Footer note ----
  doc.setFontSize(8);
  doc.setTextColor(140, 140, 150);
  doc.text(
    "GradeMate — GPA & CGPA Calculator",
    pageWidth / 2,
    doc.internal.pageSize.getHeight() - 10,
    { align: "center" },
  );

  doc.save(`transcript-${today}.pdf`);
}