import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { stagger } from '@/lib/motion';

interface Props {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'white' | 'subtle';
}

export default function SectionWrapper({ id, className = '', children, bg = 'white' }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={`section-pad ${bg === 'subtle' ? 'bg-zinc-50' : 'bg-white'} ${className}`}
    >
      <div className="container">
        {children}
      </div>
    </motion.section>
  );
}

export function SectionLabel({ text }: { text: string }) {
  return <p className="label mb-4">{text}</p>;
}
