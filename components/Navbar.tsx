"use client";

import { useState } from "react";
import { Bird, ChartLine, Copy, Droplets } from "lucide-react";
import {
  CONTRACT_ADDRESS,
  CONTRACT_ADDRESS_SHORT,
  LINKS,
} from "@/lib/constants";

const socials = [
  { href: LINKS.dexscreener, label: "DexScreener", icon: ChartLine },
  { href: LINKS.meteora, label: "Meteora", icon: Droplets },
  { href: LINKS.x, label: "X (Twitter)", icon: Bird },
];

export function Navbar() {
  const [copied, setCopied] = useState(false);

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <nav className="border-b border-zinc-800/80 bg-[#050505]/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl leading-none" aria-hidden="true">
            🌴+➕
          </span>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-zinc-100 drop-shadow-[0_0_15px_rgba(0,240,255,0.3)] sm:text-base">
              Leonida Health Dept.
            </p>
            <p className="mt-1 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-zinc-400">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Live advisory
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative flex items-center gap-2 rounded-2xl border border-zinc-800/80 bg-zinc-900/80 px-3 py-2">
            <span className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
              CA
            </span>
            <code className="font-mono text-sm text-[#00f0ff]">
              {CONTRACT_ADDRESS_SHORT}
            </code>
            <button
              type="button"
              onClick={copyAddress}
              className="inline-flex items-center gap-1 rounded-xl border border-cyan-400/40 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300 transition-all duration-300 hover:scale-[1.02] hover:border-[#00f0ff] hover:shadow-[0_0_18px_rgba(0,240,255,0.35)]"
            >
              <Copy className="h-3.5 w-3.5" aria-hidden="true" />
              Copy CA
            </button>
            {copied ? (
              <span
                role="status"
                className="absolute -bottom-8 right-0 rounded-lg border border-emerald-400/40 bg-zinc-950 px-2 py-1 text-xs text-emerald-300"
              >
                Copied!
              </span>
            ) : null}
          </div>

          <div className="flex items-center gap-1">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-800/80 bg-zinc-900/80 text-zinc-200 transition-all duration-300 hover:scale-[1.02] hover:border-[#ff007f] hover:text-[#ff007f] hover:shadow-[0_0_18px_rgba(255,0,127,0.35)]"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
