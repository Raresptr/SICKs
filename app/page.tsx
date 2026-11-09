import { AssetVault } from "@/components/AssetVault";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { SickNoteGenerator } from "@/components/SickNoteGenerator";
import { Ticker } from "@/components/Ticker";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40">
        <Ticker />
        <Navbar />
      </header>
      <main>
        <Hero />
        <SickNoteGenerator />
        <AssetVault />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
