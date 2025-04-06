'use client';

import { motion } from 'framer-motion';
import { FiPlay, FiYoutube, FiClock } from 'react-icons/fi';

const mediaItems = [
  {
    id: 1,
    title: "The Power of Redemptive Grace",
    description: "Exploring God's unmerited favor in modern life",
    duration: "45:30",
    date: "March 2024",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Walking in Spiritual Authority",
    description: "Understanding your divine rights as a believer",
    duration: "52:15",
    date: "February 2024",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Kingdom Financial Principles",
    description: "Biblical approach to wealth and stewardship",
    duration: "38:45",
    date: "January 2024",
    videoId: "dQw4w9WgXcQ"
  },
  // Add more items as needed
];

export default function MediaSection() {
  return (
    <section className="relative bg-white py-20 px-6 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-white to-red-50 opacity-30" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 text-red-600 mb-4">
            <FiYoutube className="text-3xl" />
            <span className="font-semibold">Media Library</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Sermons & Teachings
          </h2>
        </motion.div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video rounded-t-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-90" />
                <img
                  src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                  alt={item.title}
                  className="w-full h-full object-cover mix-blend-multiply"
                />
                
                {/* Play Button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
                    <FiPlay className="text-4xl text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-red-600 mb-3">
                  <FiClock className="text-lg" />
                  <span className="text-sm font-medium">{item.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="text-sm text-gray-500 font-medium">
                  {item.date}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/30 rounded-2xl transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-medium hover:bg-red-700 transition-all">
            <FiYoutube className="text-xl" />
            View Full Archive
          </button>
        </motion.div>
      </div>
    </section>
  );
}