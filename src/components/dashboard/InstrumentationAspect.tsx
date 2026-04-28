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

interface InstrumentDetail {
  nama: string;
  jumlah: string;
  lokasi: string;
  keterangan: string;
}

interface Parameter {
  no: number;
  icon: LucideIcon;
  parameter: string;
  totalJumlah: string;
  instruments: InstrumentDetail[];
}

const parameters: Parameter[] = [
  {
    no: 1,
    icon: Waves,
    parameter: "Tinggi Muka Air Waduk",
    totalJumlah: "2 instrumen",
    instruments: [
      {
        nama: "Automatic Water Level Recorder (AWLR)",
        jumlah: "1",
        lokasi: "Menara intake bendungan utama",
        keterangan: "Baik dan beroperasi normal, data terkirim real-time ke pusat data.",
      },
      {
        nama: "Staff Gauge (Peilschaal)",
        jumlah: "1",
        lokasi: "Dekat spillway, sisi hulu",
        keterangan: "Baik, digunakan sebagai pembanding manual untuk AWLR.",
      },
    ],
  },
  {
    no: 2,
    icon: CloudRain,
    parameter: "Curah Hujan",
    totalJumlah: "3 instrumen",
    instruments: [
      {
        nama: "Automatic Rainfall Recorder (ARR)",
        jumlah: "2",
        lokasi: "Hulu waduk dan tubuh bendungan",
        keterangan: "Baik, mencatat intensitas hujan per jam secara otomatis.",
      },
      {
        nama: "Penakar Hujan Manual (Ombrometer)",
        jumlah: "1",
        lokasi: "Hilir bendungan",
        keterangan: "Baik, dibaca harian oleh petugas pos jaga.",
      },
    ],
  },
  {
    no: 3,
    icon: Move,
    parameter: "Pergerakan Eksternal",
    totalJumlah: "12 titik",
    instruments: [
      {
        nama: "Patok Geodetik (BM & Target)",
        jumlah: "8",
        lokasi: "Mercu bendungan dan lereng hulu/hilir",
        keterangan: "Baik, diukur periodik dengan total station setiap triwulan.",
      },
      {
        nama: "Crackmeter",
        jumlah: "4",
        lokasi: "Sambungan struktur beton spillway",
        keterangan: "3 unit baik, 1 unit perlu kalibrasi ulang.",
      },
    ],
  },
  {
    no: 4,
    icon: ArrowDownUp,
    parameter: "Pergerakan Internal",
    totalJumlah: "24 instrumen",
    instruments: [
      {
        nama: "Inclinometer",
        jumlah: "12",
        lokasi:
          "Lereng hilir bendungan utama (vertical casing) — CL747, CL720, CL713B, CL739, CL748, CL749, CL750, CL717B, CL786, P760, PB25L, P60L",
        keterangan: "Rusak, digunakan sebagai sumur pengamatan.",
      },
      {
        nama: "Inclino dan Ring Magnet (Multilayer)",
        jumlah: "5",
        lokasi:
          "3 bh di puncak bendungan utama (inclined casing — IC260L, IC80L, IC80R); 2 bh di lereng hilir bendungan utama (vertical casing — IC75L, IC75R)",
        keterangan:
          "3 buah baik & bisa diukur. Pada IC75L: 1 buah baik, 1 buah tersumbat sejak Agustus 2010.",
      },
      {
        nama: "Lubang Bore (Bore Hole)",
        jumlah: "5",
        lokasi: "Puncak bendungan (IC260L, IC80L, IC80R, IC75L, IC75R)",
        keterangan: "3 bh baik dan bisa diukur, 2 bh rusak (IC75L dan IC75R).",
      },
      {
        nama: "Differential Settlement of Filter & Core (Disposlip)",
        jumlah: "2",
        lokasi: "Puncak bendungan sebelah hilir (downstream crest — P50L, P100L)",
        keterangan: "Baik dan bisa diukur.",
      },
    ],
  },
  {
    no: 5,
    icon: Gauge,
    parameter: "Tekanan Air Pori & Tinggi Muka Air Tanah",
    totalJumlah: "16 instrumen",
    instruments: [
      {
        nama: "Piezometer Pneumatik",
        jumlah: "8",
        lokasi: "Fondasi bendungan utama dan bendungan pelana",
        keterangan: "7 unit baik, 1 unit memerlukan penggantian sensor.",
      },
      {
        nama: "Piezometer Vibrating Wire",
        jumlah: "5",
        lokasi: "Inti dan filter tubuh bendungan",
        keterangan: "Seluruhnya baik, terhubung ke datalogger.",
      },
      {
        nama: "Sumur Observasi (Open Standpipe)",
        jumlah: "3",
        lokasi: "Sekitar kaki hilir bendungan",
        keterangan: "Baik, dibaca manual setiap minggu.",
      },
    ],
  },
  {
    no: 6,
    icon: Droplets,
    parameter: "Debit Rembesan",
    totalJumlah: "4 instrumen",
    instruments: [
      {
        nama: "V-Notch Weir",
        jumlah: "3",
        lokasi: "Toe drain bendungan utama dan bendungan pelana",
        keterangan: "Baik, debit rembesan dalam batas normal.",
      },
      {
        nama: "Flowmeter Elektromagnetik",
        jumlah: "1",
        lokasi: "Outlet drainage gallery",
        keterangan: "Baik, terhubung ke sistem monitoring real-time.",
      },
    ],
  },
  {
    no: 7,
    icon: AlertTriangle,
    parameter: "Pemantauan Bocoran",
    totalJumlah: "Inspeksi rutin",
    instruments: [
      {
        nama: "Inspeksi Visual Lereng Hilir",
        jumlah: "1 tim",
        lokasi: "Seluruh permukaan lereng hilir bendungan",
        keterangan: "Dilakukan harian, tidak ditemukan bocoran abnormal.",
      },
      {
        nama: "Turbidity Meter (Pengukur Kekeruhan)",
        jumlah: "2",
        lokasi: "Outlet rembesan utama dan toe drain",
        keterangan: "Baik, kekeruhan stabil < 5 NTU (indikasi tidak ada piping).",
      },
    ],
  },
  {
    no: 8,
    icon: Zap,
    parameter: "Pengukuran Kegempaan",
    totalJumlah: "2 instrumen",
    instruments: [
      {
        nama: "Strong Motion Accelerograph (SMA)",
        jumlah: "1",
        lokasi: "Crest bendungan utama",
        keterangan: "Baik, merekam respons getaran terhadap aktivitas seismik.",
      },
      {
        nama: "Seismometer",
        jumlah: "1",
        lokasi: "Galery (gallery) inspeksi bendungan",
        keterangan: "Baik, terkoneksi dengan jaringan BMKG regional.",
      },
    ],
  },
];

export const InstrumentationAspect = () => {
  const [active, setActive] = useState<Parameter | null>(null);
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="container mx-auto px-6 py-16">
      <SectionHeading
        number={3}
        variant="instrumentation"
        icon={Activity}
        title="Aspek Instrumentasi & Pemeriksaan"
        subtitle="Parameter pemantauan kondisi struktural bendungan. Berjalan otomatis — bisa digeser manual & klik untuk detail instrumen."
      />

      <div className="rounded-3xl bg-gradient-to-br from-muted/40 to-background border border-border/60 p-6 md:p-8 shadow-soft">
        <Carousel
          opts={{ align: "start", loop: true, dragFree: true }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {parameters.map((p, i) => {
              const Icon = p.icon;
              return (
                <CarouselItem
                  key={i}
                  className="pl-4 basis-[80%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <button
                    onClick={() => setActive(p)}
                    className="group w-full h-full text-left rounded-2xl bg-card border border-border/60 p-5 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth focus:outline-none focus:ring-2 focus:ring-aspect-instrumentation focus:ring-offset-2"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-xl bg-aspect-instrumentation/20 animate-ripple" />
                        <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-background shadow-soft ring-2 ring-aspect-instrumentation">
                          <Icon className="h-5 w-5 text-aspect-instrumentation" strokeWidth={2.4} />
                        </div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-aspect-instrumentation text-white">
                        {p.totalJumlah}
                      </span>
                    </div>
                    <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-1">
                      Parameter {p.no}
                    </div>
                    <h3 className="font-bold text-foreground group-hover:text-aspect-instrumentation transition-smooth text-sm leading-snug min-h-[2.5rem]">
                      {p.parameter}
                    </h3>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-1">
                        Jumlah Instrumen
                      </p>
                      <p className="text-xs text-foreground/80">
                        {p.instruments.length} jenis instrumen — klik untuk detail
                      </p>
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
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {active && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--gradient-instrumentation)] shadow-soft shrink-0 ring-1 ring-white/30">
                    <active.icon className="h-6 w-6 text-white" strokeWidth={2.4} />
                  </div>
                  <div>
                    <div className="text-[10px] text-aspect-instrumentation font-bold uppercase tracking-wider">
                      Parameter {active.no}
                    </div>
                    <DialogTitle className="text-xl">{active.parameter}</DialogTitle>
                    <DialogDescription>
                      Total {active.totalJumlah} · {active.instruments.length} jenis instrumen
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="mt-2 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-aspect-instrumentation/10 text-foreground">
                      <th className="text-left px-3 py-2 font-bold text-[11px] uppercase tracking-wider w-10">
                        No
                      </th>
                      <th className="text-left px-3 py-2 font-bold text-[11px] uppercase tracking-wider">
                        Nama Instrumen
                      </th>
                      <th className="text-left px-3 py-2 font-bold text-[11px] uppercase tracking-wider w-16">
                        Jumlah
                      </th>
                      <th className="text-left px-3 py-2 font-bold text-[11px] uppercase tracking-wider">
                        Lokasi Pemasangan
                      </th>
                      <th className="text-left px-3 py-2 font-bold text-[11px] uppercase tracking-wider">
                        Keterangan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {active.instruments.map((ins, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-border align-top hover:bg-muted/30 transition-smooth"
                      >
                        <td className="px-3 py-3 font-semibold text-aspect-instrumentation">
                          {idx + 1}
                        </td>
                        <td className="px-3 py-3 font-semibold text-foreground">{ins.nama}</td>
                        <td className="px-3 py-3 font-bold text-foreground">{ins.jumlah}</td>
                        <td className="px-3 py-3 text-foreground/80 leading-relaxed">
                          {ins.lokasi}
                        </td>
                        <td className="px-3 py-3 text-foreground/80 leading-relaxed">
                          {ins.keterangan}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
