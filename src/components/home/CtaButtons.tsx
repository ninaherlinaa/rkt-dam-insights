import { Link } from "react-router-dom";
import { Gauge, BarChart3, ArrowRight } from "lucide-react";

export const CtaButtons = () => {
  return (
    <section className="container mx-auto px-6 py-14">
      <div className="grid gap-5 md:grid-cols-2">
        <Link
          to="/instrumen"
          className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary to-primary/70 p-8 text-primary-foreground hover:shadow-xl transition-all"
        >
          <Gauge className="h-10 w-10 mb-4 opacity-90" />
          <h3 className="text-2xl font-bold">Instrumentasi</h3>
          <p className="mt-2 text-primary-foreground/80">
            Lihat data time-series dari setiap kategori instrumen bendungan.
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
            Buka Dashboard <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
        <Link
          to="/evaluasi"
          className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent to-accent/70 p-8 text-accent-foreground hover:shadow-xl transition-all"
        >
          <BarChart3 className="h-10 w-10 mb-4 opacity-90" />
          <h3 className="text-2xl font-bold">Evaluasi Kinerja</h3>
          <p className="mt-2 text-accent-foreground/80">
            Penilaian menyeluruh empat aspek kinerja bendungan periode terkini.
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
            Lihat Penilaian <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </div>
    </section>
  );
};
