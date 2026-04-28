import { Building2, Award, ZoomIn, Users } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import permitImg from "@/assets/permit.jpg";
import orgChart from "@/assets/org-chart.jpg";

export const InstitutionalAspect = () => {
  const [zoom, setZoom] = useState<null | "org" | "permit">(null);

  return (
    <section className="container mx-auto px-6 py-16">
      <SectionHeading
        number={4}
        variant="institutional"
        icon={Building2}
        title="Aspek Kelembagaan"
        subtitle="Struktur organisasi pengelola dan sertifikasi izin operasi."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Org Chart photo */}
        <div className="lg:col-span-3 rounded-3xl gradient-card border border-border/60 p-6 shadow-soft flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-aspect-institutional" strokeWidth={2.4} />
            <h3 className="text-lg font-bold text-foreground">Struktur Organisasi</h3>
          </div>

          <button
            onClick={() => setZoom("org")}
            className="group relative flex-1 rounded-2xl overflow-hidden shadow-elegant focus:outline-none focus:ring-2 focus:ring-aspect-institutional bg-white"
            aria-label="Perbesar struktur organisasi"
          >
            <img
              src={orgChart}
              alt="Struktur Organisasi Unit Pengelola Bendungan RKT 4"
              className="w-full h-full object-contain transition-smooth group-hover:scale-105"
              loading="lazy"
              width={1280}
              height={960}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end justify-center p-4">
              <div className="flex items-center gap-2 text-white font-semibold">
                <ZoomIn className="h-5 w-5" strokeWidth={2.4} />
                Perbesar
              </div>
            </div>
          </button>
        </div>

        {/* Permit */}
        <div className="lg:col-span-2 rounded-3xl gradient-card border border-border/60 p-6 shadow-soft flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-5 w-5 text-aspect-institutional" strokeWidth={2.4} />
            <h3 className="text-lg font-bold text-foreground">Sertifikasi Izin Operasi</h3>
          </div>

          <button
            onClick={() => setZoom("permit")}
            className="group relative flex-1 rounded-2xl overflow-hidden shadow-elegant focus:outline-none focus:ring-2 focus:ring-aspect-institutional"
            aria-label="Perbesar sertifikat"
          >
            <img
              src={permitImg}
              alt="Sertifikat Izin Operasi Bendungan"
              className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              loading="lazy"
              width={1024}
              height={1280}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end justify-center p-4">
              <div className="flex items-center gap-2 text-white font-semibold">
                <ZoomIn className="h-5 w-5" strokeWidth={2.4} />
                Perbesar
              </div>
            </div>
          </button>

          <div className="mt-4 grid grid-cols-2 gap-3 text-center">
            <div className="rounded-lg bg-muted/50 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Nomor
              </p>
              <p className="text-sm font-bold text-foreground mt-1">SIO.B/12/2023</p>
            </div>
            <div className="rounded-lg bg-aspect-institutional/10 p-3 border border-aspect-institutional/30">
              <p className="text-[10px] font-bold uppercase tracking-wider text-aspect-institutional">
                Berlaku s/d
              </p>
              <p className="text-sm font-bold text-foreground mt-1">14 Agt 2028</p>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!zoom} onOpenChange={(o) => !o && setZoom(null)}>
        <DialogContent className="max-w-5xl p-2 bg-white">
          <img
            src={zoom === "org" ? orgChart : permitImg}
            alt={zoom === "org" ? "Struktur Organisasi - perbesar" : "Sertifikat Izin Operasi - perbesar"}
            className="w-full h-auto rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

