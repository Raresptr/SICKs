"use client";

import { useEffect, useState } from "react";
import { TARGET_DATE } from "@/lib/constants";

const UNITS = ["Days", "Hours", "Minutes", "Seconds"] as const;

function remainingParts(now: number) {
  const diff = Math.max(0, TARGET_DATE.getTime() - now);
  const totalSeconds = Math.floor(diff / 1000);
  return {
    done: diff === 0,
    values: [
      Math.floor(totalSeconds / 86400),
      Math.floor((totalSeconds % 86400) / 3600),
      Math.floor((totalSeconds % 3600) / 60),
      totalSeconds % 60,
    ],
  };
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    let id = 0;
    const tick = () => {
      const current = Date.now();
      setNow(current);
      if (current >= TARGET_DATE.getTime()) {
        window.clearInterval(id);
      }
    };
    tick();
    id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const parts = now === null ? null : remainingParts(now);

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {UNITS.map((label, index) => {
        const value = parts ? String(parts.values[index]).padStart(2, "0") : "--";
        return (
          <div
            key={label}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-900/80 px-3 py-4 text-center backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#00f0ff]/60 hover:shadow-[0_0_24px_rgba(0,240,255,0.18)]"
          >
            <p className="font-mono text-3xl font-semibold tabular-nums text-zinc-50 sm:text-4xl">
              {value}
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-zinc-400">
              {label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
