import { InstrumentMap } from "./InstrumentMap";
import type { InstrumentPoint } from "@/data/mock";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  points: InstrumentPoint[];
};

export const InstrumentMapSection = ({ id, eyebrow, title, description, image, points }: Props) => {
  return (
    <section id={id} className="container mx-auto px-6 py-12 scroll-mt-20">
      <div className="mb-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-primary">{eyebrow}</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-1">{title}</h2>
      </div>
      <InstrumentMap image={image} alt={title} points={points} />
      <div className="mt-6 prose prose-sm max-w-none text-foreground/80">
        <p className="leading-relaxed">{description}</p>
      </div>
    </section>
  );
};
