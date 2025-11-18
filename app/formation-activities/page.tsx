'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';

const activities = [
  {
    title: 'Bible Study',
    description: 'Weekly gatherings to study and reflect on Scripture together, deepening our understanding of God\'s word.',
    schedule: 'Every Tuesday, 7:00 PM',
    icon: '📖',
  },
  {
    title: 'Catechism Classes',
    description: 'Structured learning sessions covering Catholic doctrine, tradition, and theology for young adults.',
    schedule: 'Every Thursday, 7:00 PM',
    icon: '✝️',
  },
  {
    title: 'Spiritual Direction',
    description: 'One-on-one guidance and support for your personal spiritual journey and growth.',
    schedule: 'By appointment',
    icon: '🙏',
  },
  {
    title: 'Retreats',
    description: 'Regular weekend retreats providing opportunities for deeper prayer, reflection, and community building.',
    schedule: 'Monthly',
    icon: '⛪',
  },
  {
    title: 'Small Groups',
    description: 'Intimate discussion groups focused on specific topics or books, fostering deeper connections.',
    schedule: 'Various times',
    icon: '👥',
  },
  {
    title: 'Workshops',
    description: 'Educational workshops on topics like prayer, discernment, relationships, and living out your faith.',
    schedule: 'Monthly',
    icon: '💡',
  },
];

export default function FormationActivities() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Formation Activities
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Deepen your faith through our various formation programs designed specifically for young adults
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Card key={activity.title} delay={index * 0.1}>
              <div className="text-4xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {activity.title}
              </h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                {activity.description}
              </p>
              <p className="text-sm text-marian-indigo font-medium">
                {activity.schedule}
              </p>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-foreground/70 mb-6">
              Join us for our next formation activity. All are welcome, regardless of where you are in your faith journey.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-grace text-white rounded-lg font-medium hover:bg-grace/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

