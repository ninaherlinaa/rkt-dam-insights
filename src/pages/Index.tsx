import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { ScoreCards } from "@/components/dashboard/ScoreCards";
import { PhysicalAspect } from "@/components/dashboard/PhysicalAspect";
import { OperationalAspect } from "@/components/dashboard/OperationalAspect";
import { InstrumentationAspect } from "@/components/dashboard/InstrumentationAspect";
import { InstitutionalAspect } from "@/components/dashboard/InstitutionalAspect";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <DashboardHeader />
      <ScoreCards />
      <PhysicalAspect />
      <OperationalAspect />
      <InstrumentationAspect />
      <InstitutionalAspect />

      <footer className="container mx-auto px-6 py-10 mt-8 border-t border-border">
        <p className="text-center text-sm text-muted-foreground">
          © 2025 Unit Pengelola Bendungan RKT 4 · Direktorat Jenderal Sumber Daya Air
        </p>
      </footer>
    </main>
  );
};

export default Index;
