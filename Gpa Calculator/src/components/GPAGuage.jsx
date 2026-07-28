function GPAGauge({ gpa = 3.54, maxGpa = 4.0 }) {
  const radius = 80
  const circumference = 2 * Math.PI * radius
  const percentage = gpa / maxGpa
  const offset = circumference * (1 - percentage)

  return (
    <div className="relative w-52 h-52 flex items-center justify-center">
      <svg width="208" height="208" className="-rotate-90">
        <circle
          cx="104" cy="104" r={radius}
          fill="none" stroke="var(--color-outline)" strokeWidth="14" opacity="0.3"
        />
        <circle
          cx="104" cy="104" r={radius}
          fill="none" stroke="var(--color-secondary)" strokeWidth="14"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute flex flex-col items-center">
        <span className="text-xs font-medium text-[var(--color-on-surface-variant)] uppercase">Current GPA</span>
        <span className="text-4xl font-bold text-[var(--color-on-surface)]">{gpa.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default GPAGauge