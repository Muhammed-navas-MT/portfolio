import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import SectionWrapper, { SectionLabel } from "@/components/ui/SectionWrapper";
import { SKILLS } from "@/data/portfolio";
import {
  CheckCircle2,
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
  Network,
  Cloud,
  CreditCard,
} from "lucide-react";

const ICONS: Record<string, React.ReactNode> = {
  Frontend: <Layout size={18} />,
  Backend: <Server size={18} />,
  Database: <Database size={18} />,
  Tools: <Wrench size={18} />,
  Concepts: <Brain size={18} />,

  Architecture: <Network size={18} />,
  DevOps: <Cloud size={18} />,
  Payments: <CreditCard size={18} />,
};

const WIDE = new Set(["Frontend", "Concepts"]);

export default function Skills() {
  return (
    <SectionWrapper id="skills" bg="subtle">
      {/* Header */}
      <motion.div variants={fadeUp} className="text-center mb-14">
        <SectionLabel text="SKILLS" />

        <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight mb-3">
          A toolkit refined over real projects.
        </h2>

        <p className="text-zinc-500 text-base max-w-md mx-auto">
          The technologies, patterns and tools I rely on to build scalable,
          maintainable, and production-ready applications.
        </p>
      </motion.div>

      {/* Skill Cards */}
      <motion.div
        variants={stagger}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {Object.entries(SKILLS).map(([cat, items]) => (
          <motion.div
            key={cat}
            variants={fadeUp}
            whileHover={{
              y: -6,
              scale: 1.015,
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            }}
            className={`
              card
              bg-white
              p-6
              border
              border-zinc-100
              hover:border-zinc-200
              hover:shadow-lg
              transition-all
              duration-300
              ${WIDE.has(cat) ? "lg:col-span-1" : ""}
            `}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <motion.div
                whileHover={{
                  rotate: 5,
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="icon-box"
              >
                {ICONS[cat]}
              </motion.div>

              <h3 className="font-bold text-zinc-900 text-base">{cat}</h3>
            </div>

            {/* Skills */}
            <ul className="space-y-2.5">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-sm text-zinc-600"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <CheckCircle2
                      size={14}
                      className="text-blue-500 flex-shrink-0"
                    />
                  </motion.div>

                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
