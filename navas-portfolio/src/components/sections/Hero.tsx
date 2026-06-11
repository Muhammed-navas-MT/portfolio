import { motion } from "framer-motion";
import { SOCIAL } from "@/data/portfolio";
import { Mail } from "lucide-react";

const GH = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LI = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="text-3xl sm:text-4xl font-extrabold text-zinc-400 leading-[1.15] tracking-tight mb-6"
            >
              MERN Stack Developer.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="text-base text-zinc-500 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0"
            >
              I build scalable full-stack web applications using React, Node.js,
              Express, MongoDB and TypeScript — with a focus on clean
              architecture and modern development practices.
            </motion.p>

            {/* CTAs */}

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="btn-black group flex items-center gap-1"
              >
                View Projects
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="btn-outline flex items-center gap-1.5"
              >
                <Mail size={15} /> Contact me
              </button>
            </motion.div>

            {/* Social + location */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.55, ease: "easeOut" }}
              className="flex items-center gap-4 text-zinc-400 justify-center lg:justify-start"
            >
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-700 transition-colors duration-300 hover:scale-110 transform"
              >
                <GH />
              </a>

              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-700 transition-colors duration-300 hover:scale-110 transform"
              >
                <LI />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammednavas382@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-700 transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail size={20} />
              </a>

              <span className="text-zinc-300">·</span>

              <span className="text-xs font-medium text-zinc-400">
                Kerala, India
              </span>
            </motion.div>
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
