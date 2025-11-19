'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const upcomingEvents = [
  {
    title: 'Christmas Adoration & Social',
    date: 'December 13, 2025',
    location: 'St. Patrick\'s Basilica',
    description: 'An evening of prayer and Christmas celebration with Adoration, Confessions, and festive fellowship.',
    image: '/images/christmasCookies.jpg',
    program: [
      {
        time: '6:00 PM',
        title: 'Adoration & Confessions',
        details: [
          'Confessions available',
          'Fr. Connor & Fr. Steve',
        ],
      },
      {
        time: '7:00 PM',
        title: 'Christmas Social',
        details: [
          'Gingerbread cookie competition',
          'Hot chocolate & snacks',
        ],
      },
    ],
  },
  {
    title: 'New Year\'s Party',
    date: 'January 9, 2025',
    location: 'TBD',
    description: 'Join us for a celebration to start the new year with fellowship, food, and community.',
  },
  {
    title: 'Coming Soon',
    date: 'TBD',
    location: 'TBD',
    description: 'More details coming soon.',
  },
  {
    title: 'Coming Soon',
    date: 'TBD',
    location: 'TBD',
    description: 'More details coming soon.',
  },
];

export default function Events() {
  const mainEvent = upcomingEvents[0];
  const otherEvents = upcomingEvents.slice(1);

  return (
    <div className="min-h-screen bg-white text-background pt-20 md:pt-24 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Event - Highlighted with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 pb-16 border-b border-background/10"
        >
          {/* Announcement Badge */}
          <div className="mb-4 flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-background/20"></div>
              <span className="text-sm uppercase tracking-[0.3em] text-background/60 font-medium">
                Featured Event
              </span>
              <div className="h-px flex-1 bg-background/20"></div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden group shadow-2xl border-4 border-white">
            {/* Background Image with Overlay */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] min-h-[500px] md:min-h-[550px] max-h-[650px]">
              <Image
                src={mainEvent.image || '/images/nd_people.jpeg'}
                alt={mainEvent.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="100vw"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-background/40" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                <div className="max-w-3xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-4"
                  >
                    <span className="inline-block px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-background font-bold bg-white rounded-full shadow-lg">
                      Next Event
                    </span>
                  </motion.div>
                  
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight drop-shadow-lg"
                  >
                    {mainEvent.title}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-base text-white/95 mb-4 leading-relaxed max-w-2xl drop-shadow-md"
                  >
                    {mainEvent.description}
                  </motion.p>

                  {/* Program */}
                  {mainEvent.program && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.45 }}
                      className="mb-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-white/80 font-medium mb-3">
                        Program
                      </p>
                      <div className="space-y-2.5">
                        {mainEvent.program.map((item, index) => (
                          <div key={index}>
                            <div className="flex items-start gap-3">
                              <span className="text-white font-semibold text-sm flex-shrink-0 min-w-[4rem]">
                                {item.time}
                              </span>
                              <div className="flex-1">
                                <p className="text-white font-medium text-sm mb-1.5">
                                  {item.title}
                                </p>
                                {item.details && (
                                  <div className="text-white/85 text-sm space-y-1">
                                    {item.details.map((detail, detailIndex) => (
                                      <div key={detailIndex} className="flex items-start">
                                        <span className="mr-2 mt-1 flex-shrink-0 w-1 h-1 rounded-full bg-white/70"></span>
                                        <span>{detail}</span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-white/90 font-medium mb-4"
                  >
                    <span>{mainEvent.date}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{mainEvent.location}</span>
                  </motion.div>

                  {/* Instagram Banner */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                  >
                    <a
                      href="https://www.instagram.com/youngcatholicsottawa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all group"
                    >
                      <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span className="text-xs md:text-sm text-white font-medium">Stay up to date with the latest news</span>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Events List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <div className="space-y-3 mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-background/50 font-medium">
              What's Next
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Mark your calendar
            </h2>
            <p className="text-background/60 max-w-2xl">
              Join us for these upcoming gatherings, retreats, and opportunities to grow in faith and community.
            </p>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {otherEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className={`group rounded-xl p-6 transition-all duration-300 ${
                index % 2 === 0 
                  ? 'bg-[#F7F5F0] hover:shadow-lg' 
                  : 'bg-white border border-background/10 hover:border-background/20 hover:shadow-md'
              }`}
            >
              <div className="space-y-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-background/50 font-medium mb-2">
                    {event.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    {event.title}
                  </h3>
                </div>
                <p className="text-background/70 text-sm leading-relaxed">
                  {event.description}
                </p>
                <div className="pt-3 border-t border-background/10">
                  <span className="text-sm text-background/60">
                    {event.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

