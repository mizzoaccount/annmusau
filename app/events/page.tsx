'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiArrowRight, FiSearch, FiFilter, FiShare2, FiBookmark } from 'react-icons/fi';
import NavBar from '@/components/Header';
import Footer from '@/components/Footer';

const eventCategories = [
  "All Events",
  "Worship Nights",
  "Bible Studies",
  "Prayer Meetings",
  "Conferences",
  "Youth Events",
  "Women's Ministry",
  "Men's Fellowship"
];

const events = [
  {
    id: 1,
    title: "Holy Spirit Revival Night",
    description: "An evening of powerful worship and prophetic ministry with special guest ministers from across the nation.",
    date: "June 15, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "Grace Cathedral, Nairobi",
    address: "123 Faith Avenue, Nairobi, Kenya",
    category: "Worship Nights",
    featured: true,
    image: "/event1.jpg",
    speakers: ["Anne Musau", "Dr. Michael Waweru", "Pastor Sarah Johnson"],
    registrationRequired: true,
    registrationLink: "#",
    price: "Free",
    tags: ["Worship", "Prophetic", "Healing"]
  },
  // Add 7-10 more events with similar structure
];

const upcomingSeries = [
  {
    id: 1,
    title: "Kingdom Foundations",
    description: "A 6-week intensive study on building your life on biblical principles",
    startDate: "July 1, 2024",
    sessions: 6,
    image: "/series1.jpg"
  },
  // Add 2-3 more series
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("All Events");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events.filter(event => {
    const matchesCategory = activeCategory === "All Events" || event.category === activeCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50">
      {/* Enhanced NavBar */}
      <NavBar />

      <section className="relative bg-gradient-to-b from-red-50 to-white py-32 px-6">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/cross-pattern.png')] bg-repeat opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto text-center relative">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            Divine Encounters
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Join us for life-transforming gatherings where heaven meets earth
          </motion.p>
        </div>
      </section>




      
      {/* Hero Section *
      <section className="relative bg-gradient-to-b from-red-600 to-red-800 pt-32 pb-20 px-6 text-white overflow-hidden">
        {/* Animated background elements *
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl" />
        </motion.div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Divine Encounters
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Join us for life-transforming gatherings where heaven meets earth
          </motion.p>
        </div>
      </section>*/}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search and Filter Section */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500"
                placeholder="Search events by title, description or speaker..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-50">
                <FiFilter />
                Advanced
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mt-6">
            {eventCategories.map(category => (
              <motion.button
                key={category}
                className={`px-5 py-2 rounded-full font-medium transition-all ${activeCategory === category ? 'bg-red-600 text-white' : 'border border-gray-300 hover:bg-gray-100'}`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Event */}
        {events.filter(e => e.featured).length > 0 && (
          <section className="mb-20">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Featured Gathering
              </span>
            </motion.h2>

            {events.filter(e => e.featured).map(event => (
              <motion.div
                key={event.id}
                className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-90" />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-9xl opacity-20">
                      ✝
                    </div>
                    <div className="absolute bottom-6 left-6 px-4 py-2 bg-white text-red-600 text-sm font-bold rounded-full">
                      FEATURED EVENT
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold mb-3">
                          {event.category}
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{event.title}</h2>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-50">
                          <FiBookmark />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-50">
                          <FiShare2 />
                        </button>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{event.description}</p>

                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-sm font-bold text-gray-500 mb-2">DATE & TIME</h4>
                        <div className="flex items-center gap-2 text-gray-700">
                          <FiCalendar className="text-red-500" />
                          <span>{event.date} • {event.time}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-500 mb-2">LOCATION</h4>
                        <div className="flex items-center gap-2 text-gray-700">
                          <FiMapPin className="text-red-500" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-500 mb-2">SPEAKERS</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.speakers.map((speaker, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              {speaker}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-500 mb-2">PRICE</h4>
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">
                          {event.price}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <motion.button
                        className="px-8 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        Register Now
                        <FiArrowRight />
                      </motion.button>
                      <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50">
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </section>
        )}

        {/* Upcoming Events */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <motion.h2 
              className="text-3xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Upcoming Events
              </span>
            </motion.h2>
            <button className="text-red-600 font-medium hover:text-red-700 flex items-center gap-1">
              View All
              <FiArrowRight />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 opacity-90" />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl opacity-20">
                    ✝
                  </div>
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-white text-red-600 text-sm font-bold rounded-full">
                    {event.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                  
                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FiCalendar className="text-red-500" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FiMapPin className="text-red-500" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <motion.a
                      href="#"
                      className="inline-flex items-center gap-2 text-red-600 font-medium group-hover:gap-3 transition-all"
                      whileHover={{ x: 5 }}
                    >
                      Details
                      <FiArrowRight className="transition-all group-hover:rotate-45" />
                    </motion.a>
                    <motion.button
                      className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {event.registrationRequired ? 'RSVP' : 'Attend'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Event Series */}
        <section className="mb-20">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Event Series
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingSeries.map((series, index) => (
              <motion.div
                key={series.id}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 opacity-90" />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl opacity-20">
                    ✝
                  </div>
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-white text-red-600 text-sm font-bold rounded-full">
                    {series.sessions} Sessions
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{series.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{series.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      Starts {series.startDate}
                    </div>
                    <motion.button
                      className="text-red-600 font-medium hover:text-red-700 flex items-center gap-1"
                      whileHover={{ x: 5 }}
                    >
                      View Series
                      <FiArrowRight />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Event Calendar CTA */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-12 text-center text-white">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Never Miss an Event</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Subscribe to our events calendar and get notified about upcoming gatherings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-6 py-3 rounded-lg border border-transparent focus:ring-2 focus:ring-white focus:border-transparent text-gray-900"
              />
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
                Subscribe
              </button>
            </div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </div>
  );
}