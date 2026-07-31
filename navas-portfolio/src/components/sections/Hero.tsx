import { motion } from "framer-motion";
import { SOCIAL } from "@/data/portfolio";
import { Mail, Download, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FlipWords } from "@/components/ui/flip-words";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-white pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 py-16">
          {/* ── LEFT ── */}
          <div className="flex-1 max-w-xl text-center lg:text-left">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl font-extrabold text-zinc-900 leading-[1.08] tracking-tight mb-3"
            >
              Muhammed Navas
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="text-3xl sm:text-4xl font-extrabold text-zinc-400 leading-[1.15] tracking-tight mb-6 h-12 flex items-center justify-center lg:justify-start"
            >
              <FlipWords
                words={[
                  "MERN Stack Developer",
                  "Full-Stack Engineer",
                  "React Developer",
                  "Node.js Developer",
                ]}
                className="text-zinc-400 px-0 ml-[-8px]"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="text-base text-zinc-500 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0"
            >
              I build scalable full-stack web applications using React, Node.js,
              Express, MongoDB and TypeScript with a focus on clean architecture
              and modern development practices.
            </motion.p>

            {/* CTA + Social */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex flex-col items-center">
                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <button
                    onClick={() => scrollTo("projects")}
                    className="bg-black dark:bg-white text-white dark:text-black font-semibold px-8 py-3.5 rounded-full hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2"
                  >
                    {" "}
                    View Projects{" "}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      {" "}
                      →{" "}
                    </span>{" "}
                  </button>

                  <a
                    href="/resume.pdf"
                    download
                    className="bg-black text-white font-semibold px-8 py-3.5 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
                  >
                    <Download size={18} />
                    Download Resume
                  </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.55, ease: "easeOut" }}
                  className="flex items-center justify-center gap-5 mt-6"
                >
                  <a
                    href={SOCIAL.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border-2 border-black bg-white text-black flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-black hover:text-white hover:scale-110 hover:shadow-xl"
                  >
                    <FaGithub size={24} />
                  </a>

                  <a
                    href={SOCIAL.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border-2 border-black bg-white text-black flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-black hover:text-white hover:scale-110 hover:shadow-xl"
                  >
                    <FaLinkedin size={24} />
                  </a>

                  <a
                    href="mailto:muhammednavas382@gmail.com"
                    className="w-12 h-12 rounded-full border-2 border-black bg-white text-black flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-black hover:text-white hover:scale-110 hover:shadow-xl"
                  >
                    <Mail size={24} />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Circular Photo ── */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative group">
              {/* Slow rotating dashed outer ring */}

              <div
                className="absolute -inset-3 rounded-full border border-dashed border-zinc-200"
                style={{ animation: "spin 18s linear infinite" }}
              />

              {/* Slow counter-rotating dotted ring */}

              <div
                className="absolute -inset-6 rounded-full border border-dotted border-zinc-100"
                style={{ animation: "spin 28s linear infinite reverse" }}
              />

              {/* Hover glow: soft blur halo */}

              <div className="absolute -inset-2 rounded-full bg-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

              {/* Image circle */}

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/profile1.png"
                  alt="Muhammed Navas"
                  className="w-full h-full object-cover object-top transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:blur-[1px] group-hover:brightness-90"
                />

                {/* Hover overlay — subtle dark vignette */}

                <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/10 transition-all duration-700 ease-in-out" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Down */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          delay: 1.2,
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-2 border-zinc-300 bg-white shadow-lg flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:scale-110"
      >
        <ChevronDown size={28} strokeWidth={2.2} />
      </motion.button>

      {/* Keyframe for ring rotation */}

      <style>{`

        @keyframes spin {

          from { transform: rotate(0deg); }

          to   { transform: rotate(360deg); }

        }

      `}</style>
    </section>
  );
}
