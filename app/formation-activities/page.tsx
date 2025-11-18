'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ActivitySidebar from '@/components/ActivitySidebar';

const activities = [
  {
    title: 'Bible Study',
    description: 'Weekly scripture circles.',
    schedule: 'Every Tuesday, 7:00 PM',
    location: 'St. Patrick\'s Basilica',
    image: '/images/nd_stainedGlass.jpg',
    details: 'Join us for in-depth study of Scripture in a welcoming environment. We explore different books of the Bible, discuss their meaning, and apply lessons to our daily lives.',
  },
  {
    title: 'Catechism Classes',
    description: 'Doctrine deep dives for young adults.',
    schedule: 'Every Thursday, 7:00 PM',
    location: 'Community Center',
    image: '/images/nd_bishop.jpeg',
    details: 'Comprehensive classes on Catholic teaching, covering topics from the basics of faith to advanced theological concepts. Perfect for those seeking to deepen their understanding of the Church.',
  },
  {
    title: 'Spiritual Direction',
    description: 'One-on-one guidance for the journey.',
    schedule: 'By appointment',
    location: 'Various locations',
    image: '/images/nd_adoration.jpeg',
    details: 'Personalized spiritual guidance with experienced directors who help you discern God\'s will, grow in prayer, and navigate life\'s challenges through the lens of faith.',
  },
  {
    title: 'Retreats',
    description: 'Monthly retreats for prayer and rest.',
    schedule: 'Monthly',
    location: 'Retreat Center',
    image: '/images/nd_people.jpeg',
    details: 'Weekend retreats that combine prayer, reflection, talks, and community time. A chance to step away from daily life and focus on your relationship with God.',
  },
  {
    title: 'Small Groups',
    description: 'Intimate Gospel cohorts.',
    schedule: 'Various times',
    location: 'Various locations',
    image: '/images/nd_mf.jpeg',
    details: 'Small, intimate groups that meet regularly to discuss faith, read spiritual books together, and support one another in living out the Gospel in daily life.',
  },
  {
    title: 'Workshops',
    description: 'Practical prayer and discernment labs.',
    schedule: 'Monthly',
    location: 'Community Center',
    image: '/images/nd_frConnor.jpeg',
    details: 'Practical workshops covering topics like prayer methods, vocational discernment, building healthy relationships, and integrating faith into work and studies.',
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

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activities.map((activity, index) => (
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

      {/* Sidebar */}
      <ActivitySidebar
        activity={selectedActivity}
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
      />
    </div>
  );
}
