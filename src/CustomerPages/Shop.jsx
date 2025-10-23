import { Filter, Heart, ShoppingCart, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Shop = ({ products = [], onAddToCart, onToggleWishlist, wishlist = [] }) => {
    const navigate = useNavigate();
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentSort, setCurrentSort] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
  applyFiltersAndSort();
}, []);


  const applyFiltersAndSort = () => {
    let filtered = currentFilter === 'all' 
      ? [...products] 
      : products.filter(p => p.category === currentFilter);
    
    switch(currentSort) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    
    setFilteredProducts(filtered);
  };

  const handleFilterChange = (category) => {
    setCurrentFilter(category);
    setMobileFilterOpen(false);
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Header */}
      <section className="bg-gradient-to-br from-rose-50 to-rose-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-rose-950 mb-4">
            Shop All Products
          </h1>
          <p className="text-lg text-gray-700">
            Discover our curated collection of jewelry and skincare
          </p>
        </div>
      </section>

      {/* Filters and Sort */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Desktop Filters */}
            <div className="hidden sm:flex gap-3 flex-wrap">
              <button
                onClick={() => handleFilterChange('all')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  currentFilter === 'all'
                    ? 'bg-rose-900 text-white'
                    : 'bg-white border-2 border-rose-300 text-gray-700 hover:border-rose-900'
                }`}
              >
                All Products
              </button>
              <button
                onClick={() => handleFilterChange('jewelry')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  currentFilter === 'jewelry'
                    ? 'bg-rose-900 text-white'
                    : 'bg-white border-2 border-rose-300 text-gray-700 hover:border-rose-900'
                }`}
              >
                💎 Jewelry
              </button>
              <button
                onClick={() => handleFilterChange('skincare')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  currentFilter === 'skincare'
                    ? 'bg-rose-900 text-white'
                    : 'bg-white border-2 border-rose-300 text-gray-700 hover:border-rose-900'
                }`}
              >
                ✨ Skincare
              </button>

               <button
                onClick={() => handleFilterChange('clothing')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  currentFilter === 'clothing'
                    ? 'bg-rose-900 text-white'
                    : 'bg-white border-2 border-rose-300 text-gray-700 hover:border-rose-900'
                }`}
              >
                ✨ Clothing
              </button>
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="sm:hidden flex items-center gap-2 px-4 py-2 bg-rose-900 text-white rounded-lg font-semibold"
            >
              <Filter size={18} />
              Filter
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <label className="text-gray-700 font-medium whitespace-nowrap">Sort by:</label>
              <select
                value={currentSort}
                onChange={(e) => setCurrentSort(e.target.value)}
                className="flex-1 sm:flex-none px-4 py-2 border-2 border-rose-300 rounded-lg focus:outline-none focus:border-rose-900 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:hidden">
          <div className="bg-white w-full rounded-t-2xl p-6 animate-slide-up">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-serif font-semibold text-rose-900">Filter Products</h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => handleFilterChange('all')}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentFilter === 'all'
                    ? 'bg-rose-900 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                All Products
              </button>
              <button
                onClick={() => handleFilterChange('jewelry')}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentFilter === 'jewelry'
                    ? 'bg-rose-900 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                💎 Jewelry
              </button>
              <button
                onClick={() => handleFilterChange('skincare')}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentFilter === 'skincare'
                    ? 'bg-rose-900 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                ✨ Skincare
              </button>

              <button
                onClick={() => handleFilterChange('clothing')}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentFilter === 'clothing'
                    ? 'bg-rose-900 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                ✨ Clothing
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-rose-900">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-serif text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters</p>
              <button
                onClick={() => setCurrentFilter('all')}
                className="bg-rose-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-rose-800 transition-colors"
              >
                View All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group relative"
                >
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                      {product.badge}
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product.id);
                    }}
                    className={`absolute top-3 left-3 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all ${
                      isInWishlist(product.id)
                        ? 'bg-red-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-rose-100'
                    }`}
                  >
                    <Heart size={20} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                  </button>

                  {/* Product Image */}
                  <button
                    onClick={() => navigate('/product-detail', product)}
                    className="w-full h-64 bg-rose-50 flex items-center justify-center text-7xl cursor-pointer group-hover:bg-rose-100 transition-colors"
                  >
                    {product.icon}
                  </button>

                  {/* Product Info */}
                  <div className="p-5">
                    <div className="text-xs text-rose-900 uppercase tracking-wider mb-2 font-semibold">
                      {product.category}
                    </div>
                    <h3 className="text-lg font-serif mb-2 text-gray-800 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="text-yellow-500 mb-3 text-sm">★★★★★</div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-rose-900">
                        ₦{product.price.toLocaleString()}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => onAddToCart(product.id)}
                        className="flex-1 bg-rose-900 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-rose-800 transition-colors flex items-center justify-center gap-2"
                      >
                        <ShoppingCart size={18} />
                        Add to Cart
                      </button>
                      <button
                        onClick={() => navigate('/product-detail', product)}
                        className="px-4 py-2.5 border-2 border-rose-900 text-rose-900 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-rose-400 to-rose-500 py-16 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-serif mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg mb-6">
            Get in touch with us and we'll help you find the perfect piece
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white text-rose-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </section>

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

     
    </div>
  );
};

export default Shop;