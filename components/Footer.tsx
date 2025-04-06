'use client';

import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';

export default function HolyFooter() {
  const links = [
    { title: "Ministry", items: ["About Us", "Our Beliefs", "Meet The Team", "Testimonies"] },
    { title: "Resources", items: ["Sermons", "Devotionals", "Books", "Music"] },
    { title: "Connect", items: ["Events", "Small Groups", "Missions", "Volunteer"] }
  ];

  return (
    <footer className="relative bg-black text-white pt-20 pb-12 px-6 overflow-hidden">
      {/* Divine Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-red-900/20 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-[url('/cross-pattern-dark.png')] opacity-5" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Ministry Logo and Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-full" />
              <span className="text-2xl font-bold">Anne Musau Ministries</span>
            </div>
            <p className="text-gray-400 mb-6">
              Spreading the Gospel, transforming lives, and building God's kingdom through media, missions, and ministry.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-red-500 text-xl"
                whileHover={{ y: -3 }}
              >
                <FiFacebook />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-red-500 text-xl"
                whileHover={{ y: -3 }}
              >
                <FiTwitter />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-red-500 text-xl"
                whileHover={{ y: -3 }}
              >
                <FiInstagram />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-red-500 text-xl"
                whileHover={{ y: -3 }}
              >
                <FiYoutube />
              </motion.a>
            </div>
          </motion.div>

          {/* Footer Links */}
          {links.map((column, colIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: colIndex * 0.1 + 0.3, duration: 0.6 }}
            >
              <h3 className="text-lg font-bold text-white mb-6">{column.title}</h3>
              <ul className="space-y-3">
                {column.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: colIndex * 0.1 + itemIndex * 0.05 + 0.3 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMail className="text-red-500 mt-1" />
                <span className="text-gray-400">prayer@annemusau.org</span>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="text-red-500 mt-1" />
                <span className="text-gray-400">+1 (234) 567-8900</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-red-500 mt-1" />
                <span className="text-gray-400">123 Heavenly Way, Nairobi, Kenya</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Prayer Request CTA */}
        <motion.div
          className="bg-gradient-to-r from-red-900/30 to-red-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Need Prayer?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We believe in the power of prayer. Submit your prayer requests and our intercessory team will pray for you.
          </p>
          <motion.a
            href="/prayer"
            className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100"
            whileHover={{ scale: 1.05 }}
          >
            Submit Prayer Request
            <FiArrowRight className="text-xl" />
          </motion.a>
        </motion.div>

        {/* Copyright and Bottom Links */}
        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Anne Musau Ministries. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Donor Policy</a>
          </div>
        </motion.div>

        {/* Floating Cross */}
        <motion.div
          className="absolute -bottom-20 -right-20 text-9xl text-white/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          ✝
        </motion.div>
      </div>
    </footer>
  );
}