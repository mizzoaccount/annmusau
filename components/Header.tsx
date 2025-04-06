'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowUpRight, FiHeart } from 'react-icons/fi';
import { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Sermons', href: '/sermons' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-red-500 rounded-full" />
              <span className="text-white font-bold text-xl">AMM</span>
            </motion.div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="relative text-white/90 hover:text-white text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  <span>{link.name}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-px bg-red-500"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Donate Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full text-sm"
            >
              <FiHeart className="text-sm" />
              Donate
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-full h-screen z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl">
              <div className="container mx-auto px-6 py-24">
                {/* Mobile Links */}
                <div className="flex flex-col gap-6">
                  {links.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="text-3xl font-bold text-white hover:text-red-500"
                      whileHover={{ x: 10 }}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                {/* Decorative Cross */}
                <motion.div
                  className="absolute top-24 right-6 opacity-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="text-9xl">✝</div>
                </motion.div>

                {/* Mobile Donate Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-12 flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full text-lg"
                >
                  <FiHeart className="text-xl" />
                  Support Ministry
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}