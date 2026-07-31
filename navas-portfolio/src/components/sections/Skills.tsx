import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import SectionWrapper, { SectionLabel } from "@/components/ui/SectionWrapper";
import { SKILLS } from "@/data/portfolio";
import type { ElementType } from "react";
import {
  MonitorSmartphone,
  ServerCog,
  DatabaseZap,
  Boxes,
  CloudCog,
  Binary,
  Terminal,
} from "lucide-react";

const ICONS: Record<
  string,
  {
    icon: ElementType;
    color: string;
    bg: string;
  }
> = {
  Frontend: {
    icon: MonitorSmartphone,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },

  Backend: {
    icon: ServerCog,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },

  Database: {
    icon: DatabaseZap,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },

  Architecture: {
    icon: Boxes,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },

  DevOps: {
    icon: CloudCog,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },

  "Data Structures & Algorithms": {
  icon: Binary,
  color: "text-indigo-600",
  bg: "bg-indigo-50",
},
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" bg="subtle">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <SectionLabel text="TECHNICAL SKILLS" />

        <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight">
          A toolkit refined over real projects.
        </h2>

        <p className="mt-4 text-zinc-500 text-base max-w-xl mx-auto leading-relaxed">
          The technologies, patterns and tools I rely on to build scalable,
          maintainable and production-ready applications.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {Object.entries(SKILLS).map(([cat, items]) => {
          const config = ICONS[cat];

          if (!config) return null;

          const Icon = config.icon;

          return (
            <motion.div
              key={cat}
              variants={fadeUp}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                },
              }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:border-zinc-300 hover:shadow-2xl"
            >
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Header */}
              <div className="relative flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.12,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className={`h-14 w-14 rounded-2xl flex items-center justify-center ${config.bg} ${config.color} shadow-sm transition-all duration-300 group-hover:shadow-lg`}
                >
                  <Icon size={28} strokeWidth={2} />
                </motion.div>

                <h3 className="text-xl font-bold text-zinc-900">{cat}</h3>
              </div>

              {/* Skills */}
              <ul className="relative space-y-3">
                {items.map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group flex items-center gap-3 text-[15px] text-zinc-600 hover:text-zinc-900 transition-all duration-300"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 transition-all duration-300 group-hover:bg-zinc-900 group-hover:shadow-md">
                      <motion.div
                        whileHover={{
                          rotate: -12,
                          scale: 1.15,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 12,
                        }}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 transition-all duration-300 group-hover:bg-zinc-900 group-hover:shadow-lg"
                      >
                        <Terminal
                          size={15}
                          className="text-zinc-600 transition-colors duration-300 group-hover:text-white"
                        />
                      </motion.div>
                    </div>

                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
