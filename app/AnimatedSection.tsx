"use client"
import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  amount?: number;
  delay?: number;
  id?: string;
};

export default function AnimatedSection({
  children,
  className,
  amount = 0.12,
  delay = 0,
  id,
}: Props) {
  const reduce = useReducedMotion();

  if (reduce) return <section id={id} className={className}>{children}</section>;

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.45, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
