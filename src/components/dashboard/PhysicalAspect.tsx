import { Mountain } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import phys1 from "@/assets/phys-1.jpg";
import phys2 from "@/assets/phys-2.jpg";
import phys3 from "@/assets/phys-3.jpg";
import phys4 from "@/assets/phys-4.jpg";
import phys5 from "@/assets/phys-5.jpg";
import phys6 from "@/assets/phys-6.jpg";
import phys7 from "@/assets/phys-7.jpg";
import phys8 from "@/assets/phys-8.jpg";
import phys9 from "@/assets/phys-9.jpg";

const images = [
  { src: phys1, label: "Spillway Utama" },
  { src: phys2, label: "Jalan Mercu Bendungan" },
  { src: phys3, label: "Permukaan Waduk" },
  { src: phys4, label: "Area Hilir" },
  { src: phys5, label: "Menara Intake" },
  { src: phys6, label: "Dinding Beton" },
  { src: phys7, label: "Pintu Outlet" },
  { src: phys8, label: "Vegetasi Sekitar" },
  { src: phys9, label: "Akses & Keamanan" },
];

export const PhysicalAspect = () => {
  // duplicate for seamless marquee
  const loop = [...images, ...images];

  return (
    <section className="container mx-auto px-6 py-16">
      <SectionHeading
        number={1}
        variant="physical"
        icon={Mountain}
        title="Aspek Fisik & Lingkungan"
        subtitle="Dokumentasi kondisi fisik bendungan dan lingkungan sekitar."
      />

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-muted/50 to-background border border-border/60 p-6 shadow-soft">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 animate-marquee pause-on-hover" style={{ width: "max-content" }}>
          {loop.map((img, i) => (
            <figure
              key={i}
              className="group relative w-72 shrink-0 overflow-hidden rounded-2xl shadow-elegant transition-smooth hover:scale-[1.03]"
            >
              <img
                src={img.src}
                alt={img.label}
                className="h-56 w-full object-cover transition-smooth group-hover:scale-110"
                loading="lazy"
                width={1024}
                height={768}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent p-4">
                <p className="text-primary-foreground font-semibold text-sm">{img.label}</p>
                <p className="text-primary-foreground/70 text-xs mt-0.5">
                  Foto #{(i % images.length) + 1}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
