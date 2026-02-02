"use client";

import React, { useState } from "react";

export default function CertificateUpload({ id }: { id: string }) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [token, setToken] = useState<string>(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("uploadToken") || ""
      : "",
  );

  const MAX_SIZE = 10 * 1024 * 1024; // 10MB

  function onSelect(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage(null);
    const f = e.target.files?.[0] ?? null;
    if (!f) return setFile(null);
    if (f.type !== "application/pdf")
      return setMessage("Hanya file PDF yang diperbolehkan.");
    if (f.size > MAX_SIZE)
      return setMessage("Ukuran file terlalu besar (maks 10MB).");
    setFile(f);
  }

  async function upload() {
    if (!file) return setMessage("Pilih file PDF terlebih dahulu.");
    setLoading(true);
    setMessage(null);
    try {
      const headers: Record<string, string> = {
        "content-type": "application/pdf",
      };
      if (token) headers["x-upload-token"] = token;

      const res = await fetch(`/api/upload-cert?id=${encodeURIComponent(id)}`, {
        method: "POST",
        headers,
        body: file,
      });

      const bodyText = await res.text();
      let json = null;
      try {
        json = JSON.parse(bodyText);
      } catch (_) {
        json = { raw: bodyText };
      }

      if (!res.ok) {
        throw new Error(json?.error || `Upload gagal (status ${res.status})`);
      }

      setMessage(
        "Upload berhasil — file tersedia di " +
          (json?.path || `/certificates/${id}.pdf`),
      );
      if (token) localStorage.setItem("uploadToken", token);
      setTimeout(() => {
        try {
          window.location.reload();
        } catch (_) {}
      }, 700);
    } catch (err: any) {
      setMessage(err?.message ?? String(err));
    } finally {
      setLoading(false);
      setFile(null);
    }
  }

  return (
    <div className="mt-6 bg-slate-800 border border-slate-700 rounded-md p-4 text-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="text-slate-300 font-semibold mb-1">
            Unggah PDF resmi (opsional)
          </div>
          <div className="text-slate-400 mb-2">
            Jika Anda pemilik sertifikat, unggah file PDF resmi untuk
            menyediakan unduhan yang dapat diverifikasi.
          </div>

          <div className="flex items-center gap-3">
            <label className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-3 py-2 text-sm text-slate-200 bg-slate-900 hover:border-slate-600 cursor-pointer">
              <input
                accept=".pdf"
                onChange={onSelect}
                type="file"
                className="hidden"
              />
              Pilih PDF
            </label>

            <button
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60"
              onClick={upload}
              disabled={!file || loading}
            >
              {loading ? "Mengunggah..." : "Unggah"}
            </button>

            <a
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-3 py-2 text-sm text-slate-200"
              href={`/certificates/${id}.pdf`}
              download
            >
              Unduh (PDF)
            </a>
          </div>

          <div className="mt-3 text-xs text-slate-400">
            Maks 10MB. Di lingkungan produksi simpan PDF di storage yang aman
            (S3/GCS) dan lindungi endpoint upload.
          </div>
        </div>

        <div className="w-36 text-right">
          {message ? (
            <div className="text-xs text-emerald-300">{message}</div>
          ) : (
            <div className="text-xs text-slate-500">
              Belum ada upload terbaru.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
