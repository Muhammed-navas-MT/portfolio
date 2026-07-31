import { ChevronUp, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-12 lg:px-10">
        {/* Left Content */}
        <div>
          <h3 className="text-2xl font-bold text-zinc-900">Muhammed Navas</h3>

          <p className="mt-2 text-zinc-500">MERN Stack Developer</p>
          <div className="mt-2 flex items-center gap-2 text-sm text-zinc-400">
            <MapPin size={16} />
            <span>Kerala, India</span>
          </div>
        </div>

        {/* Back To Top */}
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
          group
          flex h-14 w-14
          items-center justify-center
          rounded-full
          border border-zinc-900
          bg-white
          text-zinc-900
          shadow-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:bg-zinc-900
          hover:text-white
          hover:shadow-lg
        "
          aria-label="Back to top"
        >
          <ChevronUp
            size={24}
            className="
            transition-transform duration-300
            group-hover:-translate-y-1
          "
          />
        </button>
      </div>

      {/* Copyright */}
      <div className="border-t border-zinc-100 py-2 text-center">
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Muhammed Navas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
