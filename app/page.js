"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const sections = ["home", "about", "education", "projects" , "skills", "contact"];

const handleHireMe = () => {
  const preferWhatsApp = false; // ganti false kalau mau email

  if (preferWhatsApp) {
    window.open(
      "https://wa.me/6285171728902?text=Halo%20saya%20tertarik%20untuk%20bekerja%20sama%20Anda",
      "_blank"
    );
  } else {
    window.location.href =
      "mailto:mhmmdrayhan55@gmail.com?subject=Kerja%20Sama&body=Halo,%20saya%20tertarik%20untuk%20bekerja%20sama%20Anda.";
  }
};


export default function Home() {
  const [active, setActive] = useState("home");

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_7obfyap",
    "template_p2xl8vc",
    e.target,
    "PobsYjtdkNNgSGUJF"
  )
  .then(() => {
    alert("Message sent successfully!");
    e.target.reset();
  })
  .catch((error) => {
    console.error(error);
    alert("Failed to send message");
  });
};

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-white text-black">

{/* NAVBAR */}
<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:flex">
  <div className="bg-black/80 shadow-lg rounded-full px-6 py-3 flex gap-2 text-sm">

    {[
      { id: "home", label: "Home", icon: "fa-house" },
      { id: "about", label: "About", icon: "fa-id-card" },
      { id: "education", label: "Education", icon: "fa-graduation-cap" },
      { id: "projects", label: "Projects", icon: "fa-folder-open" },
      { id: "skills", label: "Skills", icon: "fa-code" },
      { id: "contact", label: "Contact", icon: "fa-envelope" },
    ].map((item) => (
      <button
        key={item.id}
        onClick={() => scrollTo(item.id)}
        className={`
          flex items-center gap-2 px-5 py-2 rounded-full
          transition-all duration-300
          ${
            active === item.id
              ? "bg-black text-white shadow-md"
              : "text-white hover:bg-black/5"
          }
        `}
      >
        <i className={`fa-solid ${item.icon} text-sm`} />
        <span>{item.label}</span>
      </button>
    ))}

  </div>
</nav>

{/* HERO */}
<section
  id="home"
  className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-8 md:px-20 pt-32"
>
  {/* LEFT CONTENT */}
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="space-y-6 ps-10"
  >
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      Hi, I'm Muhammad Rayhan Khadafi
    </h1>

    <h2 className="text-xl md:text-3xl font-semibold">
      Frontend developer & UI designer 
    </h2>

    <p className="text-gray-600 max-w-xl">
      Saya belajar full stack developer di sekolah, merancang dan mengembangkan
      tampilan website yang modern, interaktif, dan futuristik. Belajar menggunakan
      HTML, CSS, JavaScript, serta Next.js untuk membuat UI yang responsif serta enak
      di lihat dan mudah di gunakan.
    </p>

    {/* INFO */}
    <div className="flex items-center gap-2.5 text-sm text-gray-500">
      <span className="flex items-center gap-1.5 whitespace-nowrap">
        <i className="fa-solid fa-location-dot text-xs"></i>
        Depok Indonesia
      </span>
      <span className="flex items-center gap-1.5 whitespace-nowrap">
        <i className="fa-solid fa-school text-xs"></i>
        Vocational School Student
      </span>
    </div>

    {/* BUTTONS */}
<div className="flex gap-3 mt-6 w-full">
  <a
    href="#contact"
    className="flex items-center justify-center gap-2 bg-black text-white 
               px-4 py-2 rounded-full text-sm 
               w-1/2"
  >
    <i className="fa-solid fa-phone text-sm"></i>
    Contact Me
  </a>

  <a
    href="/cv.pdf"
    download
    className="flex items-center justify-center gap-2 border border-black text-black 
               px-4 py-2 rounded-full text-sm 
               w-1/2"
  >
    <i className="fa-solid fa-download text-sm"></i>
    Download CV
  </a>
</div>


    {/* SOCIAL */}
    <div className="flex items-center gap-4 pt-4 text-xl">
      <a className="text-ms">follow me: </a>
      <a href="https://wa.me/6285171728902" className="hover:text-gray-500">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <a href="https://www.instagram.com/mhmmd.kdfi__" className="hover:text-gray-500">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a href="https://www.tiktok.com/@pii.dapii" className="hover:text-gray-500">
        <i className="fa-brands fa-tiktok"></i>
      </a>
      <a href="https://www.linkedin.com/in/muhammad-rayhan-khadafi-94b1743aa/" className="hover:text-gray-500">
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  </motion.div>

  {/* RIGHT IMAGE */}
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex justify-center"
  >
    <img
      src="/dapi.jpg" // ganti foto lo
      alt="Profile"
      className="w-[300px] md:w-[380px] rounded-2xl object-cover shadow-lg"
    />
  </motion.div>
</section>

      {/* ABOUT */}
      <section id="about" className="px-10 py-32 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-light mb-6">
            About Me
          </h3>
          <p className="opacity-90 leading-relaxed text-sm">
            Nama saya Muhammad Rayhan Khadafi, berusia 16 tahun, lahir pada 19 July 2009. saya
            merupakan pelajar jurusan Pemrograman Perangkat Lunak dan Gim (PPLG) yang memiliki
            ketertarikan besar pada dunia teknologi, khususnya dalam pengembangan website dan
            aplikasi. Ketertarikan saya pada pemrograman tumbuh seiring keinginan untuk memahami
            bagaimana sistem digital dirancang serta di bangun dan dimanfaatkan sebagai 
            solusi yang bermanfaat.
          </p>
          
          <ul className="opacity-90 leading-relaxed mt-4 text-sm">
           Saya berfokus pada frontend development dan desain antarmuka pengguna (UI) dengan
           pendekatan modern dan interaktif. Saya percaya tampilan yang baik harus seimbang
           antara estetika dan kenyamanan pengguna. Untuk itu, saya terus mengembangkan
           kemampuan dalam HTML, CSS, dan JavaScript, serta mempelajari prinsip dasar UI design
           guna menciptakan pengalaman pengguna yang efektif dan menyenangkan.
          </ul>

        
        </motion.div>
      </section>

{/* EDUCATION */}
<section
  id="education"
  className="px-10 py-25 max-w-5xl mx-auto"
>
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h3 className="text-3xl font-light mb-16">
      Pendidikan
    </h3>

    <div className="relative border-l-2 border-black/20 pl-14">
      {[
        {
          school: "MI AL-HIDAYAH SUKATANI",
          year: "2016 – 2021",
          desc:
            "Pendidikan dasar dengan fokus akademik, kedisiplinan, dan keterampilan sosial.",
        },
        {
          school: "MTS AL-HIDAYAH SUKATANI",
          year: "2022 – 2024",
          desc:
            "Mulai tertarik pada teknologi, komputer, dan dunia kreatif digital.",
        },
        {
        school: "SMK TARUNA BHAKTI DEPOK  ",
          year: "2025 – Sekarang",
          desc:
            "Jurusan Pemrograman Perangkat Lunak dan Gim mulai belajar pemrograman, merancang, dan mengembangkan website.",
        },
      ].map((edu, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative mb-16"
        >
          {/* DOT */}
          <span
            className="
              absolute -left-[64.5px] top-1
              w-4 h-4 rounded-full bg-black 
              border-2 border-black
            "
          />

          <h4 className="font-medium">
            {edu.school}
          </h4>
          <p className="text-xs text-gray-500 mb-2">
            {edu.year}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
            {edu.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


{/* PROJECTS */}
      <section
        id="projects"
        className="px-6 md:px-10 pb-32 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16 ">
          <p className="text-sm tracking-widest opacity-60">PROJECTS</p>
          <h2 className="text-4xl font-bold mt-3">Featured Work</h2>
          <p className="mt-4 text-sm opacity-70 max-w-2xl mx-auto">
            A showcase of my recent projects demonstrating expertise
            in frontend development and UI design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
{[
  {
    title: "Modeling Character",
    desc:
      "Membuat model character untuk assets dalam game atau animasi.",
    github: "https://github.com/username/digital-team",
    demo: "https://digital-team.vercel.app",
  },
  {
    title: "E-Commerce Website",
    desc:
      "Website toko online dengan fitur katalog produk, keranjang, dan tampilan modern.",
    github: "https://github.com/username/portfolio",
    demo: "https://portfolio.vercel.app",
  },
  {
    title: "Website Penawaran pekerjaan",
    desc:
      "Website penawaran pekerjaan untuk memudahkan pencari pekerjaan di jejaring sosial.",
    github: "https://github.com/username/berita",
    demo: "https://berita.vercel.app",
  },
  {
    title: "Website Bimbinan Konseling",
    desc:
      "Website bimbinan konseling untuk membantu siswa dan guru dalam menjadwalkan konseling.",
    github: "https://github.com/username/ecommerce",
    demo: "https://ecommerce.vercel.app",
  },
  {
    title: "Website Portofolio",
    desc:
      "Project ini adalah portofolio yang anda sedang lihat saat ini.",
    github: "https://github.com/username/landing-page",
    demo: "https://landing-page.vercel.app",
  },
  {
    title: "Website Penyewaan Kamar",
    desc:
      "Website penyewaan kamar untuk memudahkan pencari kamar.",
    github: "https://github.com/username/dashboard",
    demo: "https://dashboard.vercel.app",
  },
].map((project, i) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-whitex rounded-2xl shadow-md overflow-hidden transform hover:scale-105 
              hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-[220px] bg-[#0f2f2c] flex items-center justify-center">
                <Image
                  src={`/projek-${i + 1}.jpg`}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="rounded-md"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>

                <p className="text-sm opacity-70 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap">
                  {["HTML", "CSS", "JavaScript"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white text-black px-8 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

  <div className="flex gap-3 pt-2 ps-6.5 cursor-pointer">
        <a className="flex items-center gap-2 bg-gray-900 text-white
           px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition">
          <i className="fa-solid fa-eye"></i>
              View Project
        </a>

         <a className="flex items-center gap-2 border border-black px-6 py-2 rounded-full text-sm hover:bg-black/30 transition">
           <i className="fa-solid fa-circle-info"></i>
              Details
         </a>

</div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>


{/* SKILLS */}
<section id="skills" className="px-10 py-32 max-w-5xl mx-auto ">
  <h3 className="text-3xl font-light mb-10">
    Skills
  </h3>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
    {[
      { title: "HTML", desc: "Membangun struktur web yang rapi dan semantik." },
      { title: "CSS", desc: "Mengatur layout, animasi, dan responsivitas." },
      { title: "JavaScript", desc: "Logika interaksi dan behavior website." },
      { title: "Tailwind", desc: "Utility-first CSS untuk workflow cepat." },
      { title: "Next.js", desc: "Framework React dengan SEO & performa." },
      { title: "React", desc: "Component-based UI yang reusable." },
      { title: "Git", desc: "Version control & kolaborasi tim." },
      { title: "Figma", desc: "Design UI/UX sebelum proses coding." },
    ].map((skill) => (
      <motion.div
        key={skill.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="border border-grey rounded-lg p-4 opacity-80 hover:opacity-100 hover:border-black/25 
        transition transform hover:scale-105 hover:shadow-xl transition-all duration-300 "
      >
        <h4 className="font-light mb-1">
          {skill.title}
        </h4>
        <p className="text-xs opacity-70 leading-relaxed">
          {skill.desc}
        </p>
      </motion.div>
    ))}
  </div>
</section>

<section id="contact" className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6 md:px-20">

    {/* TITLE */}
    <div className="mb-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
      <p className="text-gray-500 mt-2">
        Hubungi saya untuk kerja sama atau pertanyaan
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

      {/* LEFT - CONTACT TEXT */}
      <div className="space-y-8">
        <div>

          <p className="text-gray-600">
            Saya terbuka untuk diskusi, kolaborasi, atau pertanyaan terkait
            frontend development dan UI design.
          </p>
        </div>

        {/* CONTACT TEXT (NO LINK) */}
        <div className="space-y-3 text-gray-700 text-sm">
          <p>Email : mhmmdrayhan55@gmail.com</p>
          <p>WhatsApp : +62 851-7172-8902</p>
          <p>Instagram : @mhmmd.kdfi__</p>
        </div>

        {/* ICON LINKS */}
        <div className="flex gap-5 text-2xl pt-4">


          <a
            href="https://wa.me/6285171728902"
            className="hover:text-gray-500 transition px-2"
            aria-label="WhatsApp"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          

          <a
            href="https://www.instagram.com/mhmmd.kdfi__"
            className="hover:text-gray-500 transition px-2"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>


          <a
            href="https://www.linkedin.com/in/muhammad-rayhan-khadafi-94b1743aa/"
            className="hover:text-gray-500 transition px-2"
            aria-label="Linkedin"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>


          <a
            href="mailto:mhmmdrayhan55@gmail.com"
            className="hover:text-gray-500 transition px-2"
            aria-label="GitHub"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* RIGHT - FORM */}
<form onSubmit={sendEmail} className="space-y-6">
  <div>
    <input
      type="text"
      name="name"
      placeholder="Your name"
      required
      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-black transition"
    />
  </div>

  <div>
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-black transition"
    />
  </div>

  <div>
    <textarea
      name="message"
      rows="5"
      placeholder="Your Message"
      required
      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-black transition"
    />
  </div>

  <button
    type="submit"
    className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
  >
    Send Message
  </button>
</form>


    </div>
  </div>
</section>

{/* FOOTER */}
<footer className="bg-black text-white py-16 relative">
  <div className="max-w-4xl mx-auto text-center space-y-4">

    {/* NAME */}
    <h3 className="text-2xl font-semibold">
      Muhammad Rayhan Khadafi
    </h3>

    {/* NAV */}
    <nav className="flex justify-center gap-6 text-sm opacity-90">
      <a href="#home" className="hover:opacity-70 transition">Home</a>
      <a href="#about" className="hover:opacity-70 transition">About</a>
      <a href="#projects" className="hover:opacity-70 transition">Projects</a>
      <a href="#contact" className="hover:opacity-70 transition">Contact</a>
    </nav>

    {/* SOCIAL */}
    <div className="flex justify-center gap-4 text-xl">
      <a href="https://wa.me/6285171728902" className="hover:text-gray-400 transition">
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="https://www.instagram.com/mhmmd.kdfi__" className="hover:text-gray-400 transition">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/muhammad-rayhan-khadafi-94b1743aa/" className="hover:text-gray-400 transition">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="mailto:mhmmdrayhan55@gmail.com" className="hover:text-gray-400 transition">
        <i className="fa-solid fa-envelope"></i>
      </a>
    </div>

    {/* COPYRIGHT */}
    <p className="text-sm opacity-60">
      © {new Date().getFullYear()} Muhammad Rayhan Khadafi. All Rights Reserved.
    </p>
  </div>

  {/* SCROLL TO TOP */}
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-6 right-6 bg-indigo-600 text-white w-12 h-12
      rounded-full flex items-center justify-center hover:bg-indigo-700 transition"
  >
    ↑
  </button>
</footer>
    </main>
  );
}