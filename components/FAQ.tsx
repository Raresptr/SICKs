"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
      <h2 className="text-2xl font-bold uppercase tracking-[0.12em] text-zinc-50 sm:text-3xl">
        ❓ Medical FAQ &amp; Emergency Guidelines
      </h2>
      <div className="mt-6 grid gap-3">
        {FAQ_ITEMS.map((item, index) => {
          const open = openIndex === index;
          return (
            <div
              key={item.question}
              className="rounded-2xl border border-zinc-800/80 bg-zinc-900/80 backdrop-blur-md"
            >
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
              >
                <span className="text-sm font-semibold text-zinc-100 sm:text-base">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#00f0ff] transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-4 text-sm leading-6 text-zinc-300">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
