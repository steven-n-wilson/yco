'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About YCO
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Building a vibrant community of young Catholics in Ottawa
          </p>
        </motion.div>

        {/* History Section */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-foreground mb-6"
          >
            Our Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground/70 leading-relaxed mb-4"
          >
            Young Catholics Ottawa was founded to address the need for authentic community 
            and spiritual formation among young adults in the Ottawa area. We recognized that 
            many young Catholics were seeking deeper connections with their faith and with 
            others who share their values.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground/70 leading-relaxed"
          >
            Since our founding, we have grown into a thriving community that welcomes young 
            adults from all walks of life, providing opportunities for prayer, study, service, 
            and fellowship.
          </motion.p>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-foreground mb-6"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground/70 leading-relaxed"
          >
            To support and encourage young adults in their Catholic faith journey by providing 
            opportunities for spiritual growth, authentic community, and service to others, 
            all while fostering a deeper relationship with Christ and His Church.
          </motion.p>
        </section>

        {/* Values Section */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-foreground mb-8"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card delay={0.1}>
              <h3 className="text-xl font-semibold text-foreground mb-3">Faith</h3>
              <p className="text-foreground/70">
                We are committed to deepening our relationship with God through prayer, 
                the sacraments, and study of the Catholic faith.
              </p>
            </Card>
            <Card delay={0.2}>
              <h3 className="text-xl font-semibold text-foreground mb-3">Community</h3>
              <p className="text-foreground/70">
                We believe in the power of authentic friendships and support one another 
                in our spiritual journeys.
              </p>
            </Card>
            <Card delay={0.3}>
              <h3 className="text-xl font-semibold text-foreground mb-3">Service</h3>
              <p className="text-foreground/70">
                We are called to serve others, following Christ's example of love and 
                compassion for all.
              </p>
            </Card>
            <Card delay={0.4}>
              <h3 className="text-xl font-semibold text-foreground mb-3">Growth</h3>
              <p className="text-foreground/70">
                We are committed to continuous spiritual and personal growth, always 
                seeking to become better versions of ourselves.
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

