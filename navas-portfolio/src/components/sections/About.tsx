import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import SectionWrapper, { SectionLabel } from "@/components/ui/SectionWrapper";

const CARDS = [
  {
    icon: "⚙️",
    title: "Clean Code",
    desc: "SOLID principles, Clean Architecture, MVC, Repository Pattern, DI.",
  },
  {
    icon: "💻",
    title: "Full-Stack Development",
    desc: "React, Node.js, Express.js, MongoDB, TypeScript, JavaScript.",
  },
  {
    icon: "🛡️",
    title: "Production-Ready",
    desc: "Authentication, RBAC, Validation, Error Handling, Security, Testing.",
  },
  {
    icon: "🚀",
    title: "Shipped Products",
    desc: "Built and deployed ERP and e-commerce platforms used in real-world environments.",
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
        <SectionLabel text="ABOUT" />

        <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight">
          Engineering reliable products people use every day.
        </h2>
      </motion.div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side - Image */}
        <motion.div variants={fadeUp} className="relative">
          <div className="rounded-2xl overflow-hidden bg-zinc-100 aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <img
              src="/image.png"
              alt="Muhammed Navas working"
              className="w-full h-full object-cover object-top"
            />
          </div>
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
            I'm a MERN stack developer passionate about building scalable
            applications with strong foundations. I work daily with React,
            TypeScript, Node.js, Express.js, and MongoDB, and have shipped
            enterprise platforms — from a complete gym management ERP to a
            supplement e-commerce platform. I care deeply about software
            architecture, clean code, and creating interfaces that feel
            effortless.
          </motion.p>

          {/* Cards */}
          <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
            {CARDS.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                className="card p-4 h-full"
              >
                <div className="text-2xl mb-2">{card.icon}</div>

                <h3 className="font-semibold text-zinc-900 text-sm mb-2">
                  {card.title}
                </h3>

                <p className="text-zinc-500 text-xs leading-relaxed">
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
