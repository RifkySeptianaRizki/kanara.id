import { cn } from "../../lib/utils";

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {label && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#C8A96A]">
          {label}
        </p>
      )}
      <h2 className="font-serif text-3xl leading-tight text-[#F7F2E8] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-[#A9A29A] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
