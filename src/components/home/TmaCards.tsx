import { Droplets, TrendingDown, TrendingUp, Waves } from "lucide-react";
import { Card } from "@/components/ui/card";
import { tmaData } from "@/data/mock";

const Sparkline = ({ values, up }: { values: number[]; up: boolean }) => {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * 100;
    const y = 100 - ((v - min) / range) * 90 - 5;
    return [x, y] as const;
  });
  const linePoints = pts.map((p) => p.join(",")).join(" ");
  const areaPoints = `0,100 ${linePoints} 100,100`;
  const stroke = up ? "hsl(var(--success))" : "hsl(var(--accent))";
  const gradId = `g-${up ? "u" : "d"}`;
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-14 w-full">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.35" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#${gradId})`} />
      <polyline
        points={linePoints}
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

export const TmaCards = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="mb-6 flex items-end justify-between gap-4 flex-wrap">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-primary">Realtime</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Tinggi Muka Air (TMA)
          </h2>
          <p className="text-muted-foreground">Pemantauan elevasi waduk terkini</p>
        </div>
        <div className="inline-flex items-center gap-2 text-xs text-muted-foreground bg-muted/60 rounded-full px-3 py-1.5">
          <Waves className="h-3.5 w-3.5 text-primary" />
          Diperbarui tiap 5 menit
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {tmaData.map((r) => {
          const up = r.delta >= 0;
          const pctOfNormal = Math.min(100, (r.elevation / r.normal) * 100);
          return (
            <Card
              key={r.id}
              className="group relative overflow-hidden p-6 hover:shadow-elegant transition-smooth border-border/60"
            >
              {/* gradient halo */}
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary-glow" />

              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    {r.name}
                  </p>
                  <p className="mt-2 text-4xl font-extrabold text-foreground tabular-nums leading-none">
                    {r.elevation.toFixed(2)}
                    <span className="text-base font-semibold text-muted-foreground ml-1">m</span>
                  </p>
                </div>
                <span className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft">
                  <Droplets className="h-6 w-6" />
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span>Normal: {r.normal.toFixed(2)} m</span>
                <span
                  className={`inline-flex items-center gap-1 font-semibold rounded-full px-2 py-0.5 ${
                    up
                      ? "bg-emerald-500/10 text-emerald-700"
                      : "bg-amber-500/10 text-amber-700"
                  }`}
                >
                  {up ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                  {up ? "+" : ""}
                  {r.delta.toFixed(2)} m
                </span>
              </div>

              {/* progress bar to normal */}
              <div className="mt-3 h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                  style={{ width: `${pctOfNormal}%` }}
                />
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">
                {pctOfNormal.toFixed(1)}% dari elevasi normal
              </p>

              <div className="mt-3">
                <Sparkline values={r.trend} up={up} />
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
