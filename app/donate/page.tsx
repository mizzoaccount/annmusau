'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiHeart, FiGift, FiDollarSign, FiCreditCard, FiShield, FiAward, FiGlobe } from 'react-icons/fi';
import NavBar from '@/components/Header';
import Footer from '@/components/Footer';

const donationOptions = [500, 1000, 2500, 5000, 10000];
const givingMethods = [
  { id: 'card', name: 'Credit/Debit Card', icon: <FiCreditCard size={20} /> },
  { id: 'mpesa', name: 'M-Pesa', icon: <FiDollarSign size={20} /> },
  { id: 'bank', name: 'Bank Transfer', icon: <FiDollarSign size={20} /> },
  { id: 'paypal', name: 'PayPal', icon: <FiCreditCard size={20} /> }
];

const givingFrequencies = [
  { id: 'one-time', name: 'One-Time Gift' },
  { id: 'monthly', name: 'Monthly' },
  { id: 'quarterly', name: 'Quarterly' },
  { id: 'yearly', name: 'Yearly' }
];

const ministryProjects = [
  {
    id: 1,
    title: "Bibles for Africa",
    description: "Provide Scriptures to rural communities",
    goal: 500000,
    raised: 275000,
    image: "/projects/bibles.jpg"
  },
  {
    id: 2,
    title: "Orphan Care Program",
    description: "Support children in our care centers",
    goal: 750000,
    raised: 320000,
    image: "/projects/orphans.jpg"
  },
  {
    id: 3,
    title: "Media Ministry Expansion",
    description: "Upgrade our broadcast equipment",
    goal: 300000,
    raised: 125000,
    image: "/projects/media.jpg"
  }
];

export default function DonatePage() {
  const [amount, setAmount] = useState(1000);
  const [frequency, setFrequency] = useState('one-time');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [activeTab, setActiveTab] = useState('give');
  const [customAmount, setCustomAmount] = useState('');

  const handleCustomAmount = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    if (value === '' || /^[0-9]*$/.test(value)) {
      setCustomAmount(value);
      if (value) setAmount(parseInt(value));
    }
  };

  return (
    <div className="bg-white">
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
            Partner With Us
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
              Your generosity fuels our mission to spread the Gospel worldwide
          </motion.p>
        </div>
      </section>







      
      {/* Hero Section *
      <section className="relative bg-gradient-to-b from-red-600 to-red-800 pt-32 pb-20 px-6 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Partner With Us
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Your generosity fuels our mission to spread the Gospel worldwide
          </motion.p>
        </div>
      </section>*/}

      

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Giving Tabs */}
        <motion.div 
          className="flex border-b border-gray-200 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'give' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('give')}
          >
            Give Now
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'projects' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('projects')}
          >
            Fund Projects
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'other' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('other')}
          >
            Other Ways to Give
          </button>
        </motion.div>

        {activeTab === 'give' && (
          <motion.div
            className="grid lg:grid-cols-3 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Impact Stories */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div 
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
                whileHover={{ y: -5 }}
              >
                <h2 className="text-3xl font-bold text-red-600 mb-6">Your Gift Makes Eternal Impact</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-3 rounded-full text-red-600">
                        <FiGlobe size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Global Missions</h3>
                        <p className="text-gray-600">Support missionaries in 12 nations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-3 rounded-full text-red-600">
                        <FiGift size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Bible Distribution</h3>
                        <p className="text-gray-600">Provide Scriptures to persecuted believers</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-3 rounded-full text-red-600">
                        <FiHeart size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Orphan Care</h3>
                        <p className="text-gray-600">Feed and educate 250+ children</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-3 rounded-full text-red-600">
                        <FiAward size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Media Ministry</h3>
                        <p className="text-gray-600">Produce life-changing content</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl p-8 relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full" />
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full" />
                <h3 className="text-2xl font-bold mb-4">2 Corinthians 9:7</h3>
                <p className="italic text-lg mb-4">
                  "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
                </p>
                <p className="font-medium">- The Holy Bible</p>
              </motion.div>
            </div>

            {/* Donation Form */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-inner h-fit sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Give Today</h2>
              
              {/* Amount Selection */}
              <div className="mb-8">
                <label className="block text-gray-700 mb-3 font-medium">Amount (Ksh)</label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {donationOptions.map((option) => (
                    <motion.button
                      key={option}
                      className={`py-3 rounded-lg font-medium ${amount === option ? 'bg-red-600 text-white' : 'bg-white text-gray-800 border border-gray-300'}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setAmount(option);
                        setCustomAmount('');
                      }}
                    >
                      {option.toLocaleString()}
                    </motion.button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">Ksh </span>
                  <input
                    type="text"
                    value={customAmount}
                    onChange={handleCustomAmount}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Other amount"
                  />
                </div>
              </div>

              {/* Frequency Selection */}
              <div className="mb-8">
                <label className="block text-gray-700 mb-3 font-medium">Frequency</label>
                <div className="grid grid-cols-2 gap-3">
                  {givingFrequencies.map((freq) => (
                    <motion.button
                      key={freq.id}
                      className={`py-3 rounded-lg font-medium ${frequency === freq.id ? 'bg-red-600 text-white' : 'bg-white text-gray-800 border border-gray-300'}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFrequency(freq.id)}
                    >
                      {freq.name}
                    </motion.button>
                  ))}
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
                className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-red-700 mb-4"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {frequency === 'one-time' ? (
                  `Donate Ksh ${customAmount || amount.toLocaleString()}`
                ) : (
                  `Give Ksh ${customAmount || amount.toLocaleString()} ${frequency === 'monthly' ? 'Monthly' : frequency === 'quarterly' ? 'Quarterly' : 'Yearly'}`
                )}
              </motion.button>

              {/* Security Assurance */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <FiShield className="text-green-500" />
                <span>Secure & Encrypted</span>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'projects' && (
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900">
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Fund Specific Projects
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ministryProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 bg-gradient-to-br from-red-600 to-red-800">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl opacity-20">
                      ✝
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-500 mb-1">
                        <span>Raised: Ksh {project.raised.toLocaleString()}</span>
                        <span>Goal: Ksh {project.goal.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-red-600 h-2.5 rounded-full" 
                          style={{ width: `${Math.min(100, (project.raised / project.goal) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <motion.button
                      className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700"
                      whileHover={{ scale: 1.02 }}
                    >
                      Support This Project
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'other' && (
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900">
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Additional Giving Options
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
                whileHover={{ y: -5 }}
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center text-red-600 mb-6">
                  <FiDollarSign size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bank Transfers</h3>
                <p className="text-gray-600 mb-4">
                  Send donations directly to our ministry bank account:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="font-mono text-sm">Bank: Kenya Commercial Bank</p>
                  <p className="font-mono text-sm">Account Name: Anne Musau Ministries</p>
                  <p className="font-mono text-sm">Account Number: 1234567890</p>
                  <p className="font-mono text-sm">Branch: Nairobi CBD</p>
                  <p className="font-mono text-sm">SWIFT: KCBKENYA</p>
                </div>
                <button className="text-red-600 font-medium hover:text-red-700">
                  Download Bank Details
                </button>
              </motion.div>

              <motion.div 
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
                whileHover={{ y: -5 }}
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center text-red-600 mb-6">
                  <FiGift size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Planned Giving</h3>
                <p className="text-gray-600 mb-4">
                  Include Anne Musau Ministries in your will or estate planning to create an eternal legacy.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="text-red-500 mt-1">•</div>
                    <span>Wills and Bequests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-red-500 mt-1">•</div>
                    <span>Stocks and Securities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-red-500 mt-1">•</div>
                    <span>Real Estate Gifts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-red-500 mt-1">•</div>
                    <span>Life Insurance Policies</span>
                  </li>
                </ul>
                <button className="text-red-600 font-medium hover:text-red-700">
                  Contact Our Giving Office
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Giving Testimonials */}
        <section className="mt-20 bg-gradient-to-r from-red-50 to-white rounded-2xl p-12">
          <motion.h2 
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Stories of Impact
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: item * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <FiHeart size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Faithful Giver</h4>
                    <p className="text-sm text-gray-500">Nairobi, Kenya</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Giving to this ministry has been the greatest investment of my life. Seeing how my contributions help spread the Gospel globally brings me incredible joy."
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}