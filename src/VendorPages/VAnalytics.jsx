// VAnalytics.jsx
import {
    Activity,
    ArrowDownRight,
    ArrowUpRight,
    DollarSign,
    Download,
    Eye,
    ShoppingCart,
    Target,
    TrendingUp
} from 'lucide-react';
import { useState } from 'react';
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Line,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

export default function VAnalytics() {
  const [timeRange, setTimeRange] = useState('30days');
  const [compareMode, setCompareMode] = useState(false);

  // Key metrics
  const metrics = [
    {
      label: 'Total Sales',
      value: '₦2,487,500',
      change: '+15.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-green-500',
      previous: '₦2,156,000'
    },
    {
      label: 'Orders',
      value: '142',
      change: '+8.2%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'bg-blue-500',
      previous: '131'
    },
    {
      label: 'Conversion Rate',
      value: '3.8%',
      change: '+0.5%',
      trend: 'up',
      icon: Target,
      color: 'bg-purple-500',
      previous: '3.3%'
    },
    {
      label: 'Avg Order Value',
      value: '₦17,517',
      change: '+6.5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-rose-500',
      previous: '₦16,458'
    },
    {
      label: 'Store Visitors',
      value: '3,742',
      change: '+12.8%',
      trend: 'up',
      icon: Eye,
      color: 'bg-yellow-500',
      previous: '3,318'
    },
    {
      label: 'Product Views',
      value: '12,456',
      change: '+18.2%',
      trend: 'up',
      icon: Activity,
      color: 'bg-indigo-500',
      previous: '10,538'
    }
  ];

  // Sales over time
  const salesData = [
    { date: 'Oct 1', sales: 65000, orders: 12, visitors: 420 },
    { date: 'Oct 5', sales: 78000, orders: 15, visitors: 485 },
    { date: 'Oct 10', sales: 92000, orders: 18, visitors: 520 },
    { date: 'Oct 15', sales: 85000, orders: 16, visitors: 495 },
    { date: 'Oct 20', sales: 112000, orders: 21, visitors: 580 },
    { date: 'Oct 25', sales: 98000, orders: 19, visitors: 545 },
    { date: 'Oct 30', sales: 125000, orders: 24, visitors: 620 }
  ];

  // Product performance
  const productPerformance = [
    {
      name: 'Vitamin C Serum',
      sales: 87,
      revenue: 1087500,
      views: 1240,
      conversion: 7.0,
      category: 'Skincare'
    },
    {
      name: 'Night Cream',
      sales: 65,
      revenue: 975000,
      views: 1100,
      conversion: 5.9,
      category: 'Skincare'
    },
    {
      name: 'Rose Gold Necklace',
      sales: 54,
      revenue: 810000,
      views: 980,
      conversion: 5.5,
      category: 'Jewelry'
    },
    {
      name: 'Cotton T-Shirt',
      sales: 72,
      revenue: 432000,
      views: 1350,
      conversion: 5.3,
      category: 'Clothing'
    },
    {
      name: 'Hydrating Cleanser',
      sales: 48,
      revenue: 393600,
      views: 890,
      conversion: 5.4,
      category: 'Skincare'
    }
  ];

  // Category breakdown
  const categoryData = [
    { name: 'Skincare', value: 45, amount: 1950000 },
    { name: 'Jewelry', value: 30, amount: 1300000 },
    { name: 'Clothing', value: 25, amount: 1087500 }
  ];

  const COLORS = ['#f43f5e', '#3b82f6', '#8b5cf6'];

  // Customer segments
  const customerData = [
    { segment: 'New Customers', count: 45, percentage: 32 },
    { segment: 'Returning', count: 68, percentage: 48 },
    { segment: 'VIP', count: 29, percentage: 20 }
  ];

  // Traffic sources
  const trafficData = [
    { source: 'Direct', visits: 1248, percentage: 33 },
    { source: 'Social Media', visits: 1498, percentage: 40 },
    { source: 'Search', visits: 749, percentage: 20 },
    { source: 'Referral', visits: 247, percentage: 7 }
  ];

  // Top customers
  const topCustomers = [
    { name: 'Amaka Johnson', orders: 12, spent: 156000, lastOrder: '2 days ago' },
    { name: 'Chioma Eze', orders: 9, spent: 134000, lastOrder: '5 days ago' },
    { name: 'Blessing Okafor', orders: 8, spent: 128000, lastOrder: '1 week ago' },
    { name: 'Funmi Adebayo', orders: 7, spent: 98000, lastOrder: '3 days ago' },
    { name: 'Zainab Mohammed', orders: 6, spent: 87000, lastOrder: '1 day ago' }
  ];

  // Peak hours
  const peakHoursData = [
    { hour: '6AM', orders: 2 },
    { hour: '9AM', orders: 8 },
    { hour: '12PM', orders: 15 },
    { hour: '3PM', orders: 22 },
    { hour: '6PM', orders: 28 },
    { hour: '9PM', orders: 18 },
    { hour: '12AM', orders: 5 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-900">Analytics & Reports</h1>
              <p className="text-sm text-gray-600 mt-1">Track performance and gain insights</p>
            </div>
            <div className="flex gap-3">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
                <option value="year">This Year</option>
              </select>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors font-semibold flex items-center gap-2">
                <Download size={20} />
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`${metric.color} p-3 rounded-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <span className={`flex items-center gap-1 text-sm font-semibold ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                    {metric.change}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</p>
                <p className="text-xs text-gray-500">Previous: {metric.previous}</p>
              </div>
            );
          })}
        </div>

        {/* Sales Trend Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Sales Trend</h2>
              <p className="text-sm text-gray-600">Revenue and orders over time</p>
            </div>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-rose-600 rounded-full"></div>
                <span>Sales</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span>Orders</span>
              </label>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#888" />
              <YAxis yAxisId="left" stroke="#888" />
              <YAxis yAxisId="right" orientation="right" stroke="#888" />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="sales"
                stroke="#f43f5e"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorSales)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="orders"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: '#3b82f6', r: 4 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Product Performance & Category Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Product Performance */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Top Performing Products</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Product</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Sales</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Revenue</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Views</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Conv. Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {productPerformance.map((product, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-semibold text-gray-900">{product.name}</p>
                          <p className="text-xs text-gray-500">{product.category}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900">{product.sales}</td>
                      <td className="py-4 px-4 text-sm font-semibold text-gray-900">
                        ₦{product.revenue.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">{product.views}</td>
                      <td className="py-4 px-4">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                          {product.conversion}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Sales by Category</h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-6 space-y-3">
              {categoryData.map((cat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm text-gray-700">{cat.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">₦{cat.amount.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">{cat.value}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer & Traffic Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Customer Segments */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Customer Segments</h2>
            <div className="space-y-4">
              {customerData.map((seg, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">{seg.segment}</span>
                    <span className="text-sm text-gray-600">{seg.count} customers ({seg.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-rose-600 h-3 rounded-full transition-all"
                      style={{ width: `${seg.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Traffic Sources</h2>
            <div className="space-y-4">
              {trafficData.map((traffic, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">{traffic.source}</span>
                    <span className="text-sm text-gray-600">{traffic.visits} visits ({traffic.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all"
                      style={{ width: `${traffic.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Customers & Peak Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Top Customers */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Top Customers</h2>
            <div className="space-y-4">
              {topCustomers.map((customer, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{customer.name}</p>
                      <p className="text-xs text-gray-500">{customer.orders} orders • Last: {customer.lastOrder}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-rose-600">₦{customer.spent.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Peak Hours */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Peak Order Hours</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={peakHoursData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="hour" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Bar dataKey="orders" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}