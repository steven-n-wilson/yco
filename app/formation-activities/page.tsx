'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ActivitySidebar from '@/components/ActivitySidebar';

const activities = [
  {
    title: 'Parkhill University Residence',
    description: 'Formation for men seeking holiness in daily life.',
    schedule: 'Weekly',
    location: 'Various locations',
    locationBadge: 'Sandy Hill',
    badge: 'Opus Dei Men',
    image: '/images/opusdeimen.jpg',
    details: 'Formation activities for men focused on seeking holiness in ordinary life through work, family, and daily activities.',
    activities: [
      'Weekly Circle of Studies',
      'Monthly Recollection',
      'Spiritual Direction',
      'Formation Talks',
      'Retreats',
    ],
    address: '30 Goulburn Avenue, Ottawa, ON K1N 8C8',
    email: 'ottawa@opusdei.org',
    phone: '(613) 555-0100',
  },
  {
    title: 'Valrideau University Residence',
    description: 'Formation for women seeking holiness in daily life.',
    schedule: 'Weekly',
    location: 'Various locations',
    locationBadge: 'Sandy Hill',
    badge: 'Opus Dei Women',
    image: '/images/opusdeiwomen.jpg',
    details: 'Formation activities for women focused on seeking holiness in ordinary life through work, family, and daily activities.',
  },
  {
    title: 'Le460',
    description: 'Formation and community at Le460.',
    schedule: 'Weekly',
    location: 'Le460',
    locationBadge: 'Downtown',
    image: '/images/le460.jpg',
    details: 'Formation programs and community activities for young adults at Le460.',
  },
  {
    title: 'CCO',
    description: 'Catholic Christian Outreach formation.',
    schedule: 'Weekly',
    location: 'Various locations',
    locationBadge: 'uOttawa & Carleton',
    image: '/images/cco.jpg',
    details: 'Formation activities through Catholic Christian Outreach, focused on evangelization and discipleship.',
    activities: [
      'Bible Study Groups',
      'Discipleship Programs',
      'Campus Ministry',
      'Retreats and Conferences',
      'Service Opportunities',
    ],
    email: 'info@cco.ca',
    phone: '(613) 555-0123',
  },
  {
    title: 'Notre Dame Cathedral',
    description: 'Formation and community at Notre Dame.',
    schedule: 'Weekly',
    location: 'Notre Dame Cathedral',
    locationBadge: 'Downtown',
    image: '/images/nd_stainedGlass.jpg',
    details: 'Formation programs and community activities for young adults at Notre Dame Cathedral.',
  },
  {
    title: 'St. Patrick\'s Basilica',
    description: 'Formation and community at St. Patrick\'s.',
    schedule: 'Weekly',
    location: 'St. Patrick\'s Basilica',
    locationBadge: 'Downtown',
    image: '/images/stpats.jpg',
    details: 'Formation programs and community activities for young adults at St. Patrick\'s Basilica.',
  },
  {
    title: 'St. Joseph\'s Parish',
    description: 'Formation and community at St. Joseph\'s.',
    schedule: 'Weekly',
    location: 'St. Joseph\'s Parish',
    locationBadge: 'Downtown',
    image: '/images/nd_bishop.jpeg',
    details: 'Formation programs and community activities for young adults at St. Joseph\'s Parish.',
  },
  {
    title: 'St. Clement Parish',
    description: 'Formation and community at St. Clement.',
    schedule: 'Weekly',
    location: 'St. Clement Parish',
    locationBadge: 'Downtown',
    image: '/images/nd_adoration.jpeg',
    details: 'Formation programs and community activities for young adults at St. Clement Parish.',
  },
  {
    title: 'St. Charbel',
    description: 'Formation and community at St. Charbel.',
    schedule: 'Weekly',
    location: 'St. Charbel',
    locationBadge: 'Vanier',
    image: '/images/stcharbel.jpg',
    details: 'Formation programs and community activities for young adults at St. Charbel.',
  },
  {
    title: 'St. Maurice Parish',
    description: 'Formation and community at St. Maurice.',
    schedule: 'Weekly',
    location: 'St. Maurice Parish',
    locationBadge: 'Nepean',
    image: '/images/nd_frConnor.jpeg',
    details: 'Formation programs and community activities for young adults at St. Maurice Parish.',
  },
  {
    title: 'St. Mary\'s Parish',
    description: 'Formation and community at St. Mary\'s.',
    schedule: 'Weekly',
    location: 'St. Mary\'s Parish',
    locationBadge: 'Ottawa',
    image: '/images/stmarys.jpg',
    details: 'Formation programs and community activities for young adults at St. Mary\'s Parish.',
  },
  {
    title: 'Holy Redeemer Parish',
    description: 'Formation and community at Holy Redeemer.',
    schedule: 'Weekly',
    location: 'Holy Redeemer Parish',
    locationBadge: 'Kanata',
    image: '/images/holyredeemer.jpg',
    details: 'Formation programs and community activities for young adults at Holy Redeemer Parish.',
  },
];

export default function FormationActivities() {
  const [selectedActivity, setSelectedActivity] = useState<typeof activities[0] | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCardClick = (activity: typeof activities[0]) => {
    setSelectedActivity(activity);
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setTimeout(() => setSelectedActivity(null), 300);
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-16 md:pb-20 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-background mb-6">
              Our Anchors
            </h1>
            <p className="text-xl text-background/70 leading-relaxed max-w-3xl mx-auto">
              Deepen your faith through the various formation programs designed specifically for young adults
            </p>
          </motion.div>

          {/* First Section: Formation Centers */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-background/50 mb-3">
                Formation Centres
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-background">
                Residences & Centres
              </h2>
              <p className="text-background/60 mt-3 max-w-2xl">
                Dedicated spaces for formation, community, and spiritual growth
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activities.slice(0, 4).map((activity, index) => (
                <motion.button
                  key={activity.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCardClick(activity)}
                  className="relative text-left rounded-md overflow-hidden aspect-[4/3] group"
                >
                  {/* Background Image */}
                  <motion.div 
                    className="absolute inset-0"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Gradient Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent"
                      whileHover={{ opacity: 0.9 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Location Badge */}
                  {activity.locationBadge && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-2.5 py-1 text-xs font-medium uppercase tracking-[0.05em] bg-white/90 backdrop-blur-sm text-background rounded">
                        {activity.locationBadge}
                      </span>
                    </div>
                  )}

                  {/* Plus Button */}
                  <motion.div 
                    className="absolute top-4 right-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className="w-8 h-8 rounded bg-white/90 backdrop-blur-sm flex items-center justify-center"
                      whileHover={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg
                        className="w-4 h-4 text-background"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-5">
                    <div>
                      {activity.badge && (
                        <span className="inline-block px-2 py-0.5 text-xs font-medium uppercase tracking-[0.05em] bg-white/20 backdrop-blur-sm text-white rounded mb-2">
                          {activity.badge}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-white mb-1.5">
                        {activity.title}
                      </h3>
                      <p className="text-white/95 text-sm font-medium leading-relaxed mb-2">
                        {activity.description}
                      </p>
                      <p className="text-white/70 text-xs">
                        {activity.schedule}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Second Section: Parishes */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-10"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-background/50 mb-3">
                Parishes & Communities
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-background">
                Local Parishes
              </h2>
              <p className="text-background/60 mt-3 max-w-2xl">
                Formation opportunities across Ottawa's Catholic parishes
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activities.slice(4).map((activity, index) => (
                <motion.button
                  key={activity.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCardClick(activity)}
                  className="relative text-left rounded-md overflow-hidden aspect-[4/3] group"
                >
                  {/* Background Image */}
                  <motion.div 
                    className="absolute inset-0"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Gradient Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent"
                      whileHover={{ opacity: 0.9 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Location Badge */}
                  {activity.locationBadge && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-2.5 py-1 text-xs font-medium uppercase tracking-[0.05em] bg-white/90 backdrop-blur-sm text-background rounded">
                        {activity.locationBadge}
                      </span>
                    </div>
                  )}

                  {/* Plus Button */}
                  <motion.div 
                    className="absolute top-4 right-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className="w-8 h-8 rounded bg-white/90 backdrop-blur-sm flex items-center justify-center"
                      whileHover={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg
                        className="w-4 h-4 text-background"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-5">
                    <div>
                      {activity.badge && (
                        <span className="inline-block px-2 py-0.5 text-xs font-medium uppercase tracking-[0.05em] bg-white/20 backdrop-blur-sm text-white rounded mb-2">
                          {activity.badge}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-white mb-1.5">
                        {activity.title}
                      </h3>
                      <p className="text-white/95 text-sm font-medium leading-relaxed mb-2">
                        {activity.description}
                      </p>
                      <p className="text-white/70 text-xs">
                        {activity.schedule}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <ActivitySidebar
        activity={selectedActivity}
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
      />
    </div>
  );
}
