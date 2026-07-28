function Button({
  children,
  variant = "primary",
  icon: Icon,
  onClick,
  type = "button",
}) {
  const base =
    "flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all";
  const variants = {
    primary:
      "bg-primary text-on-primary hover:shadow-[0_0_18px_var(--accent)] hover:brightness-110",
    secondary: "bg-lavender text-primary hover:brightness-95",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
}

export default Button;