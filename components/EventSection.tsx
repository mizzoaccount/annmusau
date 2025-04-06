'use client';

import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi';

const events = [
  {
    id: 1,
    title: "Holy Spirit Revival Night",
    description: "An evening of powerful worship and prophetic ministry",
    date: "June 15, 2024",
    time: "6:00 PM",
    location: "Grace Cathedral, Nairobi",
    category: "Worship",
    featured: true,
    image: "/event1.jpg"
  },
  {
    id: 2,
    title: "Bible Study Series: Book of Romans",
    description: "Weekly deep dive into Paul's epistle to the Romans",
    date: "Every Wednesday",
    time: "7:30 PM",
    location: "Online Zoom Meeting",
    category: "Bible Study",
    image: "/event2.jpg"
  },
  {
    id: 3,
    title: "Women's Prayer Breakfast",
    description: "Morning fellowship and intercession for women",
    date: "June 22, 2024",
    time: "8:00 AM",
    location: "Royal Gardens Hotel",
    category: "Prayer",
    image: "/event3.jpg"
  },
  {
    id: 4,
    title: "Youth Holy Ghost Party",
    description: "Night of worship, Word and fellowship for ages 13-25",
    date: "July 5, 2024",
    time: "5:00 PM",
    location: "Faith Arena",
    category: "Youth",
    image: "/event4.jpg"
  },
  {
    id: 5,
    title: "Marriage Enrichment Seminar",
    description: "Building godly marriages in modern times",
    date: "July 12-14, 2024",
    time: "9:00 AM Daily",
    location: "Heavenly Resort",
    category: "Family",
    image: "/event5.jpg"
  },
  {
    id: 6,
    title: "Global Prayer Chain",
    description: "24-hour continuous prayer for nations",
    date: "June 30, 2024",
    time: "12:00 AM - 11:59 PM",
    location: "Worldwide Participation",
    category: "Prayer",
    image: "/event6.jpg"
  },
];

export default function EventsSection() {
  return (
    <section className="relative bg-gray-50 py-20 px-6 overflow-hidden">
      {/* Celestial Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-64 h-64 bg-red-100 rounded-full opacity-10 blur-3xl"
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
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-red-200 rounded-full opacity-5 blur-3xl"
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
            <FiCalendar className="text-3xl" />
            <span className="font-semibold">Divine Appointments</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Upcoming Holy Gatherings
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for life-changing encounters with God's presence
          </p>
        </motion.div>

        {/* Event Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <button className="px-6 py-2 bg-red-600 text-white rounded-full font-medium">
            All Events
          </button>
          <button className="px-6 py-2 border border-gray-300 rounded-full font-medium hover:bg-gray-100">
            Worship Nights
          </button>
          <button className="px-6 py-2 border border-gray-300 rounded-full font-medium hover:bg-gray-100">
            Bible Studies
          </button>
          <button className="px-6 py-2 border border-gray-300 rounded-full font-medium hover:bg-gray-100">
            Prayer Meetings
          </button>
          <button className="px-6 py-2 border border-gray-300 rounded-full font-medium hover:bg-gray-100">
            Special Events
          </button>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Featured Ribbon */}
              {event.featured && (
                <motion.div
                  className="absolute top-4 right-4 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Featured
                </motion.div>
              )}

              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl opacity-20">
                  ✝
                </div>
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-white text-red-600 text-sm font-medium rounded-full">
                  {event.category}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiCalendar className="text-red-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiClock className="text-red-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiMapPin className="text-red-500" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-red-600 font-medium group-hover:gap-3 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    More Details
                    <FiArrowRight className="transition-all group-hover:rotate-45" />
                  </motion.a>
                  <motion.button
                    className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    RSVP
                  </motion.button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/20 rounded-xl transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Events CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-red-50 to-white p-8 rounded-2xl shadow-inner max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Can't Find What You're Looking For?</h3>
              <p className="text-gray-600">
                View our full calendar of events or contact our events team for more information.
              </p>
            </div>
            <motion.button
              className="flex-shrink-0 flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <FiCalendar className="text-xl" />
              Full Events Calendar
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}