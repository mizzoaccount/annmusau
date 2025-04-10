'use client';

import { motion } from 'framer-motion';
import { FiMail, FiArrowRight, FiSend } from 'react-icons/fi';
import { useState } from 'react';
import Link from 'next/link';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // In a real implementation, you would connect to your email service here
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="relative bg-gradient-to-br from-red-600 to-red-800 py-20 px-6 overflow-hidden">
      {/* Divine Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-white rounded-full opacity-5 blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 bg-[url('/cross-pattern.png')] opacity-5" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 text-white/90 mb-4">
            <FiMail className="text-3xl" />
            <span className="font-semibold">Stay Connected</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Receive Divine Inspiration
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join our heavenly newsletter for weekly devotionals, event updates, and spiritual nourishment.
          </p>
        </motion.div>

        {/* Newsletter Form */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {subscribed ? (
            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="text-5xl mb-4">✝</div>
              <h3 className="text-2xl font-bold text-white mb-2">Blessing Received!</h3>
              <p className="text-white/90 mb-6">
                Thank you for subscribing. May God's word nourish your spirit.
              </p>
              <motion.button
                className="inline-flex items-center gap-2 text-white font-medium"
                whileHover={{ gap: 3 }}
              >
                View Latest Devotional
                <FiArrowRight />
              </motion.button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-white/70">
                  <FiMail />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-white"
                  placeholder="Your heavenly email address"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="flex items-center justify-center gap-3 bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiSend className="text-xl" />
                Subscribe
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Alternative CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-white/80 mb-4">Prefer another way to connect?</p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10"
            whileHover={{ gap: 4 }}
          >
            <FiArrowRight className="text-xl" />
            <Link href="/contact" className="">
            Visit Our Contact Page
            </Link>
          </motion.a>
        </motion.div>

        {/* Floating Crosses */}
        <motion.div
          className="absolute -bottom-20 -left-20 text-9xl text-white/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          ✝
        </motion.div>
        <motion.div
          className="absolute -top-20 -right-20 text-9xl text-white/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          ✝
        </motion.div>
      </div>
    </section>
  );
}