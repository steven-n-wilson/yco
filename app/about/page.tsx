'use client';

import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Rooted in the capital',
    description:
      'We build alongside parishes, campuses, and local movements to keep young Catholics anchored in Ottawa.',
  },
  {
    title: 'Formation that fits real life',
    description:
      'We pair thoughtful teaching with practical rhythms so faith can thrive in classrooms, offices, and homes.',
  },
  {
    title: 'Community with purpose',
    description:
      'We bring spaces where friendships, prayer, and mission sharpen one another.',
  },
];

const pillars = [
  { label: 'City anchors', value: '12', detail: 'parishes & campuses with weekly formation' },
  { label: 'Gatherings / year', value: '100+', detail: 'from prayer nights to networking events' },
  { label: 'Participants', value: '300+', detail: 'young Catholics shaped for mission' },
];

const values = [
  { title: 'Go Out', body: 'We create opportunities to encounter Jesus, proclaim the Gospel, and reach out to others with God\'s love and mercy.' },
  { title: 'Go Deep', body: 'We journey in ongoing conversion, rooted in the Eucharist, Word of God, and personal relationship with Christ.' },
  { title: 'Go Together', body: 'We unite in mission, faithful to the Gospel and Tradition, supporting one another as servant leaders.' },
];

export default function About() {
  return (
    <div className="bg-white text-background">
      <section className="pt-28 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-background/60">About YCO</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              We’re building a city-wide network of exceptional Catholics.
            </h1>
            <p className="text-xl text-background/70 md:w-3/4">
              Young Catholics Ottawa pairs proven formation with focused community, helping young adults
              integrate faith, work, and mission without leaving their hometown.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border border-background/10 rounded-3xl p-8">
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="space-y-1"
              >
                <p className="text-4xl font-semibold">{pillar.value}</p>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-background/50">
                  {pillar.label}
                </p>
                <p className="text-sm text-background/60">{pillar.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-14">
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#F7F5F0] p-8 md:p-12 space-y-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-background/50">What guides our day-to-day</p>
            <h2 className="text-3xl font-bold">Simple rhythms, lasting impact</h2>
            <p className="text-background/60 md:w-2/3">
              These principles shape how we gather, form leaders, and build community across Ottawa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-2xl bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-background/45 mb-3">
                  {item.title}
                </p>
                <p className="text-base text-background/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 mb-12"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-background/50 text-center">Our values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Principles we return to</h2>
            <p className="text-background/60 text-center max-w-2xl mx-auto">
              Inspired by the Archdiocesan vision, we go out to witness, go deep in faith, and go together in mission.
            </p>
          </motion.div>

          <div className="space-y-0">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative py-8 md:py-10"
              >
                {index < values.length - 1 && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-background/10 to-transparent" />
                )}
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-6 md:gap-12`}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-background/5 flex items-center justify-center border border-background/10">
                      <span className="text-2xl font-bold text-background">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-background">{value.title}</h3>
                    <p className="text-background/70 leading-relaxed">{value.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="text-center space-y-8 py-12 md:py-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-background/20"></div>
                <svg className="w-6 h-6 text-background/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <div className="h-px w-12 bg-background/20"></div>
              </div>
              
              <blockquote className="text-2xl md:text-4xl font-bold text-background leading-relaxed italic max-w-3xl mx-auto">
                "Dear young people, let yourselves be taken over by the light of Christ, and spread that light wherever you are."
              </blockquote>
              
              <div className="pt-6">
                <p className="text-sm uppercase tracking-[0.2em] text-background/50 font-medium mb-1">
                  St. John Paul II
                </p>
                <p className="text-xs text-background/40">
                  Inspiration
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

