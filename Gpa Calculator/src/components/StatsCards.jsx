import StatCard from "./Statcard"
import { Medal, Calendar, Timer, GraduationCap } from "lucide-react"

const stats = [
  { icon: Medal, iconBg: "bg-indigo-100", iconColor: "text-indigo-700", label: "OVERALL CGPA", value: "3.68" },
  { icon: Calendar, iconBg: "bg-teal-100", iconColor: "text-teal-700", label: "CURRENT SEMESTER", value: "S4" },
  { icon: Timer, iconBg: "bg-indigo-100", iconColor: "text-indigo-700", label: "TOTAL CREDITS", value: "64" },
  { icon: GraduationCap, iconBg: "bg-gray-200", iconColor: "text-gray-700", label: "TOTAL COURSES", value: "18" },
]



const Statcards = () => {
  return (
    <section className="w-full px-16 grid grid-cols-4 gap-6">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </section>
  )
}

export default Statcards