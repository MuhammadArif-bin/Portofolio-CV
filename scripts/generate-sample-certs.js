/* Lightweight generator for sample PDFs used in development/test.
   Usage: `node ./scripts/generate-sample-certs.js`
   Produces: public/certificates/{ccnav7,mtcna,web-development-certificate}.pdf
*/

const fs = require("fs").promises;
const path = require("path");
const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");

const OUT_DIR = path.join(__dirname, "..", "public", "certificates");
const SAMPLES = [
  {
    id: "ccnav7",
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    name: "Nama Peserta",
    date: "2024",
  },
  {
    id: "mtcna",
    title: "Mikrotik MTCNA",
    issuer: "Mikrotik",
    name: "Nama Peserta",
    date: "2026",
  },
  {
    id: "web-development-certificate",
    title: "Web Development Certificate",
    issuer: "Online Bootcamp",
    name: "Nama Peserta",
    date: "2024",
  },
  {
    id: "pcap",
    title: "PCAP: Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    name: "Nama Peserta",
    date: "2023",
  },
  {
    id: "it-bootcamp",
    title: "IT Bootcamp Certificate",
    issuer: "Bootcamp Organizer",
    name: "Nama Peserta",
    date: "2025",
  },
  {
    id: "ui-ux-fundamentals",
    title: "UI/UX Fundamentals",
    issuer: "Universitas / Course Provider",
    name: "Nama Peserta",
    date: "2022",
  },
];

async function makeSample(sample) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([842, 595]); // landscape-ish A4
  const { width, height } = page.getSize();
  const helv = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helv2 = await pdfDoc.embedFont(StandardFonts.Helvetica);

  page.drawRectangle({
    x: 24,
    y: 24,
    width: width - 48,
    height: height - 48,
    color: rgb(0.97, 0.98, 0.99),
    borderColor: rgb(0.85, 0.88, 0.93),
    borderWidth: 2,
    borderOpacity: 0.9,
  });

  page.drawText(sample.title, {
    x: 48,
    y: height - 120,
    size: 24,
    font: helv,
    color: rgb(0.06, 0.1, 0.2),
  });

  page.drawText("Diberikan kepada", {
    x: 48,
    y: height - 180,
    size: 12,
    font: helv2,
    color: rgb(0.3, 0.36, 0.45),
  });

  page.drawText(sample.name, {
    x: 48,
    y: height - 210,
    size: 34,
    font: helv,
    color: rgb(0.05, 0.09, 0.16),
  });

  page.drawText(sample.issuer + " • " + sample.date, {
    x: 48,
    y: 80,
    size: 10,
    font: helv2,
    color: rgb(0.45, 0.5, 0.56),
  });

  const pdfBytes = await pdfDoc.save();
  await fs.mkdir(OUT_DIR, { recursive: true });
  const outPath = path.join(OUT_DIR, `${sample.id}.pdf`);
  await fs.writeFile(outPath, pdfBytes);
  return outPath;
}

(async () => {
  try {
    console.log("Generating sample certificates into:", OUT_DIR);
    for (const s of SAMPLES) {
      const p = await makeSample(s);
      console.log("  ->", p);
    }
    console.log(
      "Done. You can now open /public/certificates/*.pdf or visit /certificates in the app.",
    );
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();
