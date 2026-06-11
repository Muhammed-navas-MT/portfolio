import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, stagger } from "@/lib/motion";
import SectionWrapper, { SectionLabel } from "@/components/ui/SectionWrapper";
import { PROJECTS } from "@/data/portfolio";

const PROJECT_COLORS: Record<string, string> = {
  fitproerp: "from-blue-50 to-indigo-100",
  bulknation: "from-purple-50 to-violet-100",
  "netflix-clone": "from-zinc-800 to-zinc-900",
  "olx-clone": "from-amber-50 to-orange-100",
  "book-management": "from-orange-50 to-rose-100",
};

function MockScreen({ id, label }: { id: string; label: string }) {
  const gradient = PROJECT_COLORS[id] || "from-zinc-50 to-zinc-100";
  const isDark = id === "netflix-clone";

  return (
    <div
      className={`w-full h-full bg-gradient-to-br ${gradient} flex flex-col`}
    >
      <div
        className={`flex items-center gap-1.5 px-3 py-2 border-b ${
          isDark ? "border-zinc-700" : "border-black/5"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-red-400" />
        <span className="w-2 h-2 rounded-full bg-yellow-400" />
        <span className="w-2 h-2 rounded-full bg-green-400" />
        <div
          className={`ml-2 h-3 rounded flex-1 max-w-32 ${
            isDark ? "bg-zinc-700" : "bg-black/10"
          }`}
        />
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="text-center">
          <p
            className={`text-3xl font-black ${
              isDark ? "text-white" : "text-zinc-700"
            }`}
          >
            {label}
          </p>

          {id === "netflix-clone" && (
            <p className="text-red-500 font-black text-xl mt-2">NETFLIX</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = PROJECTS[0];
  const rest = PROJECTS.slice(1);

  return (
    <SectionWrapper id="projects" bg="white">
      {/* Header */}
      <motion.div
  variants={fadeUp}
  className="text-center max-w-3xl mx-auto mb-16"
>
  <SectionLabel text="SELECTED WORK" />

  <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight mt-3 mb-4">
    Featured Projects
  </h2>

  <p className="text-zinc-500 text-base leading-relaxed max-w-2xl mx-auto">
    A collection of full-stack applications built with modern technologies,
    focusing on scalability, clean architecture, performance, and user
    experience.
  </p>
</motion.div>

      {/* Featured Project */}
      <motion.div
        variants={fadeUp}
        whileHover={{
          y: -6,
          scale: 1.01,
          transition: {
            duration: 0.25,
            ease: "easeOut",
          },
        }}
        className="mb-6"
      >
        <div className="card overflow-hidden border border-zinc-100 hover:border-zinc-200 hover:shadow-lg transition-all duration-300">
          <div className="h-64 sm:h-80 lg:h-96 overflow-hidden">
            <motion.img
              src={`/projects/${featured.id}.png`}
              alt={featured.title}
              className="w-full h-full object-cover object-top"
              whileHover={{ scale: 1.03 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
            />
          </div>

          <div className="p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex-1">
              <p className="label mb-1">{featured.category}</p>

              <h3 className="text-2xl font-extrabold text-zinc-900 mb-2">
                {featured.title}
              </h3>

              <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">
                {featured.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {featured.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-2 flex-shrink-0">
              {featured.liveUrl && (
                <a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-zinc-700 hover:scale-105 transition-all duration-300"
                >
                  <ArrowUpRight size={16} />
                </a>
              )}

              <a
                href={featured.githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:bg-zinc-50 hover:scale-105 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Grid */}
      <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-5">
        {rest.map((p) => (
          <motion.div
            key={p.id}
            variants={fadeUp}
            whileHover={{
              y: -6,
              scale: 1.015,
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            }}
            className="card overflow-hidden border border-zinc-100 hover:border-zinc-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="h-44 sm:h-52 bg-zinc-50 overflow-hidden">
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="h-full"
              >
                <MockScreen id={p.id} label={p.title} />
              </motion.div>
            </div>

            <div className="p-5">
              <p className="label mb-1">{p.category}</p>

              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-extrabold text-zinc-900">
                  {p.title}
                </h3>

                <a
                  href={p.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:bg-zinc-50 hover:scale-105 flex-shrink-0 transition-all duration-300"
                >
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
