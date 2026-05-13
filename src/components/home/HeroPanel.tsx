import { Shield, MapPin } from "lucide-react";
import damHero from "@/assets/dam-hero.jpg";

export const HeroPanel = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={damHero}
          alt="Bendungan RKT 4"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      </div>
      <div className="relative container mx-auto px-6 py-14 md:py-20">
        <div className="flex items-center gap-2 text-white/90 text-sm font-medium tracking-widest uppercase mb-3">
          <MapPin className="h-4 w-4" />
          Unit Pengelola Bendungan RKT 4
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight max-w-3xl">
          Sistem Monitoring &
          <span className="block bg-gradient-to-r from-accent to-primary-foreground bg-clip-text text-transparent">
            Evaluasi Kinerja Bendungan
          </span>
        </h1>
        <p className="mt-5 text-lg text-primary-foreground/80 max-w-2xl">
          Pemantauan terintegrasi tinggi muka air, instrumentasi, dan kondisi terkini bendungan
          secara real-time.
        </p>
        <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 px-5 py-2">
          <Shield className="h-4 w-4 text-accent" />
          <span className="text-primary-foreground text-sm font-medium">
            Status Operasi: Normal · Data terakhir 5 menit lalu
          </span>
        </div>
      </div>
    </header>
  );
};
