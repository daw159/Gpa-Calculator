import GPAGauge from "./GPAGuage"

function Hero({ gpa }) {
  return (
    <section id="home" className="w-full px-16 py-16 flex items-center justify-between">
      <div className="max-w-xl">
        <h1 className="text-5xl font-extrabold text-[var(--color-on-surface)] leading-tight">
          GPA & CGPA <span className="text-blue-700">Calculator</span>
        </h1>
        <p className="mt-4 text-[var(--color-on-surface-variant)] text-base">
          Simplify your academic journey with precision. Track your semester
          grades, calculate cumulative averages, and forecast your academic
          success with our scholarly toolset.
        </p>
      </div>

      <GPAGauge gpa={gpa} />
    </section>
  )
}

export default Hero