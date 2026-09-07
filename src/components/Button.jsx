const buttonVariants = {
  primary:
    "bg-primary-500 text-neutral-50 hover:bg-primary-600 active:bg-primary-700",
  secondary:
    "border border-primary-500 bg-transparent text-primary-500 hover:bg-primary-50 active:bg-primary-100",
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
