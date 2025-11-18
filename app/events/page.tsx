'use client';

import EventCard from '@/components/EventCard';

const upcomingEvents = [
  {
    title: 'Monthly Mass & Social',
    date: 'March 15, 2024',
    location: 'St. Patrick\'s Basilica',
    description: 'Join us for Mass followed by a social gathering with food and fellowship. A great opportunity to meet other young Catholics in the community.',
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
    title: 'Service Project: Food Bank',
    date: 'April 5, 2024',
    location: 'Ottawa Food Bank',
    description: 'Join us as we serve our community by volunteering at the local food bank. Service is an essential part of our faith.',
  },
  {
    title: 'Easter Celebration',
    date: 'April 7, 2024',
    location: 'TBD',
    description: 'Celebrate the joy of Easter together with Mass, food, and fellowship. All are welcome to join in this special celebration.',
  },
  {
    title: 'Theology on Tap',
    date: 'April 12, 2024',
    location: 'Local Pub',
    description: 'An informal gathering where we discuss faith and life in a relaxed setting. Great for those who prefer casual conversations about faith.',
  },
];

export default function Events() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Upcoming Events
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Join us for Mass, retreats, social gatherings, and service opportunities
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {upcomingEvents.map((event, index) => (
            <EventCard
              key={event.title}
              title={event.title}
              date={event.date}
              location={event.location}
              description={event.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-foreground/5 border border-foreground/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-foreground/70 mb-6">
            Want to stay informed about upcoming events? Contact us to be added to our mailing list.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-marian-indigo text-white rounded-lg font-medium hover:bg-marian-indigo/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

