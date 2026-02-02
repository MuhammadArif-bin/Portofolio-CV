"use client";

import React, { useEffect, useState } from "react";
import type { CertRecord } from "../../lib/certificates";

export default function CertificatesList({ certs }: { certs: CertRecord[] }) {
  const [hasPdf, setHasPdf] = useState<Record<string, boolean>>({});
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function check() {
      const results: Record<string, boolean> = {};
      await Promise.all(
        certs.map(async (c) => {
          if (!c.pdfPath) {
            results[c.id] = false;
            return;
          }
          try {
            const res = await fetch(c.pdfPath, { method: "HEAD" });
            results[c.id] = res.ok;
          } catch (err) {
            results[c.id] = false;
          }
        }),
      );
      if (!mounted) return;
      setHasPdf(results);
      setChecking(false);
    }
    check();
    return () => {
      mounted = false;
    };
  }, [certs]);

  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {certs.map((c) => (
        <div
          key={c.id}
          className="bg-slate-800 border border-slate-700 rounded-md p-4"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <div className="shrink-0 w-12 h-12 rounded-md bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-semibold">
                  {c.badge ??
                    c.title
                      .split(" ")
                      .slice(0, 2)
                      .map((t) => t[0])
                      .join("")}
                </div>
                <div>
                  <h3 className="text-white font-semibold">{c.title}</h3>
                  <p className="text-sm text-slate-400">
                    {c.issuer} • {c.date}
                  </p>
                </div>
              </div>

              {c.description && (
                <p className="mt-3 text-sm text-slate-400">{c.description}</p>
              )}
            </div>

            <div className="flex flex-col items-end gap-2">
              <a
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
                href={`/certificate/${c.id}`}
              >
                View
              </a>

              {checking ? (
                <div className="text-xs text-slate-400">Checking...</div>
              ) : hasPdf[c.id] ? (
                <a
                  className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-3 py-1 text-sm text-slate-200"
                  href={c.pdfPath}
                  download
                >
                  Download (PDF)
                </a>
              ) : (
                <a
                  className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-3 py-1 text-sm text-slate-200"
                  href={`/certificate/${c.id}`}
                >
                  Generate PDF
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
