/*?'use client';

import { motion } from 'framer-motion';
import { Cross } from 'lucide-react';
import {  FiBookOpen, FiStar } from 'react-icons/fi';
import Image from 'next/image';

export default function AboutSection() {
  const beliefs = [
    { icon: <Cross />, title: "Divine Salvation", text: "We believe in salvation through faith in Jesus Christ" },
    { icon: <FiBookOpen />, title: "Biblical Truth", text: "The Bible as the inspired word of God" },
    { icon: <FiStar />, title: "Eternal Hope", text: "In the promise of eternal life through Christ" },
  ];

  return (
    <section className="relative bg-white py-20 px-6">
      {/* Decorative Background Elements *
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-20 top-1/3 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-t from-white to-red-50 opacity-30" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Title *
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            Our Divine Calling
          </span>
        </motion.h2>

        {/* Biography Card *
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative group">
            <div className="absolute -inset-2 bg-red-500/10 rounded-3xl transform rotate-2 transition-all group-hover:rotate-0" />
            <div className="relative bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Biography</h3>
              <p className="text-gray-600 leading-relaxed">
                Anne Musau Ministries was founded in 2010 with a divine mandate to spread the gospel 
                through evangelism, media outreach, and community transformation. What began as 
                small prayer meetings has grown into a global movement impacting millions through 
                our television programs, humanitarian works, and spiritual empowerment initiatives.
              </p>
            </div>
          </div>
          <motion.div
  className="relative rounded-3xl overflow-hidden bg-gray-100 min-h-[300px]"
  whileHover={{ scale: 0.98 }}
>
  {/* Actual Image with Red Overlay *
  <div className="absolute inset-0">
    <Image
      src="/assets/images/media/musau.jpeg"
      alt="Anne Musau Ministry"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-red-500/80 to-red-700/80" />
    <div className="absolute inset-0 mix-blend-multiply bg-red-100/30" />
  </div>
</motion.div>
        </motion.div>

        {/* Mission Statement *
        <motion.div
          className="bg-red-600 text-white rounded-[4rem] p-12 mb-24 relative overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full" />
          <h3 className="text-3xl font-bold mb-6">Our Holy Mission</h3>
          <p className="text-xl leading-relaxed max-w-2xl">
            To empower generations with the life-changing truth of God's word, 
            demonstrate Christ's love through actionable ministry, and raise 
            disciples who transform their communities.
          </p>
        </motion.div>

        {/* Core Beliefs *
        <div className="grid md:grid-cols-3 gap-8">
          {beliefs.map((belief, index) => (
            <motion.div
              key={belief.title}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              <div className="text-red-500 text-4xl mb-4">{belief.icon}</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                {belief.title}
              </h4>
              <p className="text-gray-600">{belief.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Animated Verse *
        <motion.div
          className="mt-20 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-red-500 text-4xl mb-4">❝</div>
          <p className="text-xl italic text-gray-600 mb-4">
            "Therefore go and make disciples of all nations, baptizing them 
            in the name of the Father and of the Son and of the Holy Spirit."
          </p>
          <p className="text-gray-500">Matthew 28:19</p>
        </motion.div>
      </div>
    </section>
  );
}*/

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Cross } from 'lucide-react';
import { FiBookOpen, FiStar } from 'react-icons/fi';

export default function AboutSection() {
  const beliefs = [
    { icon: <Cross />, title: "Divine Salvation", text: "We believe in salvation through faith in Jesus Christ" },
    { icon: <FiBookOpen />, title: "Biblical Truth", text: "The Bible as the inspired word of God" },
    { icon: <FiStar />, title: "Eternal Hope", text: "In the promise of eternal life through Christ" },
  ];

  return (
    <section className="relative bg-white py-20 px-6">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-20 top-1/3 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-t from-white to-red-50 opacity-30" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            Our Divine Calling
          </span>
        </motion.h2>

        {/* Biography Card */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative group">
            <div className="absolute -inset-2 bg-red-500/10 rounded-3xl transform rotate-2 transition-all group-hover:rotate-0" />
            <div className="relative bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Biography</h3>
              <p className="text-gray-600 leading-relaxed">
                Anne Musau Ministries was founded in 2010 with a divine mandate to spread the gospel 
                through evangelism, media outreach, and community transformation. What began as 
                small prayer meetings has grown into a global movement impacting millions through 
                our television programs, humanitarian works, and spiritual empowerment initiatives.
              </p>
            </div>
          </div>
          <motion.div
  className="relative rounded-3xl overflow-hidden bg-gray-100 min-h-[300px]"
  whileHover={{ scale: 0.98 }}
>
  {/* Image with Very Light Red Overlay */}
  <div className="absolute inset-0">
    <Image
      src="/assets/images/media/musau.jpeg"
      alt="Anne Musau Ministry"
      fill
      className="object-cover"
      priority
      style={{ objectPosition: '50% 5%' }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-red-300/20 to-red-400/20" />
    <div className="absolute inset-0 mix-blend-soft-light bg-red-50/5" />
  </div>
</motion.div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="bg-red-600 text-white rounded-[4rem] p-12 mb-24 relative overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full" />
          <h3 className="text-3xl font-bold mb-6">Our Holy Mission</h3>
          <p className="text-xl leading-relaxed max-w-2xl">
            To empower generations with the life-changing truth of God's word, 
            demonstrate Christ's love through actionable ministry, and raise 
            disciples who transform their communities.
          </p>
        </motion.div>

        {/* Core Beliefs */}
        <div className="grid md:grid-cols-3 gap-8">
          {beliefs.map((belief, index) => (
            <motion.div
              key={belief.title}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              <div className="text-red-500 text-4xl mb-4">{belief.icon}</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                {belief.title}
              </h4>
              <p className="text-gray-600">{belief.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Animated Verse */}
        <motion.div
          className="mt-20 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-red-500 text-4xl mb-4">❝</div>
          <p className="text-xl italic text-gray-600 mb-4">
            "Therefore go and make disciples of all nations, baptizing them 
            in the name of the Father and of the Son and of the Holy Spirit."
          </p>
          <p className="text-gray-500">Matthew 28:19</p>
        </motion.div>
      </div>
    </section>
  );
}