function ProgressBar({ gpa = 0, maxGpa = 4.0 }) {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.min(gpa / maxGpa, 1);
  const offset = circumference * (1 - percentage);

  return (
    <div className="relative flex h-52 w-52 shrink-0 items-center justify-center">
      <svg width="208" height="208" viewBox="0 0 208 208" className="-rotate-90">
        <circle
          cx="104"
          cy="104"
          r={radius}
          fill="none"
          stroke="var(--lavender)"
          strokeWidth="14"
        />
        <circle
          cx="104"
          cy="104"
          r={radius}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="14"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
      </svg>

      <div className="absolute flex flex-col items-center">
        <span className="font-mono text-xs uppercase tracking-wide text-on-surface-variant">
          Current GPA
        </span>
        <span className="font-mono text-4xl font-bold text-on-surface">
          {gpa.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default ProgressBar;