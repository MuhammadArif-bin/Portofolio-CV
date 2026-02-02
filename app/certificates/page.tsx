import { CERT_LIST } from "../../lib/certificates";
import CertificatesList from "../../components/ui/certificates-list";

export const metadata = {
  title: "Sertifikat — Semua",
  description: "Daftar sertifikat — lihat, unduh, atau generate PDF",
};

export default function CertificatesPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white">Semua Sertifikat</h1>
        <p className="text-slate-400 mt-2">
          Lihat sertifikat, unduh PDF statis (jika tersedia) atau generate PDF
          secara client-side.
        </p>
      </div>

      <CertificatesList certs={CERT_LIST} />

      <div className="mt-8 text-sm text-slate-400">
        Tip: letakkan berkas PDF resmi di{" "}
        <code>/public/certificates/*.pdf</code> untuk menyediakan unduhan statis
        yang dapat diverifikasi.
      </div>
    </div>
  );
}
