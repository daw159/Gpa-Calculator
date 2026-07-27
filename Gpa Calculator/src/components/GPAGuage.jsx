function GPAGauge({ gpa = 3.54, maxGpa = 4.0 }) {
  const radius = 80
  const circumference = 2 * Math.PI * radius
  const percentage = gpa / maxGpa
  const offset = circumference * (1 - percentage)

  return (
    <div className="relative w-60 h-60 flex items-center justify-center mr-5">
      <svg width="208" height="208" className="-rotate-90">
        {/* Track — full circle, faint background ring */}
        <circle
          cx="104" cy="104" r={radius}
          fill="none" stroke="#e6e6fa" strokeWidth="14"
        />
        {/* Progress — partial circle, driven by gpa value */}
        <circle
          cx="104" cy="104" r={radius}
          fill="none" stroke="#00c2cb" strokeWidth="14"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>

      {/* Text sits on top of the SVG, absolutely centered */}
      <div className="absolute flex flex-col items-center">
        <span className="text-xs font-medium text-gray-500 uppercase">Current GPA</span>
        <span className="text-4xl font-bold text-gray-900">{gpa.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default GPAGauge