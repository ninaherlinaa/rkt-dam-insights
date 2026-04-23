import { Activity, Waves, CloudRain, Move, ArrowDownUp, Gauge, Droplets, AlertTriangle, Zap } from "lucide-react";
import { useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { SectionHeading } from "./SectionHeading";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LucideIcon } from "lucide-react";

interface Instrument {
  icon: LucideIcon;
  name: string;
  jumlah: string;
  lokasi: string;
  keterangan: string;
}

const items: Instrument[] = [
  {
    icon: Waves,
    name: "Tinggi Muka Air Waduk",
    jumlah: "2 unit",
    lokasi: "Menara intake & dekat spillway",
    keterangan:
      "Mengukur elevasi permukaan air waduk secara real-time menggunakan sensor ultrasonic dan staff gauge sebagai backup. Data digunakan untuk operasi waduk dan peringatan dini banjir.",
  },
  {
    icon: CloudRain,
    name: "Curah Hujan",
    jumlah: "3 unit",
    lokasi: "Hulu, tubuh bendungan, hilir",
    keterangan:
      "Stasiun penakar hujan otomatis (ARR) yang mencatat intensitas curah hujan per jam. Data terintegrasi dengan sistem peramalan inflow waduk.",
  },
  {
    icon: Move,
    name: "Pergerakan Eksternal",
    jumlah: "12 titik",
    lokasi: "Mercu, lereng hulu & hilir",
    keterangan:
      "Patok geodetik dan target survey untuk memantau deformasi permukaan tubuh bendungan. Pengukuran dilakukan periodik dengan total station.",
  },
  {
    icon: ArrowDownUp,
    name: "Pergerakan Internal",
    jumlah: "8 unit",
    lokasi: "Inti & filter bendungan",
    keterangan:
      "Inclinometer dan settlement gauge yang mengukur pergerakan lateral dan penurunan vertikal di dalam tubuh bendungan untuk mendeteksi anomali struktural.",
  },
  {
    icon: Gauge,
    name: "Tekanan Air Pori & MAT",
    jumlah: "16 unit",
    lokasi: "Fondasi & tubuh bendungan",
    keterangan:
      "Piezometer pneumatik dan vibrating wire untuk mengukur tekanan air pori, serta pengukur muka air tanah di sekitar bendungan untuk evaluasi stabilitas.",
  },
  {
    icon: Droplets,
    name: "Debit Rembesan",
    jumlah: "4 unit",
    lokasi: "Toe drain & kaki hilir",
    keterangan:
      "V-notch weir dan flowmeter untuk mengukur debit rembesan air melalui dan di bawah bendungan. Pembacaan digunakan sebagai indikator integritas struktur.",
  },
  {
    icon: AlertTriangle,
    name: "Pemantauan Bocoran",
    jumlah: "Inspeksi rutin",
    lokasi: "Seluruh permukaan hilir",
    keterangan:
      "Inspeksi visual dan pemeriksaan kekeruhan air rembesan untuk mendeteksi indikasi piping atau bocoran abnormal pada tubuh bendungan.",
  },
  {
    icon: Zap,
    name: "Pengukuran Kegempaan",
    jumlah: "2 unit",
    lokasi: "Crest & galery bendungan",
    keterangan:
      "Strong motion accelerograph (SMA) yang merekam respons getaran bendungan terhadap aktivitas seismik untuk evaluasi keamanan pasca gempa.",
  },
];

export const InstrumentationAspect = () => {
  const [active, setActive] = useState<Instrument | null>(null);
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="container mx-auto px-6 py-16">
      <SectionHeading
        number={3}
        variant="instrumentation"
        icon={Activity}
        title="Aspek Instrumentasi & Inspeksi"
        subtitle="Instrumen pemantauan kondisi struktural bendungan. Berjalan otomatis — bisa digeser manual & klik untuk detail."
      />

      <div className="rounded-3xl bg-gradient-to-br from-muted/40 to-background border border-border/60 p-6 md:p-8 shadow-soft">
        <Carousel
          opts={{ align: "start", loop: true, dragFree: true }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {items.map((it, i) => {
              const Icon = it.icon;
              return (
                <CarouselItem
                  key={i}
                  className="pl-4 basis-[80%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <button
                    onClick={() => setActive(it)}
                    className="group w-full h-full text-left rounded-2xl bg-card border border-border/60 p-5 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth focus:outline-none focus:ring-2 focus:ring-aspect-instrumentation focus:ring-offset-2"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-xl bg-aspect-instrumentation/30 animate-ripple" />
                        <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gradient-instrumentation)] shadow-soft">
                          <Icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border bg-aspect-instrumentation/10 text-aspect-instrumentation border-aspect-instrumentation/30">
                        {it.jumlah}
                      </span>
                    </div>
                    <h3 className="font-bold text-foreground group-hover:text-aspect-instrumentation transition-smooth text-sm leading-snug min-h-[2.5rem]">
                      {it.name}
                    </h3>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-1">
                        Lokasi Pemasangan
                      </p>
                      <p className="text-xs text-foreground/80 line-clamp-2">{it.lokasi}</p>
                    </div>
                  </button>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </div>
        </Carousel>
        <p className="text-xs text-muted-foreground text-center mt-4 md:hidden">
          ← Geser untuk melihat lebih banyak →
        </p>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-lg">
          {active && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--gradient-instrumentation)] shadow-soft shrink-0">
                    <active.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <DialogTitle>{active.name}</DialogTitle>
                    <DialogDescription>Instrumen pemantauan</DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-muted/50 px-4 py-3">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                      Jumlah
                    </p>
                    <p className="text-lg font-bold text-aspect-instrumentation mt-0.5">
                      {active.jumlah}
                    </p>
                  </div>
                  <div className="rounded-xl bg-muted/50 px-4 py-3">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                      Lokasi
                    </p>
                    <p className="text-sm font-semibold text-foreground mt-0.5 leading-tight">
                      {active.lokasi}
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-border/60 px-4 py-3">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-1">
                    Keterangan
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {active.keterangan}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
