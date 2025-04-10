'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiBookOpen, FiCalendar, FiArrowRight } from 'react-icons/fi';

const devotionals = [
  {
    id: 1,
    title: "The Peace That Surpasses",
    excerpt: "Finding calm in life's storms through Christ's presence...",
    date: "May 15, 2024",
    category: "Daily Devotional",
    readTime: "5 min read",
    image: "/devotional1.jpg"
  },
  {
    id: 2,
    title: "Walking in Forgiveness",
    excerpt: "How releasing others sets your own spirit free according to Matthew 6...",
    date: "May 8, 2024",
    category: "Bible Study",
    readTime: "8 min read",
    image: "/devotional2.jpg"
  },
  {
    id: 3,
    title: "The Armor of God Today",
    excerpt: "Applying Ephesians 6 spiritual armor to modern spiritual battles...",
    date: "May 1, 2024",
    category: "Teaching",
    readTime: "10 min read",
    image: "/devotional3.jpg"
  },
  // Add more as needed
];

export default function DevotionalsSection() {
  return (
    <section className="relative bg-gray-50 py-20 px-6 overflow-hidden">
      {/* Decorative Floating Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <motion.div
          className="absolute top-1/4 left-10 w-16 h-16 bg-red-100 rounded-full opacity-20"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-20 w-24 h-24 bg-red-200 rounded-full opacity-15"
          animate={{
            y: [0, 40, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 text-red-600 mb-4">
            <FiBookOpen className="text-3xl" />
            <span className="font-semibold">Spiritual Nourishment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Daily Devotionals
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Fresh biblical insights to strengthen your walk with Christ
          </p>
        </motion.div>

        {/* Devotionals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devotionals.map((post, index) => (
            <motion.article
              key={post.id}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <motion.div
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-5xl opacity-20">
                  ✝
                </div>
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-white text-red-600 text-sm font-medium rounded-full">
                  {post.category}
                </div>
              </motion.div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-gray-500 text-sm mb-3">
                  <FiCalendar className="text-red-500" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-5">{post.excerpt}</p>
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-red-600 font-medium group-hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <FiArrowRight className="transition-all group-hover:rotate-45" />
                </motion.a>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/20 rounded-xl transition-all pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all">
            <FiBookOpen className="text-xl" />
            <Link href="/devotion" className="">
            View All Devotionals
            </Link>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiArrowRight className="text-xl" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}