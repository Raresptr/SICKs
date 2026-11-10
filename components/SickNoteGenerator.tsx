"use client";

import { useRef, useState, type FormEvent } from "react";
import { Download, Share2 } from "lucide-react";
import { domToPng } from "modern-screenshot";
import { CertificatePreview } from "@/components/CertificatePreview";
import { DIAGNOSES, SEVERITY_LABELS, shareCaption } from "@/lib/constants";
import type { CertificateData, Diagnosis } from "@/lib/types";

const fieldClass =
  "w-full rounded-xl border border-zinc-700 bg-zinc-950/70 px-3 py-3 text-sm text-zinc-100 outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-[#ff007f] focus:ring-2 focus:ring-[#00f0ff]";

export function SickNoteGenerator() {
  const [patientName, setPatientName] = useState("");
  const [employer, setEmployer] = useState("");
  const [diagnosis, setDiagnosis] = useState<Diagnosis>(DIAGNOSES[0]);
  const [severity, setSeverity] = useState(SEVERITY_LABELS.length - 1);
  const [error, setError] = useState("");
  const [certificate, setCertificate] = useState<CertificateData | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");
  const captureRef = useRef<HTMLDivElement>(null);

  function generate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = patientName.trim();
    const workplace = employer.trim();
    if (!name || !workplace) {
      setError("Patient name and employer are required.");
      setCertificate(null);
      return;
    }
    setError("");
    setDownloadError("");
    setCertificate({
      patientName: name,
      employer: workplace,
      diagnosis,
      severityLabel: SEVERITY_LABELS[severity],
      issuedAt: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    });
  }

  async function downloadImage() {
    const node = captureRef.current;
    if (!node) return;
    setDownloading(true);
    setDownloadError("");
    try {
      const dataUrl = await domToPng(node, {
        backgroundColor: "#0c1220",
        scale: 2,
      });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "leonida-sick-note.png";
      link.click();
    } catch (error) {
      console.error(error);
      setDownloadError("Could not capture the note. Try again.");
    } finally {
      setDownloading(false);
    }
  }

  function shareOnX() {
    if (!certificate) return;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareCaption(certificate.diagnosis),
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="generator" className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
      <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/80 p-4 backdrop-blur-md sm:p-8">
        <h2 className="text-xl font-bold uppercase tracking-[0.12em] text-zinc-50 sm:text-2xl">
          📋 Leonida Medical Exemption Generator
        </h2>
        <form onSubmit={generate} className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm text-zinc-300">
            Patient Name / X Handle
            <input
              className={fieldClass}
              value={patientName}
              onChange={(event) => setPatientName(event.target.value)}
              placeholder="@RaresPatrana"
              autoComplete="nickname"
            />
          </label>
          <label className="grid gap-2 text-sm text-zinc-300">
            Employer / Institution Name
            <input
              className={fieldClass}
              value={employer}
              onChange={(event) => setEmployer(event.target.value)}
              placeholder="Global Corporate Inc."
              autoComplete="organization"
            />
          </label>
          <label className="grid gap-2 text-sm text-zinc-300">
            Primary Symptoms / Diagnosis
            <select
              className={fieldClass}
              value={diagnosis}
              onChange={(event) => setDiagnosis(event.target.value as Diagnosis)}
            >
              {DIAGNOSES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm text-zinc-300">
            <span className="flex items-center justify-between gap-3">
              Severity Level
              <span className="text-right text-[#ffb700]">
                {SEVERITY_LABELS[severity]}
              </span>
            </span>
            <input
              type="range"
              min={0}
              max={SEVERITY_LABELS.length - 1}
              step={1}
              value={severity}
              onChange={(event) => setSeverity(Number(event.target.value))}
              className="h-2 w-full cursor-pointer accent-[#ff007f]"
              aria-valuetext={SEVERITY_LABELS[severity]}
            />
            <span className="flex justify-between text-[11px] uppercase tracking-wide text-zinc-500">
              <span>Mild Cough</span>
              <span className="text-right">
                Completely Bedridden (Unreachable for 72 Hours)
              </span>
            </span>
          </label>
          {error ? (
            <p role="alert" className="text-sm text-[#ff007f]">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            className="rounded-2xl bg-gradient-to-r from-[#ff007f] to-[#00f0ff] px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-zinc-950 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(0,240,255,0.35)]"
          >
            Generate Official Exemption
          </button>
        </form>

        {certificate ? (
          <div className="mt-8 grid justify-items-center gap-4">
            <CertificatePreview data={certificate} captureRef={captureRef} />
            <div className="flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={downloadImage}
                disabled={downloading}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#00f0ff]/50 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[#00f0ff] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] disabled:opacity-60"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                {downloading ? "Capturing..." : "Download Official Image"}
              </button>
              <button
                type="button"
                onClick={shareOnX}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#ff007f]/50 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[#ff007f] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,0,127,0.25)]"
              >
                <Share2 className="h-4 w-4" aria-hidden="true" />
                Share on X (Notify Your Boss)
              </button>
            </div>
            {downloadError ? (
              <p role="alert" className="text-sm text-[#ff007f]">
                {downloadError}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
