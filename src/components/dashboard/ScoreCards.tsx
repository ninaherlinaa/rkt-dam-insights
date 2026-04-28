import { Mountain, Settings2, Activity, Building2, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

interface SubPoint {
  label: string;
  value: number;
}

const aspects = [
  {
    key: "physical",
    title: "Fisik & Lingkungan",
    score: 86.78,
    grade: "Baik",
    icon: Mountain,
    gradient: "bg-[var(--gradient-physical)]",
    accent: "text-aspect-physical",
    accentBg: "bg-aspect-physical",
    subs: [
      { label: "Kinerja Fisik", value: 60.92 },
      { label: "Kinerja Lingkungan", value: 25.86 },
    ] as SubPoint[],
  },
  {
    key: "operational",
    title: "Operasi & Pelayanan",
    score: 84.16,
    grade: "Baik",
    icon: Settings2,
    gradient: "bg-[var(--gradient-operational)]",
    accent: "text-aspect-operational",
    accentBg: "bg-aspect-operational",
    subs: [
      { label: "Kinerja Operasi", value: 43.51 },
      { label: "Kinerja Layanan", value: 40.65 },
    ] as SubPoint[],
  },
  {
    key: "instrumentation",
    title: "Instrumentasi & Pemeriksaan",
    score: 84.69,
    grade: "Baik",
    icon: Activity,
    gradient: "bg-[var(--gradient-instrumentation)]",
    accent: "text-aspect-instrumentation",
    accentBg: "bg-aspect-instrumentation",
    subs: [
      { label: "Kinerja Instrumentasi", value: 42.41 },
      { label: "Kinerja Pemeriksaan", value: 42.28 },
    ] as SubPoint[],
  },
  {
    key: "institutional",
    title: "Kelembagaan",
    score: 82.48,
    grade: "Baik",
    icon: Building2,
    gradient: "bg-[var(--gradient-institutional)]",
    accent: "text-aspect-institutional",
    accentBg: "bg-aspect-institutional",
    subs: [] as SubPoint[],
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
              className="group relative overflow-hidden gradient-card border-border/60 shadow-elegant hover:shadow-glow hover:-translate-y-1 transition-smooth flex flex-col"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${a.gradient}`} />
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-background shadow-soft ring-2 ring-current ${a.accent}`}
                  >
                    <Icon className={`h-5 w-5 ${a.accent}`} strokeWidth={2.4} />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${a.accentBg} text-white`}>
                    {a.grade}
                  </span>
                </div>
                <p className="text-base md:text-lg font-bold text-foreground line-clamp-2 min-h-[3rem]">
                  {a.title}
                </p>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">{a.score.toFixed(2)}</span>
                  <span className="text-sm text-muted-foreground font-medium">/100</span>
                </div>
                <div className="mt-2 h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${a.gradient} rounded-full transition-all duration-1000`}
                    style={{ width: `${a.score}%` }}
                  />
                </div>

                {a.subs.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-border space-y-2">
                    {a.subs.map((s, i) => (
                      <div key={i} className="flex items-center justify-between gap-2">
                        <span className="text-sm text-foreground/80 font-semibold leading-tight">
                          {s.label}
                        </span>
                        <span className={`text-base font-bold ${a.accent}`}>
                          {s.value.toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          );
        })}

        {/* Average score card */}
        <Card className="relative overflow-hidden gradient-score border-0 shadow-elegant text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-white blur-3xl animate-float" />
          </div>
          <div className="relative p-5 flex flex-col h-full">
            <div className="flex items-start justify-between mb-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/25 backdrop-blur-sm ring-1 ring-white/40">
                <Award className="h-5 w-5 text-white" strokeWidth={2.4} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-white/25 text-white">
                Baik
              </span>
            </div>
            <p className="text-sm font-semibold text-white/95">Rata-rata Skor Keseluruhan</p>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-3xl font-bold">{average}</span>
              <span className="text-sm text-white/85 font-medium">/100</span>
            </div>
            <div className="mt-2 h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-1000"
                style={{ width: `${average}%` }}
              />
            </div>
            <div className="mt-auto pt-3 inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 self-start">
              <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] font-bold tracking-wider">SANGAT TERPELIHARA</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
