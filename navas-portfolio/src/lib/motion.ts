import type { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
};
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
export const staggerSlow: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};
