'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  href?: string;
  delay?: number;
}

export default function EventCard({ title, date, location, description, href, delay = 0 }: EventCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="bg-foreground/5 border border-foreground/10 rounded-lg p-6 hover:border-grace/50 transition-all hover:shadow-lg"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
        <h3 className="text-xl font-semibold text-foreground mb-2 sm:mb-0">{title}</h3>
        <span className="text-sm text-grace font-medium">{date}</span>
      </div>
      <p className="text-sm text-foreground/60 mb-2">{location}</p>
      <p className="text-foreground/80">{description}</p>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

