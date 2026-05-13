import { Droplets, TrendingDown, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { tmaData } from "@/data/mock";

const Sparkline = ({ values }: { values: number[] }) => {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * 100;
      const y = 100 - ((v - min) / range) * 100;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-10 w-full">
      <polyline
        points={points}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

export const TmaCards = () => {
  return (
    <section className="container mx-auto px-6 py-10">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Tinggi Muka Air (TMA)</h2>
        <p className="text-muted-foreground">Pemantauan elevasi waduk terkini</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {tmaData.map((r) => {
          const up = r.delta >= 0;
          return (
            <Card key={r.id} className="p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{r.name}</p>
                  <p className="mt-1 text-3xl font-bold text-foreground tabular-nums">
                    {r.elevation.toFixed(2)} <span className="text-base font-medium text-muted-foreground">m</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Normal: {r.normal.toFixed(2)} m
                  </p>
                </div>
                <span className="grid place-items-center h-10 w-10 rounded-lg bg-primary/10 text-primary">
                  <Droplets className="h-5 w-5" />
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm">
                {up ? (
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-amber-600" />
                )}
                <span className={up ? "text-emerald-700" : "text-amber-700"}>
                  {up ? "+" : ""}
                  {r.delta.toFixed(2)} m vs kemarin
                </span>
              </div>
              <div className="mt-2">
                <Sparkline values={r.trend} />
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
