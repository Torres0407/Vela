import {
    Ban,
    Calendar,
    CheckCircle,
    DollarSign,
    Download,
    Edit2,
    Eye,
    Filter,
    Mail,
    Phone,
    Search,
    ShoppingBag,
    Trash2,
    XCircle
} from 'lucide-react';
import { useState } from 'react';

const AUsers = () => {
  const [activeTab, setActiveTab] = useState('customers');
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserDetail, setShowUserDetail] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const customers = [
    {
      id: 1,
      name: 'Amara Okafor',
      email: 'amara.okafor@example.com',
      phone: '+234 803 456 7890',
      joined: 'Jan 15, 2024',
      orders: 24,
      totalSpent: 486000,
      status: 'Active',
      lastActive: '2 hours ago',
      avatar: 'AO'
    },
    {
      id: 2,
      name: 'Chioma Nwankwo',
      email: 'chioma.n@example.com',
      phone: '+234 805 123 4567',
      joined: 'Mar 22, 2024',
      orders: 18,
      totalSpent: 342000,
      status: 'Active',
      lastActive: '1 day ago',
      avatar: 'CN'
    },
    {
      id: 3,
      name: 'Tunde Adeyemi',
      email: 'tunde.a@example.com',
      phone: '+234 806 789 0123',
      joined: 'Dec 10, 2023',
      orders: 45,
      totalSpent: 1250000,
      status: 'VIP',
      lastActive: '5 min ago',
      avatar: 'TA'
    },
    {
      id: 4,
      name: 'Blessing Okonkwo',
      email: 'blessing.o@example.com',
      phone: '+234 807 234 5678',
      joined: 'Aug 5, 2024',
      orders: 8,
      totalSpent: 125000,
      status: 'Active',
      lastActive: '3 days ago',
      avatar: 'BO'
    },
    {
      id: 5,
      name: 'Ibrahim Musa',
      email: 'ibrahim.m@example.com',
      phone: '+234 808 345 6789',
      joined: 'Feb 28, 2024',
      orders: 0,
      totalSpent: 0,
      status: 'Inactive',
      lastActive: '2 weeks ago',
      avatar: 'IM'
    }
  ];

  const vendors = [
    {
      id: 1,
      name: 'Glam Jewelry',
      email: 'contact@glamjewelry.com',
      phone: '+234 901 234 5678',
      joined: 'Nov 20, 2023',
      products: 156,
      revenue: 3450000,
      status: 'Approved',
      rating: 4.9,
      orders: 342,
      avatar: 'GJ'
    },
    {
      id: 2,
      name: 'Beauty Hub',
      email: 'info@beautyhub.ng',
      phone: '+234 902 345 6789',
      joined: 'Jan 8, 2024',
      products: 98,
      revenue: 2180000,
      status: 'Approved',
      rating: 4.8,
      orders: 267,
      avatar: 'BH'
    },
    {
      id: 3,
      name: 'Radiant Beauty Shop',
      email: 'hello@radiant.ng',
      phone: '+234 903 456 7890',
      joined: 'Oct 27, 2025',
      products: 0,
      revenue: 0,
      status: 'Pending',
      rating: 0,
      orders: 0,
      avatar: 'RB'
    },
    {
      id: 4,
      name: 'Elegance Store',
      email: 'support@elegance.ng',
      phone: '+234 904 567 8901',
      joined: 'Apr 12, 2024',
      products: 124,
      revenue: 1890000,
      status: 'Approved',
      rating: 4.7,
      orders: 198,
      avatar: 'ES'
    },
    {
      id: 5,
      name: 'Fake Store Ltd',
      email: 'fake@store.com',
      phone: '+234 905 678 9012',
      joined: 'Sep 15, 2024',
      products: 23,
      revenue: 45000,
      status: 'Suspended',
      rating: 2.1,
      orders: 12,
      avatar: 'FS'
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Active': 'bg-green-100 text-green-800 border-green-200',
      'VIP': 'bg-purple-100 text-purple-800 border-purple-200',
      'Inactive': 'bg-gray-100 text-gray-800 border-gray-200',
      'Approved': 'bg-green-100 text-green-800 border-green-200',
      'Pending': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Suspended': 'bg-red-100 text-red-800 border-red-200',
      'Rejected': 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || customer.status.toLowerCase() === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vendor.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || vendor.status.toLowerCase() === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-serif font-bold text-gray-800">User Management</h1>
        <p className="text-gray-600 mt-1">Manage customers and vendors across your platform</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm mb-6">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => {
              setActiveTab('customers');
              setSelectedFilter('all');
              setSearchQuery('');
            }}
            className={`flex-1 px-6 py-4 font-semibold transition-colors ${
              activeTab === 'customers'
                ? 'text-rose-900 border-b-2 border-rose-900'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Customers ({customers.length})
          </button>
          <button
            onClick={() => {
              setActiveTab('vendors');
              setSelectedFilter('all');
              setSearchQuery('');
            }}
            className={`flex-1 px-6 py-4 font-semibold transition-colors ${
              activeTab === 'vendors'
                ? 'text-rose-900 border-b-2 border-rose-900'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Vendors ({vendors.length})
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
          >
            <option value="all">All Status</option>
            {activeTab === 'customers' ? (
              <>
                <option value="active">Active</option>
                <option value="vip">VIP</option>
                <option value="inactive">Inactive</option>
              </>
            ) : (
              <>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="suspended">Suspended</option>
              </>
            )}
          </select>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter size={20} />
            More Filters
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-rose-900 text-white rounded-lg hover:bg-rose-800">
            <Download size={20} />
            Export
          </button>
        </div>
      </div>

      {/* Customers Table */}
      {activeTab === 'customers' && (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Customer</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Contact</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Joined</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Orders</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Total Spent</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-rose-900 to-rose-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {customer.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{customer.name}</p>
                          <p className="text-xs text-gray-500">{customer.lastActive}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-800">{customer.email}</p>
                        <p className="text-xs text-gray-500">{customer.phone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{customer.joined}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-800">{customer.orders}</td>
                    <td className="px-6 py-4 text-sm font-bold text-rose-900">
                      ₦{customer.totalSpent.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(customer.status)}`}>
                        {customer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setShowUserDetail(customer)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
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
                          title="Deactivate"
                        >
                          <Ban size={18} />
                        </button>
                        <button
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
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
      )}

      {/* Vendors Table */}
      {activeTab === 'vendors' && (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Vendor</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Contact</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Joined</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Products</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Orders</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Revenue</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Rating</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredVendors.map((vendor) => (
                  <tr key={vendor.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {vendor.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{vendor.name}</p>
                          {vendor.rating > 0 && (
                            <p className="text-xs text-gray-500">⭐ {vendor.rating}</p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-800">{vendor.email}</p>
                        <p className="text-xs text-gray-500">{vendor.phone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{vendor.joined}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-800">{vendor.products}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-800">{vendor.orders}</td>
                    <td className="px-6 py-4 text-sm font-bold text-rose-900">
                      ₦{(vendor.revenue / 1000).toFixed(0)}K
                    </td>
                    <td className="px-6 py-4">
                      {vendor.rating > 0 ? (
                        <span className="text-sm font-semibold text-gray-800">{vendor.rating}/5.0</span>
                      ) : (
                        <span className="text-sm text-gray-400">N/A</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(vendor.status)}`}>
                        {vendor.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        {vendor.status === 'Pending' && (
                          <>
                            <button
                              className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                              title="Approve"
                            >
                              <CheckCircle size={18} />
                            </button>
                            <button
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Reject"
                            >
                              <XCircle size={18} />
                            </button>
                          </>
                        )}
                        <button
                          onClick={() => setShowUserDetail(vendor)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Shop"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                          title="Suspend"
                        >
                          <Ban size={18} />
                        </button>
                        <button
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
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
      )}

      {/* User Detail Modal */}
      {showUserDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
              <h3 className="text-2xl font-semibold">
                {activeTab === 'customers' ? 'Customer' : 'Vendor'} Details
              </h3>
              <button 
                onClick={() => setShowUserDetail(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-900 to-rose-700 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {showUserDetail.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800">{showUserDetail.name}</h4>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mt-2 ${getStatusColor(showUserDetail.status)}`}>
                    {showUserDetail.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail size={16} className="text-gray-600" />
                    <span className="text-sm font-semibold text-gray-600">Email</span>
                  </div>
                  <p className="text-sm text-gray-800">{showUserDetail.email}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone size={16} className="text-gray-600" />
                    <span className="text-sm font-semibold text-gray-600">Phone</span>
                  </div>
                  <p className="text-sm text-gray-800">{showUserDetail.phone}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={16} className="text-gray-600" />
                    <span className="text-sm font-semibold text-gray-600">Joined</span>
                  </div>
                  <p className="text-sm text-gray-800">{showUserDetail.joined}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <ShoppingBag size={16} className="text-gray-600" />
                    <span className="text-sm font-semibold text-gray-600">
                      {activeTab === 'customers' ? 'Orders' : 'Products'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-800">
                    {activeTab === 'customers' ? showUserDetail.orders : showUserDetail.products}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign size={16} className="text-rose-900" />
                  <span className="text-sm font-semibold text-gray-600">
                    {activeTab === 'customers' ? 'Total Spent' : 'Total Revenue'}
                  </span>
                </div>
                <p className="text-2xl font-bold text-rose-900">
                  ₦{activeTab === 'customers' 
                    ? showUserDetail.totalSpent.toLocaleString() 
                    : showUserDetail.revenue.toLocaleString()}
                </p>
              </div>

              {activeTab === 'vendors' && showUserDetail.status === 'Pending' && (
                <div className="flex gap-3">
                  <button className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                    Approve Vendor
                  </button>
                  <button className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold">
                    Reject Application
                  </button>
                </div>
              )}

              {showUserDetail.status !== 'Pending' && (
                <div className="flex gap-3">
                  <button className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
                    Edit Details
                  </button>
                  <button className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                    {showUserDetail.status === 'Suspended' ? 'Reactivate' : 'Suspend'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AUsers;