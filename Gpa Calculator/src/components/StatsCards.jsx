import { Medal, Calendar, Timer, GraduationCap } from "lucide-react";
import StatCard from "./StatCard";

function StatsCards({ cgpa, currentSemesterName, totalCredits, totalCourses }) {
  const stats = [
    {
      icon: Medal,
      iconBg: "bg-lavender",
      iconColor: "text-primary",
      label: "OVERALL CGPA",
      value: cgpa.toFixed(2),
    },
    {
      icon: Calendar,
      iconBg: "bg-accent-container",
      iconColor: "text-accent",
      label: "CURRENT SEMESTER",
      value: currentSemesterName,
    },
    {
      icon: Timer,
      iconBg: "bg-lavender",
      iconColor: "text-primary",
      label: "TOTAL CREDITS",
      value: totalCredits.toFixed(1),
    },
    {
      icon: GraduationCap,
      iconBg: "bg-surface-container-high",
      iconColor: "text-on-surface-variant",
      label: "TOTAL COURSES",
      value: totalCourses,
    },
  ];

  return (
    <section className="mx-auto grid w-full max-w-300 grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-4 lg:gap-6 lg:px-12">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </section>
  );
}

export default StatsCards;