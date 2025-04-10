'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiMessageSquare, FiChevronDown, FiArrowRight } from 'react-icons/fi';
import NavBar from '@/components/Header';
import { useState } from 'react';
import Footer from '@/components/Footer';


const faqs = [
  {
    question: "How can I get involved with the ministry?",
    answer: "We welcome volunteers in various capacities. You can join our prayer team, media team, hospitality team, or outreach programs. Visit our 'Get Involved' page or contact our volunteer coordinator."
  },
  {
    question: "What are your service times?",
    answer: "Our main worship services are Sundays at 8:30 AM and 11:00 AM. We also have Wednesday Bible study at 6:30 PM and Friday prayer meetings at 5:30 PM."
  },
  {
    question: "How can I request prayer support?",
    answer: "You can submit prayer requests through our website, call our prayer hotline at (123) 456-7890, or visit our 24/7 prayer chapel at the ministry headquarters."
  },
  {
    question: "Do you offer counseling services?",
    answer: "Yes, we have licensed Christian counselors available by appointment for individual, marriage, and family counseling. Please contact our counseling department to schedule a session."
  },
  {
    question: "How can I support the ministry financially?",
    answer: "You can give online through our secure portal, via mobile app, during services, or by mailing checks to our headquarters. All donations are tax-deductible."
  }
];

const contactMethods = [
  {
    icon: <FiMapPin className="text-red-600 text-3xl" />,
    title: "Visit Us",
    details: "123 Faith Avenue, Grace District\nNairobi, Kenya 00100",
    link: "Get Directions",
    linkUrl: "#"
  },
  {
    icon: <FiPhone className="text-red-600 text-3xl" />,
    title: "Call Us",
    details: "Main Office: (254) 123 456 789\nPrayer Line: (254) 987 654 321",
    link: "Call Now",
    linkUrl: "tel:+254123456789"
  },
  {
    icon: <FiMail className="text-red-600 text-3xl" />,
    title: "Email Us",
    details: "General Inquiries: info@annemusau.org\nPrayer Requests: prayer@annemusau.org",
    link: "Send Email",
    linkUrl: "mailto:info@annemusau.org"
  },
  {
    icon: <FiClock className="text-red-600 text-3xl" />,
    title: "Office Hours",
    details: "Monday-Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed (Open for services)",
    link: "View Full Schedule",
    linkUrl: "#"
  }
];

const latitude = -1.286389;
const longitude = 36.817223;
const address = "123 Faith Avenue, Nairobi, Kenya";
const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

export default function ContactPage() {
  //const [activeFaq, setActiveFaq] = useState(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);


  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
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
            Contact With Us
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
              We'd love to hear from you and welcome you to our ministry family
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Contact Methods Grid */}
        <section className="mb-20">
          <motion.h2 
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              How to Reach Us
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4 whitespace-pre-line">{method.details}</p>
                <a 
                  href={method.linkUrl} 
                  className="text-red-600 font-medium hover:text-red-700 inline-flex items-center gap-1"
                >
                  {method.link}
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Map and Contact Form Section */}
        <section className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Map */}
          <motion.div
          className="rounded-xl overflow-hidden shadow-lg h-full min-h-[400px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative h-full w-full bg-gray-200">
            {/* Google Maps Embed */}
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808560278883!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMTEuMCJTIDM2wrA0OScwMi4wIkU!5e0!3m2!1sen!2sus!4v${Math.floor(Date.now() / 1000)}!5m2!1sen!2sus`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            
            {/* Location Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-sm">
              <a 
                href={googleMapsLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors"
              >
                <FiMapPin className="flex-shrink-0" />
                <span className="font-medium">{address}</span>
              </a>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </motion.div>
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Send Us a Message
              </span>
            </h2>
            <p className="text-gray-600 mb-6">We'll respond to your inquiry as soon as possible</p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Select a subject</option>
                  <option value="prayer">Prayer Request</option>
                  <option value="counseling">Counseling</option>
                  <option value="volunteer">Volunteer Inquiry</option>
                  <option value="giving">Giving Questions</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-red-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-red-700 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiMessageSquare className="text-xl" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <motion.h2 
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <FiChevronDown className={`text-gray-500 transition-transform ${activeFaq === index ? 'transform rotate-180' : ''}`} />
                </button>
                <div className={`px-6 pb-6 pt-0 ${activeFaq === index ? 'block' : 'hidden'}`}>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Prayer Request CTA */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-12 text-center text-white">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Need Prayer?</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Our prayer team is available 24/7 to intercede for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <FiMessageSquare />
                Submit Prayer Request
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <FiPhone />
                Call Prayer Line
              </motion.button>
            </div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </div>
  );
}