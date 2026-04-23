import { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  number: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  variant: "physical" | "operational" | "instrumentation" | "institutional";
}

const variantMap = {
  physical: { bg: "bg-[var(--gradient-physical)]", text: "text-aspect-physical" },
  operational: { bg: "bg-[var(--gradient-operational)]", text: "text-aspect-operational" },
  instrumentation: {
    bg: "bg-[var(--gradient-instrumentation)]",
    text: "text-aspect-instrumentation",
  },
  institutional: {
    bg: "bg-[var(--gradient-institutional)]",
    text: "text-aspect-institutional",
  },
};

export const SectionHeading = ({
  number,
  title,
  subtitle,
  icon: Icon,
  variant,
}: SectionHeadingProps) => {
  const v = variantMap[variant];
  return (
    <div className="flex items-start gap-4 mb-8">
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${v.bg} shadow-elegant`}
      >
        <Icon className="h-6 w-6 text-primary-foreground" />
      </div>
      <div className="flex-1">
        <div className={`text-xs font-bold uppercase tracking-widest ${v.text} mb-1`}>
          Aspek {number.toString().padStart(2, "0")}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
        <p className="text-muted-foreground mt-1">{subtitle}</p>
      </div>
    </div>
  );
};
