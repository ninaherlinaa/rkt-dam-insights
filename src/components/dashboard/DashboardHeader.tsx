import { Droplets, Shield } from "lucide-react";
import damHero from "@/assets/dam-hero.jpg";

export const DashboardHeader = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={damHero}
          alt="Bendungan RKT 4 - aerial view"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      </div>

      <div className="relative container mx-auto px-6 py-16 md:py-24">
        <div className="flex items-center gap-2 text-primary-foreground/80 text-sm font-medium tracking-widest uppercase mb-4">
          <Droplets className="h-4 w-4" />
          Direktorat Jenderal Sumber Daya Air
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight max-w-4xl">
          Dashboard Evaluasi Kinerja
          <span className="block bg-gradient-to-r from-accent to-primary-foreground bg-clip-text text-transparent">
            Bendungan RKT 4
          </span>
        </h1>
        <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl">
          Pemantauan menyeluruh terhadap empat aspek utama kinerja bendungan untuk memastikan
          keamanan, keandalan, dan kelestarian operasi.
        </p>
        <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 px-5 py-2.5">
          <Shield className="h-4 w-4 text-accent" />
          <span className="text-primary-foreground text-sm font-medium">
            Periode Evaluasi: Triwulan IV — 2025
          </span>
        </div>
      </div>
    </header>
  );
};
