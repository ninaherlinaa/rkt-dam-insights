import { Link, useLocation, useNavigate } from "react-router-dom";
import { Droplets } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Beranda", to: "/", anchor: "" },
  { label: "Morning Glory", to: "/", anchor: "morning-glory" },
  { label: "Access Gallery", to: "/", anchor: "access-gallery" },
  { label: "Instrumentasi", to: "/instrumen" },
  { label: "Kinerja", to: "/evaluasi" },
];

export const TopNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent, to: string, anchor?: string) => {
    if (anchor) {
      e.preventDefault();
      if (pathname !== to) {
        navigate(to);
        setTimeout(() => {
          document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
        }, 80);
      } else {
        document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-foreground">
          <span className="grid place-items-center h-9 w-9 rounded-lg bg-primary text-primary-foreground">
            <Droplets className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="hidden sm:inline">Bendungan RKT 4</span>
        </Link>
        <ul className="flex items-center gap-1">
          {items.map((it) => {
            const active =
              !it.anchor && pathname === it.to && it.to !== "/";
            return (
              <li key={it.label}>
                <Link
                  to={it.to}
                  onClick={(e) => handleClick(e, it.to, it.anchor)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted",
                    active ? "bg-muted text-foreground" : "text-muted-foreground",
                  )}
                >
                  {it.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
