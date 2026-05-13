import { Activity, CloudRain, Award, Wind, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { latestSeismic, weatherData, overallScore } from "@/data/mock";

export const ConditionCards = () => {
  return (
    <section className="container mx-auto px-6 pb-12">
      <div className="mb-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-primary">Status</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Kondisi Terkini</h2>
        <p className="text-muted-foreground">Ringkasan situasi bendungan saat ini</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {/* Featured: Skor Evaluasi */}
        <Link to="/evaluasi" className="group lg:col-span-1">
          <Card className="relative overflow-hidden p-6 h-full border-0 text-primary-foreground shadow-elegant hover:-translate-y-0.5 transition-smooth">
            <div className="absolute inset-0 gradient-score" />
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-white/20 backdrop-blur-sm">
                  <Award className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider font-semibold opacity-90">
                Skor Evaluasi Kinerja
              </p>
              <p className="mt-1 text-5xl font-extrabold tabular-nums leading-none">
                {overallScore.value}
              </p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold bg-white/20 rounded-full px-2.5 py-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                {overallScore.status}
              </p>
            </div>
          </Card>
        </Link>

        {/* Gempa */}
        <Card className="relative overflow-hidden p-6 hover:shadow-md transition-smooth border-l-4 border-l-amber-500">
          <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-amber-500/15 text-amber-600">
                <Activity className="h-5 w-5" />
              </span>
              <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                Gempa Terakhir
              </p>
            </div>
            <p className="mt-4 text-4xl font-bold text-foreground tabular-nums leading-none">
              <span className="text-amber-600 text-2xl font-semibold mr-1">M</span>
              {latestSeismic.magnitude}
            </p>
            <div className="mt-3 space-y-0.5 text-xs text-muted-foreground">
              <p>{latestSeismic.region} · {latestSeismic.distance} km</p>
              <p>Kedalaman {latestSeismic.depth} km</p>
              <p className="text-foreground/70 font-medium">{latestSeismic.time}</p>
            </div>
          </div>
        </Card>

        {/* Hujan */}
        <Card className="relative overflow-hidden p-6 hover:shadow-md transition-smooth border-l-4 border-l-sky-500">
          <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-sky-500/10 blur-2xl" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-sky-500/15 text-sky-600">
                <CloudRain className="h-5 w-5" />
              </span>
              <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                Curah Hujan 24 Jam
              </p>
            </div>
            <p className="mt-4 text-4xl font-bold text-foreground tabular-nums leading-none">
              {weatherData.rainfall24h}
              <span className="text-base font-semibold text-muted-foreground ml-1">mm</span>
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-lg bg-muted/60 px-2 py-1.5">
                <p className="text-muted-foreground">Suhu</p>
                <p className="font-semibold text-foreground">{weatherData.temperature}°C</p>
              </div>
              <div className="rounded-lg bg-muted/60 px-2 py-1.5">
                <p className="text-muted-foreground">RH</p>
                <p className="font-semibold text-foreground">{weatherData.humidity}%</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Operasi */}
        <Card className="relative overflow-hidden p-6 hover:shadow-md transition-smooth border-l-4 border-l-emerald-500">
          <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-emerald-500/15 text-emerald-600">
                <Wind className="h-5 w-5" />
              </span>
              <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                Status Operasi
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ripple rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <p className="text-3xl font-bold text-foreground leading-none">Normal</p>
            </div>
            <div className="mt-3 space-y-1 text-xs text-muted-foreground">
              <p className="flex items-center justify-between">
                <span>Pintu</span><span className="font-semibold text-foreground">Tertutup</span>
              </p>
              <p className="flex items-center justify-between">
                <span>Inflow</span><span className="font-semibold text-foreground">Stabil</span>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
