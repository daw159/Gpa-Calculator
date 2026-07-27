function Button({ children, variant = "primary", icon: Icon, onClick, type = "button" }) {
  const base = "flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-colors"
  const variants = {
    primary: "bg-blue-700 text-white hover:bg-blue-800",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]}`}>
      {Icon && <Icon size={18} />}
      {children}
    </button>
  )
}

export default Button