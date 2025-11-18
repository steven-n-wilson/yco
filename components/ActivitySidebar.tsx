'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface Activity {
  title: string;
  description: string;
  schedule: string;
  image?: string;
  details?: string;
  location?: string;
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
            className="fixed right-0 top-0 h-full w-full max-w-lg bg-white shadow-2xl z-50 overflow-y-auto"
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
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-background mb-4">
                    {activity.title}
                  </h2>
                  <p className="text-xl text-background/70 leading-relaxed">
                    {activity.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-background/10 space-y-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-background/50 mb-2">
                      Schedule
                    </p>
                    <p className="text-lg text-background">{activity.schedule}</p>
                  </div>
                  
                  {activity.location && (
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-background/50 mb-2">
                        Location
                      </p>
                      <p className="text-lg text-background">{activity.location}</p>
                    </div>
                  )}
                  
                  {activity.details && (
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-background/50 mb-2">
                        Details
                      </p>
                      <p className="text-lg text-background/70 leading-relaxed">
                        {activity.details}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

