import {
    ArrowUpRight,
    Clock,
    DollarSign,
    ShoppingCart,
    TrendingDown,
    TrendingUp,
    Users
} from 'lucide-react';

const ADashboard = () => {
  const stats = [
    { 
      label: 'Total Users', 
      value: '1,247', 
      change: '+12.5%', 
      trend: 'up',
      icon: Users,
      color: 'blue',
      subtext: '892 Customers, 355 Vendors'
    },
    { 
      label: 'Total Orders', 
      value: '3,428', 
      change: '+8.2%', 
      trend: 'up',
      icon: ShoppingCart,
      color: 'green',
      subtext: 'This month: 342'
    },
    { 
      label: 'Total Revenue', 
      value: '₦12.4M', 
      change: '+15.3%', 
      trend: 'up',
      icon: DollarSign,
      color: 'purple',
      subtext: 'Platform fees: ₦620K'
    },
    { 
      label: 'Pending Items', 
      value: '23', 
      change: '-5.1%', 
      trend: 'down',
      icon: Clock,
      color: 'orange',
      subtext: '15 Approvals, 8 Tickets'
    }
  ];

  const recentOrders = [
    { id: 'VL-2024-3428', customer: 'Amara Okafor', vendor: 'Glam Jewelry', amount: 45000, status: 'Processing', time: '5 min ago' },
    { id: 'VL-2024-3427', customer: 'Chioma Nwankwo', vendor: 'Beauty Hub', amount: 28000, status: 'Shipped', time: '12 min ago' },
    { id: 'VL-2024-3426', customer: 'Tunde Adeyemi', vendor: 'Glam Jewelry', amount: 67000, status: 'Delivered', time: '23 min ago' },
    { id: 'VL-2024-3425', customer: 'Blessing Okonkwo', vendor: 'Skin Glow', amount: 15000, status: 'Pending', time: '45 min ago' },
    { id: 'VL-2024-3424', customer: 'Ibrahim Musa', vendor: 'Elegance Store', amount: 52000, status: 'Processing', time: '1 hour ago' }
  ];

  const pendingApprovals = [
    { type: 'Vendor', name: 'Radiant Beauty Shop', action: 'New vendor application', time: '2 hours ago', priority: 'high' },
    { type: 'Product', name: 'Diamond Ring Set', action: 'Product review needed', time: '3 hours ago', priority: 'medium' },
    { type: 'Vendor', name: 'Luxury Accessories', action: 'Promotion request', time: '5 hours ago', priority: 'low' }
  ];

  const recentActivity = [
    { action: 'New vendor registered', user: 'Radiant Beauty Shop', time: '10 min ago', type: 'vendor' },
    { action: 'Support ticket resolved', user: 'Ticket #1234', time: '25 min ago', type: 'support' },
    { action: 'Product flagged', user: 'Gold Necklace', time: '1 hour ago', type: 'product' },
    { action: 'Order dispute opened', user: 'Order #VL-2024-3410', time: '2 hours ago', type: 'dispute' },
    { action: 'Vendor suspended', user: 'Fake Store Ltd', time: '3 hours ago', type: 'vendor' }
  ];

  const weeklyData = [
    { day: 'Mon', sales: 850000, orders: 45 },
    { day: 'Tue', sales: 920000, orders: 52 },
    { day: 'Wed', sales: 1100000, orders: 61 },
    { day: 'Thu', sales: 980000, orders: 48 },
    { day: 'Fri', sales: 1250000, orders: 68 },
    { day: 'Sat', sales: 1450000, orders: 82 },
    { day: 'Sun', sales: 1150000, orders: 64 }
  ];

  const topVendors = [
    { name: 'Glam Jewelry', sales: 1250000, orders: 156, rating: 4.9 },
    { name: 'Beauty Hub', sales: 980000, orders: 134, rating: 4.8 },
    { name: 'Elegance Store', sales: 850000, orders: 98, rating: 4.7 }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Processing': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Shipped': 'bg-blue-100 text-blue-800 border-blue-200',
      'Delivered': 'bg-green-100 text-green-800 border-green-200',
      'Pending': 'bg-orange-100 text-orange-800 border-orange-200',
      'Cancelled': 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'high': 'bg-red-100 text-red-800',
      'medium': 'bg-yellow-100 text-yellow-800',
      'low': 'bg-green-100 text-green-800'
    };
    return colors[priority];
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-900 border-blue-200',
      green: 'bg-green-50 text-green-900 border-green-200',
      purple: 'bg-purple-50 text-purple-900 border-purple-200',
      orange: 'bg-orange-50 text-orange-900 border-orange-200'
    };
    return colors[color];
  };

  const maxSales = Math.max(...weeklyData.map(d => d.sales));

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-serif font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your platform today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className={`bg-white rounded-xl shadow-sm border-2 p-6 hover:shadow-md transition-shadow ${getColorClasses(stat.color)}`}>
              <div className="flex items-start justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/50`}>
                  <Icon size={24} />
                </div>
                <div className="flex items-center gap-1">
                  {stat.trend === 'up' ? (
                    <TrendingUp size={16} className="text-green-600" />
                  ) : (
                    <TrendingDown size={16} className="text-red-600" />
                  )}
                  <span className={`text-sm font-semibold ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm opacity-80 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-xs opacity-70">{stat.subtext}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Weekly Sales Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Weekly Sales Overview</h3>
              <p className="text-sm text-gray-500">Revenue and order trends</p>
            </div>
            <button className="text-sm text-rose-900 font-semibold hover:underline">View Details</button>
          </div>
          
          <div className="flex items-end justify-between h-64 gap-3">
            {weeklyData.map((data, idx) => {
              const height = (data.sales / maxSales) * 100;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex items-end justify-center" style={{height: '220px'}}>
                    <div 
                      className="w-full bg-gradient-to-t from-rose-900 to-pink-500 rounded-t-lg relative group cursor-pointer hover:opacity-80 transition-opacity"
                      style={{height: `${height}%`}}
                    >
                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap">
                        <div className="font-semibold">₦{(data.sales / 1000).toFixed(0)}K</div>
                        <div className="text-gray-300">{data.orders} orders</div>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-600 mt-2 font-medium">{data.day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Pending Approvals</h3>
            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-bold">
              {pendingApprovals.length}
            </span>
          </div>
          <div className="space-y-3">
            {pendingApprovals.map((item, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-semibold ${getPriorityColor(item.priority)}`}>
                    {item.priority}
                  </span>
                  <span className="text-xs text-gray-500">{item.time}</span>
                </div>
                <p className="text-sm font-semibold text-gray-800 mb-1">{item.name}</p>
                <p className="text-xs text-gray-600">{item.action}</p>
              </div>
            ))}
            <button className="w-full py-2 text-sm text-rose-900 font-semibold hover:bg-rose-50 rounded-lg transition-colors">
              View All Approvals →
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
            <button className="text-sm text-rose-900 font-semibold hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-sm text-gray-800">{order.id}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold border ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{order.customer} • {order.vendor}</p>
                  <p className="text-xs text-gray-500 mt-1">{order.time}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-rose-900">₦{order.amount.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Vendors */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Top Vendors This Month</h3>
            <button className="text-sm text-rose-900 font-semibold hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {topVendors.map((vendor, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-900 to-rose-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{vendor.name}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-gray-600">{vendor.orders} orders</span>
                    <span className="text-xs text-gray-600">⭐ {vendor.rating}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-rose-900">₦{(vendor.sales / 1000).toFixed(0)}K</p>
                  <p className="text-xs text-gray-500">revenue</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivity.map((activity, idx) => (
            <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className={`w-2 h-2 rounded-full ${
                activity.type === 'vendor' ? 'bg-blue-500' :
                activity.type === 'support' ? 'bg-green-500' :
                activity.type === 'product' ? 'bg-yellow-500' :
                'bg-red-500'
              }`}></div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">
                  <span className="font-semibold">{activity.action}</span> - {activity.user}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
              </div>
              <ArrowUpRight size={16} className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ADashboard;