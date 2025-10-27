import {
    Award,
    Ban, CheckCircle,
    DollarSign,
    Eye,
    Flag, MessageSquare,
    Package,
    Search,
    ShoppingCart, Star,
    Store,
    TrendingUp,
    XCircle
} from 'lucide-react';
import { useState } from 'react';

const AVendors = () => {
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const vendors = [
    {
      id: 1,
      name: 'Glam Jewelry',
      owner: 'Ada Eze',
      email: 'contact@glamjewelry.com',
      phone: '+234 901 234 5678',
      joined: 'Nov 20, 2023',
      products: 156,
      activeProducts: 142,
      revenue: 3450000,
      orders: 342,
      completedOrders: 328,
      rating: 4.9,
      reviews: 245,
      status: 'Approved',
      commission: 172500,
      recentProducts: ['Gold Necklace', 'Diamond Ring', 'Silver Bracelet'],
      performance: 98,
      responseTime: '< 2 hours'
    },
    {
      id: 2,
      name: 'Beauty Hub',
      owner: 'Chidinma Obi',
      email: 'info@beautyhub.ng',
      phone: '+234 902 345 6789',
      joined: 'Jan 8, 2024',
      products: 98,
      activeProducts: 87,
      revenue: 2180000,
      orders: 267,
      completedOrders: 251,
      rating: 4.8,
      reviews: 189,
      status: 'Approved',
      commission: 109000,
      recentProducts: ['Face Serum', 'Night Cream', 'Lip Balm'],
      performance: 95,
      responseTime: '< 3 hours'
    },
    {
      id: 3,
      name: 'Radiant Beauty Shop',
      owner: 'Blessing Okoro',
      email: 'hello@radiant.ng',
      phone: '+234 903 456 7890',
      joined: 'Oct 27, 2025',
      products: 0,
      activeProducts: 0,
      revenue: 0,
      orders: 0,
      completedOrders: 0,
      rating: 0,
      reviews: 0,
      status: 'Pending',
      commission: 0,
      recentProducts: [],
      performance: 0,
      responseTime: 'N/A'
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Approved': 'bg-green-100 text-green-800 border-green-200',
      'Pending': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Suspended': 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[status];
  };

  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vendor.owner.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-serif font-bold text-gray-800">Vendor Management</h1>
        <p className="text-gray-600 mt-1">Detailed vendor shop management and oversight</p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search vendors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredVendors.map((vendor) => (
          <div key={vendor.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                    {vendor.name.substring(0, 2)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{vendor.name}</h3>
                    <p className="text-sm text-gray-500">{vendor.owner}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(vendor.status)}`}>
                  {vendor.status}
                </span>
              </div>

              {vendor.rating > 0 && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold text-gray-800">{vendor.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({vendor.reviews} reviews)</span>
                  {vendor.performance > 90 && (
                    <Award size={16} className="text-purple-600 ml-auto" title="Top Performer" />
                  )}
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Package size={14} className="text-blue-900" />
                    <span className="text-xs font-semibold text-blue-900">Products</span>
                  </div>
                  <p className="text-lg font-bold text-blue-900">{vendor.products}</p>
                  {vendor.activeProducts > 0 && (
                    <p className="text-xs text-gray-600">{vendor.activeProducts} active</p>
                  )}
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <ShoppingCart size={14} className="text-green-900" />
                    <span className="text-xs font-semibold text-green-900">Orders</span>
                  </div>
                  <p className="text-lg font-bold text-green-900">{vendor.orders}</p>
                  {vendor.completedOrders > 0 && (
                    <p className="text-xs text-gray-600">{vendor.completedOrders} completed</p>
                  )}
                </div>
              </div>

              <div className="p-3 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Total Revenue</p>
                    <p className="text-xl font-bold text-rose-900">₦{(vendor.revenue / 1000).toFixed(0)}K</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600 mb-1">Commission</p>
                    <p className="text-sm font-bold text-rose-900">₦{(vendor.commission / 1000).toFixed(0)}K</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedVendor(vendor)}
                className="w-full py-2 bg-rose-900 text-white rounded-lg hover:bg-rose-800 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <Eye size={18} />
                View Shop Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Vendor Detail Modal */}
      {selectedVendor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {selectedVendor.name.substring(0, 2)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedVendor.name}</h3>
                  <p className="text-sm text-gray-500">Owner: {selectedVendor.owner}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedVendor(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              {/* Status and Actions */}
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(selectedVendor.status)}`}>
                  {selectedVendor.status}
                </span>
                {selectedVendor.performance > 90 && (
                  <span className="px-4 py-2 rounded-full text-sm font-semibold bg-purple-100 text-purple-800 border border-purple-200 flex items-center gap-2">
                    <Award size={16} />
                    Top Performer
                  </span>
                )}
                <div className="ml-auto flex gap-2">
                  {selectedVendor.status === 'Pending' && (
                    <>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center gap-2">
                        <CheckCircle size={18} />
                        Approve
                      </button>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center gap-2">
                        <XCircle size={18} />
                        Reject
                      </button>
                    </>
                  )}
                  {selectedVendor.status === 'Approved' && (
                    <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold flex items-center gap-2">
                      <Ban size={18} />
                      Suspend
                    </button>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-600 mb-1">Email</p>
                  <p className="text-sm text-gray-800">{selectedVendor.email}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-600 mb-1">Phone</p>
                  <p className="text-sm text-gray-800">{selectedVendor.phone}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-600 mb-1">Joined</p>
                  <p className="text-sm text-gray-800">{selectedVendor.joined}</p>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-4">Performance Metrics</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Package size={18} className="text-blue-900" />
                      <span className="text-sm font-semibold text-blue-900">Products</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-900">{selectedVendor.products}</p>
                    <p className="text-xs text-gray-600 mt-1">{selectedVendor.activeProducts} active</p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <ShoppingCart size={18} className="text-green-900" />
                      <span className="text-sm font-semibold text-green-900">Orders</span>
                    </div>
                    <p className="text-2xl font-bold text-green-900">{selectedVendor.orders}</p>
                    <p className="text-xs text-gray-600 mt-1">{selectedVendor.completedOrders} completed</p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Star size={18} className="text-purple-900" />
                      <span className="text-sm font-semibold text-purple-900">Rating</span>
                    </div>
                    <p className="text-2xl font-bold text-purple-900">{selectedVendor.rating || 'N/A'}</p>
                    <p className="text-xs text-gray-600 mt-1">{selectedVendor.reviews} reviews</p>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp size={18} className="text-orange-900" />
                      <span className="text-sm font-semibold text-orange-900">Performance</span>
                    </div>
                    <p className="text-2xl font-bold text-orange-900">{selectedVendor.performance}%</p>
                    <p className="text-xs text-gray-600 mt-1">{selectedVendor.responseTime}</p>
                  </div>
                </div>
              </div>

              {/* Revenue & Commission */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-4">Financial Overview</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg border border-rose-200">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign size={20} className="text-rose-900" />
                      <span className="text-sm font-semibold text-gray-600">Total Revenue</span>
                    </div>
                    <p className="text-3xl font-bold text-rose-900">₦{selectedVendor.revenue.toLocaleString()}</p>
                    <p className="text-sm text-gray-600 mt-2">Generated from {selectedVendor.completedOrders} completed orders</p>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign size={20} className="text-green-900" />
                      <span className="text-sm font-semibold text-gray-600">Platform Commission (5%)</span>
                    </div>
                    <p className="text-3xl font-bold text-green-900">₦{selectedVendor.commission.toLocaleString()}</p>
                    <p className="text-sm text-gray-600 mt-2">Your earnings from this vendor</p>
                  </div>
                </div>
              </div>

              {/* Recent Products */}
              {selectedVendor.recentProducts.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-4">Recent Products</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {selectedVendor.recentProducts.map((product, idx) => (
                      <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="font-medium text-gray-800">{product}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button className="text-xs text-blue-600 hover:underline">View</button>
                          <button className="text-xs text-red-600 hover:underline">Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recent Reviews */}
              {selectedVendor.reviews > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-4">Recent Reviews</h4>
                  <div className="space-y-3">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-rose-900 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            AO
                          </div>
                          <span className="font-semibold text-sm">Amara Okafor</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} size={14} className="text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700">Excellent products and fast delivery! Highly recommended.</p>
                      <p className="text-xs text-gray-500 mt-2">2 days ago</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-rose-900 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            CN
                          </div>
                          <span className="font-semibold text-sm">Chioma Nwankwo</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4].map((star) => (
                            <Star key={star} size={14} className="text-yellow-500 fill-yellow-500" />
                          ))}
                          <Star size={14} className="text-gray-300" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700">Good quality products. Delivery took a bit longer than expected.</p>
                      <p className="text-xs text-gray-500 mt-2">5 days ago</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Admin Actions */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-lg mb-4">Admin Actions</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <button className="px-4 py-3 border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-semibold flex items-center justify-center gap-2">
                    <Eye size={18} />
                    View All Products
                  </button>
                  <button className="px-4 py-3 border border-green-300 text-green-700 rounded-lg hover:bg-green-50 transition-colors font-semibold flex items-center justify-center gap-2">
                    <CheckCircle size={18} />
                    Approve Promotion
                  </button>
                  <button className="px-4 py-3 border border-orange-300 text-orange-700 rounded-lg hover:bg-orange-50 transition-colors font-semibold flex items-center justify-center gap-2">
                    <MessageSquare size={18} />
                    Contact Vendor
                  </button>
                  <button className="px-4 py-3 border border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors font-semibold flex items-center justify-center gap-2">
                    <Store size={18} />
                    Visit Shop
                  </button>
                  <button className="px-4 py-3 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors font-semibold flex items-center justify-center gap-2">
                    <Flag size={18} />
                    Flag Content
                  </button>
                  <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold flex items-center justify-center gap-2">
                    <Ban size={18} />
                    Suspend Vendor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AVendors;