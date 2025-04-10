'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowUpRight, FiHeart, FiUserPlus } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Sermons', href: '/sermons' },
    { name: 'Events', href: '/events' },
    { name: 'Devotions', href: '/devotion' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        className={`fixed w-full top-0 z-50 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-black/50 backdrop-blur-sm'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-full border-2 border-red-500 p-0.5">
                <Image 
                  src="/assets/images/media/musaulogo.jpeg" 
                  alt="AMM Logo"
                  width={36}
                  height={36}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </motion.div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              {links.map((link) => (
                <motion.div 
                  key={link.name}
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <a
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-medium ${pathname === link.href ? 'text-red-400' : 'text-white/90 hover:text-white'}`}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <motion.div 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"
                        layoutId="navUnderline"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <motion.a
                href="/auth/register"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 border border-white/30 text-white px-4 py-2 rounded-full text-sm hover:bg-white/10 transition-all"
              >
                <FiUserPlus className="text-sm" />
                Register
              </motion.a>
              
              <motion.a
                href="/donate"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full text-sm hover:bg-red-700 transition-all"
              >
                <FiHeart className="text-sm" />
                Donate
              </motion.a>
            </div>

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
                <div className="flex flex-col gap-8">
                  {links.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className={`text-3xl font-bold ${pathname === link.href ? 'text-red-400' : 'text-white hover:text-red-500'}`}
                      whileHover={{ x: 10 }}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <div className="flex flex-col gap-4 mt-12">
                  <motion.a
                    href="/register"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 rounded-full text-lg hover:bg-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiUserPlus className="text-xl" />
                    Register
                  </motion.a>
                  
                  <motion.a
                    href="/donate"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full text-lg hover:bg-red-700"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiHeart className="text-xl" />
                    Donate
                  </motion.a>
                </div>

                <motion.div
                  className="absolute top-24 right-6 opacity-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="text-9xl">✝</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



{/*'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowUpRight, FiHeart } from 'react-icons/fi';
import { useState } from 'react';
import Image from 'next/image';

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
      {/* Desktop Navigation *
      <motion.nav 
        className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Updated with image and red border *
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-full border-2 border-red-500 p-0.5">
                <Image 
                  src="/assets/images/media/musaulogo.jpeg" 
                  alt="AMM Logo"
                  width={36}
                  height={36}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              {/*<span className="text-white font-bold text-xl">AMM</span>*
            </motion.div>

            {/* Rest of the navbar remains the same *
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full text-sm"
            >
              <FiHeart className="text-sm" />
              Donate
            </motion.button>

            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu *
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

                <motion.div
                  className="absolute top-24 right-6 opacity-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="text-9xl">✝</div>
                </motion.div>

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
}*/}