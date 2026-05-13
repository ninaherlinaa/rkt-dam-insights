import { Activity, CloudRain, Award, Wind } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { latestSeismic, weatherData, overallScore } from "@/data/mock";

export const ConditionCards = () => {
  return (
    <section className="container mx-auto px-6 pb-10">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Kondisi Terkini</h2>
        <p className="text-muted-foreground">Ringkasan situasi bendungan saat ini</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Link to="/evaluasi">
          <Card className="p-5 h-full hover:shadow-md transition-shadow border-primary/20 bg-gradient-to-br from-primary/10 to-transparent">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center h-10 w-10 rounded-lg bg-primary/15 text-primary">
                <Award className="h-5 w-5" />
              </span>
              <p className="text-sm font-medium text-muted-foreground">Skor Evaluasi</p>
            </div>
            <p className="mt-3 text-4xl font-extrabold text-primary tabular-nums">
              {overallScore.value}
            </p>
            <p className="text-xs font-semibold text-primary mt-1">{overallScore.status}</p>
          </Card>
        </Link>

        <Card className="p-5">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-10 w-10 rounded-lg bg-amber-500/15 text-amber-600">
              <Activity className="h-5 w-5" />
            </span>
            <p className="text-sm font-medium text-muted-foreground">Gempa Terakhir</p>
          </div>
          <p className="mt-3 text-3xl font-bold text-foreground tabular-nums">
            M {latestSeismic.magnitude}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {latestSeismic.region} · {latestSeismic.distance} km · kedalaman {latestSeismic.depth} km
          </p>
          <p className="text-xs text-muted-foreground">{latestSeismic.time}</p>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-10 w-10 rounded-lg bg-sky-500/15 text-sky-600">
              <CloudRain className="h-5 w-5" />
            </span>
            <p className="text-sm font-medium text-muted-foreground">Curah Hujan 24 Jam</p>
          </div>
          <p className="mt-3 text-3xl font-bold text-foreground tabular-nums">
            {weatherData.rainfall24h} <span className="text-base font-medium text-muted-foreground">mm</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">Suhu {weatherData.temperature}°C · RH {weatherData.humidity}%</p>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-10 w-10 rounded-lg bg-emerald-500/15 text-emerald-600">
              <Wind className="h-5 w-5" />
            </span>
            <p className="text-sm font-medium text-muted-foreground">Status Operasi</p>
          </div>
          <p className="mt-3 text-3xl font-bold text-foreground">Normal</p>
          <p className="text-xs text-muted-foreground mt-1">Pintu tertutup · Inflow stabil</p>
        </Card>
      </div>
    </section>
  );
};
