import ProgressBar from "./ProgressBar";

function Hero({ gpa }) {
  return (
    <section
      id="home"
      className="mx-auto flex w-full max-w-300 flex-col items-center gap-10 px-4 py-10 md:px-6 md:py-14 lg:flex-row lg:justify-between lg:px-12 lg:py-16"
    >
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
          GPA &amp; CGPA <span className="text-primary">Calculator</span>
        </h1>
        <p className="mt-4 text-base text-on-surface-variant">
          Simplify your academic journey with precision. Track your semester
          grades, calculate cumulative averages, and forecast your academic
          success with our scholarly toolset.
        </p>
      </div>

      <ProgressBar gpa={gpa} />
    </section>
  );
}

export default Hero;