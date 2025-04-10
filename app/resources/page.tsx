'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiShoppingBag, 
  FiStar, 
  FiDownload, 
  FiTruck, 
  FiSearch,
  FiFilter,
  FiX,
  FiHeart,
  FiShoppingCart
} from 'react-icons/fi';
import NavBar from '@/components/Header';
import Footer from '@/components/Footer';

// Expanded product data with more items
const allProducts = [
  {
    id: 1,
    name: "Spiritual Warfare Prayer Book",
    description: "Hardcover collection of powerful prayers for spiritual battles",
    price: 24.99,
    type: "physical",
    category: "Books",
    image: "/product1.jpg",
    featured: true,
    rating: 4.8,
    reviews: 124,
    inStock: true
  },
  {
    id: 2,
    name: "30-Day Devotional: Psalms of Peace",
    description: "Digital download for daily meditation and reflection",
    price: 9.99,
    type: "digital",
    category: "E-books",
    image: "/product2.jpg",
    rating: 4.5,
    reviews: 87,
    inStock: true
  },
  {
    id: 3,
    name: "Anointed Worship Music Album",
    description: "MP3 download of our live worship recording",
    price: 14.99,
    type: "digital",
    category: "Music",
    image: "/product3.jpg",
    rating: 4.9,
    reviews: 156,
    inStock: true
  },
  {
    id: 4,
    name: "Faith-Filled T-Shirt",
    description: "Premium cotton tee with inspirational scripture",
    price: 29.99,
    type: "physical",
    category: "Apparel",
    image: "/product4.jpg",
    rating: 4.7,
    reviews: 92,
    inStock: true
  },
  {
    id: 5,
    name: "Holy Communion Set",
    description: "Handcrafted communionware for home worship",
    price: 49.99,
    type: "physical",
    category: "Sacramental",
    image: "/product5.jpg",
    rating: 5.0,
    reviews: 64,
    inStock: false
  },
  {
    id: 6,
    name: "Bible Study Video Series",
    description: "7-part video teaching on the Book of Romans",
    price: 39.99,
    type: "digital",
    category: "Courses",
    image: "/product6.jpg",
    rating: 4.9,
    reviews: 112,
    inStock: true
  },
  {
    id: 7,
    name: "Prayer Shawl",
    description: "Handwoven shawl with scripture embroidery",
    price: 34.99,
    type: "physical",
    category: "Apparel",
    image: "/product7.jpg",
    rating: 4.6,
    reviews: 78,
    inStock: true
  },
  {
    id: 8,
    name: "Daily Prophetic Word Subscription",
    description: "Monthly prophetic encouragement emails",
    price: 5.99,
    type: "digital",
    category: "Subscription",
    image: "/product8.jpg",
    rating: 4.7,
    reviews: 203,
    inStock: true
  },
  {
    id: 9,
    name: "Healing Oil Anointing Set",
    description: "Set of 3 anointing oils for prayer",
    price: 19.99,
    type: "physical",
    category: "Sacramental",
    image: "/product9.jpg",
    rating: 4.8,
    reviews: 145,
    inStock: true
  },
  {
    id: 10,
    name: "Spiritual Gifts Assessment",
    description: "Interactive digital assessment tool",
    price: 12.99,
    type: "digital",
    category: "Courses",
    image: "/product10.jpg",
    rating: 4.4,
    reviews: 56,
    inStock: true
  },
  {
    id: 11,
    name: "Scripture Wall Art Prints",
    description: "Set of 3 high-quality scripture prints",
    price: 27.99,
    type: "physical",
    category: "Decor",
    image: "/product11.jpg",
    rating: 4.9,
    reviews: 98,
    inStock: true
  },
  {
    id: 12,
    name: "Deliverance Prayer Audio Guide",
    description: "MP3 prayers for spiritual deliverance",
    price: 8.99,
    type: "digital",
    category: "Audio",
    image: "/product12.jpg",
    rating: 4.6,
    reviews: 87,
    inStock: true
  },
];

// Unique categories from products
const categories = [...new Set(allProducts.map(product => product.category))];
const productTypes = [...new Set(allProducts.map(product => product.type))];

export default function StorePage() {
  const [products, setProducts] = useState(allProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);
  const [sortOption, setSortOption] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  // Filter products based on search and filters
  useEffect(() => {
    let filtered = allProducts;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => 
        selectedCategories.includes(product.category)
      );
    }

    // Type filter
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(product => 
        selectedTypes.includes(product.type)
      );
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    switch (sortOption) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default: // 'featured'
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    setProducts(filtered);
  }, [searchTerm, selectedCategories, selectedTypes, priceRange, sortOption]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  const addToCart = (productId: number) => {
    setCart(prev => [...prev, productId]);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedTypes([]);
    setPriceRange([0, 50]);
    setSortOption('featured');
  };

  return (
    <div className="bg-white min-h-screen">
      <NavBar />
      
   {/* Hero Section */}
<div className="relative bg-gradient-to-b from-red-50 to-white py-32 px-6">
  <div className="absolute inset-0 overflow-hidden opacity-20">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('/cross-pattern.png')] bg-repeat opacity-10" />
  </div>
  
  <div className="max-w-6xl mx-auto text-center relative">
    <motion.h1 
      className="text-5xl md:text-7xl font-bold mb-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
        Kingdom Marketplace
      </span>
    </motion.h1>
    <motion.p 
      className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      Equipping believers with Spirit-filled resources for your journey of faith
    </motion.p>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
    className="relative max-w-xl mx-auto mt-4"
    >
    <input
        type="text"
        placeholder="Search for spiritual resources..."
        className="w-full px-6 py-5 text-lg rounded-full bg-white border-2 border-red-500 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-red-300 shadow-md transition-all duration-300"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    />
    <FiSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-red-500 text-2xl pointer-events-none" />
    </motion.div>

  </div>
</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="md:hidden mb-4">
              <button 
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg"
              >
                <FiFilter />
                {mobileFiltersOpen ? 'Hide Filters' : 'Show Filters'}
              </button>
            </div>
            
            <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block bg-gray-50 p-6 rounded-xl shadow-sm`}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg">Filters</h3>
                <button 
                  onClick={clearFilters}
                  className="text-sm text-red-600 hover:underline"
                >
                  Clear all
                </button>
              </div>

              {/* Price Range Filter */}
              <div className="mb-8">
                <h4 className="font-medium mb-4 flex justify-between">
                  <span>Price Range</span>
                  <span>Ksh {priceRange[0]} - {priceRange[1]}</span>
                </h4>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="5"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-red-600"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>0</span>
                  <span>50</span>
                </div>
              </div>

              {/* Product Type Filter */}
              <div className="mb-8">
                <h4 className="font-medium mb-3">Product Type</h4>
                <div className="space-y-2">
                  {productTypes.map(type => (
                    <div key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`type-${type}`}
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleType(type)}
                        className="h-4 w-4 text-red-600 rounded border-gray-300 focus:ring-red-500"
                      />
                      <label htmlFor={`type-${type}`} className="ml-3 text-sm capitalize">
                        {type} ({allProducts.filter(p => p.type === type).length})
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories Filter */}
              <div className="mb-8">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="h-4 w-4 text-red-600 rounded border-gray-300 focus:ring-red-500"
                      />
                      <label htmlFor={`category-${category}`} className="ml-3 text-sm">
                        {category} ({allProducts.filter(p => p.category === category).length})
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability Filter */}
              <div>
                <h4 className="font-medium mb-3">Availability</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="in-stock"
                      className="h-4 w-4 text-red-600 rounded border-gray-300 focus:ring-red-500"
                    />
                    <label htmlFor="in-stock" className="ml-3 text-sm">
                      In Stock
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="featured"
                      className="h-4 w-4 text-red-600 rounded border-gray-300 focus:ring-red-500"
                    />
                    <label htmlFor="featured" className="ml-3 text-sm">
                      Featured Items
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Ministry Info */}
            <div className="hidden md:block mt-6 bg-red-50 p-6 rounded-xl">
              <h4 className="font-bold text-red-800 mb-3">Ministry Promise</h4>
              <p className="text-sm text-gray-700 mb-4">
                All proceeds from our marketplace support ministry outreach, missionary work, and community programs.
              </p>
              <div className="text-xs text-gray-500">
                <p className="mb-1">✓ 100% Spirit-led resources</p>
                <p className="mb-1">✓ Prayerfully curated</p>
                <p>✓ Kingdom-focused</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sorting and Results */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <p className="text-gray-600">
                  Showing <span className="font-bold">{products.length}</span> of <span className="font-bold">{allProducts.length}</span> products
                </p>
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="sort" className="text-sm font-medium text-gray-700">Sort by:</label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCategories.length > 0 || selectedTypes.length > 0 || priceRange[1] < 50) && (
              <div className="mb-6 flex flex-wrap gap-2">
                {selectedCategories.map(category => (
                  <div key={category} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                    <span>{category}</span>
                    <button 
                      onClick={() => toggleCategory(category)}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      <FiX size={14} />
                    </button>
                  </div>
                ))}
                {selectedTypes.map(type => (
                  <div key={type} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm capitalize">
                    <span>{type}</span>
                    <button 
                      onClick={() => toggleType(type)}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      <FiX size={14} />
                    </button>
                  </div>
                ))}
                {priceRange[1] < 50 && (
                  <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                    <span>Under Ksh {priceRange[1]}</span>
                    <button 
                      onClick={() => setPriceRange([0, 50])}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      <FiX size={14} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Products Grid */}
            {products.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <motion.div
                    key={product.id}
                    className="group relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden border border-gray-100"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <FiHeart
                        className={`${wishlist.includes(product.id) ? 'fill-red-600 text-red-600' : 'text-gray-400'}`}
                      />
                    </button>

                    {/* Featured Badge */}
                    {product.featured && (
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                        <FiStar className="text-xs" />
                        <span>Featured</span>
                      </div>
                    )}

                    {/* Out of Stock Badge */}
                    {!product.inStock && (
                      <div className="absolute top-3 left-3 z-10 bg-gray-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                        Out of Stock
                      </div>
                    )}

                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 opacity-80" />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-6xl opacity-20">
                        ✝
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                        {product.type === 'digital' ? (
                          <FiDownload className="text-red-500" />
                        ) : (
                          <FiTruck className="text-red-500" />
                        )}
                        <span className="capitalize">{product.type}</span>
                        <span>•</span>
                        <span>{product.category}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} w-4 h-4`}
                          />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-red-600">Ksh {product.price}</span>
                        <motion.button
                          className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${product.inStock ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                          whileHover={product.inStock ? { scale: 1.05 } : {}}
                          whileTap={product.inStock ? { scale: 0.95 } : {}}
                          onClick={() => product.inStock && addToCart(product.id)}
                          disabled={!product.inStock}
                        >
                          <FiShoppingCart />
                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <FiSearch className="text-gray-400 text-3xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  We couldn't find any products matching your filters. Try adjusting your search or filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {products.length > 0 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center gap-1">
                  <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 rounded-md bg-red-600 text-white font-medium">
                    1
                  </button>
                  <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <span className="px-3 py-1 text-gray-500">...</span>
                  <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                    8
                  </button>
                  <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ministry Promise Section */}
      <div className="bg-gradient-to-r from-red-800 to-red-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Ministry Promise</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Every purchase supports our mission to spread the Gospel and equip believers worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <FiShoppingBag className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Spirit-Led Resources</h3>
              <p className="opacity-80">
                Each product is prayerfully selected and anointed for your spiritual growth.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <FiStar className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Kingdom Impact</h3>
              <p className="opacity-80">
                Your purchases fund missions, outreach programs, and community support.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <FiDownload className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Convenience</h3>
              <p className="opacity-80">
                Instant access to digital products to nourish your spirit anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Testimonials</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-4">
                "The Spiritual Warfare Prayer Book has transformed my prayer life. I've never felt more equipped to stand against the enemy's schemes."
              </blockquote>
              <p className="font-medium text-gray-900">— Sarah M., Nairobi</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}