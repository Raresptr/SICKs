"use client";

import { useState } from "react";
import Image from "next/image";
import { Copy, Download } from "lucide-react";
import { ASSETS } from "@/lib/constants";

export function AssetVault() {
  const [copiedTitle, setCopiedTitle] = useState<string | null>(null);

  async function copyRaid(title: string, raid: string) {
    try {
      await navigator.clipboard.writeText(raid);
      setCopiedTitle(title);
      window.setTimeout(() => setCopiedTitle(null), 2000);
    } catch {
      setCopiedTitle(null);
    }
  }

  return (
    <section id="assets" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <h2 className="text-2xl font-bold uppercase tracking-[0.12em] text-zinc-50 sm:text-3xl">
        📁 Propaganda &amp; Raid Assets
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {ASSETS.map((asset) => (
          <article
            key={asset.title}
            className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/80 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#00f0ff]/50"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={asset.image}
                alt={asset.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-3 p-4">
              <div>
                <h3 className="text-lg font-semibold text-zinc-50">{asset.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{asset.caption}</p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <a
                  href={asset.image}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-700 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-100 transition-all duration-300 hover:border-[#00f0ff] hover:text-[#00f0ff]"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  Download Asset
                </a>
                <button
                  type="button"
                  onClick={() => copyRaid(asset.title, asset.raid)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-700 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-100 transition-all duration-300 hover:border-[#ff007f] hover:text-[#ff007f]"
                >
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  {copiedTitle === asset.title ? "Copied!" : "Copy for X Raid"}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
