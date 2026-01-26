import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Web Developer",
  description:
    "Portfolio pribadi - Mahasiswa Informatika mencari magang sebagai Web Developer",
  generator: "Next.js",
  keywords: ["web developer", "portfolio", "react", "next.js", "javascript"],
  authors: [{ name: "Developer" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Portfolio - Web Developer",
    description:
      "Portfolio pribadi - Mahasiswa Informatika mencari magang sebagai Web Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
