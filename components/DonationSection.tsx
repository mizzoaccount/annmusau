'use client';

import { motion } from 'framer-motion';
import { FiHeart, FiGift, FiDollarSign, FiCreditCard } from 'react-icons/fi';
import { useState } from 'react';
import Link from 'next/link';

export default function DonationSection() {
  const [amount, setAmount] = useState(50);
  const [frequency, setFrequency] = useState('one-time');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const donationOptions = [25, 50, 100, 250, 500];
  const givingMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: <FiCreditCard /> },
    { id: 'bank', name: 'Bank Transfer', icon: <FiDollarSign /> },
    { id: 'mobile', name: 'Mobile Money', icon: <FiGift /> }
  ];

  return (
    <section className="relative bg-white py-20 px-6 overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-100 rounded-full opacity-10 blur-3xl"
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
            <FiHeart className="text-3xl" />
            <span className="font-semibold">Kingdom Investment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Sow Into God's Work
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Your generous giving enables us to spread the Gospel worldwide
          </p>
        </motion.div>

        {/* Donation Form */}
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Left Column - Impact Story */}
          <div className="space-y-8">
            <motion.div
              className="bg-red-50 rounded-2xl p-8"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-red-600 mb-4">Your Gift Makes Difference</h3>
              <p className="text-gray-700 mb-4">
                Every donation helps us:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="text-red-500 mt-1">
                    <FiGift />
                  </div>
                  <span>Support missionary work in 12 countries</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-red-500 mt-1">
                    <FiGift />
                  </div>
                  <span>Provide Bibles to persecuted Christians</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-red-500 mt-1">
                    <FiGift />
                  </div>
                  <span>Feed and educate orphaned children</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-red-500 mt-1">
                    <FiGift />
                  </div>
                  <span>Produce life-changing media content</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl p-8 relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full" />
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full" />
              <h3 className="text-2xl font-bold mb-4">Malachi 3:10</h3>
              <p className="italic text-lg mb-4">
                "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this," says the Lord Almighty, "and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it."
              </p>
              <p className="font-medium">- The Holy Bible</p>
            </motion.div>
          </div>

          {/* Right Column - Donation Form */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-inner">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Give Today</h3>
            
            {/* Amount Selection */}
            <div className="mb-8">
              <label className="block text-gray-700 mb-3 font-medium">Donation Amount (Ksh)</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                {donationOptions.map((option) => (
                  <motion.button
                    key={option}
                    className={`py-3 rounded-lg font-medium ${amount === option ? 'bg-red-600 text-white' : 'bg-white text-gray-800 border border-gray-300'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAmount(option)}
                  >
                    Ksh {option}
                  </motion.button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">Ksh </span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full ml-2 pl-8 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Custom amount"
                />
              </div>
            </div>

            {/* Frequency Selection */}
            <div className="mb-8">
              <label className="block text-gray-700 mb-3 font-medium">Giving Frequency</label>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  className={`px-6 py-3 rounded-lg font-medium ${frequency === 'one-time' ? 'bg-red-600 text-white' : 'bg-white text-gray-800 border border-gray-300'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFrequency('one-time')}
                >
                  One-Time
                </motion.button>
                <motion.button
                  className={`px-6 py-3 rounded-lg font-medium ${frequency === 'monthly' ? 'bg-red-600 text-white' : 'bg-white text-gray-800 border border-gray-300'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFrequency('monthly')}
                >
                  Monthly
                </motion.button>
                <motion.button
                  className={`px-6 py-3 rounded-lg font-medium ${frequency === 'yearly' ? 'bg-red-600 text-white' : 'bg-white text-gray-800 border border-gray-300'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFrequency('yearly')}
                >
                  Yearly
                </motion.button>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <label className="block text-gray-700 mb-3 font-medium">Payment Method</label>
              <div className="space-y-3">
                {givingMethods.map((method) => (
                  <motion.div
                    key={method.id}
                    className={`p-4 rounded-lg cursor-pointer ${paymentMethod === method.id ? 'bg-red-100 border-2 border-red-500' : 'bg-white border border-gray-300'}`}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setPaymentMethod(method.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${paymentMethod === method.id ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                        {method.icon}
                      </div>
                      <span className="font-medium">{method.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Donate Button */}
            <motion.button
              className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-red-700"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Donate Ksh {amount} {frequency !== 'one-time' && `per ${frequency}`}
            </motion.button>

            {/* Security Assurance */}
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>Secure encrypted payment processing</p>
              <p>All donations are tax deductible</p>
            </div>
          </div>
        </motion.div>

        {/* Giving CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-red-50 to-white p-8 rounded-2xl shadow-inner max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Other Ways to Give</h3>
              <p className="text-gray-600">
                Explore planned giving, stock donations, or supporting specific ministry projects.
              </p>
            </div>
            <motion.button
              className="flex-shrink-0 flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <FiHeart className="text-xl" />
              <Link href="/contact" className="">
              Learn More
                </Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}