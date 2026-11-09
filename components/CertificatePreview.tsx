"use client";

import { Great_Vibes, Libre_Baskerville } from "next/font/google";
import type { RefObject } from "react";
import type { CertificateData } from "@/lib/types";

const official = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const signature = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export function CertificatePreview({
  data,
  captureRef,
}: {
  data: CertificateData;
  captureRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={captureRef}
      className={`${official.className} relative w-full max-w-2xl overflow-hidden rounded-2xl border border-[#00f0ff]/40 bg-[#0c1220] px-4 py-6 text-[#e8eefc] shadow-[0_0_40px_rgba(0,240,255,0.15)] sm:px-8 sm:py-8`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 rounded-xl border border-[#ffb700]/40"
      />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#00f0ff]">
            State of Leonida
          </p>
          <h3 className="mt-1 text-xl font-bold uppercase leading-tight tracking-wide text-white sm:text-2xl">
            Department of Health
          </h3>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-400">
            Official Medical Exemption
          </p>
        </div>
        <div
          className="animate-holo flex h-16 w-16 shrink-0 items-center justify-center rounded-full p-[3px]"
          style={{
            backgroundImage:
              "linear-gradient(120deg, #00f0ff, #ff007f, #ffb700, #00f0ff)",
            backgroundSize: "200% 200%",
          }}
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0c1220] text-xl">
            🌴
          </div>
        </div>
      </div>

      <div className="relative mt-6 space-y-3 text-sm leading-6 sm:text-base">
        <p>
          This document certifies that{" "}
          <strong className="text-white">{data.patientName}</strong> is medically
          excused from duties at{" "}
          <strong className="text-white">{data.employer}</strong>.
        </p>
        <dl className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <dt className="text-[10px] uppercase tracking-[0.16em] text-zinc-400">
              Diagnosis
            </dt>
            <dd className="mt-1 text-sm text-white">{data.diagnosis}</dd>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <dt className="text-[10px] uppercase tracking-[0.16em] text-zinc-400">
              Severity
            </dt>
            <dd className="mt-1 text-sm text-white">{data.severityLabel}</dd>
          </div>
        </dl>
        <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">
          Issued {data.issuedAt} · Valid through 23 November 2026
        </p>
      </div>

      <div className="relative mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className={`${signature.className} text-4xl text-[#00f0ff]`}>
            Dr. Johnny Vice
          </p>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
            Dr. Johnny Vice, M.D.
          </p>
        </div>
        <div className="rotate-[-8deg] rounded-md border-4 border-[#ff007f] px-3 py-2 text-center text-[11px] font-bold uppercase leading-tight tracking-[0.14em] text-[#ff007f] sm:text-xs">
          Aproved for
          <br />
          degening &amp; gaming
        </div>
      </div>

      <p className="relative mt-6 border-t border-white/10 pt-3 text-center text-[11px] uppercase tracking-[0.18em] text-[#ffb700] sm:text-xs">
        $SICK | The Official November 19th Currency
      </p>
    </div>
  );
}
