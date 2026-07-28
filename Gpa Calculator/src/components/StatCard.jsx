function StatCard({ icon: Icon, iconBg, iconColor, label, value }) {
  return (
    <div className="glass flex items-center gap-4 rounded-2xl p-4 sm:p-5">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconBg}`}
      >
        <Icon size={20} className={iconColor} />
      </div>
      <div className="min-w-0">
        <p className="truncate font-mono text-xs text-on-surface-variant">
          {label}
        </p>
        <p className="truncate font-mono text-xl font-bold text-on-surface sm:text-2xl">
          {value}
        </p>
      </div>
    </div>
  );
}

export default StatCard;