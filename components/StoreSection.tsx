'use client';

import { motion } from 'framer-motion';
import Link from 'next/dist/client/link';
import { FiShoppingBag, FiStar, FiDownload, FiTruck } from 'react-icons/fi';

const products = [
  {
    id: 1,
    name: "Spiritual Warfare Prayer Book",
    description: "Hardcover collection of powerful prayers for spiritual battles",
    price: 24.99,
    type: "physical",
    category: "Books",
    image: "/product1.jpg",
    featured: true
  },
  {
    id: 2,
    name: "30-Day Devotional: Psalms of Peace",
    description: "Digital download for daily meditation and reflection",
    price: 9.99,
    type: "digital",
    category: "E-books",
    image: "/product2.jpg"
  },
  {
    id: 3,
    name: "Anointed Worship Music Album",
    description: "MP3 download of our live worship recording",
    price: 14.99,
    type: "digital",
    category: "Music",
    image: "/product3.jpg"
  },
  {
    id: 4,
    name: "Faith-Filled T-Shirt",
    description: "Premium cotton tee with inspirational scripture",
    price: 29.99,
    type: "physical",
    category: "Apparel",
    image: "/product4.jpg"
  },
  {
    id: 5,
    name: "Holy Communion Set",
    description: "Handcrafted communionware for home worship",
    price: 49.99,
    type: "physical",
    category: "Sacramental",
    image: "/product5.jpg"
  },
  {
    id: 6,
    name: "Bible Study Video Series",
    description: "7-part video teaching on the Book of Romans",
    price: 39.99,
    type: "digital",
    category: "Courses",
    image: "/product6.jpg"
  },
];

export default function StoreSection() {
  return (
    <section className="relative bg-white py-20 px-6 overflow-hidden">
      {/* Heavenly Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-red-100 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-red-200 rounded-full opacity-5 blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0]
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
            <FiShoppingBag className="text-3xl" />
            <span className="font-semibold">Kingdom Marketplace</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Holy Spirit Inspired Resources
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Products to nourish your spirit and strengthen your faith journey
          </p>
        </motion.div>

        {/* Product Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <button className="px-6 py-2 bg-red-600 text-white rounded-full font-medium">
            All Products
          </button>
          <button className="px-6 py-2 border border-gray-300 rounded-full font-medium hover:bg-gray-100">
            Physical
          </button>
          <button className="px-6 py-2 border border-gray-300 rounded-full font-medium hover:bg-gray-100">
            Digital
          </button>
          <button className="px-6 py-2 border border-gray-300 rounded-full font-medium hover:bg-gray-100">
            Books
          </button>
          <button className="px-6 py-2 border border-gray-300 rounded-full font-medium hover:bg-gray-100">
            Music
          </button>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Featured Badge */}
              {product.featured && (
                <motion.div
                  className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <FiStar className="text-xs" />
                  <span>Featured</span>
                </motion.div>
              )}

              {/* Product Image */}
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl opacity-20">
                  ✝
                </div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <FiShoppingBag className="text-3xl text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  {product.type === 'digital' ? (
                    <FiDownload className="text-red-500" />
                  ) : (
                    <FiTruck className="text-red-500" />
                  )}
                  <span className="capitalize">{product.type}</span>
                  <span>•</span>
                  <span>{product.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-red-600">Ksh {product.price}</span>
                  <motion.button
                    className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/20 rounded-xl transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Store CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-red-50 to-white p-8 rounded-2xl shadow-inner">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Need Spiritual Guidance?</h3>
              <p className="text-gray-600 max-w-md">
                All proceeds support our ministry outreach programs and missionary work.
              </p>
            </div>
            <motion.button
              className="flex-shrink-0 flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <FiShoppingBag className="text-xl" />
               <Link href="/resources" className="">
               Visit Full Store
                </Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}