'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface Activity {
  title: string;
  description: string;
  schedule: string;
  image?: string;
  details?: string;
  location?: string;
  activities?: string[];
  contact?: string;
  email?: string;
  phone?: string;
  website?: string;
  address?: string;
}

interface ActivitySidebarProps {
  activity: Activity | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ActivitySidebar({ activity, isOpen, onClose }: ActivitySidebarProps) {
  if (!activity) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-8 md:p-12">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-lg hover:bg-background/5 transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6 text-background"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Content */}
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-background mb-4">
                    {activity.title}
                  </h2>
                  <p className="text-xl text-background/70 leading-relaxed">
                    {activity.description}
                  </p>
                </div>

                {/* Details Section */}
                {activity.details && (
                  <div className="pt-6 border-t border-background/10">
                    <p className="text-sm uppercase tracking-[0.3em] text-background/50 mb-3">
                      About
                    </p>
                    <p className="text-lg text-background/70 leading-relaxed">
                      {activity.details}
                    </p>
                  </div>
                )}

                {/* Activities Section */}
                {activity.activities && activity.activities.length > 0 && (
                  <div className="pt-6 border-t border-background/10">
                    <p className="text-sm uppercase tracking-[0.3em] text-background/50 mb-4">
                      Activities
                    </p>
                    <ul className="space-y-3">
                      {activity.activities.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-background/30"></span>
                          <span className="text-lg text-background/80 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Information Grid */}
                <div className="pt-6 border-t border-background/10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activity.schedule && (
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-background/50 mb-2">
                          Schedule
                        </p>
                        <p className="text-lg text-background">{activity.schedule}</p>
                      </div>
                    )}
                    
                    {activity.location && (
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-background/50 mb-2">
                          Location
                        </p>
                        <p className="text-lg text-background">{activity.location}</p>
                      </div>
                    )}

                    {activity.address && (
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-background/50 mb-2">
                          Address
                        </p>
                        <p className="text-lg text-background/80 leading-relaxed">{activity.address}</p>
                      </div>
                    )}

                    {activity.website && (
                      <div className="md:col-span-2">
                        <p className="text-sm uppercase tracking-[0.3em] text-background/50 mb-2">
                          Website
                        </p>
                        <a 
                          href={activity.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-lg text-background hover:text-background/70 underline transition-colors"
                        >
                          {activity.website}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Contact Section */}
                {(activity.email || activity.phone || activity.contact) && (
                  <div className="pt-6 border-t border-background/10">
                    <p className="text-sm uppercase tracking-[0.3em] text-background/50 mb-4">
                      Get in Touch
                    </p>
                    <div className="space-y-4">
                      {activity.email && (
                        <div className="flex items-start">
                          <svg className="w-5 h-5 text-background/50 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <div>
                            <p className="text-sm text-background/50 mb-1">Email</p>
                            <a 
                              href={`mailto:${activity.email}`}
                              className="text-lg text-background hover:text-background/70 underline transition-colors"
                            >
                              {activity.email}
                            </a>
                          </div>
                        </div>
                      )}

                      {activity.phone && (
                        <div className="flex items-start">
                          <svg className="w-5 h-5 text-background/50 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <div>
                            <p className="text-sm text-background/50 mb-1">Phone</p>
                            <a 
                              href={`tel:${activity.phone}`}
                              className="text-lg text-background hover:text-background/70 underline transition-colors"
                            >
                              {activity.phone}
                            </a>
                          </div>
                        </div>
                      )}

                      {activity.contact && !activity.email && !activity.phone && (
                        <div className="flex items-start">
                          <svg className="w-5 h-5 text-background/50 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <div>
                            <p className="text-sm text-background/50 mb-1">Contact</p>
                            <p className="text-lg text-background">{activity.contact}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

