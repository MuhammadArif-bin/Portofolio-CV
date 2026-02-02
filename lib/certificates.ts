export type CertRecord = {
  id: string;
  title: string;
  description?: string;
  issuer?: string;
  date?: string;
  badge?: string;
  pdfPath?: string; // /certificates/<id>.pdf if a static PDF is provided in public/
};

export const CERTS: Record<string, CertRecord> = {
  ccnav7: {
    id: "ccnav7",
    title: "CCNAv7: Introduction to Networks",
    description:
      "Sertifikat penyelesaian CCNAv7 — pengenalan konsep jaringan, protokol dasar, dan praktik konfigurasi dasar.",
    issuer: "Cisco Networking Academy",
    date: "2024",
    badge: "CCNA v7",
    pdfPath: "/certificates/ccnav7.pdf",
  },
  mtcna: {
    id: "mtcna",
    title: "Mikrotik MTCNA",
    description: "Sertifikat Mikrotik Network Associate (MTCNA).",
    issuer: "Mikrotik",
    date: "2026",
    badge: "MTCNA",
    pdfPath: "/certificates/mtcna.pdf",
  },
  "web-development-certificate": {
    id: "web-development-certificate",
    title: "Web Development Certificate",
    description: "Sertifikat menyelesaikan kursus web development online.",
    issuer: "Online Bootcamp",
    date: "2024",
    badge: "Web Dev",
    pdfPath: "/certificates/web-development-certificate.pdf",
  },
  pcap: {
    id: "pcap",
    title: "PCAP: Programming Essentials in Python",
    description:
      "Sertifikat penyelesaian kursus PCAP: Programming Essentials in Python.",
    issuer: "Cisco Networking Academy",
    date: "2023",
    badge: "PCAP",
    pdfPath: "/certificates/pcap.pdf",
  },
  "it-bootcamp": {
    id: "it-bootcamp",
    title: "IT Bootcamp Certificate",
    description: "Sertifikat IT Bootcamp — Integrasi IoT & AI.",
    issuer: "Bootcamp Organizer",
    date: "2025",
    badge: "IT Bootcamp",
    pdfPath: "/certificates/it-bootcamp.pdf",
  },
  "ui-ux-fundamentals": {
    id: "ui-ux-fundamentals",
    title: "UI/UX Fundamentals",
    description: "Sertifikat prinsip-prinsip fundamental UI/UX design.",
    issuer: "Universitas / Course Provider",
    date: "2022",
    badge: "UI/UX",
    pdfPath: "/certificates/ui-ux-fundamentals.pdf",
  },
};

export const CERT_LIST = Object.values(CERTS);
