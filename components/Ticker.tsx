import { TICKER_MESSAGE } from "@/lib/constants";

export function Ticker() {
  return (
    <div className="overflow-hidden border-b border-[#ffb700]/50 bg-[#ff007f]/15">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <p
            key={copy}
            className="shrink-0 px-8 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ffb700] sm:text-sm"
          >
            {TICKER_MESSAGE}
          </p>
        ))}
      </div>
    </div>
  );
}
