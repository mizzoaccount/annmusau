'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiHeart } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, type: 'spring' }}
      >
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-500 rounded-full mix-blend-screen blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-white rounded-full mix-blend-screen blur-3xl opacity-20" />
      </motion.div>

      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl w-full">
        <div className="overflow-hidden">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Anne Musau
            </span>
            <br />
            <span className="text-white mt-2 inline-block">Ministries</span>
          </motion.h1>
        </div>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Transforming lives through faith, hope, and divine love. Join us in our mission to spread 
          God's word across nations.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white px-8 py-4 rounded-full flex items-center gap-2 text-lg font-semibold hover:bg-red-700 transition-all"
          >
            <FiHeart className="text-xl" />
            Support the Ministry
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-full flex items-center gap-2 text-lg hover:bg-white hover:text-black transition-all"
          >
            Upcoming Events
            <FiArrowRight className="text-xl" />
          </motion.button>
        </motion.div>

        {/* Verse of the Day */}
        <motion.div
          className="mt-12 mx-auto max-w-md bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-red-400 text-sm mb-2">Today's Verse</p>
          <p className="text-white italic">"For I know the plans I have for you, declares the Lord..."</p>
          <p className="text-gray-400 text-sm mt-2">Jeremiah 29:11</p>
        </motion.div>
      </div>

      {/* Floating Cross Animation */}
      <motion.div
        className="absolute top-1/4 left-10 opacity-20"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="text-4xl">✝</div>
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-10 opacity-20"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      >
        <div className="text-4xl">✝</div>
      </motion.div>
    </section>
  );
}

