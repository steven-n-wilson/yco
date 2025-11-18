'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const upcomingEvents = [
  {
    title: 'Monthly Mass & Social',
    date: 'March 15, 2024',
    location: 'St. Patrick\'s Basilica',
    description: 'Join us for Mass followed by a social gathering with food and fellowship. A great opportunity to meet other young Catholics in the community.',
    image: '/images/nd_people.jpeg',
  },
  {
    title: 'Lenten Retreat',
    date: 'March 22-24, 2024',
    location: 'Retreat Center',
    description: 'A weekend retreat focused on prayer, reflection, and spiritual growth during the Lenten season. Open to all young adults.',
  },
  {
    title: 'Bible Study Kickoff',
    date: 'March 26, 2024',
    location: 'Community Center',
    description: 'Starting a new series on the Gospel of John. Perfect for those new to Bible study or looking to deepen their understanding.',
  },
  {
    title: 'Easter Celebration',
    date: 'April 7, 2024',
    location: 'TBD',
    description: 'Celebrate the joy of Easter together with Mass, food, and fellowship. All are welcome to join in this special celebration.',
  },
];

export default function Events() {
  const mainEvent = upcomingEvents[0];
  const otherEvents = upcomingEvents.slice(1);

  return (
    <div className="min-h-screen bg-white text-background pt-20 md:pt-24 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Events
          </h1>
          <p className="text-xl text-background/70 leading-relaxed max-w-3xl">
            Join us for Mass, retreats, social gatherings, and service opportunities
          </p>
        </motion.div>

        {/* Main Event - Highlighted with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 pb-16 border-b border-background/10"
        >
          {/* Announcement Badge */}
          <div className="mb-6 flex items-center gap-4">
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
            <div className="relative aspect-[16/9] md:aspect-[21/9]">
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
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <div className="max-w-3xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-6"
                  >
                    <span className="inline-block px-6 py-2.5 text-sm uppercase tracking-[0.25em] text-background font-bold bg-white rounded-full shadow-xl ring-2 ring-white/50 backdrop-blur-sm">
                      Next Event
                    </span>
                  </motion.div>
                  
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg"
                  >
                    {mainEvent.title}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-white/95 mb-6 leading-relaxed max-w-2xl drop-shadow-md"
                  >
                    {mainEvent.description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-white/90 font-medium"
                  >
                    <span>{mainEvent.date}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{mainEvent.location}</span>
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

