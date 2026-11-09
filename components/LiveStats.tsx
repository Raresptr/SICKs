"use client";

import { useEffect, useState } from "react";
import { INITIAL_DAMAGE, INITIAL_SICK_NOTES } from "@/lib/constants";

const notesFormat = new Intl.NumberFormat("en-US");
const damageFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function LiveStats() {
  const [notes, setNotes] = useState(INITIAL_SICK_NOTES);
  const [damage, setDamage] = useState(INITIAL_DAMAGE);

  useEffect(() => {
    const notesId = window.setInterval(() => {
      setNotes((current) => current + 1 + Math.floor(Math.random() * 7));
    }, 3000);
    const damageId = window.setInterval(() => {
      setDamage((current) => current + 400 + Math.floor(Math.random() * 2600));
    }, 2000);
    return () => {
      window.clearInterval(notesId);
      window.clearInterval(damageId);
    };
  }, []);

  const stats = [
    {
      label: "Total Sick Notes Issued",
      value: notesFormat.format(notes),
      tone: "text-[#00f0ff]",
    },
    {
      label: "Estimated Economic Damage",
      value: damageFormat.format(damage),
      tone: "text-[#ff007f]",
    },
    {
      label: "Global Quarantine Readiness",
      value: "99.8% (Critical)",
      tone: "text-[#ffb700]",
    },
  ];

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-zinc-800/80 bg-zinc-900/80 px-4 py-4 backdrop-blur-md"
        >
          <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-400">
            {stat.label}
          </p>
          <p className={`mt-2 font-mono text-2xl font-semibold tabular-nums ${stat.tone}`}>
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}
