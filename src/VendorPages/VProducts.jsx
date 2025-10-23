// VProducts.jsx
import {
  AlertTriangle,
  Edit,
  Grid3x3,
  List,
  MoreVertical,
  Package,
  Plus,
  Search,
  Trash2
} from 'lucide-react';
import { useState } from 'react';

export default function VProducts() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'in-stock', 'low-stock', 'out-of-stock'
  const [showAddModal, setShowAddModal] = useState(false);

  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Vitamin C Glow Serum',
      category: 'Serums',
      price: 12500,
      stock: 45,
      status: 'in-stock',
      sales: 87,
      image: '🧴',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Hydrating Face Cleanser',
      category: 'Cleansers',
      price: 8200,
      stock: 12,
      status: 'low-stock',
      sales: 72,
      image: '🧼',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Night Repair Cream',
      category: 'Moisturizers',
      price: 15000,
      stock: 0,
      status: 'out-of-stock',
      sales: 65,
      image: '🫙',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Exfoliating Scrub',
      category: 'Exfoliants',
      price: 9800,
      stock: 28,
      status: 'in-stock',
      sales: 54,
      image: '🧴',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Rose Water Toner',
      category: 'Toners',
      price: 6500,
      stock: 8,
      status: 'low-stock',
      sales: 48,
      image: '💧',
      rating: 4.5
    },
    {
      id: 6,
      name: 'Charcoal Face Mask',
      category: 'Masks',
      price: 11000,
      stock: 35,
      status: 'in-stock',
      sales: 42,
      image: '🎭',
      rating: 4.7
    },
    {
    id: 7,
    name: 'Classic White T-Shirt',
    category: 'Clothing & Fashion',
    price: 7500,
    stock: 60,
    status: 'in-stock',
    sales: 120,
    image: '👕',
    rating: 4.8
  },
  {
    id: 8,
    name: 'Blue Denim Jeans',
    category: 'Clothing & Fashion',
    price: 18500,
    stock: 25,
    status: 'in-stock',
    sales: 95,
    image: '👖',
    rating: 4.9
  },
  {
    id: 9,
    name: 'Floral Summer Dress',
    category: 'Clothing & Fashion',
    price: 21000,
    stock: 8,
    status: 'low-stock',
    sales: 40,
    image: '👗',
    rating: 4.7
  }
  ];

  // Quick stats
  const stats = [
    {
      label: 'Total Products',
      value: products.length,
      icon: Package,
      color: 'bg-blue-500'
    },
    {
      label: 'In Stock',
      value: products.filter(p => p.status === 'in-stock').length,
      icon: Package,
      color: 'bg-green-500'
    },
    {
      label: 'Low Stock',
      value: products.filter(p => p.status === 'low-stock').length,
      icon: AlertTriangle,
      color: 'bg-yellow-500'
    },
    {
      label: 'Out of Stock',
      value: products.filter(p => p.status === 'out-of-stock').length,
      icon: AlertTriangle,
      color: 'bg-red-500'
    }
  ];

  const getStatusBadge = (status) => {
    const badges = {
      'in-stock': 'bg-green-100 text-green-800',
      'low-stock': 'bg-yellow-100 text-yellow-800',
      'out-of-stock': 'bg-red-100 text-red-800'
    };
    const labels = {
      'in-stock': 'In Stock',
      'low-stock': 'Low Stock',
      'out-of-stock': 'Out of Stock'
    };
    return { class: badges[status], label: labels[status] };
  };

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || product.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-900">My Products</h1>
              <p className="text-sm text-gray-600 mt-1">Manage your product inventory</p>
            </div>
            <button 
              onClick={() => setShowAddModal(true)}
              className="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors font-semibold flex items-center gap-2 justify-center shadow-lg"
            >
              <Plus size={20} />
              Add Product
            </button>
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon size={20} className="text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Filters and View Toggle */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            {/* Filter and View Mode */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 flex-1 sm:flex-initial"
              >
                <option value="all">All Products</option>
                <option value="in-stock">In Stock</option>
                <option value="low-stock">Low Stock</option>
                <option value="out-of-stock">Out of Stock</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
                >
                  <Grid3x3 size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Display */}
        {viewMode === 'grid' ? (
          // Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const statusBadge = getStatusBadge(product.status);
              return (
                <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden group">
                  {/* Product Image */}
                  <div className="bg-gradient-to-br from-rose-100 to-purple-100 h-48 flex items-center justify-center text-6xl relative">
                    {product.image}
                    <div className="absolute top-3 right-3">
                      <button className="bg-white p-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </div>


                  {/* Product Info */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">{product.name}</h3>
                        <p className="text-xs text-gray-500">{product.category}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <p className="text-lg font-bold text-rose-600">₦{product.price.toLocaleString()}</p>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusBadge.class}`}>
                        {statusBadge.label}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
                      <span>Stock: {product.stock}</span>
                      <span>{product.sales} sales</span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                        <Edit size={16} />
                        <span className="text-sm font-medium">Edit</span>
                      </button>
                      <button className="flex-1 bg-rose-50 hover:bg-rose-100 text-rose-600 py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                        <Trash2 size={16} />
                        <span className="text-sm font-medium">Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // List View
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Product</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Category</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Price</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Stock</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Sales</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => {
                  const statusBadge = getStatusBadge(product.status);
                  return (
                    <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-purple-100 rounded-lg flex items-center justify-center text-2xl">
                            {product.image}
                          </div>
                          <span className="font-semibold text-gray-900">{product.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600">{product.category}</td>
                      <td className="py-4 px-6 text-sm font-semibold text-gray-900">₦{product.price.toLocaleString()}</td>
                      <td className="py-4 px-6 text-sm text-gray-600">{product.stock}</td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusBadge.class}`}>
                          {statusBadge.label}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600">{product.sales}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Edit">
                            <Edit size={18} className="text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-rose-50 rounded-lg transition-colors" title="Delete">
                            <Trash2 size={18} className="text-rose-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Package size={48} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterStatus('all');
              }}
              className="text-rose-600 hover:text-rose-700 font-semibold"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}