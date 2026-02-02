import CertificateViewer from "../../../components/ui/certificate-viewer";
import CertificateUpload from "../../../components/ui/certificate-upload";

type Params = { params: { id: string } };

const CERTS: Record<string, any> = {
  ccnav7: {
    title: "CCNAv7: Introduction to Networks",
    name: "Nama Peserta",
    issuer: "Cisco Networking Academy",
    description:
      "Sertifikat penyelesaian CCNAv7 — pengenalan konsep jaringan, protokol dasar, dan praktik konfigurasi dasar.",
    date: "2024",
    badge: "CCNA v7",
  },
  mtcna: {
    title: "Mikrotik MTCNA",
    name: "Nama Peserta",
    issuer: "Mikrotik",
    description: "Sertifikat Mikrotik Network Associate (MTCNA).",
    date: "2026",
    badge: "MTCNA",
  },
  "web-development-certificate": {
    title: "Web Development Certificate",
    name: "Nama Peserta",
    issuer: "Online Bootcamp",
    description: "Sertifikat menyelesaikan kursus web development online.",
    date: "2024",
    badge: "Web Dev",
  },
  pcap: {
    title: "PCAP: Programming Essentials in Python",
    name: "Nama Peserta",
    issuer: "Cisco Networking Academy",
    description:
      "Sertifikat penyelesaian kursus PCAP: Programming Essentials in Python.",
    date: "2023",
    badge: "PCAP",
  },
  "it-bootcamp": {
    title: "IT Bootcamp Certificate",
    name: "Nama Peserta",
    issuer: "Bootcamp Organizer",
    description: "Sertifikat IT Bootcamp — Integrasi IoT & AI.",
    date: "2025",
    badge: "IT Bootcamp",
  },
  "ui-ux-fundamentals": {
    title: "UI/UX Fundamentals",
    name: "Nama Peserta",
    issuer: "Universitas / Course Provider",
    description: "Sertifikat prinsip-prinsip fundamental UI/UX design.",
    date: "2022",
    badge: "UI/UX",
  },
};

export default function CertificatePage({ params }: Params) {
  const id = params.id?.toLowerCase() ?? "";
  const cert = CERTS[id] ?? {
    title: "Sertifikat",
    name: "Nama Peserta",
    issuer: "Penyelenggara",
    description: "Contoh sertifikat — isi dapat diganti melalui data dinamis.",
    date: new Date().getFullYear().toString(),
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">{cert.title}</h1>
          <p className="text-sm text-slate-400 mt-1">
            {cert.issuer} — {cert.date}
          </p>
        </div>
        <div className="text-sm">
          <a href="/" className="text-blue-400 hover:underline">
            Kembali ke beranda
          </a>
        </div>
      </div>

      <CertificateViewer data={cert} />

      <div className="mt-8 text-sm text-slate-400">
        Catatan: tombol <strong>Preview PDF</strong> akan menghasilkan file PDF
        dari tampilan sertifikat (client-side).
      </div>

      {/* Upload PDF (owner) */}
      <CertificateUpload id={id} />
    </div>
  );
}
