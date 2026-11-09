import { Countdown } from "@/components/Countdown";
import { LiveStats } from "@/components/LiveStats";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#00f0ff] drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
        State of Leonida // Emergency Directive
      </p>
      <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">
        <span className="bg-gradient-to-r from-[#ff007f] to-[#00f0ff] bg-clip-text text-transparent">
          The 212 GB pandemic is inevitable.
        </span>
      </h1>
      <p className="mt-5 max-w-2xl text-base text-zinc-300 sm:text-lg">
        Official state-sanctioned emergency medical portal for the November 19,
        2026 global male absence event.
      </p>
      <div className="mt-10">
        <Countdown />
      </div>
      <div className="mt-6">
        <LiveStats />
      </div>
    </section>
  );
}
