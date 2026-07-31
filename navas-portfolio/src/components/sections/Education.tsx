import { motion } from "framer-motion";
import { Download, GraduationCap, Calendar } from "lucide-react";

import { fadeUp } from "@/lib/motion";
import SectionWrapper, { SectionLabel } from "@/components/ui/SectionWrapper";

export default function Resume() {
  return (
    <SectionWrapper id="resume" bg="subtle">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 sm:p-10 lg:p-12 shadow-sm">
          {/* Background Glow */}
          <div className="absolute -top-28 -right-24 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-100/40 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <motion.div variants={fadeUp} className="relative">
              <SectionLabel text="RESUME" />

              <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
                Interested in
                <br />
                working together?
              </h2>

              <p className="mt-5 text-zinc-500 leading-8 max-w-md">
                Download my resume to explore my technical skills, real-world
                projects, architecture experience and full-stack development
                journey.
              </p>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-flex mt-8 items-center gap-3 rounded-full bg-zinc-900 px-7 py-4 text-white font-semibold shadow-lg transition-all hover:bg-zinc-800"
              >
                <Download size={18} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Right */}
            <motion.div variants={fadeUp} className="relative">
              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="rounded-3xl border border-zinc-200 bg-zinc-50 p-7 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-8">
                  <motion.div
                    animate={{
                      rotate: [0, 8, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow"
                  >
                    <GraduationCap size={24} className="text-zinc-900" />
                  </motion.div>

                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900">
                      Education
                    </h3>

                    <p className="text-sm text-zinc-500">
                      Academic & Professional Learning
                    </p>
                  </div>
                </div>

                <div className="relative border-l-2 border-zinc-200 pl-8 space-y-10">
                  {/* Brototype */}
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.25 }}
                    className="group relative"
                  >
                    <div className="absolute -left-[42px] top-1 h-5 w-5 rounded-full border-4 border-white bg-blue-600 shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:ring-4 group-hover:ring-blue-100" />

                    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      <Calendar size={12} />
                      Present
                    </span>

                    <h4 className="mt-3 text-xl font-bold text-zinc-900 transition-colors group-hover:text-blue-600">
                      Brototype
                    </h4>

                    <p className="mt-2 text-zinc-600 leading-7">
                      Software Engineering Academy (SEA) Program
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        "MERN Stack",
                        "Data Structures & Algorithms",
                        "Clean Architecture",
                        "Database Design",
                        "REST API Development",
                        "Authentication & Authorization",
                        "Git & GitHub",
                      ].map((item) => (
                        <motion.span
                          key={item}
                          whileHover={{
                            y: -2,
                            scale: 1.05,
                          }}
                          className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* GVHSS */}
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.25 }}
                    className="group relative"
                  >
                    <div className="absolute -left-[42px] top-1 h-5 w-5 rounded-full border-4 border-white bg-zinc-400 shadow transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-125 group-hover:ring-4 group-hover:ring-blue-100" />

                    <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600">
                      <Calendar size={12} />
                      2022 – 2024
                    </span>

                    <h4 className="mt-3 text-lg font-bold text-zinc-900 transition-colors group-hover:text-blue-600">
                      Govt. Vocational Higher Secondary School
                    </h4>

                    <p className="mt-1 text-zinc-500">GVHSS Koppam</p>

                    <p className="mt-3 text-zinc-600 leading-7">
                      Higher Secondary Education (Commerce)
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
