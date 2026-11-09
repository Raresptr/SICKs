import { Bird, ChartLine, Droplets } from "lucide-react";
import { LINKS } from "@/lib/constants";

const socials = [
  { href: LINKS.dexscreener, label: "DexScreener", icon: ChartLine },
  { href: LINKS.meteora, label: "Meteora", icon: Droplets },
  { href: LINKS.x, label: "X (Twitter)", icon: Bird },
];

export function Footer() {
  return (
    <footer className="mt-14 border-t border-zinc-800/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6">
        <p className="max-w-3xl text-sm leading-6 text-zinc-400">
          Disclaimer: $SICK is a satirical memecoin created purely for
          entertainment and cultural celebration of the November 19 event. No
          actual medical licenses were harmed in the making of this token.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
            © 2026 Leonida Health Dept. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-800/80 text-zinc-300 transition-all duration-300 hover:scale-[1.02] hover:border-[#00f0ff] hover:text-[#00f0ff]"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
