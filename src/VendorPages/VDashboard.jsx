import {
  BarChart3,
  DollarSign,
  Eye,
  MessageSquare,
  Package,
  Plus,
  Settings,
  ShoppingBag,
  Star
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function VDashboard() {
  const [timeRange, setTimeRange] = useState('7days');
  const navigate = useNavigate();

  // Sample data
  const stats = [
    { 
      label: 'Total Revenue', 
      value: '₦487,500', 
      change: '+12.5%', 
      icon: DollarSign, 
      color: 'bg-green-500',
      trend: 'up'
    },
    { 
      label: 'Orders', 
      value: '142', 
      change: '+8.2%', 
      icon: ShoppingBag, 
      color: 'bg-blue-500',
      trend: 'up'
    },
    { 
      label: 'Products', 
      value: '38', 
      change: '+3', 
      icon: Package, 
      color: 'bg-purple-500',
      trend: 'up'
    },
    { 
      label: 'Store Visitors', 
      value: '2,847', 
      change: '+23.1%', 
      icon: Eye, 
      color: 'bg-rose-500',
      trend: 'up'
    }
  ];

  const salesData = [
    { date: 'Mon', sales: 12500 },
    { date: 'Tue', sales: 19800 },
    { date: 'Wed', sales: 15200 },
    { date: 'Thu', sales: 28900 },
    { date: 'Fri', sales: 35600 },
    { date: 'Sat', sales: 42300 },
    { date: 'Sun', sales: 38200 }
  ];

 const recentOrders = [
  { id: '#ORD-2849', customer: 'Tope Adeyemi', product: 'Denim Jacket', amount: '₦30,000', status: 'processing', time: '2 mins ago' },
  { id: '#ORD-2848', customer: 'Ngozi Uche', product: 'Gold Necklace', amount: '₦25,500', status: 'pending', time: '10 mins ago' },
  { id: '#ORD-2847', customer: 'Amaka Johnson', product: 'Glow Serum Set', amount: '₦15,500', status: 'pending', time: '30 mins ago' },
  { id: '#ORD-2846', customer: 'Chioma Eze', product: 'Cotton T-Shirt', amount: '₦8,200', status: 'delivered', time: '1 hour ago' },
  { id: '#ORD-2845', customer: 'Blessing Okafor', product: 'Night Repair Cream', amount: '₦22,000', status: 'shipped', time: '3 hours ago' }
];


 const topProducts = [
  { name: 'Gold Necklace', sales: 58, revenue: '₦145,000', rating: 4.9 },
  { name: 'Vitamin C Glow Serum', sales: 87, revenue: '₦108,750', rating: 4.8 },
  { name: 'Denim Jacket', sales: 62, revenue: '₦186,000', rating: 4.7 },
  { name: 'Cotton T-Shirt', sales: 95, revenue: '₦142,500', rating: 4.6 },
  { name: 'Hydrating Face Cleanser', sales: 72, revenue: '₦82,800', rating: 4.5 },
];


  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const quickActions = [
    { label: 'Add Product', icon: Plus, 
      id: '/vendor/products', color: 'bg-rose-500 hover:bg-rose-600' },
    { label: 'View Orders', icon: ShoppingBag, id: '/vendor/orders', color: 'bg-blue-500 hover:bg-blue-600' },
    { label: 'Messages', icon: MessageSquare, id: '/vendor/messages', color: 'bg-purple-500 hover:bg-purple-600' },
    { label: 'Analytics', icon: BarChart3,id: '/vendor/analytics',  color: 'bg-green-500 hover:bg-green-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-600 mt-1">Welcome back, Beauty Store! 👋</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <Settings size={20} />
              <span className="hidden sm:inline">Settings</span>
            </button>
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
                    <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change} from last period
                    </span>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Summary */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
  {[
    { category: 'Clothing', sales: '₦220,000', products: 14, color: 'bg-blue-100 text-blue-700' },
    { category: 'Jewelry', sales: '₦180,000', products: 9, color: 'bg-yellow-100 text-yellow-700' },
    { category: 'Skincare', sales: '₦120,000', products: 15, color: 'bg-pink-100 text-pink-700' }
  ].map((cat, i) => (
    <div key={i} className={`rounded-xl p-6 ${cat.color} shadow-sm`}>
      <h3 className="font-semibold text-lg">{cat.category}</h3>
      <p className="text-sm mt-1">Sales: {cat.sales}</p>
      <p className="text-sm">Products: {cat.products}</p>
    </div>
  ))}
</div>


        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id || index}
                 onClick={() => navigate(action.id)}
                className={`${action.color} text-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 flex flex-col items-center gap-2`}
              >
                <Icon size={28} />
                <span className="font-semibold text-sm">{action.label}</span>
              </button>
            );
          })}
        </div>

        {/* Sales Chart & Top Products */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Sales Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Sales Overview</h2>
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  formatter={(value) => [`₦${value.toLocaleString()}`, 'Sales']}
                />
                <Line type="monotone" dataKey="sales" stroke="#f43f5e" strokeWidth={3} dot={{ fill: '#f43f5e', r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Top Products</h2>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
                  <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center font-bold text-rose-600">
                    #{index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm truncate">{product.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-600">{product.sales} sales</span>
                      <span className="text-xs text-gray-400">•</span>
                      <div className="flex items-center gap-1">
                        <Star size={12} className="text-yellow-500 fill-current" />
                        <span className="text-xs text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-rose-600 mt-1">{product.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
            <button className="text-rose-600 hover:text-rose-700 font-semibold text-sm">
              View All →
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Order ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Customer</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Product</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">
                      <span className="font-mono text-sm text-gray-900">{order.id}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-gray-900">{order.customer}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-gray-600">{order.product}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm font-semibold text-gray-900">{order.amount}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-gray-500">{order.time}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}