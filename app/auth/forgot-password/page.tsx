'use client';

import { motion } from 'framer-motion';
import { FiMail, FiArrowLeft,  } from 'react-icons/fi';
import Link from 'next/link';
import { CrossIcon } from 'lucide-react';

export default function ForgotPasswordPage() {
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

      {/* Main Content Container */}
      <div className="relative z-20 container mx-auto px-4 py-8 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Ministry Message Side - Desktop Only */}
        <motion.div 
          className="hidden lg:block lg:w-1/2 relative pr-8"
          initial={{ opacity: 0, x: -50 }}
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
                Divine Restoration
              </span>
              <br />
              <span className="text-white mt-2 inline-block">Awaits You</span>
            </motion.h1>
          </div>

          <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Just as God renews our strength, we'll help restore your access.
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
                <h3 className="text-white text-lg font-medium mb-1">Secure Process</h3>
                <p className="text-gray-400">Encrypted password reset for your protection</p>
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
                <h3 className="text-white text-lg font-medium mb-1">Quick Recovery</h3>
                <p className="text-gray-400">Get back to your spiritual resources quickly</p>
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
                <h3 className="text-white text-lg font-medium mb-1">Peace of Mind</h3>
                <p className="text-gray-400">Continue your journey without interruption</p>
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
            <p className="text-red-400 text-sm mb-2">Today's Promise</p>
            <p className="text-white italic">"But those who hope in the Lord will renew their strength. They will soar on wings like eagles..."</p>
            <p className="text-gray-400 text-sm mt-2">Isaiah 40:31</p>
          </motion.div>
        </motion.div>

        {/* Password Reset Form */}
        <motion.div 
          className="w-full lg:w-1/2 bg-black/30 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
       <Link href="/auth/login" className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
            <FiArrowLeft className="mr-2" />
            Back to Login
          </Link>
          <motion.h2
            className="text-3xl font-bold mb-2 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Reset Your Password
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Enter your email to receive a reset link
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
                  <FiMail className="text-gray-500" />
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
              <button
                type="submit"
                className="w-full bg-red-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-red-700 transition-colors"
              >
                Send Reset Link
              </button>
            </motion.div>
          </form>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-gray-400 text-sm">
              Didn't receive an email? Check your spam folder or{' '}
              <button className="text-red-500 hover:underline">resend link</button>
            </p>
          </motion.div>

          <motion.div
            className="mt-8 pt-6 border-t border-white/10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <p className="text-gray-400">
              Need help?{' '}
              <Link href="/contact" className="text-red-500 hover:underline">
                Contact support
              </Link>
            </p>
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

      {/* Success Message (hidden by default) */}
      <motion.div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-black/90 border border-white/10 rounded-2xl p-8 max-w-md text-center backdrop-blur-sm">
          <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiMail className="text-red-500 text-2xl" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Check Your Email</h3>
          <p className="text-gray-300 mb-6">
            We've sent a password reset link to your email address. Please check your inbox.
          </p>
          <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Return to Login
          </button>
        </div>
      </motion.div>
    </section>
  );
}