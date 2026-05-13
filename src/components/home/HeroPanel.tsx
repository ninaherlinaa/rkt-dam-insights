import { Shield, MapPin, Activity, Droplets, Gauge } from "lucide-react";
import damHero from "@/assets/dam-hero.jpg";
import { tmaData, overallScore, latestSeismic } from "@/data/mock";

export const HeroPanel = () => {
  const avgTma = tmaData.reduce((s, r) => s + r.elevation, 0) / tmaData.length;

  const stats = [
    { icon: Droplets, label: "Rata-rata TMA", value: `${avgTma.toFixed(2)} m` },
    { icon: Gauge, label: "Skor Kinerja", value: overallScore.value.toFixed(2) },
    { icon: Activity, label: "Gempa Terakhir", value: `M ${latestSeismic.magnitude}` },
  ];

  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={damHero}
          alt="Bendungan RKT 4"
          className="h-full w-full object-cover scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.25),transparent_60%)]" />
      </div>

      {/* decorative blurred orbs */}
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-secondary/30 blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative container mx-auto px-6 py-16 md:py-24">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 px-4 py-1.5 text-primary-foreground/90 text-xs font-semibold tracking-widest uppercase mb-5">
          <MapPin className="h-3.5 w-3.5" />
          Unit Pengelola Bendungan RKT 4
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.05] max-w-3xl">
          Sistem Monitoring &
          <span className="block bg-gradient-to-r from-accent via-amber-200 to-primary-foreground bg-clip-text text-transparent">
            Evaluasi Kinerja Bendungan
          </span>
        </h1>
        <p className="mt-5 text-lg text-primary-foreground/80 max-w-2xl">
          Pemantauan terintegrasi tinggi muka air, instrumentasi, dan kondisi terkini bendungan
          secara real-time.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-3 rounded-full bg-success/20 backdrop-blur-md border border-success/40 px-5 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ripple rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <Shield className="h-4 w-4 text-emerald-200" />
            <span className="text-primary-foreground text-sm font-semibold">
              Status Operasi: Normal
            </span>
          </div>
          <span className="text-primary-foreground/70 text-sm">
            Data terakhir 5 menit lalu
          </span>
        </div>

        {/* Quick stats strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group rounded-2xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15 p-4 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-accent/30 text-accent-foreground border border-accent/40">
                  <s.icon className="h-5 w-5 text-amber-100" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-primary-foreground/70 font-semibold">
                    {s.label}
                  </p>
                  <p className="text-xl font-bold text-primary-foreground tabular-nums">
                    {s.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* wave divider */}
      <svg
        className="relative block w-full h-12 md:h-16 -mb-px text-background"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,32 C240,80 480,80 720,48 C960,16 1200,16 1440,48 L1440,80 L0,80 Z"
        />
      </svg>
    </header>
  );
};
