import { cn } from "../../lib/utils";

const variants = {
  primary:
    "bg-gradient-to-r from-[#C8A96A] to-[#BFA77A] text-[#050505] font-medium hover:brightness-110 shadow-lg shadow-[#C8A96A]/10",
  secondary:
    "bg-white/[0.04] text-[#F7F2E8] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 backdrop-blur-sm",
  ghost:
    "text-[#C8A96A] hover:text-[#D6C7A1] hover:bg-white/[0.04] underline-offset-4",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  onClick,
  type = "button",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C8A96A]/40 focus:ring-offset-2 focus:ring-offset-[#050505] cursor-pointer select-none";

  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
