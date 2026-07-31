import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, Sun, Moon } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    
    // // Check initial theme
    // if (document.documentElement.classList.contains("dark")) {
    //   setIsDark(true);
    // }
    
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // const toggleTheme = () => {
  //   setIsDark(!isDark);
  //   document.documentElement.classList.toggle("dark");
  // };

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      >
        <nav
          className={`w-full max-w-3xl flex items-center justify-between px-4 h-14 rounded-2xl transition-all duration-300 ${
            scrolled
  ? 'bg-white/50 backdrop-blur-2xl border border-white/20 shadow-xl'
  : 'bg-transparent border-transparent shadow-none'
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2.5 font-semibold text-sm text-zinc-900"
          >
            <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              MN
            </div>
            <span className="hidden sm:block">Muhammed Navas</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => scrollTo(l.href)}
                  className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors px-3 py-1.5 rounded-lg hover:bg-zinc-100 font-medium"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="hidden md:flex items-center justify-center p-2 rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors dark:hover:text-zinc-100 dark:hover:bg-zinc-800"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="text-zinc-600 hover:text-zinc-900 p-1"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div> */}
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-0 z-40 pt-20 bg-white/98 backdrop-blur-md flex flex-col items-center justify-center gap-6 md:hidden"
          >
            {LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-2xl font-semibold text-zinc-900 hover:text-zinc-500 transition-colors dark:text-white dark:hover:text-zinc-300"
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
