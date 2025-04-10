'use client';

import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiShare2, FiBookmark, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';
import NavBar from '@/components/Header';
import Footer from '@/components/Footer';

const devotionals = [
  {
    id: 1,
    title: "The Power of Morning Prayer",
    scripture: "Psalm 5:3",
    date: "May 15, 2024",
    excerpt: "Discover how starting your day in prayer can transform your spiritual walk and daily life.",
    content: `
      <p>Morning prayer sets the tone for your entire day. When we seek God first thing in the morning, we acknowledge His lordship over our lives and invite His guidance for the day ahead.</p>
      <p class="my-4 italic">"In the morning, Lord, you hear my voice; in the morning I lay my requests before you and wait expectantly." - Psalm 5:3</p>
      <p>This devotional will explore three key benefits of morning prayer: spiritual alignment, divine direction, and supernatural peace. As you develop this holy habit, you'll find your days become more purposeful and God-centered.</p>
    `,
    tags: ["prayer", "spiritual growth", "daily habits"]
  },
  {
    id: 2,
    title: "Walking in God's Promises",
    scripture: "2 Corinthians 1:20",
    date: "May 14, 2024",
    excerpt: "Understanding how to claim and walk in the promises God has given us through Scripture.",
    content: `
      <p>God's promises are yes and amen in Christ Jesus. But how do we move from knowing these promises to actually experiencing them in our daily lives?</p>
      <p class="my-4 italic">"For no matter how many promises God has made, they are 'Yes' in Christ. And so through him the 'Amen' is spoken by us to the glory of God." - 2 Corinthians 1:20</p>
      <p>This study will examine the biblical process of standing on God's promises through faith, patience, and obedience. You'll learn practical steps to activate God's promises in your circumstances.</p>
    `,
    tags: ["faith", "promises", "biblical truth"]
  },
  // Add 3-5 more devotionals
];

const popularSeries = [
  {
    id: 1,
    title: "30 Days in the Psalms",
    description: "A month-long journey through the book of Psalms",
    count: 30,
    image: "/devotionals/psalms.jpg"
  },
  {
    id: 2,
    title: "The Beatitudes",
    description: "Deep dive into Jesus' Sermon on the Mount",
    count: 8,
    image: "/devotionals/beatitudes.jpg"
  },
  {
    id: 3,
    title: "Fruits of the Spirit",
    description: "Cultivating Christlike character",
    count: 9,
    image: "/devotionals/fruits.jpg"
  }
];

export default function DevotionPage() {
  const [activeDevotional, setActiveDevotional] = useState(devotionals[0]);
  const [bookmarked, setBookmarked] = useState<number[]>([]);


  const toggleBookmark = (id: number) => {
    if (bookmarked.includes(id)) {
      setBookmarked(bookmarked.filter(item => item !== id));
    } else {
      setBookmarked([...bookmarked, id]);
    }
  };

  return (
    <div className="bg-white">
      {/* NavBar */}
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
            Daily Devotionals
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
              Nourish your spirit with daily biblical insights and reflections
          </motion.p>
        </div>
      </section>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Devotionals Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Devotionals List */}
          <div className="lg:col-span-1">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Recent Devotionals
              </span>
            </motion.h2>
            
            <div className="space-y-4">
              {devotionals.map((devotional) => (
                <motion.div
                  key={devotional.id}
                  className={`bg-white rounded-xl p-6 cursor-pointer ${activeDevotional.id === devotional.id ? 'border-2 border-red-500' : 'border border-gray-200'} shadow-sm hover:shadow-md transition-all`}
                  whileHover={{ y: -5 }}
                  onClick={() => setActiveDevotional(devotional)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{devotional.title}</h3>
                      <p className="text-gray-600 mb-2">{devotional.excerpt}</p>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <FiCalendar className="text-red-500" />
                        <span>{devotional.date}</span>
                        <span>•</span>
                        <span>{devotional.scripture}</span>
                      </div>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(devotional.id);
                      }}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <FiBookmark className={bookmarked.includes(devotional.id) ? 'fill-red-500 text-red-500' : ''} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Devotional Series */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Devotional Series</h3>
              <div className="space-y-4">
                {popularSeries.map((series) => (
                  <motion.div
                    key={series.id}
                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white text-2xl">
                        <FiBookOpen />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{series.title}</h4>
                        <p className="text-sm text-gray-600">{series.count} devotionals</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Active Devotional Content */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={activeDevotional.id}
            >
              <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{activeDevotional.title}</h2>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-2">
                        <FiCalendar />
                        {activeDevotional.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <FiBookOpen />
                        {activeDevotional.scripture}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="p-2 text-white/80 hover:text-white">
                      <FiShare2 />
                    </button>
                    <button 
                      className="p-2 text-white/80 hover:text-white"
                      onClick={() => toggleBookmark(activeDevotional.id)}
                    >
                      <FiBookmark className={bookmarked.includes(activeDevotional.id) ? 'fill-white' : ''} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: activeDevotional.content }}
                />

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">Reflection Questions</h4>
                  <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                    <li>How can you apply today's devotional to your current situation?</li>
                    <li>What practical steps will you take to implement this truth?</li>
                    <li>Who can you share this insight with today?</li>
                  </ol>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">Prayer</h4>
                  <p className="text-gray-700 italic">
                    "Heavenly Father, thank you for speaking to me through your Word today. Help me to apply these truths in my life and to walk in the fullness of your promises. May your Holy Spirit guide me as I seek to live according to your will. In Jesus' name, Amen."
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {activeDevotional.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Related Devotionals */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Devotionals</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {devotionals.filter(d => d.id !== activeDevotional.id).slice(0, 2).map(devotional => (
                  <motion.div
                    key={devotional.id}
                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                    whileHover={{ y: -5 }}
                    onClick={() => setActiveDevotional(devotional)}
                  >
                    <h4 className="font-bold text-gray-900 mb-2">{devotional.title}</h4>
                    <p className="text-gray-600 mb-3 text-sm">{devotional.excerpt}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <FiCalendar className="text-red-500" />
                      <span>{devotional.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Email Subscription */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-12 text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-6">Never Miss a Devotional</h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Subscribe to receive our daily devotionals directly in your inbox
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
      </div>
      <Footer />
    </div>
  );
}