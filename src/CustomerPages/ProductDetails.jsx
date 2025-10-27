import { ArrowLeft, Heart, Minus, Package, Plus, Ruler, Shield, ShoppingCart, Star, Truck } from 'lucide-react';
import { useState } from 'react';

const ProductDetail = ({ product, onNavigate, onAddToCart, onToggleWishlist, isInWishlist }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-gray-800 mb-4">Product not found</h2>
          <button
            onClick={() => onNavigate('shop')}
            className="bg-rose-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-rose-800 transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  // Color options based on category
  const jewelryColors = [
    { name: 'Gold', code: '#D4AF7F' },
    { name: 'Silver', code: '#C0C0C0' },
    { name: 'Rose Gold', code: '#B76E79' }
  ];

  const clothingColors = [
    { name: 'Beige', code: '#F5F5DC' },
    { name: 'Rose', code: '#E8B4BC' },
    { name: 'Black', code: '#2D2624' },
    { name: 'White', code: '#FFFFFF' }
  ];

  const colors = product.category === 'jewelry' ? jewelryColors : clothingColors;

  // Size options for clothing
  const clothingSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const reviews = [
    {
      name: 'Amara O.',
      rating: 5,
      date: '2 days ago',
      comment: 'Absolutely beautiful piece! The quality is amazing and it arrived perfectly packaged. Will definitely shop again.',
      verified: true
    },
    {
      name: 'Chioma N.',
      rating: 4,
      date: '1 week ago',
      comment: 'Love this! It\'s elegant and goes with everything. Shipping was fast too.',
      verified: true
    },
    {
      name: 'Tunde A.',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Excellent craftsmanship! Exactly as described. Very happy with my purchase.',
      verified: false
    }
  ];

  const features = [
    {
      icon: <Shield size={24} className="text-rose-600" />,
      title: 'Quality Guarantee',
      description: '100% authentic products'
    },
    {
      icon: <Truck size={24} className="text-rose-600" />,
      title: 'Free Shipping',
      description: 'On orders over ₦50,000'
    },
    {
      icon: <Package size={24} className="text-rose-600" />,
      title: 'Easy Returns',
      description: '14-day return policy'
    }
  ];

  const relatedProducts = [
    { id: 2, name: 'Rose Gold Earrings', price: 18000, icon: '💍', category: 'jewelry' },
    { id: 3, name: 'Silver Bracelet Set', price: 22000, icon: '✨', category: 'jewelry' },
    { id: 7, name: 'Pearl Stud Earrings', price: 20000, icon: '💎', category: 'jewelry' }
  ];

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (product.category === 'clothing' && !selectedSize) {
      alert('Please select a size');
      return;
    }
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product.id);
    }
    alert(`Added ${quantity} item(s) to cart! 🛒`);
  };

  // Dynamic descriptions based on category
  const getDescription = () => {
    switch(product.category) {
      case 'jewelry':
        return 'Elegant and timeless piece crafted with premium materials. Hypoallergenic and safe for sensitive skin. Perfect for everyday wear or special occasions. Each piece is carefully inspected to ensure the highest quality standards.';
      case 'skincare':
        return 'Premium skincare formula enriched with natural ingredients. Dermatologically tested and suitable for all skin types. Cruelty-free, paraben-free, and made with ingredients you can trust. Experience visible results in just a few weeks.';
      case 'clothing':
        return 'Premium quality fabric with elegant design. Comfortable, breathable, and perfect for any occasion. Carefully tailored for the perfect fit. Easy to care for and maintains its beauty wash after wash.';
      default:
        return 'Premium quality product designed with care and attention to detail.';
    }
  };

  // Dynamic specifications based on category
  const getSpecifications = () => {
    switch(product.category) {
      case 'jewelry':
        return [
          { label: 'Material', value: 'Gold-plated brass' },
          { label: 'Chain Length', value: '18 inches' },
          { label: 'Pendant Size', value: '1.5 cm' },
          { label: 'Clasp Type', value: 'Lobster clasp' },
          { label: 'Hypoallergenic', value: 'Yes' }
        ];
      case 'skincare':
        return [
          { label: 'Size', value: '50ml' },
          { label: 'Skin Type', value: 'All skin types' },
          { label: 'Main Ingredient', value: 'Vitamin C / Retinol' },
          { label: 'Cruelty-Free', value: 'Yes' },
          { label: 'Paraben-Free', value: 'Yes' }
        ];
      case 'clothing':
        return [
          { label: 'Material', value: '95% Cotton, 5% Elastane' },
          { label: 'Fit', value: 'Regular fit' },
          { label: 'Care', value: 'Machine wash cold' },
          { label: 'Origin', value: 'Imported' },
          { label: 'Sizes Available', value: 'XS - XXL' }
        ];
      default:
        return [];
    }
  };

  // Dynamic key features based on category
  const getKeyFeatures = () => {
    switch(product.category) {
      case 'jewelry':
        return [
          '• Premium quality materials',
          '• Hypoallergenic - safe for sensitive skin',
          '• Elegant and timeless design',
          '• Perfect for any occasion',
          '• Comes with beautiful gift packaging'
        ];
      case 'skincare':
        return [
          '• Natural and effective ingredients',
          '• Dermatologically tested',
          '• Suitable for all skin types',
          '• Cruelty-free and paraben-free',
          '• Visible results in weeks'
        ];
      case 'clothing':
        return [
          '• Premium quality fabric',
          '• Comfortable and breathable',
          '• Elegant and versatile design',
          '• Easy care - machine washable',
          '• Available in multiple sizes and colors'
        ];
      default:
        return [];
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <button
              onClick={() => onNavigate('shop')}
              className="flex items-center gap-2 text-gray-600 hover:text-rose-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Shop</span>
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 capitalize">{product.category}</span>
            <span className="text-gray-400">/</span>
            <span className="text-rose-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="bg-rose-50 rounded-2xl h-96 sm:h-[500px] flex items-center justify-center text-9xl sticky top-24">
                {product.icon}
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-stone-100 rounded-lg h-20 flex items-center justify-center text-3xl cursor-pointer hover:bg-rose-100 transition-colors border-2 border-transparent hover:border-rose-900"
                  >
                    {product.icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="text-sm text-rose-900 uppercase tracking-wider font-semibold mb-2">
                  {product.category}
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-gray-600">(24 reviews)</span>
                </div>

                {/* Price */}
                <div className="text-4xl font-bold text-rose-900 mb-6">
                  ₦{product.price.toLocaleString()}
                </div>

                {/* Badge */}
                {product.badge && (
                  <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-6">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <p className="text-gray-700 leading-relaxed">{getDescription()}</p>
              </div>

              {/* Color Options */}
              {(product.category === 'jewelry' || product.category === 'clothing') && (
                <div>
                  <label className="block font-semibold text-gray-800 mb-3">
                    Color: <span className="text-rose-900">{colors[selectedColor].name}</span>
                  </label>
                  <div className="flex gap-3">
                    {colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(index)}
                        className={`w-10 h-10 rounded-full transition-all ${
                          selectedColor === index
                            ? 'ring-4 ring-rose-900 ring-offset-2 scale-110'
                            : 'hover:scale-110 ring-2 ring-gray-200'
                        }`}
                        style={{ backgroundColor: color.code }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Options for Clothing */}
              {product.category === 'clothing' && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="block font-semibold text-gray-800">
                      Size: {selectedSize && <span className="text-rose-900">{selectedSize}</span>}
                    </label>
                    <button className="text-rose-900 text-sm font-medium hover:underline flex items-center gap-1">
                      <Ruler size={16} />
                      Size Guide
                    </button>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {clothingSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 rounded-lg font-semibold transition-all ${
                          selectedSize === size
                            ? 'bg-rose-900 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-rose-100'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <label className="block font-semibold text-gray-800 mb-3">Quantity:</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 bg-gray-100 hover:bg-rose-900 hover:text-white rounded-lg flex items-center justify-center transition-colors font-bold"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="text-2xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 bg-gray-100 hover:bg-rose-900 hover:text-white rounded-lg flex items-center justify-center transition-colors font-bold"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 text-green-600">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="font-medium">In Stock</span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-rose-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-rose-800 transition-colors flex items-center justify-center gap-3"
                >
                  <ShoppingCart size={22} />
                  Add to Cart
                </button>
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className={`px-6 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
                    isInWishlist
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-rose-100'
                  }`}
                >
                  <Heart size={22} fill={isInWishlist ? 'currentColor' : 'none'} />
                  {isInWishlist ? 'Saved' : 'Save'}
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">{feature.title}</h4>
                      <p className="text-xs text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Product Meta */}
              <div className="pt-6 border-t space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">SKU:</span>
                  <span className="font-semibold text-gray-800">VL-{product.id.toString().padStart(4, '0')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-semibold text-gray-800 capitalize">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tags:</span>
                  <span className="font-semibold text-gray-800">Premium, {product.category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-16">
            <div className="border-b border-gray-200">
              <div className="flex gap-8">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`pb-4 font-semibold transition-colors ${
                    activeTab === 'description'
                      ? 'border-b-2 border-rose-900 text-rose-900'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('specifications')}
                  className={`pb-4 font-semibold transition-colors ${
                    activeTab === 'specifications'
                      ? 'border-b-2 border-rose-900 text-rose-900'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-4 font-semibold transition-colors ${
                    activeTab === 'reviews'
                      ? 'border-b-2 border-rose-900 text-rose-900'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Reviews ({reviews.length})
                </button>
              </div>
            </div>

            <div className="py-8">
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">{getDescription()}</p>
                  <div className="mt-6 space-y-3">
                    <h3 className="text-xl font-serif font-semibold text-gray-900">Key Features:</h3>
                    <ul className="space-y-2 text-gray-700">
                      {getKeyFeatures().map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  {product.category === 'clothing' && (
                    <div className="mt-6 bg-rose-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-2">Care Instructions:</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Machine wash cold with similar colors</li>
                        <li>• Tumble dry low or hang to dry</li>
                        <li>• Iron on low heat if needed</li>
                        <li>• Do not bleach</li>
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="grid md:grid-cols-2 gap-6">
                  {getSpecifications().map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-semibold text-gray-800">{spec.label}</span>
                      <span className="text-gray-600">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={24} fill="currentColor" />
                          ))}
                        </div>
                        <span className="text-2xl font-bold text-gray-900">5.0</span>
                      </div>
                      <p className="text-gray-600">Based on {reviews.length} reviews</p>
                    </div>
                    <button className="bg-rose-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-800 transition-colors">
                      Write a Review
                    </button>
                  </div>

                  {reviews.map((review, index) => (
                    <div key={index} className="bg-rose-50 p-6 rounded-xl">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-gray-900">{review.name}</h4>
                            {review.verified && (
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                          <div className="flex text-yellow-500 mt-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} size={16} fill="currentColor" />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-600">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(relatedProduct => (
                <button
                  key={relatedProduct.id}
                  onClick={() => onNavigate('product-detail', relatedProduct)}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 text-left"
                >
                  <div className="h-64 bg-rose-50 flex items-center justify-center text-7xl">
                    {relatedProduct.icon}
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-rose-900 uppercase tracking-wider mb-1">
                      {relatedProduct.category}
                    </div>
                    <h3 className="text-lg font-serif mb-2">{relatedProduct.name}</h3>
                    <div className="text-2xl font-bold text-rose-900">
                      ₦{relatedProduct.price.toLocaleString()}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;