'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiUser, FiLock, } from 'react-icons/fi';
import Link from 'next/link';
import { CrossIcon } from 'lucide-react';

export default function LoginPage() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 md:pt-0">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, type: 'spring' }}
      >
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-500 rounded-full mix-blend-screen blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-white rounded-full mix-blend-screen blur-3xl opacity-20" />
      </motion.div>

      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Main Content Container - Swapped sides */}
      <div className="relative z-20 container mx-auto px-4 py-8 md:py-16 flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-8">
        {/* Ministry Message Side - Desktop Only (now on right) */}
        <motion.div 
          className="hidden lg:block lg:w-1/2 relative pl-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Welcome Back
              </span>
              <br />
              <span className="text-white mt-2 inline-block">Beloved One</span>
            </motion.h1>
          </div>

          <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Reconnect with your spiritual community and continue your journey of faith.
          </motion.p>

          <div className="space-y-6">
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-red-500 mt-1">
                <CrossIcon className="text-2xl" />
              </div>
              <div>
                <h3 className="text-white text-lg font-medium mb-1">Personal Growth</h3>
                <p className="text-gray-400">Access your saved devotionals and prayer journals</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-red-500 mt-1">
                <CrossIcon className="text-2xl" />
              </div>
              <div>
                <h3 className="text-white text-lg font-medium mb-1">Community Access</h3>
                <p className="text-gray-400">Rejoin your prayer groups and ministry circles</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <div className="text-red-500 mt-1">
                <CrossIcon className="text-2xl" />
              </div>
              <div>
                <h3 className="text-white text-lg font-medium mb-1">Continue Learning</h3>
                <p className="text-gray-400">Pick up where you left off in your spiritual courses</p>
              </div>
            </motion.div>
          </div>

          {/* Verse of the Day */}
          <motion.div
            className="bg-black/30 backdrop-blur-sm p-6 mt-12 rounded-2xl border border-white/10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-red-400 text-sm mb-2">Today's Encouragement</p>
            <p className="text-white italic">"Come to me, all who labor and are heavy laden, and I will give you rest."</p>
            <p className="text-gray-400 text-sm mt-2">Matthew 11:28</p>
          </motion.div>
        </motion.div>

        {/* Login Form (now on left) */}
        <motion.div 
          className="w-full lg:w-1/2 bg-black/30 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-2 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome Back
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Sign in to continue your spiritual journey
          </motion.p>

          <form className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-500" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-black/50 border border-white/10 text-white rounded-lg block w-full pl-10 p-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="text-gray-500" />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-black/50 border border-white/10 text-white rounded-lg block w-full pl-10 p-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex justify-end mt-2">
                <Link href="/auth/forgot-password" className="text-sm text-red-500 hover:underline">
                  Forgot password?
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-white/10 rounded bg-black/50"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <button
                type="submit"
                className="w-full bg-red-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-red-700 transition-colors"
              >
                Sign In
              </button>
            </motion.div>
          </form>

          <motion.div
            className="mt-6 text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            Don't have an account?{' '}
            <Link href="/auth/register" className="text-red-500 hover:underline font-medium">
              Create one now
            </Link>
          </motion.div>

          {/* Social Login Options */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black/30 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <motion.button
                type="button"
                className="w-full bg-black/50 border border-white/10 text-white rounded-lg px-4 py-2 flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
                <span>GitHub</span>
              </motion.button>
              <motion.button
                type="button"
                className="w-full bg-black/50 border border-white/10 text-white rounded-lg px-4 py-2 flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span>Twitter</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Additional floating crosses */}
      <motion.div
        className="absolute top-1/4 left-10 opacity-20 hidden lg:block"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="text-4xl">✝</div>
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-10 opacity-20 hidden lg:block"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      >
        <div className="text-4xl">✝</div>
      </motion.div>
    </section>
  );
}