import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      >
        <nav
          className={`w-full max-w-3xl flex items-center justify-between px-4 h-14 rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-white/90 backdrop-blur-md border border-zinc-200 shadow-sm'
              : 'bg-white/80 backdrop-blur-sm border border-zinc-200/60'
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            className="flex items-center gap-2.5 font-semibold text-sm text-zinc-900"
          >
            <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              MN
            </div>
            <span className="hidden sm:block">Muhammed Navas</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {LINKS.map(l => (
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

          {/* Hire me */}
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden md:flex btn-black text-xs py-2 px-4 rounded-xl"
          >
            Hire me
          </button>

          <button onClick={() => setOpen(!open)} className="md:hidden text-zinc-600 hover:text-zinc-900 p-1">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
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
            {LINKS.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                className="text-2xl font-semibold text-zinc-900 hover:text-zinc-500 transition-colors">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo('#resume')} className="btn-black mt-4">Hire me</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
