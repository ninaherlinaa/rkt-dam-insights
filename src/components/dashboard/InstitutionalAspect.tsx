import { Building2, User, Users, Award, ZoomIn } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import permitImg from "@/assets/permit.jpg";

interface Node {
  name: string;
  role: string;
}

const orgChart: { lead: Node; managers: Node[]; staff: Node[] } = {
  lead: { name: "Ir. Bambang Suryana, M.T.", role: "Kepala Unit Pengelola Bendungan RKT 4" },
  managers: [
    { name: "Dr. Sri Wahyuni", role: "Manajer Operasi & Pemeliharaan" },
    { name: "Ir. Ahmad Fadli", role: "Manajer Teknik & Instrumentasi" },
    { name: "Hendra Pratama, S.T.", role: "Manajer Kelembagaan & Administrasi" },
  ],
  staff: [
    { name: "Tim Operator Pintu", role: "6 orang" },
    { name: "Tim Pemeliharaan", role: "8 orang" },
    { name: "Tim Inspeksi", role: "4 orang" },
    { name: "Tim Monitoring", role: "5 orang" },
    { name: "Tim Administrasi", role: "3 orang" },
    { name: "Tim Keamanan", role: "12 orang" },
  ],
};

export const InstitutionalAspect = () => {
  const [zoom, setZoom] = useState(false);

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
        {/* Org Chart */}
        <div className="lg:col-span-3 rounded-3xl gradient-card border border-border/60 p-6 md:p-8 shadow-soft">
          <div className="flex items-center gap-2 mb-6">
            <Users className="h-5 w-5 text-aspect-institutional" />
            <h3 className="text-lg font-bold text-foreground">Struktur Organisasi</h3>
          </div>

          {/* Lead */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="rounded-2xl bg-[var(--gradient-institutional)] p-5 text-center shadow-elegant">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20 backdrop-blur-sm mb-3">
                  <User className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="text-primary-foreground font-bold text-base">{orgChart.lead.name}</p>
                <p className="text-primary-foreground/85 text-xs mt-1 font-medium">
                  {orgChart.lead.role}
                </p>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center">
            <div className="h-8 w-0.5 bg-aspect-institutional/40" />
          </div>

          {/* Managers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            <div className="hidden md:block absolute top-0 left-[16.66%] right-[16.66%] h-0.5 bg-aspect-institutional/40" />
            {orgChart.managers.map((m, i) => (
              <div key={i} className="relative">
                <div className="hidden md:block absolute -top-4 left-1/2 h-4 w-0.5 bg-aspect-institutional/40 -translate-x-1/2" />
                <div className="rounded-xl bg-card border-2 border-aspect-institutional/30 p-4 text-center hover:border-aspect-institutional transition-smooth hover:-translate-y-0.5">
                  <p className="font-bold text-foreground text-sm">{m.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{m.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Staff teams */}
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Tim Lapangan (38 personel)
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {orgChart.staff.map((s, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-muted/50 px-3 py-2 hover:bg-aspect-institutional/10 transition-smooth"
                >
                  <p className="text-xs font-semibold text-foreground">{s.name}</p>
                  <p className="text-[10px] text-muted-foreground">{s.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Permit */}
        <div className="lg:col-span-2 rounded-3xl gradient-card border border-border/60 p-6 shadow-soft flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-5 w-5 text-aspect-institutional" />
            <h3 className="text-lg font-bold text-foreground">Sertifikasi Izin Operasi</h3>
          </div>

          <button
            onClick={() => setZoom(true)}
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
              <div className="flex items-center gap-2 text-primary-foreground font-semibold">
                <ZoomIn className="h-5 w-5" />
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

      <Dialog open={zoom} onOpenChange={setZoom}>
        <DialogContent className="max-w-3xl p-2">
          <img
            src={permitImg}
            alt="Sertifikat Izin Operasi - perbesar"
            className="w-full h-auto rounded-lg"
            width={1024}
            height={1280}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};
