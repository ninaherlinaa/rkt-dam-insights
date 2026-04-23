import { Settings2, BookOpen, FileText, Calendar } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import report1 from "@/assets/report-1.jpg";
import report2 from "@/assets/report-2.jpg";

interface Report {
  cover: string;
  title: string;
  subtitle: string;
  year: string;
  pages: { heading: string; body: string }[];
}

const reports: Report[] = [
  {
    cover: report1,
    title: "Laporan Operasi & Pemeliharaan",
    subtitle: "Bendungan RKT 4 — Tahun Anggaran 2024",
    year: "2024",
    pages: [
      {
        heading: "Ringkasan Eksekutif",
        body: "Selama tahun 2024, Bendungan RKT 4 beroperasi dengan keandalan 99,2%. Seluruh kegiatan pemeliharaan rutin dan periodik telah dilaksanakan sesuai jadwal yang ditetapkan, mencakup pembersihan saringan, kalibrasi pintu air, dan inspeksi struktur.",
      },
      {
        heading: "Kegiatan Pemeliharaan",
        body: "Pemeliharaan rutin: 48 kegiatan. Pemeliharaan berkala: 12 kegiatan. Perbaikan minor: 5 kegiatan. Tidak terdapat insiden major yang memerlukan shutdown operasi.",
      },
      {
        heading: "Volume Air Tersalurkan",
        body: "Total debit air yang dilepas ke daerah irigasi mencapai 245 juta m³, melayani 12.500 hektar lahan pertanian di Kecamatan Jatiluhur dan sekitarnya.",
      },
    ],
  },
  {
    cover: report2,
    title: "Laporan Pelayanan Air",
    subtitle: "Distribusi & Layanan Air — Tahun 2023",
    year: "2023",
    pages: [
      {
        heading: "Profil Pelayanan",
        body: "Bendungan RKT 4 melayani kebutuhan air baku untuk 3 PDAM, irigasi 12.500 ha, dan PLTA dengan kapasitas 18 MW. Tingkat kepuasan pengguna mencapai 92%.",
      },
      {
        heading: "Kontinuitas Pelayanan",
        body: "Pelayanan berjalan 365 hari tanpa gangguan signifikan. Koordinasi dengan stakeholder dilakukan secara berkala melalui forum bulanan.",
      },
      {
        heading: "Tarif & Penerimaan",
        body: "Total penerimaan dari biaya jasa pengelolaan sumber daya air (BJPSDA) mencapai Rp 8,4 miliar, meningkat 6% dari tahun sebelumnya.",
      },
    ],
  },
];

export const OperationalAspect = () => {
  const [active, setActive] = useState<Report | null>(null);

  return (
    <section className="container mx-auto px-6 py-16">
      <SectionHeading
        number={2}
        variant="operational"
        icon={Settings2}
        title="Aspek Operasi & Pelayanan"
        subtitle="Buku laporan operasional dan pelayanan bendungan."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {reports.map((r, i) => (
          <button
            key={i}
            onClick={() => setActive(r)}
            className="group relative perspective-[1500px] focus:outline-none"
            aria-label={`Buka ${r.title}`}
          >
            <div className="relative transition-smooth group-hover:[transform:rotateY(-18deg)_rotateX(4deg)] [transform-style:preserve-3d]">
              {/* Page edges */}
              <div className="absolute -right-1 top-2 bottom-2 w-1.5 bg-gradient-to-b from-muted via-muted-foreground/30 to-muted rounded-r" />
              <div className="absolute -right-2 top-3 bottom-3 w-1 bg-gradient-to-b from-muted via-muted-foreground/20 to-muted rounded-r" />

              <img
                src={r.cover}
                alt={r.title}
                className="relative w-full aspect-[3/4] object-cover rounded-l-md rounded-r-2xl shadow-book transition-smooth group-hover:shadow-elegant"
                loading="lazy"
                width={800}
                height={1024}
              />
              {/* Spine shadow */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-primary/40 to-transparent rounded-l-md pointer-events-none" />

              {/* Hover glint */}
              <div className="absolute inset-0 rounded-l-md rounded-r-2xl bg-gradient-to-tr from-transparent via-primary-foreground/0 to-primary-foreground/10 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
            </div>

            <div className="mt-5 text-left">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-aspect-operational mb-1">
                <Calendar className="h-3.5 w-3.5" />
                {r.year}
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-aspect-operational transition-smooth">
                {r.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">{r.subtitle}</p>
              <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-aspect-operational">
                <BookOpen className="h-4 w-4" />
                Buka Laporan
              </div>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {active && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-aspect-operational mb-1">
                  <FileText className="h-3.5 w-3.5" />
                  Laporan Resmi · {active.year}
                </div>
                <DialogTitle className="text-2xl">{active.title}</DialogTitle>
                <DialogDescription>{active.subtitle}</DialogDescription>
              </DialogHeader>

              <div className="space-y-5 mt-4">
                {active.pages.map((p, i) => (
                  <article
                    key={i}
                    className="rounded-xl border border-border bg-gradient-to-br from-muted/30 to-background p-5"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-aspect-operational text-primary-foreground text-xs font-bold">
                        {i + 1}
                      </span>
                      <h4 className="font-bold text-foreground">{p.heading}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-10">
                      {p.body}
                    </p>
                  </article>
                ))}
              </div>

              <div className="flex justify-end mt-4">
                <Button variant="secondary" onClick={() => setActive(null)}>
                  Tutup
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
