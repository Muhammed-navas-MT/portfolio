import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import SectionWrapper, { SectionLabel } from "@/components/ui/SectionWrapper";
import { SOCIAL } from "@/data/portfolio";
import { Phone } from "lucide-react";

const GH = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LI = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
  </svg>
);

const Mail = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export default function Contact() {
  return (
    <SectionWrapper id="contact" bg="subtle">
      <motion.div variants={stagger} className="mx-auto max-w-5xl text-center">
        <motion.div variants={fadeUp}>
          <SectionLabel text="GET IN TOUCH" />

          <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 leading-tight tracking-tight mt-3 mb-4">
            Let's build something great.
          </h2>

          <p className="text-zinc-500 text-base leading-relaxed max-w-xl mx-auto">
            Have an idea, a role, or a project in mind? Feel free to reach out.
            I'm always open to discussing new opportunities and collaborations,
            and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Email */}
          <motion.a
          variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammednavas382@gmail.com"
            className="group rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                <Mail />
              </div>

              <h3 className="text-lg font-bold text-zinc-900">Email</h3>

              <p className="mt-2 break-all text-sm text-zinc-500">
                {SOCIAL.email}
              </p>
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
          variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-zinc-900 group-hover:text-white">
                <GH />
              </div>

              <h3 className="text-lg font-bold text-zinc-900">GitHub</h3>

              <p className="mt-2 text-sm text-zinc-500">Muhammed-navas-MT</p>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
          variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white">
                <LI />
              </div>

              <h3 className="text-lg font-bold text-zinc-900">LinkedIn</h3>

              <p className="mt-2 text-sm text-zinc-500">
                in/navasmt
              </p>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
          variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            href="tel:+917909173076"
            className="group rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
                <Phone size={22} />
              </div>

              <h3 className="text-lg font-bold text-zinc-900">Phone</h3>

              <p className="mt-2 text-sm text-zinc-500">+91 7909173076</p>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
