/*'use client';

import { motion } from 'framer-motion';
import { FiUser, FiMail, FiLock,  } from 'react-icons/fi';
import Link from 'next/link';
import { CrossIcon } from 'lucide-react';

export default function RegisterPage() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 md:pt-0">
      {/* Animated Background Elements *
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, type: 'spring' }}
      >
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-500 rounded-full mix-blend-screen blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-white rounded-full mix-blend-screen blur-3xl opacity-20" />
      </motion.div>

      {/* Geometric Background Pattern *
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Main Content Container *
      <div className="relative z-20 container mx-auto px-4 py-8 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Ministry Message Side - Desktop Only *
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
                Join Our
              </span>
              <br />
              <span className="text-white mt-2 inline-block">Spiritual Family</span>
            </motion.h1>
          </div>

          <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Become part of a community dedicated to spiritual growth and divine purpose.
          </motion.p>

          <div className="space-y-6">
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-red-500 mt-1">
                <CrossIcon  className="text-2xl" />
              </div>
              <div>
                <h3 className="text-white text-lg font-medium mb-1">Exclusive Content</h3>
                <p className="text-gray-400">Access to members-only teachings and resources</p>
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
                <h3 className="text-white text-lg font-medium mb-1">Event Invitations</h3>
                <p className="text-gray-400">Get notified about our upcoming spiritual gatherings</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <div className="text-red-500 mt-1">
                <CrossIcon  className="text-2xl" />
              </div>
              <div>
                <h3 className="text-white text-lg font-medium mb-1">Prayer Support</h3>
                <p className="text-gray-400">Join our prayer network and receive spiritual covering</p>
              </div>
            </motion.div>
          </div>

          {/* Verse of the Day *
          <motion.div
            className="bg-black/30 backdrop-blur-sm p-6 mt-12 rounded-2xl border border-white/10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-red-400 text-sm mb-2">Today's Encouragement</p>
            <p className="text-white italic">"But to all who did receive him, who believed in his name, he gave the right to become children of God..."</p>
            <p className="text-gray-400 text-sm mt-2">John 1:12</p>
          </motion.div>
        </motion.div>

        {/* Registration Form *
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
            Create Account
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Join our ministry community today
          </motion.p>

          <form className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-black/50 border border-white/10 text-white rounded-lg block w-full pl-10 p-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
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
              transition={{ delay: 0.8 }}
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="text-gray-500" />
                </div>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  className="bg-black/50 border border-white/10 text-white rounded-lg block w-full pl-10 p-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-white/10 rounded bg-black/50"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                I agree to the <a href="#" className="text-red-500 hover:underline">Terms of Service</a> and <a href="#" className="text-red-500 hover:underline">Privacy Policy</a>
              </label>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <button
                type="submit"
                className="w-full bg-red-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-red-700 transition-colors"
              >
                Create Account
              </button>
            </motion.div>
          </form>

          <motion.div
            className="mt-6 text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Already have an account?{' '}
            <Link href="/auth/login" className="text-red-500 hover:underline font-medium">
              Sign in here
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Additional floating crosses *
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
}*/

















'use client';

import { motion } from 'framer-motion';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import Link from 'next/link';
import { CrossIcon } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { name, email, password, confirmPassword, terms } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    
    if (!terms) {
      setError('You must agree to the terms and conditions');
      return;
    }

    const payload = { name, email, password };
    console.log('Sending registration data:', payload);

    try {
      setLoading(true);
      setError('');

      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      router.push('/auth/login');
    } catch (err) {
      //setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 md:pt-0">
      {/* Ministry Message Side - Desktop Only */}
     

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
                Join Our
              </span>
              <br />
              <span className="text-white mt-2 inline-block">Spiritual Family</span>
            </motion.h1>
          </div>

          <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Become part of a community dedicated to spiritual growth and divine purpose.
          </motion.p>

          <div className="space-y-6">
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-red-500 mt-1">
                <CrossIcon  className="text-2xl" />
              </div>
              <div>
                <h3 className="text-white text-lg font-medium mb-1">Exclusive Content</h3>
                <p className="text-gray-400">Access to members-only teachings and resources</p>
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
                <h3 className="text-white text-lg font-medium mb-1">Event Invitations</h3>
                <p className="text-gray-400">Get notified about our upcoming spiritual gatherings</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <div className="text-red-500 mt-1">
                <CrossIcon  className="text-2xl" />
              </div>
              <div>
                <h3 className="text-white text-lg font-medium mb-1">Prayer Support</h3>
                <p className="text-gray-400">Join our prayer network and receive spiritual covering</p>
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
            <p className="text-white italic">"But to all who did receive him, who believed in his name, he gave the right to become children of God..."</p>
            <p className="text-gray-400 text-sm mt-2">John 1:12</p>
          </motion.div>
        </motion.div>

      {/* Registration Form */}
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
          Create Account
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Join our ministry community today
        </motion.p>

        {error && (
          <motion.div
            className="bg-red-900/50 border border-red-700 text-red-200 p-4 mb-6 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.div>
        )}

        <form className="space-y-6" onSubmit={onSubmit}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-500" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={onChange}
                className="bg-black/50 border border-white/10 text-white rounded-lg block w-full pl-10 p-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="John Doe"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
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
                value={email}
                onChange={onChange}
                className="bg-black/50 border border-white/10 text-white rounded-lg block w-full pl-10 p-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
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
                value={password}
                onChange={onChange}
                className="bg-black/50 border border-white/10 text-white rounded-lg block w-full pl-10 p-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="text-gray-500" />
              </div>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={onChange}
                className="bg-black/50 border border-white/10 text-white rounded-lg block w-full pl-10 p-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>
          </motion.div>

          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={terms}
              onChange={onChange}
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-white/10 rounded bg-black/50"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
              I agree to the <a href="#" className="text-red-500 hover:underline">Terms of Service</a> and <a href="#" className="text-red-500 hover:underline">Privacy Policy</a>
            </label>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-red-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </motion.div>
        </form>

        <motion.div
          className="mt-6 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Already have an account?{' '}
          <Link href="/auth/login" className="text-red-500 hover:underline font-medium">
            Sign in here
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}