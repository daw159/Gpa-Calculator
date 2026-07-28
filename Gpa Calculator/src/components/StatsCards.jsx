import { Medal, Calendar, Timer, GraduationCap } from "lucide-react"
import StatCard from "./StatCard"

function StatsCards({ cgpa, currentSemesterName, totalCredits, totalCourses }) {
  const stats = [
    { icon: Medal, iconBg: "bg-indigo-100", iconColor: "text-indigo-700", label: "OVERALL CGPA", value: cgpa.toFixed(2) },
    { icon: Calendar, iconBg: "bg-teal-100", iconColor: "text-teal-700", label: "CURRENT SEMESTER", value: currentSemesterName },
    { icon: Timer, iconBg: "bg-indigo-100", iconColor: "text-indigo-700", label: "TOTAL CREDITS", value: totalCredits.toFixed(1) },
    { icon: GraduationCap, iconBg: "bg-gray-200", iconColor: "text-gray-700", label: "TOTAL COURSES", value: totalCourses },
  ]

  return (
    <section className="w-full px-16 grid grid-cols-4 gap-6">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </section>
  )
}

export default StatsCards