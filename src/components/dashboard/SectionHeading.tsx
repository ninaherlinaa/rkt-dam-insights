import { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  number: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  variant: "physical" | "operational" | "instrumentation" | "institutional";
}

const variantMap = {
  physical: { bg: "bg-aspect-physical/15", text: "text-aspect-physical", icon: "text-aspect-physical", ring: "ring-aspect-physical/30" },
  operational: { bg: "bg-aspect-operational/15", text: "text-aspect-operational", icon: "text-aspect-operational", ring: "ring-aspect-operational/30" },
  instrumentation: { bg: "bg-aspect-instrumentation/15", text: "text-aspect-instrumentation", icon: "text-aspect-instrumentation", ring: "ring-aspect-instrumentation/30" },
  institutional: { bg: "bg-aspect-institutional/15", text: "text-aspect-institutional", icon: "text-aspect-institutional", ring: "ring-aspect-institutional/30" },
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
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${v.bg} shadow-soft ring-2 ${v.ring}`}
      >
        <Icon className={`h-7 w-7 ${v.icon}`} strokeWidth={2.4} />
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
