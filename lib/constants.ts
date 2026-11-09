import type { Diagnosis, FaqItem, RaidAsset } from "@/lib/types";

export const TARGET_DATE = new Date(2026, 10, 19, 0, 0, 0);

export const CONTRACT_ADDRESS = "SICK7Leonida212GbPreloadNov19pump";
export const CONTRACT_ADDRESS_SHORT = "SICK...pump";

export const LINKS = {
  dexscreener: "https://dexscreener.com/solana",
  meteora: "https://app.meteora.ag/",
  x: "https://x.com/SicksOl",
} as const;

export const TICKER_MESSAGE =
  "🚨 URGENT MEDICAL ADVISORY: GLOBAL PRODUCTIVITY COLLAPSE EXPECTED ON NOVEMBER 19, 2026 DUE TO 212 GB LOAD VIRUS — PREPARE YOUR SICK NOTES NOW 🚨";

export const DIAGNOSES: Diagnosis[] = [
  "Acute 212 GB Preload Intoxication",
  "Preventive Carpal Tunnel Syndrome (Controller Grip)",
  "Severe Excel Allergy (Manifesting Nov 19 - Nov 23)",
  "Sudden Terminal Nostalgia for Vice City",
];

export const SEVERITY_LABELS = [
  "Mild Cough",
  "Persistent Screen Fatigue",
  "Cannot Clock In",
  "Completely Bedridden (Unreachable for 72 Hours)",
] as const;

export const INITIAL_SICK_NOTES = 128_402;
export const INITIAL_DAMAGE = 4_289_102;

export const ASSETS: RaidAsset[] = [
  {
    title: "Empty Open-Space Office",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    alt: "Empty open-plan office with rows of vacant desks",
    caption: "Every chair left empty. The 212 GB load virus clocks in for them.",
    raid: "The office is a ghost town. Productivity collapsed on contact. See you after November 19. $SICK @SicksOl",
  },
  {
    title: "Clinic Waiting Room",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
    alt: "Hospital waiting room with empty seats",
    caption: "Triage is a queue for preload intoxication. Controllers are the only medicine.",
    raid: "Leonida Health Dept. waiting room is full. Diagnosis: Acute 212GB Preload Intoxication. $SICK @SicksOl",
  },
  {
    title: "Miami After Midnight",
    image:
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1600&q=80",
    alt: "Neon palm trees and night lights in Miami",
    caption: "Leonida does not do daylight savings. It does neon and sick notes.",
    raid: "Reality is overrated when Leonida awaits. November 19. $SICK @SicksOl",
  },
  {
    title: "Controller Grip Protocol",
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1600&q=80",
    alt: "Close-up of a game controller in neon light",
    caption: "Preventive carpal tunnel. Prescribed rest: 72 hours, unreachable.",
    raid: "Doctor's orders: controller grip only. Unreachable until the preload finishes. $SICK @SicksOl",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is this condition covered by my health insurance?",
    answer:
      "No, but it is fully covered by your Solana wallet balance in $SICK.",
  },
  {
    question: "What should I do if my boss calls me on November 19?",
    answer:
      "Forward them the official generator link, turn off your phone, and submerge yourself in 212 GB of digital paradise.",
  },
  {
    question: "Why November 19?",
    answer: "Because reality is overrated when Leonida awaits.",
  },
];

export function shareCaption(diagnosis: string) {
  return `I have officially been diagnosed with ${diagnosis}. See you all after November 19. 🫡 $SICK @SicksOl`;
}
