import { TopNav } from "@/components/layout/TopNav";
import { HeroPanel } from "@/components/home/HeroPanel";
import { TmaCards } from "@/components/home/TmaCards";
import { ConditionCards } from "@/components/home/ConditionCards";
import { InstrumentMapSection } from "@/components/home/InstrumentMapSection";
import { CtaButtons } from "@/components/home/CtaButtons";
import { morningGloryPoints, accessGalleryPoints } from "@/data/mock";
import morningGloryImg from "@/assets/morning-glory-map.jpg";
import accessGalleryImg from "@/assets/access-gallery-map.jpg";

const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      <TopNav />
      <HeroPanel />
      <TmaCards />
      <ConditionCards />

      <InstrumentMapSection
        id="morning-glory"
        eyebrow="Spillway"
        title="Morning Glory"
        image={morningGloryImg}
        points={morningGloryPoints}
        description="Morning Glory adalah pelimpah (spillway) berbentuk corong (bell-mouth) yang terletak di tengah waduk Bendungan RKT 4. Struktur ini berfungsi mengalirkan air berlebih dari waduk secara aman ke hilir saat elevasi muka air mendekati batas operasi. Pada struktur ini terpasang sejumlah instrumen pemantauan deformasi, tekanan air pori, dan debit pelimpasan untuk memastikan integritas struktur dan keamanan operasi."
      />

      <InstrumentMapSection
        id="access-gallery"
        eyebrow="Inspeksi Internal"
        title="Access Gallery"
        image={accessGalleryImg}
        points={accessGalleryPoints}
        description="Access Gallery adalah lorong inspeksi yang membentang di dalam tubuh bendungan, memungkinkan petugas memantau kondisi pondasi, mengakses instrumen tertanam, serta mengukur rembesan dan tekanan air pori. Lorong ini menjadi tulang punggung kegiatan inspeksi rutin keamanan bendungan."
      />

      <CtaButtons />

      <footer className="container mx-auto px-6 py-10 mt-4 border-t border-border">
        <p className="text-center text-sm text-muted-foreground">
          © 2025 Unit Pengelola Bendungan RKT 4 · Direktorat Jenderal Sumber Daya Air
        </p>
      </footer>
    </main>
  );
};

export default Home;
