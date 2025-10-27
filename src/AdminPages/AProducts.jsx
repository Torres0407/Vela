import {
    AlertTriangle,
    CheckCircle,
    DollarSign,
    Download,
    Edit2,
    Eye,
    Filter,
    Flag,
    Package,
    Search,
    ShoppingBag,
    Star,
    Store,
    Trash2,
    TrendingUp
} from 'lucide-react';
import { useState } from 'react';

const AProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedVendor, setSelectedVendor] = useState('all');
  const [showProductDetail, setShowProductDetail] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Gold Pendant Necklace',
      vendor: 'Glam Jewelry',
      category: 'Jewelry',
      price: 25000,
      stock: 45,
      sold: 156,
      revenue: 3900000,
      rating: 4.9,
      reviews: 87,
      status: 'Active',
      flagged: false,
      image: '💎',
      dateAdded: 'Jan 15, 2024'
    },
    {
      id: 2,
      name: 'Rose Gold Earrings',
      vendor: 'Glam Jewelry',
      category: 'Jewelry',
      price: 18000,
      stock: 28,
      sold: 134,
      revenue: 2412000,
      rating: 4.8,
      reviews: 65,
      status: 'Active',
      flagged: false,
      image: '💍',
      dateAdded: 'Feb 3, 2024'
    },
    {
      id: 3,
      name: 'Vitamin C Serum',
      vendor: 'Beauty Hub',
      category: 'Skincare',
      price: 12000,
      stock: 0,
      sold: 289,
      revenue: 3468000,
      rating: 4.9,
      reviews: 142,
      status: 'Out of Stock',
      flagged: false,
      image: '🧴',
      dateAdded: 'Jan 20, 2024'
    },
    {
      id: 4,
      name: 'Counterfeit Watch',
      vendor: 'Fake Store Ltd',
      category: 'Jewelry',
      price: 5000,
      stock: 100,
      sold: 3,
      revenue: 15000,
      rating: 1.5,
      reviews: 8,
      status: 'Flagged',
      flagged: true,
      image: '⌚',
      dateAdded: 'Oct 20, 2025'
    },
    {
      id: 5,
      name: 'Hydrating Face Cream',
      vendor: 'Beauty Hub',
      category: 'Skincare',
      price: 15000,
      stock: 67,
      sold: 198,
      revenue: 2970000,
      rating: 4.7,
      reviews: 93,
      status: 'Active',
      flagged: false,
      image: '🌸',
      dateAdded: 'Mar 12, 2024'
    },
    {
      id: 6,
      name: 'Pearl Stud Earrings',
      vendor: 'Elegance Store',
      category: 'Jewelry',
      price: 20000,
      stock: 15,
      sold: 87,
      revenue: 1740000,
      rating: 4.8,
      reviews: 52,
      status: 'Low Stock',
      flagged: false,
      image: '💎',
      dateAdded: 'Apr 5, 2024'
    }
  ];

  const vendors = ['all', 'Glam Jewelry', 'Beauty Hub', 'Elegance Store', 'Fake Store Ltd'];
  const categories = ['all', 'Jewelry', 'Skincare'];

  const getStatusColor = (status) => {
    const colors = {
      'Active': 'bg-green-100 text-green-800 border-green-200',
      'Out of Stock': 'bg-red-100 text-red-800 border-red-200',
      'Low Stock': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Flagged': 'bg-red-100 text-red-800 border-red-200',
      'Pending Review': 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.vendor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || product.status.toLowerCase().replace(' ', '') === selectedStatus;
    const matchesVendor = selectedVendor === 'all' || product.vendor === selectedVendor;
    return matchesSearch && matchesCategory && matchesStatus && matchesVendor;
  });

  const stats = [
    { label: 'Total Products', value: products.length, icon: Package, color: 'blue' },
    { label: 'Active Products', value: products.filter(p => p.status === 'Active').length, icon: CheckCircle, color: 'green' },
    { label: 'Flagged Items', value: products.filter(p => p.flagged).length, icon: Flag, color: 'red' },
    { label: 'Out of Stock', value: products.filter(p => p.status === 'Out of Stock').length, icon: AlertTriangle, color: 'orange' }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-serif font-bold text-gray-800">Product Management</h1>
        <p className="text-gray-600 mt-1">Manage all products across vendor shops</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">{stat.label}</span>
                <Icon size={20} className={`text-${stat.color}-600`} />
              </div>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-2 relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products or vendors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
          >
            <option value="all">All Categories</option>
            {categories.filter(c => c !== 'all').map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={selectedVendor}
            onChange={(e) => setSelectedVendor(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
          >
            <option value="all">All Vendors</option>
            {vendors.filter(v => v !== 'all').map(vendor => (
              <option key={vendor} value={vendor}>{vendor}</option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="outofstock">Out of Stock</option>
            <option value="lowstock">Low Stock</option>
            <option value="flagged">Flagged</option>
          </select>
        </div>

        <div className="flex gap-3 mt-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter size={18} />
            More Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-rose-900 text-white rounded-lg hover:bg-rose-800">
            <Download size={18} />
            Export Data
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Product</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Vendor</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Price</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Stock</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Sold</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Revenue</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Rating</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr 
                  key={product.id} 
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${product.flagged ? 'bg-red-50' : ''}`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center text-2xl">
                        {product.image}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{product.name}</p>
                        {product.flagged && (
                          <span className="text-xs text-red-600 flex items-center gap-1 mt-1">
                            <Flag size={12} />
                            Flagged
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.vendor}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    ₦{product.price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-semibold ${
                      product.stock === 0 ? 'text-red-600' : 
                      product.stock < 20 ? 'text-yellow-600' : 
                      'text-gray-800'
                    }`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">{product.sold}</td>
                  <td className="px-6 py-4 text-sm font-bold text-rose-900">
                    ₦{(product.revenue / 1000).toFixed(0)}K
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold">{product.rating}</span>
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setShowProductDetail(product)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                        title="Flag"
                      >
                        <Flag size={18} />
                      </button>
                      <button
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Remove"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Detail Modal */}
      {showProductDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
              <h3 className="text-2xl font-semibold">Product Details</h3>
              <button 
                onClick={() => setShowProductDetail(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-32 h-32 bg-rose-100 rounded-xl flex items-center justify-center text-6xl flex-shrink-0">
                  {showProductDetail.image}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-1">{showProductDetail.name}</h4>
                      <div className="flex items-center gap-2">
                        <Store size={16} className="text-gray-500" />
                        <span className="text-sm text-gray-600">{showProductDetail.vendor}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(showProductDetail.status)}`}>
                      {showProductDetail.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1">
                      <Star size={18} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{showProductDetail.rating}</span>
                      <span className="text-sm text-gray-500">({showProductDetail.reviews} reviews)</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <span className="text-sm text-gray-600">{showProductDetail.category}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign size={16} className="text-blue-900" />
                    <span className="text-xs font-semibold text-blue-900">Price</span>
                  </div>
                  <p className="text-xl font-bold text-blue-900">₦{showProductDetail.price.toLocaleString()}</p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Package size={16} className="text-green-900" />
                    <span className="text-xs font-semibold text-green-900">Stock</span>
                  </div>
                  <p className="text-xl font-bold text-green-900">{showProductDetail.stock}</p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-2 mb-1">
                    <ShoppingBag size={16} className="text-purple-900" />
                    <span className="text-xs font-semibold text-purple-900">Sold</span>
                  </div>
                  <p className="text-xl font-bold text-purple-900">{showProductDetail.sold}</p>
                </div>

                <div className="p-4 bg-rose-50 rounded-lg border border-rose-200">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp size={16} className="text-rose-900" />
                    <span className="text-xs font-semibold text-rose-900">Revenue</span>
                  </div>
                  <p className="text-xl font-bold text-rose-900">₦{(showProductDetail.revenue / 1000).toFixed(0)}K</p>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="font-semibold mb-3">Product Information</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Date Added:</span>
                    <span className="font-semibold">{showProductDetail.dateAdded}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-semibold">{showProductDetail.category}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Vendor:</span>
                    <span className="font-semibold">{showProductDetail.vendor}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Flagged:</span>
                    <span className={`font-semibold ${showProductDetail.flagged ? 'text-red-600' : 'text-green-600'}`}>
                      {showProductDetail.flagged ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
                  Edit Product
                </button>
                {showProductDetail.flagged ? (
                  <button className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2">
                    <CheckCircle size={18} />
                    Unflag Product
                  </button>
                ) : (
                  <button className="flex-1 px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold flex items-center justify-center gap-2">
                    <Flag size={18} />
                    Flag Product
                  </button>
                )}
                <button className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center gap-2">
                  <Trash2 size={18} />
                  Remove Product
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AProducts;