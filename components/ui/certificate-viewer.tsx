"use client";

import React, { useRef, useState, useEffect } from "react";

type CertData = {
  title: string;
  name: string;
  issuer?: string;
  description?: string;
  date?: string;
  badge?: string;
};

export default function CertificateViewer({ data }: { data: CertData }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  async function generatePdf(openPreview = true) {
    if (!ref.current) return;
    setLoading(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");

      const canvas = await html2canvas(ref.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "white",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        unit: "pt",
        format: "a4",
        orientation: "landscape",
      });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      if (openPreview) {
        const blob = pdf.output("blob");
        const url = URL.createObjectURL(blob);
        setPreviewUrl(url);
      } else {
        pdf.save(
          `${(data.title || "certificate").replace(/\s+/g, "-").toLowerCase()}.pdf`,
        );
      }
    } catch (err) {
      // silent fallback: print
      // eslint-disable-next-line no-console
      console.error(err);
      window.print();
    } finally {
      setLoading(false);
    }
  }

  function handlePrintPreview() {
    if (!previewUrl) return;
    const w = window.open(previewUrl);
    if (!w) return;
    // give the new window a moment to load then print
    setTimeout(() => w.print(), 500);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1">
          <div
            ref={ref}
            className="pdf-page overflow-hidden bg-linear-to-br from-white to-slate-50 text-slate-900"
            style={{ maxWidth: 1122, margin: "0 auto" }}
            role="region"
            aria-label="Certificate preview"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  {data.title}
                </h2>
                <p className="text-sm text-slate-500 mt-1">{data.issuer}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-500">Date</div>
                <div className="font-semibold text-slate-800">{data.date}</div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-12 text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-3">
                Sertifikat Penyelesaian
              </h1>
              <p className="text-xl text-slate-700 mb-8">Diberikan kepada</p>

              <div className="mb-8">
                <div className="text-4xl font-bold text-slate-900">
                  {data.name}
                </div>
                {data.badge && (
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                    {data.badge}
                  </div>
                )}
              </div>

              {data.description && (
                <p className="max-w-2xl mx-auto text-slate-600">
                  {data.description}
                </p>
              )}

              <div className="mt-16 flex items-end justify-between px-8">
                <div className="text-left">
                  <div className="text-sm text-slate-500">Instructor</div>
                  <div className="font-semibold text-slate-800">
                    Tim Pengajar
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-500">Signature</div>
                  <div className="mt-4 h-10 w-40 bg-slate-100 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-3 text-sm text-slate-400">
            Preview akan sesuai saat dicetak / disimpan sebagai PDF.
          </p>
        </div>

        <div className="w-full md:w-72 no-print">
          <div className="bg-slate-800 border border-slate-700 rounded-md p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-400">Sertifikat</div>
                <div className="font-semibold text-white">{data.title}</div>
              </div>
              <div className="text-sm text-slate-400">{data.date}</div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => generatePdf(true)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "Mempersiapkan..." : "Preview PDF"}
              </button>

              <button
                onClick={() => generatePdf(false)}
                className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 px-3 py-2 text-sm text-slate-200 hover:border-slate-500"
                disabled={loading}
              >
                Download PDF
              </button>

              <button
                onClick={() => {
                  if (previewUrl) handlePrintPreview();
                  else
                    generatePdf(true).then(() =>
                      setTimeout(handlePrintPreview, 600),
                    );
                }}
                className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-md bg-slate-700/60 px-3 py-2 text-sm text-slate-200 hover:bg-slate-700"
              >
                Print
              </button>

              <div className="mt-3 text-xs text-slate-400">
                Tip: gunakan tombol "Preview PDF" lalu pilih "Save as PDF" di
                dialog print untuk hasil terbaik.
              </div>
            </div>
          </div>
        </div>
      </div>

      {previewUrl && (
        <div className="bg-slate-900/70 p-4 rounded-md">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-slate-300">Preview PDF</div>
            <div className="flex gap-2">
              <a
                href={previewUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-400 hover:underline"
              >
                Buka di tab baru
              </a>
              <a
                href={previewUrl}
                download={`${(data.title || "certificate").replace(/\s+/g, "-").toLowerCase()}.pdf`}
                className="text-sm text-slate-300 hover:underline"
              >
                Unduh
              </a>
            </div>
          </div>

          <div className="rounded-md overflow-hidden border border-slate-700">
            <iframe
              className="pdf-preview-iframe"
              src={previewUrl}
              title="certificate-pdf-preview"
            />
          </div>
        </div>
      )}
    </div>
  );
}
