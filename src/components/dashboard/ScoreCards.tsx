import { Mountain, Settings2, Activity, Building2, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const aspects = [
  {
    key: "physical",
    title: "Fisik & Lingkungan",
    score: 88,
    icon: Mountain,
    gradient: "bg-[var(--gradient-physical)]",
    accent: "text-aspect-physical",
  },
  {
    key: "operational",
    title: "Operasi & Pelayanan",
    score: 91,
    icon: Settings2,
    gradient: "bg-[var(--gradient-operational)]",
    accent: "text-aspect-operational",
  },
  {
    key: "instrumentation",
    title: "Instrumentasi & Inspeksi",
    score: 85,
    icon: Activity,
    gradient: "bg-[var(--gradient-instrumentation)]",
    accent: "text-aspect-instrumentation",
  },
  {
    key: "institutional",
    title: "Kelembagaan",
    score: 89,
    icon: Building2,
    gradient: "bg-[var(--gradient-institutional)]",
    accent: "text-aspect-institutional",
  },
];

export const ScoreCards = () => {
  const average = (aspects.reduce((s, a) => s + a.score, 0) / aspects.length).toFixed(2);

  return (
    <section className="container mx-auto px-6 -mt-12 md:-mt-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {aspects.map((a) => {
          const Icon = a.icon;
          return (
            <Card
              key={a.key}
              className="group relative overflow-hidden gradient-card border-border/60 shadow-elegant hover:shadow-glow hover:-translate-y-1 transition-smooth"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${a.gradient}`} />
              <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${a.gradient} shadow-soft`}
                  >
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Skor
                  </span>
                </div>
                <p className="text-sm font-medium text-muted-foreground line-clamp-1">
                  {a.title}
                </p>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">{a.score}</span>
                  <span className="text-base text-muted-foreground font-medium">/100</span>
                </div>
                <div className="mt-3 h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${a.gradient} rounded-full transition-all duration-1000`}
                    style={{ width: `${a.score}%` }}
                  />
                </div>
              </div>
            </Card>
          );
        })}

        {/* Average score card */}
        <Card className="relative overflow-hidden gradient-score border-0 shadow-elegant text-primary-foreground">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-primary-foreground blur-3xl animate-float" />
          </div>
          <div className="relative p-5">
            <div className="flex items-start justify-between mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/20 backdrop-blur-sm">
                <Award className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
                Rata-rata
              </span>
            </div>
            <p className="text-sm font-medium text-primary-foreground/90">Skor Keseluruhan</p>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-bold">{average}</span>
              <span className="text-base text-primary-foreground/80 font-medium">/100</span>
            </div>
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/20 backdrop-blur-sm px-3 py-1">
              <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-pulse" />
              <span className="text-xs font-semibold">SANGAT BAIK</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
