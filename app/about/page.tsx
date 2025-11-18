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
      'We design spaces where friendships, prayer, and mission sharpen one another.',
  },
];

const pillars = [
  { label: 'City anchors', value: '6', detail: 'parishes & campuses with weekly formation' },
  { label: 'Gatherings / year', value: '120+', detail: 'from prayer nights to networking events' },
  { label: 'Participants', value: '300+', detail: 'young Catholics shaped for mission' },
];

const values = [
  { title: 'Earn trust daily', body: 'We show up consistently, communicate transparently, and let our actions speak.' },
  { title: 'Debate, then decide', body: 'We challenge ideas with charity and move forward together once the call is made.' },
  { title: 'Be kind, stay bold', body: 'We lead with warmth, yet we refuse to soften the Gospel or our expectations.' },
  { title: 'Build for impact', body: 'We keep programs lean, measurable, and oriented toward conversion.' },
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
              We review these pillars weekly, and every retreat, small group, and leadership sprint maps back to them.
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
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-background/50">Our values</p>
            <h2 className="text-3xl font-bold">Principles we return to</h2>
            <p className="text-background/60 md:w-3/4 mx-auto">
              A handful of phrases we expect every leader to recite, live, and teach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-3xl border border-background/10 bg-white p-6 space-y-3"
              >
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-background/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-marian-indigo" />
                  {value.title}
                </div>
                <p className="text-background/70 leading-relaxed">{value.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

