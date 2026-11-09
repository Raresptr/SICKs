export type Diagnosis =
  | "Acute 212 GB Preload Intoxication"
  | "Preventive Carpal Tunnel Syndrome (Controller Grip)"
  | "Severe Excel Allergy (Manifesting Nov 19 - Nov 23)"
  | "Sudden Terminal Nostalgia for Vice City";

export interface CertificateData {
  patientName: string;
  employer: string;
  diagnosis: Diagnosis;
  severityLabel: string;
  issuedAt: string;
}

export interface RaidAsset {
  title: string;
  image: string;
  alt: string;
  caption: string;
  raid: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
