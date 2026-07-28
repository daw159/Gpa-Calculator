import { Plus, FileDown } from "lucide-react";

function SemesterTabs({
  semesters,
  activeSemesterId,
  onSelectSemester,
  onAddSemester,
  maxSemesters,
  onExportPDF,
}) {
  const limitReached = semesters.length >= maxSemesters;

  return (
    <section className="mx-auto mt-8 flex w-full max-w-300 flex-col gap-4 px-4 md:px-6 lg:mt-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
      <div className="-mx-4 flex snap-x items-center gap-3 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0">
        {semesters.map((semester) => {
          const isActive = semester.id === activeSemesterId;

          return (
            <button
              key={semester.id}
              onClick={() => onSelectSemester(semester.id)}
              className={`shrink-0 snap-start rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {semester.name}
            </button>
          );
        })}

        <button
          onClick={onAddSemester}
          disabled={limitReached}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-dashed transition-colors ${
            limitReached
              ? "cursor-not-allowed border-outline/50 text-on-surface-variant/40"
              : "border-accent text-accent hover:bg-accent-container"
          }`}
          aria-label={limitReached ? "Semester limit reached" : "Add semester"}
        >
          <Plus size={16} />
        </button>
      </div>

      <button
        onClick={onExportPDF}
        className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-on-primary transition-all hover:shadow-[0_0_18px_var(--accent)] hover:brightness-110"
      >
        <FileDown size={16} />
        Export PDF
      </button>
    </section>
  );
}

export default SemesterTabs;