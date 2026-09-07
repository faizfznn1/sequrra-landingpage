const buttonVariants = {
  primary:
    "bg-primary-700 text-neutral-50 hover:bg-primary-800 active:bg-primary-900",
  secondary:
    "border border-primary-700 bg-transparent text-primary-700 hover:bg-primary-900 hover:text-neutral-50 active:bg-primary-900 active:text-neutral-50",
};

function Button({
  children,
  className = "",
  variant = "primary",
  type = "button",
  ...props
}) {
  const variantClassName = buttonVariants[variant] ?? buttonVariants.primary;

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-body font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 disabled:pointer-events-none disabled:opacity-50 ${variantClassName} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
