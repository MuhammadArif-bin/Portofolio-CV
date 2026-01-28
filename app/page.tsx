"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  Download,
} from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "PERANCANGAN WEBSITE PEMESANAN TIKET PESAWAT BERBASIS WEB",
      description:
        "Perancangan ini membahas perancangan dan pengembangan sebuah Website Pemesanan Tiket Pesawat (studi kasus maskapai Lion Air) yang bertujuan untuk mempermudah calon penumpang dalam memesan tiket, mengecek jadwal, dan membandingkan harga secara online.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      link: "http://localhost:8080/admin",
    },
    {
      title: "Website Portofolio & CV",
      description:
        "Website ini adalah platform digital yang dirancang sebagai pusat personal branding profesional. Tujuannya adalah untuk menampilkan riwayat pendidikan, pengalaman kerja, keahlian teknis, serta galeri proyek yang telah dikerjakan secara terstruktur dan estetis. Website ini berfungsi sebagai pengganti CV statis (kertas/PDF) dengan memberikan pengalaman yang lebih interaktif dan mudah diakses oleh perekrut atau klien potensial.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "portofolio-five-gold-36.vercel.app",
    },
    {
      title: "Weather App",
      description: "Aplikasi cuaca real-time dengan API integration",
      tags: ["React", "API", "Tailwind CSS"],
      link: "#",
    },
  ];

  const skills = {
    Frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    Tools: ["Git", "Webpack", "npm", "Visual Studio Code"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-slate-450">&lt;</span>
            <span className="text-xl font-bold text-white">My Portofolio</span>
            <span className="text-slate-450">/&gt;</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {["Home", "Tentang", "Skills", "Projects", "Kontak"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-700 bg-slate-900">
            <div className="flex flex-col gap-4 p-4">
              {["Home", "Tentang", "Skills", "Projects", "Kontak"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-300 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          {/* Grid Background */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, transparent 24%, rgba(79, 172, 254, .05) 25%, rgba(79, 172, 254, .05) 26%, transparent 27%, transparent 74%, rgba(79, 172, 254, .05) 75%, rgba(79, 172, 254, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(79, 172, 254, .05) 25%, rgba(79, 172, 254, .05) 26%, transparent 27%, transparent 74%, rgba(79, 172, 254, .05) 75%, rgba(79, 172, 254, .05) 76%, transparent 77%, transparent)",
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          {/* Floating Lines */}
          <svg
            className="absolute w-full h-full opacity-20"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0,200 Q 250,150 500,200 T 1000,200"
              stroke="url(#grad1)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M 0,400 Q 250,350 500,400 T 1000,400"
              stroke="url(#grad1)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse animation-delay-1000"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="text-center max-w-2xl mx-auto relative z-10">
          {/* Initial Badge */}
          <div className="mb-8 inline-block">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center border-2 border-white/20 shadow-lg animate-float">
              <span className="text-5xl font-bold text-white">MAG</span>
            </div>
          </div>

          {/* Main Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-500 border-cyan-500 shadow-2xl animate-float animation-delay-1000">
              <img
                src="profile.jpg.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-5 leading-tight">
            <span className="block">Halo, Saya</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-gradient">
              Muhammad Arif Giovanni
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">
              Developer
            </span>
          </h2>

          <p className="text-xl text-slate-400 mb-4">
            Mahasiswa Informatika | Web Developer | Fresh Graduate
          </p>
          <p className="text-lg text-slate-500 mb-8">
            Passionate tentang web development dan user experience. Mencari
            kesempatan magang untuk mengembangkan skill teknis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="#projects">Lihat Project</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-500 text-slate-300 hover:bg-slate-800"
              asChild
            >
              <a href="/cv.pdf" download className="flex items-center gap-2">
                <Download size={20} />
                Download CV
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-500 text-slate-300 hover:bg-slate-800"
              asChild
            >
              <a href="#kontak">Hubungi Saya</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Tentang Saya
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-slate-400">
                Saya adalah mahasiswa Informatika dengan passion besar dalam web
                development. Memiliki pengalaman dalam membuat website responsif
                dan interaktif menggunakan HTML5, CSS3, dan JavaScript.
              </p>
              <p className="text-slate-400">
                Saya percaya bahwa teknologi harus accessible dan user-friendly.
                Dalam setiap project, saya fokus pada performa, design yang
                clean, dan best practices dalam coding.
              </p>
              <p className="text-slate-400">
                Saat ini saya sedang mencari kesempatan magang untuk mengasah
                skill dan belajar langsung dari praktisi industri.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-slate-800 border-slate-700 p-4 text-center">
                <p className="text-2xl font-bold text-blue-400">10+</p>
                <p className="text-slate-400">Projects</p>
              </Card>
              <Card className="bg-slate-800 border-slate-700 p-4 text-center">
                <p className="text-2xl font-bold text-cyan-400">3+</p>
                <p className="text-slate-400">Years Learning</p>
              </Card>
              <Card className="bg-slate-800 border-slate-700 p-4 text-center">
                <p className="text-2xl font-bold text-blue-400">100%</p>
                <p className="text-slate-400">Committed</p>
              </Card>
              <Card className="bg-slate-800 border-slate-700 p-4 text-center">
                <p className="text-2xl font-bold text-cyan-400">IDN</p>
                <p className="text-slate-400">Based</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-blue-500/20 text-blue-300 border border-blue-500/50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Timeline Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Pencapaian & Sertifikasi
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="md:flex items-center gap-8">
                <div className="md:w-1/2 md:text-right">
                  <div className="bg-slate-800 border border-slate-700 p-6 rounded-lg hover:border-blue-500 transition-colors animate-timeline-in">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">
                      Certificate IT Bootcamp
                    </h3>
                    <p className="text-slate-400 mb-2">
                      Sertifikasi Transformasi Digital : Integrasi IoT & Kecerdasan Buatan Untuk Solusi Masa Depan
                    </p>
                    <p className="text-cyan-400 font-semibold">2025</p>
                  </div>
                  <p className="text-blue-400 font-semibold">
                     Integrasi IoT & AI
                  </p>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 shadow-lg shadow-blue-500/50"></div>
                </div>
                <div className="md:w-1/2"></div>
              </div>

              {/* Item 2 */}
              <div className="md:flex items-center gap-8 flex-row-reverse">
                <div className="md:w-1/2 md:text-left">
                  <div className="bg-slate-800 border border-slate-700 p-6 rounded-lg hover:border-cyan-500 transition-colors animate-timeline-in animation-delay-1000">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">
                      Certificate CCNAv7: Introduction to Networks
                    </h3>
                    <p className="text-slate-400 mb-2">
                      Sertifikat penyelesaian kursus CCNAv7 -  Introduction to Networks, Cisco Networking Academy
                    </p>
                    <p className="text-blue-400 font-semibold">2024</p>
                  </div>
                  <p className="text-blue-400 font-semibold">
                    Networking, Cisco Packer Tracer
                  </p>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 shadow-lg shadow-cyan-500/50"></div>
                </div>
                <div className="md:w-1/2"></div>
              </div>

              {/* Item 3 */}
              <div className="md:flex items-center gap-8">
                <div className="md:w-1/2 md:text-right">
                  <div className="bg-slate-800 border border-slate-700 p-6 rounded-lg hover:border-purple-500 transition-colors animate-timeline-in animation-delay-2000">
                    <h3 className="text-xl font-bold text-purple-400 mb-2">
                      Certificate Mikrotik MTCNA 
                    </h3>
                    <p className="text-slate-400 mb-2">
                      Sertifikat penyelesaian kursus Mikrotik Network Associate
                    </p>
                    <p className="text-cyan-400 font-semibold">2026</p>
                  </div>
                  <p className="text-blue-400 font-semibold">
                    Mikrotik Network Associate
                  </p>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900 shadow-lg shadow-purple-500/50"></div>
                </div>
                <div className="md:w-1/2"></div>
              </div>

              {/* Item 4 */}
              <div className="md:flex items-center gap-8 flex-row-reverse">
                <div className="md:w-1/2 md:text-left">
                  <div className="bg-slate-800 border border-slate-700 p-6 rounded-lg hover:border-blue-500 transition-colors animate-timeline-in animation-delay-3000">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">
                      Analisis Sentimen Pengguna TikTok Terhadap Postingan Tiktok smartfrenworld Menggunakan Algoritma Naïve Bayes dan Logistic Regression
                    </h3>
                    <p className="text-slate-400 mb-2">
                      Jurnal publikasi mengenai Analisis Sentimen Pengguna TikTok Terhadap Postingan Tiktok smartfrenworld Menggunakan Algoritma Naïve Bayes dan Logistic Regression
                    </p>
                    <p className="text-blue-400 font-semibold">2022</p>
                  </div>
                    <p className="text-blue-400 font-semibold">
                      Sentiment Analysis, Naïve Bayes dan Logistic Regression
                    </p>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 shadow-lg shadow-blue-500/50"></div>
                </div>
                <div className="md:w-1/2"></div>
              </div>

              {/* Item 5 */}
              <div className="md:flex items-center gap-8">
                <div className="md:w-1/2 md:text-right">
                  <div className="bg-slate-800 border border-slate-700 p-6 rounded-lg hover:border-cyan-500 transition-colors animate-timeline-in animation-delay-4000">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">
                      PCAP: Programming Essentials in Python
                    </h3>
                    <p className="text-slate-400 mb-2">
                      Sertifikat penyelesaian kursus PCAP: Programming Essentials in Python, Cisco Networking Academy 
                    </p>
                    <p className="text-cyan-400 font-semibold">2023</p>
                  </div>
                  <p className="text-blue-400 font-semibold">
                    Python
                  </p>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 shadow-lg shadow-cyan-500/50"></div>
                </div>
                <div className="md:w-1/2"></div>
              </div>

              {/* Item 6 */}
              <div className="md:flex items-center gap-8 flex-row-reverse">
                <div className="md:w-1/2 md:text-left">
                  <div className="bg-slate-800 border border-slate-700 p-6 rounded-lg hover:border-purple-500 transition-colors animate-timeline-in animation-delay-5000">
                    <h3 className="text-xl font-bold text-purple-400 mb-2">
                      Fundamental of User Infarce/User Experience
                    </h3>
                    <p className="text-slate-400 mb-2">
                      Sertifikat partisipasi sebagai peserta dala seminar "Fundamental of User Infarce/User Experience" yang diselenggarakan oleh fakultas Teknik & Informatika Universitas BSI.
                    </p>
                    <p className="text-blue-400 font-semibold">2022</p>
                  </div>
                  <p className="text-blue-400 font-semibold">
                    Fundamental
                  </p>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900 shadow-lg shadow-purple-500/50"></div>
                </div>
                <div className="md:w-1/2"></div>
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-8">
              {[
                {
                  title: "Web Development Certificate",
                  desc: "Sertifikasi menyelesaikan kursus web development online",
                  year: "2024",
                },
                {
                  title: "React Mastery Course",
                  desc: "Menguasai React dan advanced JavaScript patterns",
                  year: "2023",
                },
                {
                  title: "JavaScript Advanced",
                  desc: "Sertifikat penguasaan JavaScript advanced dan ES6+",
                  year: "2023",
                },
                {
                  title: "CSS & Responsive Design",
                  desc: "Sertifikasi CSS advanced dan responsive web design",
                  year: "2022",
                },
                {
                  title: "UI/UX Fundamentals",
                  desc: "Sertifikat prinsip-prinsip fundamental UI/UX design",
                  year: "2022",
                },
                {
                  title: "HTML5 Mastery",
                  desc: "Penguasaan HTML5 semantic dan best practices",
                  year: "2021",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="bg-slate-800 border border-slate-700 p-4 rounded-lg hover:border-blue-500 transition-colors"
                >
                  <div className="flex gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="text-sm text-slate-400 mb-1">{item.desc}</p>
                      <p className="text-sm text-cyan-400 font-semibold">
                        {item.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Projects & Achievements
          </h2>
          <h2 className="text-2xl font-bold text-white mb-12 text-center">
            Website yang sukses dibangun dari langkah kecil yang konsisten.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="bg-slate-800 border-slate-700 p-6 hover:border-blue-500 transition-colors group"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-cyan-400 border-cyan-500/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="text-blue-400 hover:text-blue-300 p-0"
                  asChild
                >
                  <a href={project.link} className="flex items-center gap-2">
                    Lihat Project <ExternalLink size={16} />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Hubungi Saya</h2>
          <p className="text-slate-400 mb-12">
            Tertarik untuk berkolaborasi? Hubungi saya melalui email atau media
            sosial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="arifykt@gmail.com" className="flex items-center gap-2">
                <Mail size={20} />
                Email
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-500 text-slate-300"
              asChild
            >
              <a
                href="https://github.com/MuhammadArif-bin/portofolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-500 text-slate-300"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/muhammad-arif-giovanni-50792b3a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-slate-500">
          <p>&copy; 2026 Muhammad Arif Giovanni. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
