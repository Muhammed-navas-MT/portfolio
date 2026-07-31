import { motion } from "framer-motion";
import {
  // ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import {FaGithub} from "react-icons/fa"

import { fadeUp, stagger } from "@/lib/motion";
import SectionWrapper, {
  SectionLabel,
} from "@/components/ui/SectionWrapper";
import { PROJECTS } from "@/data/portfolio";

const TAG_COLORS = [
  "bg-blue-50 text-blue-700 border-blue-100",
  "bg-violet-50 text-violet-700 border-violet-100",
  "bg-emerald-50 text-emerald-700 border-emerald-100",
  "bg-orange-50 text-orange-700 border-orange-100",
  "bg-cyan-50 text-cyan-700 border-cyan-100",
];

export default function Projects() {
  const featured = PROJECTS[0];
  const rest = PROJECTS.slice(1);

  return (
    <SectionWrapper id="projects" bg="white">
      {/* ================= Header ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto mb-20 max-w-3xl text-center"
      >
        <SectionLabel text="SELECTED WORK" />

        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
          Featured Projects
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-500">
          Production-ready applications built with modern technologies,
          emphasizing scalability, maintainability, performance and exceptional
          user experience.
        </p>
      </motion.div>

      {/* ================= Featured Project ================= */}
      <motion.div
        variants={fadeUp}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group mb-8"
      >
        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:border-blue-200 hover:shadow-2xl">
          {/* Image */}
          <div className="relative overflow-hidden">
            <motion.img
              src={`/projects/${featured.id}.png`}
              alt={featured.title}
              whileHover={{ scale: 1.06 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="h-72 w-full object-cover object-top sm:h-96"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          {/* Content */}
          <div className="p-7 lg:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                  {featured.category}
                </p>

                <h3 className="text-3xl font-black text-zinc-900">
                  {featured.title}
                </h3>

                <p className="mt-4 max-w-3xl text-[15px] leading-7 text-zinc-500">
                  {featured.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {featured.tech.map((tech, index) => (
                    <motion.span
                      key={tech}
                      whileHover={{
                        y: -2,
                        scale: 1.05,
                      }}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        TAG_COLORS[index % TAG_COLORS.length]
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                {featured.liveUrl && (
                  <motion.a
                    whileHover={{
                      scale: 1.08,
                      rotate: -3,
                    }}
                    whileTap={{ scale: 0.95 }}
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 text-white shadow-lg transition-all duration-300 hover:bg-blue-600"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                )}

                <motion.a
                  whileHover={{
                    scale: 1.08,
                    rotate: 3,
                  }}
                  whileTap={{ scale: 0.95 }}
                  href={featured.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-50"
                >
                  <FaGithub size={18} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ================= Project Grid ================= */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2"
      >
        {rest.map((p) => (
          <motion.div
            key={p.id}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:border-blue-200 hover:shadow-2xl"
          >
            {/* Project Preview */}
            <div className="relative h-52 overflow-hidden">
              <motion.img
                src={`/projects/${p.id}.png`}
                alt={p.title}
                className="h-full w-full object-cover object-top"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.45 }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                {p.category}
              </p>

              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-black leading-tight text-zinc-900 transition-colors duration-300 group-hover:text-blue-600">
                  {p.title}
                </h3>

                <motion.a
                  whileHover={{
                    rotate: 8,
                    scale: 1.12,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  href={p.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-600 hover:text-white"
                >
                  <FaGithub size={18} />
                </motion.a>
              </div>

              <p className="mt-4 text-[15px] leading-7 text-zinc-500">
                {p.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((tech, index) => (
                  <motion.span
                    key={tech}
                    whileHover={{
                      y: -2,
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
                      TAG_COLORS[index % TAG_COLORS.length]
                    }`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* <motion.a
                whileHover={{
                  x: 4,
                }}
                href={p.githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors duration-300 hover:text-blue-600"
              >
                View Project

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}