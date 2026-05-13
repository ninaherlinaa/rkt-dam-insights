import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Maximize2, Minus, Plus, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { InstrumentPoint } from "@/data/mock";

type Props = {
  image: string;
  alt: string;
  points: InstrumentPoint[];
};

const conditionStyles: Record<InstrumentPoint["condition"], string> = {
  Baik: "bg-emerald-500 ring-emerald-300",
  "Perlu Perhatian": "bg-amber-500 ring-amber-300",
  Rusak: "bg-red-500 ring-red-300",
};

const MapBody = ({
  image,
  alt,
  points,
  onPointClick,
}: Props & { onPointClick: (p: InstrumentPoint) => void }) => (
  <TransformWrapper
    minScale={1}
    maxScale={5}
    initialScale={1}
    wheel={{ step: 0.15 }}
    doubleClick={{ disabled: true }}
  >
    {({ zoomIn, zoomOut, resetTransform }) => (
      <>
        <div className="absolute top-3 right-3 z-10 flex gap-1 bg-background/80 backdrop-blur rounded-md border border-border p-1">
          <Button size="icon" variant="ghost" onClick={() => zoomIn()} className="h-8 w-8">
            <Plus className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" onClick={() => zoomOut()} className="h-8 w-8">
            <Minus className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" onClick={() => resetTransform()} className="h-8 w-8">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
        <TransformComponent
          wrapperClass="!w-full !h-full"
          contentClass="!w-full !h-full"
        >
          <div className="relative w-full h-full">
            <img
              src={image}
              alt={alt}
              className="w-full h-full object-contain select-none"
              draggable={false}
            />
            {points.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onPointClick(p);
                }}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                className={cn(
                  "absolute -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full ring-4 ring-opacity-60 transition-transform hover:scale-125 animate-pulse",
                  conditionStyles[p.condition],
                )}
                aria-label={p.name}
                title={p.name}
              />
            ))}
          </div>
        </TransformComponent>
      </>
    )}
  </TransformWrapper>
);

export const InstrumentMap = ({ image, alt, points }: Props) => {
  const [selected, setSelected] = useState<InstrumentPoint | null>(null);
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <>
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-border bg-muted/30">
        <MapBody image={image} alt={alt} points={points} onPointClick={setSelected} />
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setFullscreen(true)}
          className="absolute bottom-3 right-3 z-10 gap-2"
        >
          <Maximize2 className="h-4 w-4" /> Perbesar
        </Button>
        <div className="absolute bottom-3 left-3 z-10 flex gap-3 bg-background/80 backdrop-blur rounded-md border border-border px-3 py-1.5 text-xs">
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Baik</span>
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-amber-500" /> Perhatian</span>
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-500" /> Rusak</span>
        </div>
      </div>

      {/* Fullscreen */}
      <Dialog open={fullscreen} onOpenChange={setFullscreen}>
        <DialogContent className="max-w-[95vw] w-[95vw] h-[90vh] p-0">
          <div className="relative w-full h-full">
            <MapBody image={image} alt={alt} points={points} onPointClick={setSelected} />
          </div>
        </DialogContent>
      </Dialog>

      {/* Point detail */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 flex-wrap">
                  <DialogTitle>{selected.name}</DialogTitle>
                  <Badge variant="secondary">{selected.category}</Badge>
                </div>
                <DialogDescription>
                  Status:{" "}
                  <span
                    className={cn(
                      "font-semibold",
                      selected.condition === "Baik" && "text-emerald-600",
                      selected.condition === "Perlu Perhatian" && "text-amber-600",
                      selected.condition === "Rusak" && "text-red-600",
                    )}
                  >
                    {selected.condition}
                  </span>
                </DialogDescription>
              </DialogHeader>
              {selected.image && (
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full rounded-md border border-border"
                  loading="lazy"
                />
              )}
              <p className="text-sm text-foreground/80 leading-relaxed">{selected.description}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
