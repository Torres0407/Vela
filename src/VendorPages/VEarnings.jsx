// VEarnings.jsx
import {
    ArrowDownRight,
    ArrowUpRight,
    CheckCircle,
    Clock,
    CreditCard,
    DollarSign,
    Download,
    Wallet,
    XCircle
} from 'lucide-react';
import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function VEarnings() {
  const [timeRange, setTimeRange] = useState('30days');
  const [filterType, setFilterType] = useState('all'); // all, credit, debit, pending
  const [showPayoutModal, setShowPayoutModal] = useState(false);
  const [payoutAmount, setPayoutAmount] = useState('');

  // Earnings stats
  const stats = [
    {
      label: 'Total Earnings',
      value: '₦2,487,500',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      label: 'Available Balance',
      value: '₦487,500',
      change: '+8.2%',
      trend: 'up',
      icon: Wallet,
      color: 'bg-blue-500'
    },
    {
      label: 'Pending Clearance',
      value: '₦125,000',
      change: '5 orders',
      trend: 'neutral',
      icon: Clock,
      color: 'bg-yellow-500'
    },
    {
      label: 'Total Withdrawn',
      value: '₦1,875,000',
      change: '12 payouts',
      trend: 'neutral',
      icon: CreditCard,
      color: 'bg-purple-500'
    }
  ];

  // Revenue chart data
  const revenueData = [
    { date: 'Week 1', revenue: 145000, orders: 23 },
    { date: 'Week 2', revenue: 198000, orders: 31 },
    { date: 'Week 3', revenue: 167000, orders: 27 },
    { date: 'Week 4', revenue: 223000, orders: 35 }
  ];

  // Product earnings breakdown
  const productEarnings = [
    { name: 'Vitamin C Serum', value: 35, amount: 856250 },
    { name: 'Night Cream', value: 25, amount: 612500 },
    { name: 'Cleanser', value: 20, amount: 490000 },
    { name: 'Others', value: 20, amount: 490000 }
  ];

  const COLORS = ['#f43f5e', '#3b82f6', '#8b5cf6', '#10b981'];

  // Transaction history
  const transactions = [
    {
      id: 'TXN-2847',
      type: 'credit',
      description: 'Order #ORD-2847 - Glow Serum Set',
      amount: 31000,
      status: 'completed',
      date: '2025-10-22',
      time: '2:30 PM'
    },
    {
      id: 'TXN-2846',
      type: 'credit',
      description: 'Order #ORD-2846 - Hydrating Cleanser',
      amount: 20700,
      status: 'pending',
      date: '2025-10-22',
      time: '11:15 AM'
    },
    {
      id: 'TXN-2845',
      type: 'debit',
      description: 'Payout to GTBank - 0123456789',
      amount: 500000,
      status: 'completed',
      date: '2025-10-21',
      time: '9:00 AM'
    },
    {
      id: 'TXN-2844',
      type: 'credit',
      description: 'Order #ORD-2845 - Vitamin C Bundle',
      amount: 22000,
      status: 'completed',
      date: '2025-10-21',
      time: '4:20 PM'
    },
    {
      id: 'TXN-2843',
      type: 'credit',
      description: 'Order #ORD-2844 - Night Cream',
      amount: 12500,
      status: 'completed',
      date: '2025-10-20',
      time: '1:45 PM'
    },
    {
      id: 'TXN-2842',
      type: 'debit',
      description: 'Platform Fee - October 2025',
      amount: 15000,
      status: 'completed',
      date: '2025-10-20',
      time: '10:00 AM'
    },
    {
      id: 'TXN-2841',
      type: 'credit',
      description: 'Order #ORD-2843 - Face Mask Set',
      amount: 29400,
      status: 'completed',
      date: '2025-10-19',
      time: '3:30 PM'
    },
    {
      id: 'TXN-2840',
      type: 'credit',
      description: 'Order #ORD-2842 - Rose Water Toner',
      amount: 13000,
      status: 'failed',
      date: '2025-10-19',
      time: '11:20 AM'
    }
  ];

  // Payout history
  const payoutHistory = [
    {
      id: 'PO-001',
      amount: 500000,
      bank: 'GTBank - 0123456789',
      status: 'completed',
      date: '2025-10-21',
      reference: 'REF-500K-OCT21'
    },
    {
      id: 'PO-002',
      amount: 750000,
      bank: 'GTBank - 0123456789',
      status: 'processing',
      date: '2025-10-15',
      reference: 'REF-750K-OCT15'
    },
    {
      id: 'PO-003',
      amount: 625000,
      bank: 'GTBank - 0123456789',
      status: 'completed',
      date: '2025-10-08',
      reference: 'REF-625K-OCT08'
    }
  ];

  const getStatusBadge = (status) => {
    const config = {
      completed: { label: 'Completed', class: 'bg-green-100 text-green-800', icon: CheckCircle },
      pending: { label: 'Pending', class: 'bg-yellow-100 text-yellow-800', icon: Clock },
      processing: { label: 'Processing', class: 'bg-blue-100 text-blue-800', icon: Clock },
      failed: { label: 'Failed', class: 'bg-red-100 text-red-800', icon: XCircle }
    };
    return config[status];
  };

  const filteredTransactions = transactions.filter(txn => {
    if (filterType === 'all') return true;
    if (filterType === 'credit') return txn.type === 'credit';
    if (filterType === 'debit') return txn.type === 'debit';
    if (filterType === 'pending') return txn.status === 'pending';
    return true;
  });

  const handleRequestPayout = () => {
    if (payoutAmount && parseFloat(payoutAmount) > 0) {
      console.log('Requesting payout:', payoutAmount);
      setShowPayoutModal(false);
      setPayoutAmount('');
      // Show success message
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-900">Earnings & Payments</h1>
              <p className="text-sm text-gray-600 mt-1">Track your revenue and manage payouts</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors font-semibold flex items-center gap-2">
                <Download size={20} />
                <span className="hidden sm:inline">Export</span>
              </button>
              <button
                onClick={() => setShowPayoutModal(true)}
                className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-lg transition-colors font-semibold flex items-center gap-2 shadow-lg"
              >
                <Wallet size={20} />
                Request Payout
              </button>
            </div>
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
                <div className="flex items-start justify-between mb-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  {stat.trend === 'up' && (
                    <span className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                      <ArrowUpRight size={16} />
                      {stat.change}
                    </span>
                  )}
                  {stat.trend === 'down' && (
                    <span className="flex items-center gap-1 text-red-600 text-sm font-semibold">
                      <ArrowDownRight size={16} />
                      {stat.change}
                    </span>
                  )}
                  {stat.trend === 'neutral' && (
                    <span className="text-gray-500 text-sm">{stat.change}</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Revenue Overview</h2>
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
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  formatter={(value) => [`₦${value.toLocaleString()}`, 'Revenue']}
                />
                <Bar dataKey="revenue" fill="#f43f5e" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Product Breakdown */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Top Products</h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={productEarnings}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {productEarnings.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-6 space-y-3">
              {productEarnings.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm text-gray-700">{product.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">₦{product.amount.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">{product.value}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payout History */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Payouts</h2>
          <div className="space-y-4">
            {payoutHistory.map((payout) => {
              const statusBadge = getStatusBadge(payout.status);
              const StatusIcon = statusBadge.icon;
              return (
                <div key={payout.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <CreditCard size={24} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">₦{payout.amount.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">{payout.bank}</p>
                      <p className="text-xs text-gray-500 mt-1">{payout.reference}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusBadge.class} flex items-center gap-1 mb-2`}>
                      <StatusIcon size={14} />
                      {statusBadge.label}
                    </span>
                    <p className="text-xs text-gray-500">{payout.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h2 className="text-xl font-bold text-gray-900">Transaction History</h2>
            <div className="flex gap-3">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                <option value="all">All Transactions</option>
                <option value="credit">Credits Only</option>
                <option value="debit">Debits Only</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Transaction ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Description</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((txn) => {
                  const statusBadge = getStatusBadge(txn.status);
                  const StatusIcon = statusBadge.icon;
                  return (
                    <tr key={txn.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <span className="font-mono text-sm text-gray-900">{txn.id}</span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {txn.type === 'credit' ? (
                            <ArrowDownRight size={16} className="text-green-600" />
                          ) : (
                            <ArrowUpRight size={16} className="text-red-600" />
                          )}
                          <span className="text-sm text-gray-900">{txn.description}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`text-sm font-bold ${txn.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                          {txn.type === 'credit' ? '+' : '-'}₦{txn.amount.toLocaleString()}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusBadge.class} flex items-center gap-1 w-fit`}>
                          <StatusIcon size={14} />
                          {statusBadge.label}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm text-gray-600">
                          <p>{txn.date}</p>
                          <p className="text-xs text-gray-500">{txn.time}</p>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Payout Request Modal */}
      {showPayoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Payout</h2>
            <p className="text-sm text-gray-600 mb-6">Withdraw funds to your bank account</p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-900 font-semibold mb-1">Available Balance</p>
              <p className="text-3xl font-bold text-blue-900">₦487,500</p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Payout Amount (₦)</label>
              <input
                type="number"
                value={payoutAmount}
                onChange={(e) => setPayoutAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <p className="text-xs text-gray-500 mt-2">Minimum payout: ₦50,000</p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Bank Account</label>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900">GTBank</p>
                <p className="text-sm text-gray-600">0123456789 - Beauty Store Ltd</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowPayoutModal(false)}
                className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleRequestPayout}
                className="flex-1 px-4 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-colors font-semibold"
              >
                Request Payout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}