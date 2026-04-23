import { Activity, Gauge, Waves, Thermometer, Wind, Compass, Ruler, Zap, Eye, Radio } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { LucideIcon } from "lucide-react";

interface Instrument {
  icon: LucideIcon;
  name: string;
  short: string;
  status: "Normal" | "Perhatian" | "Optimal";
  value: string;
  description: string;
}

const items: Instrument[] = [
  {
    icon: Gauge,
    name: "Piezometer",
    short: "Tekanan air pori",
    status: "Normal",
    value: "12.4 kPa",
    description:
      "Mengukur tekanan air pori di dalam tubuh dan fondasi bendungan. Pembacaan stabil menunjukkan tidak ada peningkatan rembesan abnormal pada struktur bendungan.",
  },
  {
    icon: Waves,
    name: "V-Notch Weir",
    short: "Pengukur rembesan",
    status: "Normal",
    value: "0.42 L/s",
    description:
      "Pengukur debit rembesan air melalui dan di bawah bendungan. Nilai jauh di bawah ambang batas peringatan (2,0 L/s) yang menandakan integritas struktur baik.",
  },
  {
    icon: Ruler,
    name: "Inclinometer",
    short: "Pergerakan lateral",
    status: "Optimal",
    value: "0.8 mm",
    description:
      "Memantau pergerakan horizontal pada tubuh bendungan dan tebing. Nilai pergeseran sangat kecil dan dalam batas toleransi desain (<5 mm/tahun).",
  },
  {
    icon: Compass,
    name: "Settlement Gauge",
    short: "Penurunan tubuh",
    status: "Normal",
    value: "2.1 mm",
    description:
      "Mendeteksi penurunan vertikal pada timbunan bendungan. Penurunan terjadi merata, sesuai prediksi konsolidasi jangka panjang.",
  },
  {
    icon: Thermometer,
    name: "Termometer Beton",
    short: "Suhu struktur",
    status: "Normal",
    value: "28.5 °C",
    description:
      "Memantau temperatur internal beton untuk mendeteksi gradien suhu yang dapat menyebabkan keretakan termal. Temperatur stabil dan seragam.",
  },
  {
    icon: Wind,
    name: "Stasiun Cuaca",
    short: "Curah hujan & angin",
    status: "Normal",
    value: "8.2 mm/hr",
    description:
      "Mencatat data hidrometeorologi untuk peramalan inflow dan manajemen banjir. Data terintegrasi dengan sistem peringatan dini.",
  },
  {
    icon: Zap,
    name: "Seismograf",
    short: "Aktivitas seismik",
    status: "Normal",
    value: "0.02 g",
    description:
      "Mendeteksi getaran tanah dan respons bendungan terhadap aktivitas seismik. Tidak terdeteksi event signifikan dalam 90 hari terakhir.",
  },
  {
    icon: Eye,
    name: "Inspeksi Visual",
    short: "Pemeriksaan rutin",
    status: "Optimal",
    value: "100%",
    description:
      "Pemeriksaan visual menyeluruh oleh tim teknis dilakukan setiap minggu. Tidak ditemukan retak, deformasi, atau anomali permukaan.",
  },
  {
    icon: Radio,
    name: "Sistem Telemetri",
    short: "Pemantauan jarak jauh",
    status: "Optimal",
    value: "99.8%",
    description:
      "Menyalurkan data instrumentasi secara real-time ke pusat kendali. Tingkat ketersediaan jaringan sangat tinggi dengan latensi rata-rata <2 detik.",
  },
];

const statusColor = {
  Normal: "bg-success/10 text-success border-success/30",
  Optimal: "bg-primary/10 text-primary border-primary/30",
  Perhatian: "bg-warning/10 text-warning border-warning/30",
};

export const InstrumentationAspect = () => {
  const [active, setActive] = useState<Instrument | null>(null);
  const loop = [...items, ...items];

  return (
    <section className="container mx-auto px-6 py-16">
      <SectionHeading
        number={3}
        variant="instrumentation"
        icon={Activity}
        title="Aspek Instrumentasi & Inspeksi"
        subtitle="Sembilan instrumen pemantauan kondisi struktural bendungan."
      />

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-muted/40 to-background border border-border/60 p-6 shadow-soft">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-5 animate-marquee-slow pause-on-hover"
          style={{ width: "max-content" }}
        >
          {loop.map((it, i) => {
            const Icon = it.icon;
            return (
              <button
                key={i}
                onClick={() => setActive(it)}
                className="group w-64 shrink-0 text-left rounded-2xl bg-card border border-border/60 p-5 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth focus:outline-none focus:ring-2 focus:ring-aspect-instrumentation focus:ring-offset-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl bg-aspect-instrumentation/30 animate-ripple" />
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gradient-instrumentation)] shadow-soft">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${statusColor[it.status]}`}
                  >
                    {it.status}
                  </span>
                </div>
                <h3 className="font-bold text-foreground group-hover:text-aspect-instrumentation transition-smooth">
                  {it.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">{it.short}</p>
                <div className="mt-4 pt-4 border-t border-border flex items-baseline justify-between">
                  <span className="text-xs text-muted-foreground">Pembacaan</span>
                  <span className="text-lg font-bold text-aspect-instrumentation">
                    {it.value}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-lg">
          {active && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--gradient-instrumentation)] shadow-soft">
                    <active.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <DialogTitle>{active.name}</DialogTitle>
                    <DialogDescription>{active.short}</DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-xl bg-muted/50 px-4 py-3">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      Pembacaan Terkini
                    </p>
                    <p className="text-2xl font-bold text-aspect-instrumentation">
                      {active.value}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${statusColor[active.status]}`}
                  >
                    {active.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {active.description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
