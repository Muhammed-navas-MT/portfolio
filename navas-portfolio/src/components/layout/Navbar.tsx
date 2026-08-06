import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <nav
          className={`w-full max-w-3xl h-14 rounded-2xl flex items-center justify-between px-4 transition-all duration-300 ${
            scrolled
              ? "bg-white/60 backdrop-blur-2xl border border-white/30 shadow-xl"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center text-xs font-bold">
              MN
            </div>

            <span className="hidden sm:block font-semibold text-zinc-900">
              Muhammed Navas
            </span>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-600 hover:text-black hover:bg-zinc-100 transition"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-zinc-700 hover:bg-zinc-100 transition"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b">
                <span className="font-semibold text-lg">Menu</span>

                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-zinc-100"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="flex flex-col p-6 gap-3">
                {LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-left px-4 py-3 rounded-xl text-lg font-medium text-zinc-700 hover:bg-zinc-100 hover:text-black transition"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}