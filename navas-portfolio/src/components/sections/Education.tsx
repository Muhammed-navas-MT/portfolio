import { motion } from "framer-motion";
import { Download, GraduationCap } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import SectionWrapper, { SectionLabel } from "@/components/ui/SectionWrapper";

export default function Resume() {
  return (
    <SectionWrapper id="resume" bg="subtle">
      <motion.div variants={fadeUp} className="max-w-5xl mx-auto">
        <div className="card bg-white p-8 sm:p-10 lg:p-12 grid lg:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <SectionLabel text="RESUME" />

            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 leading-tight mt-3 mb-4">
              Interested in working together?
            </h2>

            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              Download my resume to learn more about my technical skills,
              projects, architecture experience, and full-stack development
              journey.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="/resume.pdf" download className="btn-black">
                <Download size={15} />
                Download Resume
              </a>
            </div>

            {/* Education */}
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            <div className="card-subtle p-6">
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap size={18} />
                <h3 className="font-bold text-zinc-900 text-lg">Education</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-zinc-200 pl-4">
                  <p className="text-xs text-zinc-400 mb-1">Present</p>

                  <h4 className="font-semibold text-zinc-900">Brototype</h4>

                  <p className="text-sm text-zinc-500 mt-1">
                    Software Engineering Academy (SEA) Program
                  </p>
                </div>

                <div className="border-l-2 border-zinc-200 pl-4">
                  <p className="text-xs text-zinc-400 mb-1">2023 – 2024</p>

                  <h4 className="font-semibold text-zinc-900">
                    Govt. Vocational Higher Secondary School, Koppam (GVHSS
                    Koppam)
                  </h4>

                  <p className="text-sm text-zinc-500 mt-1">
                    Higher Secondary Education (Plus Two), Commerce
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
