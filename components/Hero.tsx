'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ImageCarousel from './ImageCarousel';

export default function Hero() {
  // Images from public/images/ folder
  const carouselImages = [
    '/images/nd_adoration.jpeg',
    '/images/nd_bishop.jpeg',
    '/images/nd_mf.jpeg',
    '/images/nd_people.jpeg',
    // '/images/nd_frConnor.jpeg',
    // '/images/nd_nat.jpeg',
  ];

  return (
    <section className="relative pt-28 md:pt-32 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto space-y-6"
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center justify-center text-sm font-semibold tracking-[0.3em] uppercase text-background/60"
            >
              Exceptional Catholics, Together
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-tight">
              Young Catholics <span className="text-black">Ottawa</span>
            </h1>
            <p className="text-xl md:text-2xl text-background/70 leading-relaxed max-w-2xl mx-auto">
              A community of young Catholics growing in faith together.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center pt-2"
            >
              <Link
                href="/events"
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-background text-white rounded-lg font-semibold text-base hover:bg-background/90 hover:scale-105 transition-all duration-200 shadow-lg shadow-background/20 hover:shadow-xl hover:shadow-background/30"
              >
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Our Next Event
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Image Carousel - Full Width */}
      {carouselImages.length >= 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ImageCarousel images={carouselImages} />
        </motion.div>
      )}
      
      {/* Divider Line */}
      <div className="w-full border-t border-background/10"></div>
    </section>
  );
}

