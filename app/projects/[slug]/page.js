"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const projectData = [
  {
    slug: "modeling-character",
    title: "Modeling Character",
    desc: "3D character modeling untuk kebutuhan game dan animasi menggunakan tools desain digital.",
    skills: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    demo: "https://digital-team.vercel.app",
    github: "https://github.com/username/digital-team",
    image: "/projekk-1.jpg"
  },
  {
    slug: "e-commerce-website",
    title: "E-Commerce Website",
    desc: "Website toko online modern dengan fitur katalog produk dan keranjang belanja.",
    skills: ["HTML", "Tailwind CSS", "JavaScript"],
    demo: "https://portfolio.vercel.app",
    github: "https://github.com/username/portfolio",
    image: "/projekk-2.jpg"
  },
  {
    slug: "website-penawaran-pekerjaan",
    title: "Website Penawaran pekerjaan",
    desc: "Website untuk mencari penawaran kerja dan informasi lowongan pekerjaan.",
    skills: ["React", "Next.js", "Tailwind CSS"],
    demo: "https://penawaran-kerja.vercel.app",
    github: "https://github.com/username/penawaran-kerja",
    image: "/projekk-3.jpg"
  },
  {
    slug: "website-bimbingan-konseling",
    title: "Website Bimbingan Konseling",
    desc: "Website untuk menyediakan layanan bimbingan konseling dan informasi terkait kesehatan mental.",
    skills: ["React", "Next.js", "Tailwind CSS"],
    demo: "https://bimbingan-konseling.vercel.app",
    github: "https://github.com/username/bimbingan-konseling",
    image: "/projekk-4.jpg"
  },
  {
    slug: "website-portofolio",
    title: "Website Portofolio",
    desc: "Website portofolio profesional untuk menampilkan karya dan pengalaman kerja.",
    skills: ["React", "Next.js", "Tailwind CSS"],
    demo: "https://portofolio.vercel.app",
    github: "https://github.com/username/portofolio",
    image: "/projekk-5.jpg"
  },
  {
    slug: "website-penyewaan-kamar",
    title: "Website Penyewaan Kamar",
    desc: "Website untuk menyewa kamar dengan fitur pencarian dan pemesanan.",
    skills: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demo: "https://portofolio.vercel.app",
    github: "https://github.com/username/portofolio",
    image: "/projekk-6.jpg"
  },
];

export default function ProjectDetail() {
  const params = useParams();
  const project = projectData.find(p => p.slug === params.slug);

  if (!project)
    return <p className="p-10 text-center text-red-500">Project not found</p>;

  return (
    <main className="max-w-6xl mx-auto p-6 md:p-10 space-y-8 bg-white text-black">

      {/* BACK BUTTON */}
      <motion.a
        href="/#projects"
        className="inline-block text-sm font-semibold hover:underline"
        whileHover={{ scale: 1.05 }}
      >
        ← Back to Projects
      </motion.a>

      {/* TITLE */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {project.title}
      </motion.h1>

      {/* IMAGE */}
      <motion.div
        className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={600}
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* DESCRIPTION */}
      <motion.p
        className="text-gray-800 leading-relaxed text-lg md:text-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {project.desc}
      </motion.p>

      {/* SKILLS */}
      <motion.div
        className="flex flex-wrap gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {project.skills.map(skill => (
          <span
            key={skill}
            className="bg-black/10 text-black px-4 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-black/20 transition"
          >
            {skill}
          </span>
        ))}
      </motion.div>

      {/* ACTION BUTTONS */}
      <motion.div
        className="flex flex-wrap gap-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <a
          href={project.demo}
          target="_blank"
          className="px-6 py-3 bg-black text-white rounded-full shadow hover:scale-105 hover:brightness-110 transition-transform duration-300"
        >
          View Demo
        </a>

        <a
          href={project.github}
          target="_blank"
          className="px-6 py-3 border-2 border-black text-black rounded-full shadow hover:bg-black/10 hover:scale-105 transition-transform duration-300"
        >
          GitHub
        </a>
      </motion.div>

    </main>
  );
}   