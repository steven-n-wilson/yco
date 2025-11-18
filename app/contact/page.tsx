'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            Get in Touch
          </h1>
          <p className="text-xl text-background/70 leading-relaxed max-w-3xl">
            We'd love to hear from you. Reach out with questions, ideas, or to get involved.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-16"
          >
            <div className="pb-12 border-b border-background/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What we're looking for:
              </h2>
              <ul className="space-y-4 text-background/70">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Young adults seeking to deepen their faith and grow in community</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Those interested in formation, service, and fellowship opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Individuals ready to connect with other Catholics in Ottawa</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why Young Catholics Ottawa?
              </h2>
              <ul className="space-y-4 text-background/70">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>We provide opportunities for spiritual growth and intellectual formation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>We connect you with a vibrant community of like-minded young adults</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>We offer regular events, retreats, and service opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>We support you in living out your faith in daily life</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-background mb-2">
                  Full Name <span className="text-background/50">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-background/20 rounded-md text-background placeholder-background/40 focus:outline-none focus:border-background transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-background mb-2">
                  Email Address <span className="text-background/50">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-background/20 rounded-md text-background placeholder-background/40 focus:outline-none focus:border-background transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-background mb-2">
                  Tell us about yourself <span className="text-background/50">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full px-4 py-3 bg-white border border-background/20 rounded-md text-background placeholder-background/40 focus:outline-none focus:border-background transition-colors resize-none"
                  placeholder="Introduce yourself, share your interests, and let us know how you'd like to get involved..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-background text-white rounded-md font-medium hover:bg-background/90 transition-colors"
              >
                {submitted ? 'Message Sent!' : 'Submit'}
              </button>

              {submitted && (
                <p className="text-sm text-background/60 text-center">
                  Thanks for your interest in YCO – if you're a fit, we'll get back to you within a week.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

