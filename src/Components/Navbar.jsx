import { Heart, Menu, Search, ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Navbar = ({ cartCount = 0, wishlistCount = 0, products = [] }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); 

  const navLinks = [
    { name: 'Home', id: '/homepage' },
    { name: 'Shop', id: '/shop' },
    { name: 'About', id: '/about' },
    { name: 'Contact', id: '/contact' }
  ];

  const searchResults = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center py-5">
            {/* Logo */}
            <button 
              onClick={() => navigate('/home')}
              className="text-3xl sm:text-4xl font-serif font-bold text-rose-900 hover:text-rose-800 transition-colors"
            >
              Véla
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-8">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => navigate(link.id)}
                    className="text-gray-800 hover:text-rose-900 transition-colors font-normal"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            {/* Icons */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button 
                onClick={() => setSearchOpen(true)}
                className="hover:text-rose-900 transition-colors"
                aria-label="Search"
              >
                <Search size={22} />
              </button>
              
              <button 
                onClick={() => navigate('/wishlist')}
                className="relative hover:text-rose-900 transition-colors"
                aria-label="Wishlist"
              >
                <Heart size={22} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {wishlistCount}
                  </span>
                )}
              </button>
              
              <button 
                onClick={() => navigate('/cart')}
                className="relative hover:text-rose-900 transition-colors"
                aria-label="Cart"
              >
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden hover:text-rose-900 transition-colors"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200 mt-2">
              <ul className="flex flex-col gap-3 pt-4">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <button
                      onClick={() => {
                        navigate(link.id);
                        setMobileMenuOpen(false);
                      }}
                      className="text-gray-800 hover:text-rose-900 transition-colors w-full text-left py-2"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-start pt-20 px-4">

          <div className="bg-white rounded-lg p-6 sm:p-8 w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif font-semibold text-rose-900">Search Products</h2>
              <button 
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery('');
                }}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <X size={28} />
              </button>
            </div>
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for jewelry, skincare..."
              className="w-full p-4 text-lg border-2 border-rose-300 rounded-lg focus:outline-none focus:border-rose-900 transition-colors mb-4"
              autoFocus
            />
            
            <div className="overflow-y-auto flex-1">
              {searchQuery.length === 0 ? (
                <p className="text-center text-gray-500 py-8">Start typing to search...</p>
              ) : searchResults.length === 0 ? (
                <p className="text-center text-gray-500 py-8">No products found</p>
              ) : (
                <div className="space-y-2">
                  {searchResults.map(product => (
                    <button
                      key={product.id}
                      onClick={() => {
                        navigate('/product-detail', product);
                        setSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 hover:scale-[1.02] hover:shadow-md transition-all rounded-lg border-b border-gray-100">
                      <div className="w-16 h-16 bg-rose-50 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                        {product.icon || '🛍️'}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-semibold text-gray-800">{product.name}</div>
                        <div className="text-rose-900 font-bold">₦{product.price.toLocaleString()}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;


