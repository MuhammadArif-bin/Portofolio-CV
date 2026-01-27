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
      title: "E-Commerce Platform",
      description: "Platform e-commerce dengan fitur cart dan checkout",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
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
        className="min-h-screen flex items-center justify-center px-4 pt-20"
      >
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-500 border-cyan-500">
              <img
                src="profile.jpg.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-5">
            Halo, Saya {"Muhammad Arif Giovanni"}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Developer
            </span>
          </h1>
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
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
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
