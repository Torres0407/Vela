// VOrders.jsx
import {
    Calendar,
    CheckCircle,
    ChevronDown,
    Clock,
    Download,
    Eye,
    Mail,
    MapPin,
    Package,
    Phone,
    Search,
    Truck,
    User,
    XCircle
} from 'lucide-react';
import { useState } from 'react';

export default function VOrders() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [viewOrderDetail, setViewOrderDetail] = useState(null);

  // Sample orders data
  const orders = [
    {
      id: '#ORD-2847',
      customer: { name: 'Amaka Johnson', email: 'amaka.j@email.com', phone: '+234 901 234 5678' },
      products: [
        { name: 'Glow Serum Set', quantity: 2, price: 15500 }
      ],
      total: 31000,
      status: 'pending',
      date: '2025-10-22',
      time: '5 mins ago',
      address: '12 Lekki Phase 1, Lagos',
      payment: 'paid'
    },
    {
      id: '#ORD-2846',
      customer: { name: 'Chioma Eze', email: 'chioma.eze@email.com', phone: '+234 802 345 6789' },
      products: [
        { name: 'Hydrating Cleanser', quantity: 1, price: 8200 },
        { name: 'Night Cream', quantity: 1, price: 12500 }
      ],
      total: 20700,
      status: 'processing',
      date: '2025-10-22',
      time: '1 hour ago',
      address: '45 Ikoyi Crescent, Lagos',
      payment: 'paid'
    },
    {
      id: '#ORD-2845',
      customer: { name: 'Blessing Okafor', email: 'blessing.o@email.com', phone: '+234 703 456 7890' },
      products: [
        { name: 'Vitamin C Bundle', quantity: 1, price: 22000 }
      ],
      total: 22000,
      status: 'shipped',
      date: '2025-10-21',
      time: '3 hours ago',
      address: '78 Victoria Island, Lagos',
      payment: 'paid'
    },
    {
      id: '#ORD-2844',
      customer: { name: 'Funmi Adebayo', email: 'funmi.a@email.com', phone: '+234 604 567 8901' },
      products: [
        { name: 'Night Cream', quantity: 1, price: 12500 }
      ],
      total: 12500,
      status: 'delivered',
      date: '2025-10-20',
      time: '5 hours ago',
      address: '23 Surulere Street, Lagos',
      payment: 'paid'
    },
    {
      id: '#ORD-2843',
      customer: { name: 'Zainab Mohammed', email: 'zainab.m@email.com', phone: '+234 805 678 9012' },
      products: [
        { name: 'Face Mask Set', quantity: 3, price: 9800 }
      ],
      total: 29400,
      status: 'delivered',
      date: '2025-10-19',
      time: '1 day ago',
      address: '56 Ikeja GRA, Lagos',
      payment: 'paid'
    },
    {
      id: '#ORD-2842',
      customer: { name: 'Tunde Bakare', email: 'tunde.b@email.com', phone: '+234 706 789 0123' },
      products: [
        { name: 'Rose Water Toner', quantity: 2, price: 6500 }
      ],
      total: 13000,
      status: 'cancelled',
      date: '2025-10-19',
      time: '2 days ago',
      address: '34 Maryland, Lagos',
      payment: 'refunded'
    }
  ];

  // Order status configuration
  const statusConfig = {
    all: { label: 'All Orders', icon: Package, color: 'text-gray-600', bg: 'bg-gray-100' },
    pending: { label: 'Pending', icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-100' },
    processing: { label: 'Processing', icon: Package, color: 'text-blue-600', bg: 'bg-blue-100' },
    shipped: { label: 'Shipped', icon: Truck, color: 'text-purple-600', bg: 'bg-purple-100' },
    delivered: { label: 'Delivered', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100' },
    cancelled: { label: 'Cancelled', icon: XCircle, color: 'text-red-600', bg: 'bg-red-100' }
  };

  const tabs = ['all', 'pending', 'processing', 'shipped', 'delivered', 'cancelled'];

  // Filter orders
  const filteredOrders = orders.filter(order => {
    const matchesTab = activeTab === 'all' || order.status === activeTab;
    const matchesSearch = 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Get count for each tab
  const getTabCount = (tab) => {
    if (tab === 'all') return orders.length;
    return orders.filter(order => order.status === tab).length;
  };

  const getStatusBadge = (status) => {
    const config = statusConfig[status];
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.color} flex items-center gap-1 w-fit`}>
        <config.icon size={14} />
        {config.label}
      </span>
    );
  };

  const handleSelectOrder = (orderId) => {
    setSelectedOrders(prev => 
      prev.includes(orderId) 
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const handleSelectAll = () => {
    if (selectedOrders.length === filteredOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(filteredOrders.map(order => order.id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-900">Orders</h1>
              <p className="text-sm text-gray-600 mt-1">Manage and track customer orders</p>
            </div>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors font-semibold flex items-center gap-2 justify-center">
              <Download size={20} />
              Export Orders
            </button>
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Tabs */}
        <div className="bg-white rounded-xl shadow-sm p-2 mb-6 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {tabs.map(tab => {
              const config = statusConfig[tab];
              const count = getTabCount(tab);
              const isActive = activeTab === tab;
              
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    px-4 py-3 rounded-lg font-semibold text-sm transition-all flex items-center gap-2
                    ${isActive 
                      ? 'bg-rose-600 text-white shadow-lg' 
                      : 'text-gray-600 hover:bg-gray-100'
                    }
                  `}
                >
                  <config.icon size={18} />
                  <span>{config.label}</span>
                  <span className={`
                    px-2 py-0.5 rounded-full text-xs font-bold
                    ${isActive ? 'bg-white/20' : 'bg-gray-200'}
                  `}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by order ID or customer name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            {/* Bulk Actions */}
            {selectedOrders.length > 0 && (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">{selectedOrders.length} selected</span>
                <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-semibold">
                  Update Status
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-semibold">
                  Export Selected
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="py-4 px-6">
                    <input
                      type="checkbox"
                      checked={selectedOrders.length === filteredOrders.length && filteredOrders.length > 0}
                      onChange={handleSelectAll}
                      className="w-4 h-4 text-rose-600 rounded focus:ring-rose-500"
                    />
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Order ID</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Customer</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Products</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Total</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Date</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <input
                        type="checkbox"
                        checked={selectedOrders.includes(order.id)}
                        onChange={() => handleSelectOrder(order.id)}
                        className="w-4 h-4 text-rose-600 rounded focus:ring-rose-500"
                      />
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-mono text-sm font-semibold text-gray-900">{order.id}</span>
                      <p className="text-xs text-gray-500 mt-0.5">{order.time}</p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {order.customer.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{order.customer.name}</p>
                          <p className="text-xs text-gray-500">{order.customer.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-900">
                        {order.products.map((product, idx) => (
                          <div key={idx} className="mb-1">
                            <span className="font-medium">{product.name}</span>
                            <span className="text-gray-500"> x{product.quantity}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm font-bold text-gray-900">₦{order.total.toLocaleString()}</span>
                      <p className="text-xs text-green-600 mt-0.5">{order.payment}</p>
                    </td>
                    <td className="py-4 px-6">
                      {getStatusBadge(order.status)}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Calendar size={14} />
                        <span>{order.date}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setViewOrderDetail(order)}
                          className="p-2 hover:bg-blue-50 rounded-lg transition-colors group"
                          title="View Details"
                        >
                          <Eye size={18} className="text-blue-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <ChevronDown size={18} className="text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredOrders.length === 0 && (
            <div className="p-12 text-center">
              <Package size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>

        {/* Order Detail Modal */}
        {viewOrderDetail && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{viewOrderDetail.id}</h2>
                  <p className="text-sm text-gray-500 mt-1">{viewOrderDetail.date} • {viewOrderDetail.time}</p>
                </div>
                <button 
                  onClick={() => setViewOrderDetail(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <XCircle size={24} className="text-gray-500" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Status */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Order Status</label>
                  {getStatusBadge(viewOrderDetail.status)}
                </div>

                {/* Customer Info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Customer Information</h3>
                  <div className="space-y-3 bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <User size={18} className="text-gray-500" />
                      <span className="text-sm text-gray-900">{viewOrderDetail.customer.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-gray-500" />
                      <span className="text-sm text-gray-900">{viewOrderDetail.customer.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={18} className="text-gray-500" />
                      <span className="text-sm text-gray-900">{viewOrderDetail.customer.phone}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-gray-500 mt-0.5" />
                      <span className="text-sm text-gray-900">{viewOrderDetail.address}</span>
                    </div>
                  </div>
                </div>

                {/* Products */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Order Items</h3>
                  <div className="space-y-3">
                    {viewOrderDetail.products.map((product, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                        <div>
                          <p className="font-semibold text-gray-900">{product.name}</p>
                          <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
                        </div>
                        <span className="font-bold text-gray-900">₦{(product.price * product.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total Amount</span>
                    <span className="text-2xl font-bold text-rose-600">₦{viewOrderDetail.total.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-green-600 mt-1 text-right">Payment: {viewOrderDetail.payment}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Update Status
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold">
                    Print Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}