import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import SectionWrapper, { SectionLabel } from "@/components/ui/SectionWrapper";
import { Boxes, Code2, ShieldCheck, BriefcaseBusiness } from "lucide-react";

const CARDS = [
  {
    icon: Boxes,
    title: "Software Architecture",
    desc: "Clean Architecture, SOLID Principles, MVC, Repository Pattern, Dependency Injection.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "React, Node.js, Express.js, MongoDB, TypeScript, REST APIs.",
  },
  {
    icon: ShieldCheck,
    title: "Backend Engineering",
    desc: "JWT Authentication, RBAC, Validation, Error Handling, WebSockets, Payment Integration.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Projects",
    desc: "Built a multi-tenant gym management ERP and a supplement e-commerce platform from concept to deployment.",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      {/* Section Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center text-center mb-14"
      >
        <SectionLabel text="ABOUT ME" />

        <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight">
          Engineering reliable products people use every day.
        </h2>
      </motion.div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side - Image */}
        <motion.div
          variants={fadeUp}
          className="relative group"
          whileHover="hover"
        >
          <motion.div
            className="rounded-2xl overflow-hidden bg-zinc-100 aspect-[4/5] max-w-lg mx-auto lg:mx-0 shadow-2xl"
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          >
            <motion.img
              src="/image.png"
              alt="Muhammed Navas working"
              className="w-full h-full object-cover object-top"
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.6,
              }}
            />
          </motion.div>

          {/* Background Glow */}
          <div className="absolute -inset-4 rounded-3xl bg-zinc-200 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40 -z-10" />
        </motion.div>
        {/* Right Side */}
        <motion.div
          variants={stagger}
          className="flex flex-col justify-center h-full"
        >
          <motion.p
            variants={fadeUp}
            className="text-zinc-500 text-sm sm:text-base leading-relaxed mb-8"
          >
            I'm a Full-Stack MERN Developer focused on building scalable,
            secure, and user-friendly web applications. With expertise in React,
            TypeScript, Node.js, Express.js, and MongoDB, I enjoy creating
            clean, efficient solutions that deliver great user experiences.
          </motion.p>

          {/* Cards */}
          <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
            {CARDS.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="card p-5 h-full"
              >
                <motion.div
                  whileHover={{
                    rotate: 12,
                    scale: 1.15,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 12,
                  }}
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-lg"
                >
                  <card.icon size={24} strokeWidth={2} />
                </motion.div>

                <h3 className="font-semibold text-zinc-900 text-sm mb-2">
                  {card.title}
                </h3>

                <p className="text-zinc-500 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
