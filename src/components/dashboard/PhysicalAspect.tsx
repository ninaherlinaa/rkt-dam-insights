import { Mountain } from "lucide-react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { SectionHeading } from "./SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import phys1 from "@/assets/phys-1.jpg";
import phys2 from "@/assets/phys-2.jpg";
import phys3 from "@/assets/phys-3.jpg";
import phys4 from "@/assets/phys-4.jpg";
import phys5 from "@/assets/phys-5.jpg";
import phys6 from "@/assets/phys-6.jpg";
import phys7 from "@/assets/phys-7.jpg";
import phys8 from "@/assets/phys-8.jpg";

interface Component {
  src: string;
  label: string;
  bobot: number; // %
  nilai: number; // 0-100
}

const components: Component[] = [
  { src: phys1, label: "Tubuh Bendungan Utama", bobot: 20, nilai: 92 },
  { src: phys2, label: "Bendungan Pelana", bobot: 15, nilai: 88 },
  { src: phys3, label: "Bangunan Pengambilan", bobot: 12, nilai: 90 },
  { src: phys4, label: "Bangunan Pelimpah", bobot: 15, nilai: 87 },
  { src: phys5, label: "Pelimpah Darurat", bobot: 10, nilai: 85 },
  { src: phys6, label: "Kondisi Waduk", bobot: 12, nilai: 89 },
  { src: phys7, label: "Kondisi Sempadan & Greenbelt", bobot: 8, nilai: 84 },
  { src: phys8, label: "Masyarakat Sekitar", bobot: 8, nilai: 86 },
];

const getNilaiColor = (nilai: number) => {
  if (nilai >= 90) return "text-success";
  if (nilai >= 80) return "text-aspect-physical";
  return "text-warning";
};

export const PhysicalAspect = () => {
  const autoplay = useRef(
    Autoplay({ delay: 1800, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="container mx-auto px-6 py-16">
      <SectionHeading
        number={1}
        variant="physical"
        icon={Mountain}
        title="Aspek Fisik & Lingkungan"
        subtitle="Dokumentasi kondisi fisik bendungan dan lingkungan sekitar. Berjalan otomatis — bisa juga digeser manual."
      />

      <div className="rounded-3xl bg-gradient-to-br from-muted/50 to-background border border-border/60 p-6 md:p-8 shadow-soft">
        <Carousel
          opts={{ align: "start", loop: true, dragFree: true }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {components.map((c, i) => (
              <CarouselItem
                key={i}
                className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <figure className="group relative overflow-hidden rounded-2xl shadow-elegant transition-smooth hover:scale-[1.02] bg-card border border-border/60">
                  <div className="relative overflow-hidden">
                    <img
                      src={c.src}
                      alt={c.label}
                      className="h-56 w-full object-cover transition-smooth group-hover:scale-110"
                      loading="lazy"
                      width={1024}
                      height={768}
                    />
                    <div className="absolute top-3 right-3 rounded-full bg-background/95 backdrop-blur px-3 py-1 text-xs font-bold text-aspect-physical shadow-soft border border-border/60">
                      Bobot {c.bobot}%
                    </div>
                  </div>
                  <figcaption className="p-4">
                    <h3 className="font-bold text-foreground text-sm leading-snug min-h-[2.5rem]">
                      {c.label}
                    </h3>
                    <div className="mt-3 pt-3 border-t border-border flex items-baseline justify-between">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                        Nilai
                      </span>
                      <span className={`text-2xl font-bold ${getNilaiColor(c.nilai)}`}>
                        {c.nilai}
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
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
    </section>
  );
};
