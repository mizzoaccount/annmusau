'use client';

import { motion } from 'framer-motion';
import { FiPlay, FiYoutube, FiClock, FiCalendar, FiSearch, FiFilter, FiDownload, FiFileText } from 'react-icons/fi';
import NavBar from '@/components/Header';
import Footer from '@/components/Footer';

const sermonSeries = [
  {
    id: 1,
    title: "Grace Revolution",
    description: "A deep dive into the transformative power of God's grace",
    image: "/assets/images/sermons/grace.jpg",
    count: 12,
    latestDate: "April 2024",
    pdfUrl: "/assets/sermons/grace-revolution.pdf"
  },
  {
    id: 2,
    title: "Kingdom Living",
    description: "Understanding your rights and responsibilities as God's child",
    image: "/assets/images/sermons/kingdom.jpg",
    count: 8,
    latestDate: "March 2024",
    pdfUrl: "/assets/sermons/kingdom-living.pdf"
  },
  {
    id: 3,
    title: "Faith Foundations",
    description: "Core teachings for building a strong spiritual foundation",
    image: "/assets/images/sermons/faith.jpg",
    count: 10,
    latestDate: "February 2024",
    pdfUrl: "/assets/sermons/faith-foundations.pdf"
  },
];

const recentSermons = [
  {
    id: 1,
    title: "The Power of Redemptive Grace",
    description: "Exploring God's unmerited favor in modern life",
    duration: "45:30",
    date: "May 12, 2024",
    speaker: "Anne Musau",
    scripture: "Ephesians 2:8-9",
    videoId: "dQw4w9WgXcQ",
    audioUrl: "#",
    pdfUrl: "/assets/sermons/redemptive-grace.pdf",
    downloads: 1245,
    transcript: true,
    studyGuide: true
  },
  {
    id: 2,
    title: "Walking in Spiritual Authority",
    description: "Understanding your divine rights as a believer",
    duration: "52:15",
    date: "May 5, 2024",
    speaker: "Anne Musau",
    scripture: "Luke 10:19",
    videoId: "dQw4w9WgXcQ",
    audioUrl: "#",
    pdfUrl: "/assets/sermons/spiritual-authority.pdf",
    downloads: 987,
    transcript: false,
    studyGuide: true
  },
  {
    id: 3,
    title: "Breaking Generational Curses",
    description: "How to walk in freedom from inherited bondage",
    duration: "58:22",
    date: "April 28, 2024",
    speaker: "John Doe",
    scripture: "Galatians 3:13-14",
    videoId: "dQw4w9WgXcQ",
    audioUrl: "#",
    pdfUrl: "/assets/sermons/generational-curses.pdf",
    downloads: 2150,
    transcript: true,
    studyGuide: true
  },
];

const popularSermons = [
  {
    id: 1,
    title: "The Heart of Worship",
    description: "Rediscovering true worship in spirit and truth",
    duration: "49:10",
    date: "January 2024",
    views: 15000,
    videoId: "dQw4w9WgXcQ",
    pdfUrl: "/assets/sermons/heart-of-worship.pdf"
  },
  {
    id: 2,
    title: "Living by Faith",
    description: "Practical steps to walk by faith daily",
    duration: "51:45",
    date: "December 2023",
    views: 13200,
    videoId: "dQw4w9WgXcQ",
    pdfUrl: "/assets/sermons/living-by-faith.pdf"
  },
  {
    id: 3,
    title: "The Power of Prayer",
    description: "Transforming your prayer life",
    duration: "47:30",
    date: "November 2023",
    views: 11800,
    videoId: "dQw4w9WgXcQ",
    pdfUrl: "/assets/sermons/power-of-prayer.pdf"
  },
  {
    id: 4,
    title: "Finding Peace in Chaos",
    description: "Biblical principles for peace in troubled times",
    duration: "55:20",
    date: "October 2023",
    views: 14200,
    videoId: "dQw4w9WgXcQ",
    pdfUrl: "/assets/sermons/peace-in-chaos.pdf"
  },
];

const pdfResources = [
  {
    id: 1,
    title: "Sermon Notes",
    description: "Printable templates for taking notes during sermons",
    icon: <FiFileText className="text-red-600 text-2xl" />,
    url: "/assets/sermons/sermon-notes-template.pdf"
  },
  {
    id: 2,
    title: "Study Guides",
    description: "Comprehensive guides for group or personal study",
    icon: <FiFileText className="text-red-600 text-2xl" />,
    url: "/assets/sermons/study-guides-compilation.pdf"
  },
  {
    id: 3,
    title: "Sermon Series Pack",
    description: "Complete collections of our teaching series",
    icon: <FiFileText className="text-red-600 text-2xl" />,
    url: "/assets/sermons/series-pack.pdf"
  },
  {
    id: 4,
    title: "Bible Reading Plans",
    description: "Yearly and topical Bible reading schedules",
    icon: <FiFileText className="text-red-600 text-2xl" />,
    url: "/assets/sermons/bible-reading-plans.pdf"
  },
];

export default function SermonsPage() {
  // Function to handle PDF download
  const handleDownload = (url: string, title: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white">
      {/* Enhanced NavBar */}
      <NavBar />
      
      {/* Hero Section with Download CTA */}
      <section className="relative bg-gradient-to-b from-red-50 to-white pt-32 pb-20 px-6">
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
              Sermon Library
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Life-changing messages to strengthen your faith and transform your life
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button 
              className="inline-flex items-center gap-2 bg-white border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-bold hover:bg-red-50 transition-all"
              onClick={() => handleDownload('/assets/sermons/top-sermons-compilation.pdf', 'Top Sermons Compilation')}
            >
              <FiDownload className="text-xl" />
              Download Sermon Pack
            </button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Search and Filter Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-6 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500"
                placeholder="Search sermons by title, scripture or topic..."
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <button className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-50">
                <FiFilter />
                Filter
              </button>
              <button className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-red-700">
                <FiCalendar />
                Recent
              </button>
              <button className="inline-flex items-center gap-2 bg-white border border-red-600 text-red-600 px-4 py-3 rounded-lg font-medium hover:bg-red-50">
                <FiFileText />
                PDF Available
              </button>
            </div>
          </div>
        </motion.div>

        {/* Featured Series */}
        <section className="mb-20">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Featured Series
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {sermonSeries.map((series, index) => (
              <motion.div
                key={series.id}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 border border-transparent hover:border-red-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* PDF Badge */}
                {series.pdfUrl && (
                  <div className="absolute top-4 right-4 z-10 bg-white px-3 py-1 rounded-full shadow-sm text-sm font-medium flex items-center gap-1 text-red-600">
                    <FiFileText className="text-red-500" />
                    PDF
                  </div>
                )}

                <div className="relative aspect-video">
                  <img
                    src={series.image}
                    alt={series.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{series.title}</h3>
                    <div className="flex gap-4 mt-2 text-white/80 text-sm">
                      <span>{series.count} messages</span>
                      <span>{series.latestDate}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{series.description}</p>
                  <div className="flex justify-between items-center">
                    <button className="text-red-600 font-medium hover:text-red-700">
                      View Series →
                    </button>
                    {series.pdfUrl && (
                      <button 
                        className="text-gray-500 hover:text-red-600 rounded-full hover:bg-red-50 p-2"
                        onClick={() => handleDownload(series.pdfUrl, series.title)}
                        title="Download PDF"
                      >
                        <FiDownload className="text-lg" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Recent Sermons */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <motion.h2 
              className="text-3xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Recent Messages
              </span>
            </motion.h2>
            <button className="text-red-600 font-medium hover:text-red-700">
              View All Recent →
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recentSermons.map((sermon, index) => (
              <motion.div
                key={sermon.id}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 border border-transparent hover:border-red-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* PDF Badge */}
                {sermon.pdfUrl && (
                  <div className="absolute top-4 right-4 z-10 bg-white px-3 py-1 rounded-full shadow-sm text-sm font-medium flex items-center gap-1 text-red-600">
                    <FiFileText className="text-red-500" />
                    PDF
                  </div>
                )}

                <div className="relative aspect-video">
                  <img
                    src={`https://img.youtube.com/vi/${sermon.videoId}/maxresdefault.jpg`}
                    alt={sermon.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-red-800/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all">
                      <FiPlay className="text-4xl text-white" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2 text-red-600">
                      <FiClock className="text-lg" />
                      <span className="text-sm font-medium">{sermon.duration}</span>
                    </div>
                    <span className="text-sm text-gray-500">{sermon.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {sermon.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{sermon.description}</p>
                  <div className="flex flex-wrap gap-4 justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Speaker: <span className="font-medium">{sermon.speaker}</span></p>
                      <p className="text-sm text-gray-500">Scripture: <span className="font-medium">{sermon.scripture}</span></p>
                    </div>
                    <div className="flex gap-3">
                      {sermon.pdfUrl && (
                        <button 
                          className="p-2 text-gray-500 hover:text-red-600 rounded-full hover:bg-red-50"
                          onClick={() => handleDownload(sermon.pdfUrl, sermon.title)}
                          title="Download PDF"
                        >
                          <FiDownload className="text-lg" />
                        </button>
                      )}
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 flex items-center gap-1">
                        <FiPlay size={16} />
                        Watch Now
                      </button>
                    </div>
                  </div>

                  {/* Additional Resources */}
                  {(sermon.transcript || sermon.studyGuide) && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-2">ADDITIONAL RESOURCES:</p>
                      <div className="flex gap-3">
                        {sermon.transcript && (
                          <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                            Transcript
                          </button>
                        )}
                        {sermon.studyGuide && (
                          <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                            Study Guide
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Popular Sermons */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <motion.h2 
              className="text-3xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Most Popular
              </span>
            </motion.h2>
            <button className="text-red-600 font-medium hover:text-red-700">
              View All Popular →
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularSermons.map((sermon, index) => (
              <motion.div
                key={sermon.id}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* PDF Badge */}
                {sermon.pdfUrl && (
                  <div className="absolute top-2 right-2 z-10 bg-white px-2 py-1 rounded-full shadow-sm text-xs font-medium flex items-center gap-1 text-red-600">
                    <FiFileText className="text-red-500" />
                    PDF
                  </div>
                )}

                <div className="relative aspect-video">
                  <img
                    src={`https://img.youtube.com/vi/${sermon.videoId}/mqdefault.jpg`}
                    alt={sermon.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="text-white text-sm font-medium">{sermon.views.toLocaleString()} views</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">{sermon.title}</h3>
                  <p className="text-sm text-gray-500">{sermon.date}</p>
                  {sermon.pdfUrl && (
                    <button 
                      className="mt-3 text-xs text-red-600 hover:text-red-700 flex items-center gap-1"
                      onClick={() => handleDownload(sermon.pdfUrl, sermon.title)}
                    >
                      <FiDownload size={12} />
                      Download Notes
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Printable Sermon Resources */}
        <section className="mb-20">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Printable Sermon Resources
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pdfResources.map((resource) => (
              <motion.div 
                key={resource.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 overflow-hidden transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <button 
                    className="text-red-600 font-medium hover:text-red-700 flex items-center gap-1"
                    onClick={() => handleDownload(resource.url, resource.title)}
                  >
                    <FiDownload /> Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Download CTA Section */}
        <section className="mt-20 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-12 text-center text-white">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Get All Sermon PDFs</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Download our complete collection of sermon notes, transcripts, and study guides
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all flex items-center gap-2"
                onClick={() => handleDownload('/assets/sermons/complete-sermon-library.pdf', 'Complete Sermon Library')}
              >
                <FiDownload className="text-xl" />
                Download Full Library
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                Request Custom Bundle
              </button>
            </div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </div>
  );
}